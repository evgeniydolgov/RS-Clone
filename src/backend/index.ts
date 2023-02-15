import express from 'express';
import bodyParser, { OptionsUrlencoded } from 'body-parser';
import mysql from 'mysql';
// import mysql2 from 'mysql2';
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

/* const pool: mysql.Pool = mysql.createPool({
  host: 'sql7.freemysqlhosting.net',
  user: 'sql7595528',
  password: 'JHGwZJt4Iz',
  database: 'sql7595528',
  port: 3306,
});

pool.end(); */
app.listen(port as number, () => {
  console.log(`App listen on port ${port as number}` as string);
});

app.get('/', (req, res) => {
  const pool: mysql.Pool = mysql.createPool({
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7595528',
    password: 'JHGwZJt4Iz',
    database: 'sql7595528',
    port: 3306,
  });
  pool.query('SELECT * FROM users' as string, (err: Error, data: Object[]) => {
    if (err as Error) throw err as Error;
    res.send(data as Object[]);
    pool.end();
  });
});

/* app.post('/create', urlencodedParser, (req, res) => {
  const pool: mysql.Pool = mysql.createPool({
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7595528',
    password: 'JHGwZJt4Iz',
    database: 'sql7595528',
    port: 3306,
  });
  if (!req.body) res.sendStatus(400);
  const { id } = req.body;
  const { name } = req.body;
  pool.query(
    'INSERT INTO users (id, name) VALUES (?,?)' as string,
    [id as number, name as string],
    (err, data) => {
      if (err as Error) throw err as Error;
      res.send(data as Object[]);
      pool.end();
    },
  );
}); */

/* const conn = mysql.createConnection({
  host: 'sql7.freemysqlhosting.net',
  user: 'sql7595528',
  password: 'JHGwZJt4Iz',
  database: 'sql7595528',
  port: 3306,
}); */

/* const pool = mysql.createPool({
  host: 'sql7.freemysqlhosting.net',
  user: 'sql7595528',
  password: 'JHGwZJt4Iz',
  database: 'sql7595528',
  port: 3306,
}); */

app.post('/register', urlencodedParser, (req, res) => {
  const pool = mysql.createPool({
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7595528',
    password: 'JHGwZJt4Iz',
    database: 'sql7595528',
    port: 3306,
  });
  if (!req.body) res.sendStatus(400);
  const { login, password } = req.body;
  console.log(req.body);
  pool.query(
    'INSERT INTO users (login, password) VALUES (?,?)' as string,
    [login as string, password as string],
    (error, data) => {
      if (error) {
        res.send('Error!');
        // return;
      } else if (data.length > 0) {
        res.send(data);
        // eslint-disable-next-line no-useless-return
        return;
      } else {
        res.send({ message: 'Enter correct details!' });
      }
      pool.end();
    },
  );
});

app.post('/login', urlencodedParser, (req, res) => {
  const pool = mysql.createPool({
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7595528',
    password: 'JHGwZJt4Iz',
    database: 'sql7595528',
    port: 3306,
  });
  if (!req.body) res.sendStatus(400);
  const { login } = req.body;
  const { password } = req.body;
  console.log(req.body);
  pool.query(
    'SELECT * FROM users WHERE login = ? AND password = ?' as string,
    [login as string, password as string],
    (error, data) => {
      if (data) {
        res.send(data);
        return;
      } if (error as Error) {
        throw error as Error;
      } else {
        res.send({ message: 'Enter correct details!' });
      }
      pool.end();
    },
  );
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
