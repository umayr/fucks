/**
 * Created by Umayr Shahid on 15/02/15.
 */

'use strict';

var path = require('path');

module.exports = {
    file: function(){
    	return path.resolve(__dirname, '../data/fucks.json');
    },
    raw: '{ "fucks": [] }'
};

