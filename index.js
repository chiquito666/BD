const express = require("express")
const app = express()
app.use(express.json())
const port = 3000

const db = require("./db")

app.listen(port, ()=>{
    console.log("API rodando na porta" + port)
})


app.get("/aula", async (req, res) =>{
    //Tentar conectar ao bando de dados.
    try{
        const resultado = await db.pool.query("SELECT * FROM aula")
        res.status(200).json(resultado[0])
    }catch (erro) {
        res.status(500).json({erro: erro.message})
    }
})