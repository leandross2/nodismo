const api = require('../api')


const getMatches = async (summonerName) => {
    const summonerId = await api.getSummoner(summonerName)
    const matchesData = await api.getMatchesByAccountId(summonerId.accountId)
    console.log("asd", matchesData)
    return matchesData
}
module.exports = { getMatches }