import express from 'express';
import bodyParser, { OptionsUrlencoded } from 'body-parser';
import mysql from 'mysql';
import cors from 'cors';

import { IcorsOption } from './interfaces';

const app = express();

const port: number = 3001;

const corsOptions: IcorsOption = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(bodyParser.urlencoded({ extended: true } as OptionsUrlencoded | undefined));
app.use(bodyParser.json());
app.use(cors(corsOptions));

const urlencodedParser = express.urlencoded({ extended: false } as OptionsUrlencoded | undefined);

app.listen(port as number, () => {
  console.log(`App listen on port ${port as number}` as string);
});

const pool: mysql.Pool = mysql.createPool({
  connectionLimit: 5,
  host: 'sql7.freemysqlhosting.net',
  user: 'sql7595528',
  password: 'JHGwZJt4Iz',
  database: 'sql7595528',
  port: 3306,
  charset: 'utf8',
});

app.get('/', (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) {
      res.send('Error occured!');
    } else {
      conn.query('SELECT * FROM users' as string, (error: Error, data: Object[]) => {
        if (error as Error) {
          throw error as Error;
        } else {
          res.send(data as Object[]);
        }
        conn.release();
      });
    }
  });
});

app.post('/register', urlencodedParser, (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) {
      res.send('Error occured!');
    } else {
      const {
        login, password, score, avatar,
      } = req.body;
      console.log(req.body);
      conn.query('SELECT * FROM users WHERE login = ?', [login as string], (mistake, welcome) => {
        if (welcome) {
          conn.release();
          console.log(mistake);
        }
        if (!welcome.length) {
          conn.query(
            'INSERT INTO users (login, password, score, avatar) VALUES (?,?,?,?)' as string,
            [login as string, password as string, score as number, avatar as number],
            (error, data) => {
              if (data) {
                res.send(data);
                return;
              } if (error as Error) {
                throw error as Error;
              } else {
                res.send({ message: 'Enter correct details!' });
              }
              conn.release();
            },
          );
        } else {
          res.send({ message: 'Account is already existed!' });
        }
      });
    }
  });
});

app.post('/login', urlencodedParser, (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) {
      res.send('Error occured!');
    } else {
      const { login } = req.body;
      const { password } = req.body;
      console.log(req.body);
      conn.query(
        'SELECT * FROM users WHERE login = ? AND password = ?' as string,
        [login as string, password as string],
        (error, data) => {
          conn.release();
          if (data) {
            res.send(data);
            return;
          } if (error as Error) {
            throw error as Error;
          } else {
            res.send({ message: 'Enter correct details!' });
          }
          conn.release();
        },
      );
    }
  });
});

app.put('/updatescore', urlencodedParser, (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) {
      res.send('Error occured!');
    } else {
      const { login } = req.body;
      const { score } = req.body;
      console.log(req.body);
      conn.query(
        'UPDATE users SET score = ? WHERE login = ?' as string,
        [score as number, login as string],
        (error, data) => {
          conn.release();
          if (data) {
            res.send(data);
            return;
          } if (error as Error) {
            throw error as Error;
          } else {
            res.send({ message: 'Enter correct details!' });
          }
          conn.release();
        },
      );
    }
  });
});

app.put('/spendscore', urlencodedParser, (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) {
      res.send('Error occured!');
    } else {
      const { login } = req.body;
      const { score } = req.body;
      const { avatar } = req.body;
      console.log(req.body);
      conn.query(
        'UPDATE users SET score = ?, avatar = ? WHERE login = ?' as string,
        [score as number, avatar as number, login as string],
        (error, data) => {
          conn.release();
          if (data) {
            res.send(data);
            return;
          } if (error as Error) {
            throw error as Error;
          } else {
            res.send({ message: 'Enter correct details!' });
          }
          conn.release();
        },
      );
    }
  });
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
