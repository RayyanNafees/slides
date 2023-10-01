import express from 'express'
import { handler as ssrHandler } from './dist/server/entry.mjs'

const app = express()
app.use(express.static('dist/client/'))
app.use((req, res, next) => {
  const locals = {
    title: 'New title',
  }

  ssrHandler(req, res, next, locals)
})

app.get('/home', (req, res) => res.send('Rayyno Nafeeso'))
app.listen(8080, ()=> console.log('Listening on http://localhost:8080'))
