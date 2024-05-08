// importação de modulos
import express from 'express'

// importação de variáveis
import connection from '../infra/connection.js' // Chama a função que conecta ao banco de dados mysql

const app = express()
app.use(express.json())

// Create
// Primeiro chamei a variavel app para usar o express com o metodo post que irá criar novos,
// depois passei os parâmetros da rota e tambémn
app.post('/clients', (req, res) => {
    const clientData = req.body
    const sql = `INSERT INTO clients SET ?;`
    connection.query(sql, clientData, (error, result) => {
        if (error) {
            res.status(400).json({'Erro' : error})
        } else {
            res.status(201).json(result)
            console.log('Post Request!')
        }
    })
})
// Read
app.get('/clients', (req, res) => {
    const sql = `SELECT * FROM clients;`
    connection.query(sql, (error, result) => {
        if (error) {
            res.status(404).json({ 'Erro': error })
        } else {
            res.status(200).send(result)
            console.log('Get Request!')
        }
    })
})
// Update
app.put('/clients/:id', (req, res) => {
    const id = req.params.id
    const client = req.body
    const sql = `UPDATE clients SET ? WHERE id=?;`
    connection.query(sql, [client, id], (error, result) => {
        if (error) {
            res.status(404).json({ 'Erro' : error })
        } else {
            res.status(200).json(result)
            console.log('Put Request!')
        }
    }) 
})
// Delete
app.delete('/clients/:id', (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM clients WHERE id=?;`
    connection.query(sql, id, (error, result) => {
        if (error) {
            res.status(404).json({ 'Erro': error })
        } else {
            res.status(200).json(result)
            console.log('Del Request!')
        }
    })
})


export default app