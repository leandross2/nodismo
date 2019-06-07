const { Router } = require("express")

const { summoner, matchesByAccountId } = require('./api')

const routes  = Router()

routes.get('/', async(req, res)=>{
    const response = await getSummoner()
    res.json(response)
})
routes.get('/matches/:id', async(req, res)=>{
    const response = await getMatchesByAccountId(req.params.id)
    res.json(response.matches)
})

module.exports = routes