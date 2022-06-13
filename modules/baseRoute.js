const  baseRoute = (request, response) => {
    response.status(200).send('Working')
}

module.exports = baseRoute
