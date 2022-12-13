import supertest from 'supertest'
import { app } from '../app.js'
//use the supertest object as our API
const api = supertest(app)

test('POST call', async () => {
    const requestOperation = {
        num1:4,
        num2: 3,
        operator:"+"
    }
    await api
        .post('/api/calculate')
        .send(requestOperation)
        .expect(200)
});