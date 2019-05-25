
const request = require('supertest');
const app = require('./router/app')
describe('Test the root path', () => {
    test('It should response the GET method to get all Rides', (done) => {
        request(app).get('/').then((response) => {
           expect(response.statusCode).toBe(200);
            done();
        });
    });
});
describe('Test the root path', () => {
    test('It should response the GET method with a Single ID with status code 200', (done) => {
        request(app).get('/1').then((response) => {
           expect(response.statusCode).toBe(200);
            done();
        });
    });
});
describe('Test the root path', () => {
    test('It should response the GET method with Not found 404 , ID doesnt exist', (done) => {
        request(app).get('/4').then((response) => {
           expect(response.statusCode).toBe(404);
            done();
        });
    });
});

