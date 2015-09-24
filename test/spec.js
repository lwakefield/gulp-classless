'use strict';

var assert = require("assert");
var fs = require('fs');

var compareFiles = function (_case) {
    var actual = fs.readFileSync('test/tmp/' + _case + '.html').toString();
    var expected = fs.readFileSync('test/expected/' + _case + '.html').toString();

    assert.equal(actual, expected);
}

describe('classless', function(){
    it('should remove the all classes', function() {
        compareFiles('case1');
    });
});

