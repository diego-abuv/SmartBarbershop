// importação de modulos
import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'smart-barbershop'
})

connection.connect()

export default connection