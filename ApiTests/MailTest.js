const chai = require('chai');
const mailOperations = require('../quickstart_test.js');
const assert = chai.assert;

describe('Check email is sent once 9 hours', function(){
    it('Email is sent', function(){
        console.log(mailOperations.listMessages());
    })
});

