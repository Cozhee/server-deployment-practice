const  baseRoute = (request, response) => {
    response.status(200).send('Hello 401')
}

module.exports = baseRoute
