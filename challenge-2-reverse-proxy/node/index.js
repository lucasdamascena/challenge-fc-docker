const express = require('express');
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
};

app.get('/', async (req, res) => {
    let connection;
    try {
        connection = await mysql.createConnection(config);

        const name = faker.person.firstName();

        await connection.execute('INSERT INTO people (first_name) VALUES (?)', [name]);

        const [results] = await connection.execute('SELECT first_name FROM people');

        res.send(`
            <h1>Full Cycle Rocks!</h1>
            <ol>
                ${results.length ? results.map(el => `<li>${el.first_name}</li>`).join('') : ''}
            </ol>
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    } finally {
        if (connection) {
            await connection.end();
        }
    }
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});
