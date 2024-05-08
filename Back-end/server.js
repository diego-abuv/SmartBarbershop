// importação de variáveis
import app from './src/index.js'

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Servidor aberto em localhost na porta ${PORT}, endereço: http://localhost:${PORT}`)
})