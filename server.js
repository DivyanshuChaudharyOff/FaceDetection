const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
const db =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login",
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    const values =[
        req.body.email,
        req.body.password
    ]
    db.query(sql, values, (err, results) => {
        if (err) {res.json("LOGIN FAILED");
        return res.json(data);
    })
})

app.listen(8180, ()=> {
    console.log("Listening...");
    
})