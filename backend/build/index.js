"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));

const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const mysql_1 = __importDefault(require("mysql"));
const cors_1 = __importDefault(require("cors"));

const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;

const domainsFromEnv = process.env.CORS_DOMAINS || '';
const whitelist = domainsFromEnv.split(',').map((item) => item.trim());

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin'],
};
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)(corsOptions));
const urlencodedParser = express_1.default.urlencoded({ extended: false });
const pool = mysql_1.default.createPool({
    connectionLimit: 5,
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7603519',
    password: 'kRpqKybJBq',
    database: 'sql7603519',
    port: 3306,
    charset: 'utf8',
});

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
const __dirname1 = path_1.default.resolve();
app.get('/api/', (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) {
            res.send('Error occured!');
        }
        else {
            conn.query('SELECT * FROM users', (error, data) => {
                if (error) {
                    throw error;
                }
                else {
                    res.send(data);
                }
                conn.release();
            });
        }
    });
});
app.post('/api/register', urlencodedParser, (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) {
            res.send('Error occured!');
        }
        else {
            const { login, password, score, avatar, } = req.body;
            console.log(req.body);
            conn.query('SELECT * FROM users WHERE login = ?', [login], (mistake, welcome) => {
                if (welcome) {
                    conn.release();
                    console.log(mistake);
                }
                if (!welcome.length) {
                    conn.query('INSERT INTO users (login, password, score, avatar) VALUES (?,?,?,?)', [login, password, score, avatar], (error, data) => {
                        if (data) {
                            res.send(data);
                            return;
                        }
                        if (error) {
                            throw error;
                        }
                        else {
                            res.send({ message: 'Enter correct details!' });
                        }
                        conn.release();
                    });
                }
                else {
                    res.send({ message: 'Account is already existed!' });
                }
            });
        }
    });
});
app.post('/api/login', urlencodedParser, (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) {
            res.send('Error occured!');
        }
        else {
            const { login } = req.body;
            const { password } = req.body;
            console.log(req.body);
            conn.query('SELECT * FROM users WHERE login = ? AND password = ?', [login, password], (error, data) => {
                conn.release();
                if (data) {
                    res.send(data);
                    return;
                }
                if (error) {
                    throw error;
                }
                else {
                    res.send({ message: 'Enter correct details!' });
                }
                conn.release();
            });
        }
    });
});
app.put('/api/updatescore', urlencodedParser, (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) {
            res.send('Error occured!');
        }
        else {
            const { login } = req.body;
            const { score } = req.body;
            console.log(req.body);
            conn.query('UPDATE users SET score = ? WHERE login = ?', [score, login], (error, data) => {
                conn.release();
                if (data) {
                    res.send(data);
                    return;
                }
                if (error) {
                    throw error;
                }
                else {
                    res.send({ message: 'Enter correct details!' });
                }
                conn.release();
            });
        }
    });
});
app.put('/api/spendscore', urlencodedParser, (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) {
            res.send('Error occured!');
        }
        else {
            const { login } = req.body;
            const { score } = req.body;
            const { avatar } = req.body;
            console.log(req.body);
            conn.query('UPDATE users SET score = ?, avatar = ? WHERE login = ?', [score, avatar, login], (error, data) => {
                conn.release();
                if (data) {
                    res.send(data);
                    return;
                }
                if (error) {
                    throw error;
                }
                else {
                    res.send({ message: 'Enter correct details!' });
                }
                conn.release();
            });
        }
    });
});
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname1, '/frontend/build')));
    app.get('*', (req, res) => res.sendFile(path_1.default.resolve(__dirname1, 'frontend', 'build', 'index.html')));
}
app.listen(PORT, () => {
    console.log(`App listen on port ${PORT}`);
});
/* app.delete('/delete/:id', (req, res) => {
  const pool: mysql.Pool = mysql.createPool({
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7595528',
    password: 'JHGwZJt4Iz',
    database: 'sql7595528',
    port: 3306,
  });
  const id: number = +req.params.id;
  pool.query('DELETE FROM users WHERE id=?' as string, [id as number], (err, data) => {
    if (err as Error) throw err as Error;
    res.send(data as Object[]);
    pool.end();
  });
}); */
/* function eee() {
  for (let i = 0; i < 34; i += 1) {
    pool.end();
  }
}
eee(); */
