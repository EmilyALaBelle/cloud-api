import functions from "firebase-functions"
import express from 'express'

const app = express()

app.get('/test', (req, res) => res.send('Our first cloud api works!'))

export const api = functions.https.onRequest(app)

