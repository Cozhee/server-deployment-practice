'use strict'

const supertest = require('supertest')
const server = require('../server.js')
const request = supertest(server.app)

describe('Server Tests', () => {
    describe('Get Requests', () => {
        test('Base / route', async() => {
            const response = await request.get('/')
            expect(response.status).toEqual(200)
        })

        test('/Hello route works as expected', async() => {
            const response = await request.get('/hello')
            expect(response.status).toEqual(200)
            expect(response.text).toEqual('Hello World!')
        })
    })
})