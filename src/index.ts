import express from 'express'

const app = express()
app.use((req, res) => res.end('Hello World'))

app.listen(4000, () => console.log('Listening on port 4000'))
