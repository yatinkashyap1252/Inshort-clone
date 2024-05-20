import express from 'express'
import Connection from './database/db.js'
import Defaultdata from './default.js'
import route from './routes/route.js'
import cors from 'cors'
import dotenv from 'dotenv'

const app=express()
app.use(cors())

dotenv.config()

app.use('/',route)


const PORT=8000
const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD

Connection(username,password)

app.listen(PORT,()=>console.log('server is running index.js'))

Defaultdata()