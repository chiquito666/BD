const express = require("express")
const app = express()
app.use(express.json())
const port = 3000

app.listen(port, ()=>{
    console.log("API rodando na porta" + port)
})


app.get("/aula", (req, res) =>{
    // 
})