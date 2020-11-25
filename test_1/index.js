"use strict";

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence.
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test1() {
  var results =[];
  var json = __dirname+"\\test_data.json";
  const fs = require('fs');
  let rawdata = fs.readFileSync(json);
  results = JSON.parse(rawdata);
    for(var i in results){
      results[i].example= results[i].first_name+" "+results[i].last_name+" says "+results[i].catchphrase;
    }
    return results;
};
