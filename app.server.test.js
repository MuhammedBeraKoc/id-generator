const app = require('./create-server')()
const supertest = require('supertest')
const fs = require('fs')
const ErrorCodes = {
    postValid: -102,
    postId: -103,
}

describe('REST API Testing Suite', () => {
    it('POST /valid', () => {
        supertest(app)
            .post('/valid')
            .query({
                id: 'a274?82c',
            })
            .expect(200, (err, res) => {
                if (err) process.exit(ErrorCodes.postValid)
                expect(res.text).toBe(
                    JSON.stringify({
                        isValidId: false,
                    })
                )
            })
    })

    it('POST /id', () => {
        supertest(app)
            .post('/id')
            .query({
                limit: 12,
            })
            .expect(200, (err, res) => {
                if (err) process.exit(ErrorCodes.postId)
                expect(JSON.parse(res.text).id.length).toBe(12)
            })
    })
})
