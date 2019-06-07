const axios = require ('axios')

axios.defaults.baseURL = "https://br1.api.riotgames.com/lol"
axios.defaults.headers.common['X-Riot-Token'] = "RGAPI-2a3af4e6-73c3-4ead-a808-6001b1756dc2"

const getSummoner = async ()=> {
    try{
        const res = await axios.get('/summoner/v4/summoners/by-name/tarzaned5')
        return res.data

    }catch(err){
        console.log(err.data)
    }
}
const getMatchesByAccountId = async (id)=> {
    try{
        const res = await axios.get(`/match/v4/matchlists/by-account/${id}`)
        return res.data

    }catch(err){
        console.log(err.data)
    }
}

module.exports = { summoner, matchesByAccountId}