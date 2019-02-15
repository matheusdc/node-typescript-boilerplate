import req from 'supertest';
import server from '.';

describe('Testing express server', () => {
  test('[GET] /', async () => {
    const res = await req(server).get('/');
    expect(res.text).toBe('Hello World!');
  });

  afterAll(() => {
    server.close();
  });
});