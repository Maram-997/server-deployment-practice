'use strict';

const supertest = require('supertest');
const server = require('../server');

const request = supertest(server.app);

describe('server development practice', () => {
it('It Should check the HELLO WORLD Works successfully ', async () =>{
    // arange
    let param = '/';
    let status = 200;
    let text = 'HELLO WORLD!';
    // act
    const response = await request.get(param);
    // assert 
    expect(response.status).toBe(status);
    expect(response.text).toBe(text);
});
it('It Should check the data', async () =>{
    // arange
    let param = '/data';
    let status = 200;
    // act
    const response = await request.get(param);
    // assert 
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual('object'); 
});
it('It Should check for 404 error ', async () =>{
     // arange
     let param = '/notfound';
     let status = 404;
     // act
     const response = await request.get(param);
     // assert 
     expect(response.status).toBe(status);
});
it('It Should check for 500 error', async () =>{     
    // arange
    let param = '/badConnection';
    let status = 500;
    // act
    const response = await request.get(param);
    // assert 
    expect(response.status).toBe(status);

});


})
