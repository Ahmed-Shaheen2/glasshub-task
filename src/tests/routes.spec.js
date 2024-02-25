import('chai')

const request = require('supertest');

let app = require('../app');

describe('Test app required routes', () => {

    describe('Test upload endpoint', () => {
        it('should return 200 http status code', (done) => {
            request(app)
                .post('/api/upload')
                .expect(200)
                .end((err, res) => {
                    done(err);
                });
        });
    });

    describe('Test create locations endpoint', () => {
        it('should return 200 http status code', (done) => {
            request(app)
                .post('/api/location/create')
                .expect(200)
                .end((err, res) => {
                    done(err);
                });
        });
    });

    describe('Test list locations endpoint', () => {
        it('should return 200 http status code', (done) => {
            request(app)
                .post('/api/location/create')
                .expect(200)
                .end((err, res) => {
                    done(err);
                });
        });
    });
});