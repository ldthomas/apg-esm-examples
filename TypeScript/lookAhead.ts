/*  *************************************************************************************
 *   copyright: Copyright (c) 2026 Lowell D. Thomas
 *     license: MIT (https://opensource.org/license/mit)
 *   ********************************************************************************* */
import { Parser } from "apg-esm";
import Grammar from "./lookAheadGrammar.js";

const description = `
It is well known that the strings a^nb^nc^n, n > 0, cannot be represented with a context-free grammar.
However, with the look ahead operators AND(&) and NOT(!) it is, in fact possible to match such strings.
(See the Wikipedia article on Syntactic Predicates, https://en.wikipedia.org/wiki/Syntactic_predicate).
The grammar used here is an SABNF translation of the a^nb^nc^n grammar given there.
`;

/* make a parser from the grammar object */
console.log(description);
const grammar = new Grammar();
const parser = new Parser(grammar);
const result = parser.parse(0, "aaaaabbbbbccccc");
console.log("LOOK AHEAD PARSER RESULT");
console.dir(result);
console.log("\nORIGINAL gRAMMAR");
console.log(grammar.toString());
