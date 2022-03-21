// import Gun from 'gun'
// import cors from 'cors'
// import express from 'express'
const Gun = require('gun')
const cors = require('cors')
const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(Gun.serve)

app.get("/", (_, res) => {
    res.status(200).send("Server Live")
})

const server = app.listen(port, () => console.log(`Listening to ${port}`))

Gun({web: server})