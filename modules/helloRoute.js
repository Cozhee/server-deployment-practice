const helloRoute = (request, response) => {
    response.status(200).send('Hello World!')
}

module.exports = helloRoute