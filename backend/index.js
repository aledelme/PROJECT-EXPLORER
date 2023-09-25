const express = require("express")
const cors = require("cors")
const { Web3 } = require("web3")
const app = express()
app.use(cors())

const URL_INFURA = 'https://mainnet.infura.io/v3/9d4c7bb748624b96b5ccd090f2ac6382'

const web3 = new Web3(URL_INFURA)


app.get("/", async (req, res) => {
    const bloque = await web3.eth.getBlockNumber()
    res.send(bloque.toString())
})
app.get("/bloque/:bloque", async (req, res) => {
    if (!req.params.bloque)
        return res.status(400).send("Block number missing")
    if (!/^\d+$/.test(req.params.bloque))
        return res.status(400).send("Not a proper block number")

    try {
        const bloque = await web3.eth.getBlock(req.params.bloque)
        const result = JSON.stringify(bloque, bigIntReplacer)
        res.send(result)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})
app.get("/tx/:tx", async (req, res) => {
    try {
        const tx = await web3.eth.getTransaction(req.params.tx)
        const result = JSON.stringify(tx, bigIntReplacer)
        res.send(result)
    } catch (error){
        res.status(500).send({message: error.message})
    }
})
app.get("/balance/:balance", async (req, res) => {
    try {
        const balance = await web3.eth.getBalance(req.params.balance)
        res.send({balance: balance.toString(), ethers: web3.utils.fromWei(balance, "ether")})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})


app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000")
})


function bigIntReplacer(key, value) {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  }