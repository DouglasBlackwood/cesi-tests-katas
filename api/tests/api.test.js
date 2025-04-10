const request = require('supertest');
const app = require('../src/server');

describe('API Endpoint', () => {
  test('GET /api should return 200 status code', async () => {
    const response = await request(app).get('/api');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message")
    expect(response.body.message).toBe("OK")
  });
});
