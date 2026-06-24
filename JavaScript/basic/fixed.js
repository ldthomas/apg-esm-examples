/*  *************************************************************************************
 *   copyright: Copyright (c) 2026 Lowell D. Thomas
 *     license: MIT (https://opensource.org/license/mit)
 *   ********************************************************************************* */
import Grammar from "./float.js";
import { Parser } from "apg-esm";

const description = `
Simple demonstration of how to parse a string with a previously generated grammar object.
The grammar constructor, Grammar, was generated from the ABNF grammar, float.txt with:

npm run generator -- -i ./JavaScript/basic/float.txt -o ./JavaScript/basic/float
`;

/* make a parser from the grammar object */
const grammar = new Grammar();
const parser = new Parser(grammar);
const result = parser.parse(0, "-123.0e-10");
console.log(description);
console.log("FIXED PARSER RESULT");
console.dir(result);
