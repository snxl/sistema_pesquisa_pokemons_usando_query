const axios = require('axios')
const express = require('express')
const app = express()

let todosPokemons = []

axios.get(' https://pokeapi.co/api/v2/pokemon?offset=1&limit=1118').then((response) => {
    console.log(response.data)
    let {results} = response.data
    for(pokemons of results){
        todosPokemons.push(pokemons.name)
        console.log(todosPokemons)
    }
})


app.listen(85, () => {
    console.log("Server is running")
})


app.get('/pokemons', (req, res) => {
    const {nome} =  req.query
    let listaRetorno = todosPokemons.filter(i => i.includes(nome || ""))
    res.json(listaRetorno)
})
