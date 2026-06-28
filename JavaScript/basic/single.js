/*  *************************************************************************************
 *   copyright: Copyright (c) 2026 Lowell D. Thomas
 *     license: MIT (https://opensource.org/license/mit)
 *   ********************************************************************************* */
import { Api, Parser, utils, ids } from "apg-esm";
const charsToString = utils.charsToString;

const description = `
Simple demonstration of how to generate an in-memeory grammar object in a single
step, create a parser with it and parse a string with the resulting parser. 

This example also demonstrates the use of parser callback functions.
`;

const THIS_FILENAME = "examples/basic/single.js";
/* the SABNF grammar */
let float = "";
float += "float    = [sign] decimal [exponent]\n";
float += 'sign     = "+" / "-"\n';
float += "decimal  = integer [dot [fraction]]\n";
float += "           / dot fraction\n";
float += "integer  = 1*%d48-57\n";
float += 'dot      = "."\n';
float += "fraction = 1*%d48-57\n";
float += 'exponent = "e" [esign] exp\n';
float += 'esign    = "+" / "-"\n';
float += "exp      = 1*%d48-57\n";

function sign(sysData, chars, phraseIndex, data) {
  if (sysData.state === ids.MATCH) {
    console.log(
      `    sign: ${charsToString(chars, phraseIndex, sysData.phraseLength)}`,
    );
  }
}
function decimal(sysData, chars, phraseIndex, data) {
  if (sysData.state === ids.MATCH) {
    console.log(
      ` decimal: ${charsToString(chars, phraseIndex, sysData.phraseLength)}`,
    );
  }
}
function exponent(sysData, chars, phraseIndex, data) {
  if (sysData.state === ids.MATCH) {
    console.log(
      `exponent: ${charsToString(chars, phraseIndex, sysData.phraseLength)}`,
    );
  }
}

/* test complete generation in one step */
const api = new Api(float);
api.generate();
if (api.errors.length) {
  console.log(api.errorsToAscii());
  throw new Error(`${THIS_FILENAME}grammar has errors`);
}

/* make a parser from the grammar object */
const grammar = api.toObject();
const parser = new Parser(grammar);
parser.setCallback("sign", sign);
parser.setCallback("decimal", decimal);
parser.setCallback("exponent", exponent);
const result = parser.parse(0, "-123.0e-10");
console.log(description);
console.log("SINGLE STEP PARSER RESULT");
console.dir(result);
