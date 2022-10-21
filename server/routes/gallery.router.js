const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    let sqlText = `
        UPDATE "react_gallery" SET "likes" = "likes" + 1 WHERE "id" = $1
    `
    pool.query(sqlText, [req.params.id])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    pool.query(`
        SELECT * FROM "react_gallery" ORDER BY "id" ASC
    `)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
}); // END GET Route

//POST route
router.post('/', (req, res) => {
    let sqlText = `
        INSERT INTO "react_gallery" ("path", "description", "likes")
        VALUES ($1, $2, $3)
    `
    pool.query(sqlText, [req.body.url, req.body.description, 0])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
}) // END POST route

// DELETE route
router.delete('/:id', (req, res) => {
    let sqlText = `
        DELETE FROM "react_gallery" WHERE "id" = $1
    `
    pool.query(sqlText, [req.params.id])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;