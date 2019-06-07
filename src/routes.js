const { Router } = require("express")

const { getMatches } = require('./controllers/summoner')

const { getSummoner, getMatchesByAccountId } = require('./api')

const routes  = Router()

routes.get('/summoner/:summonerName/matches', async (req, res) => {
    console.log('rota')
    const response = await getMatches(req.params.summonerName)
    res.json(response)
})
routes.get('/summoner/:summonerName', async(req, res)=>{
    console.log(req.params)
    const response = await getSummoner(req.params.summonerName)
    res.json(response)
})
// routes.get('/matches/:id', async(req, res)=>{
//     const response = await getMatchesByAccountId(req.params.id)
//     res.json(response.matches)
// })


module.exports = routes