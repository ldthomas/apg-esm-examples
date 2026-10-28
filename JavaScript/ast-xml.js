/*  *************************************************************************************
 *   copyright: Copyright (c) 2026 Lowell D. Thomas
 *     license: MIT (https://opensource.org/license/mit)
 *   ********************************************************************************* */
import { Api, Parser, Ast, ids, utils } from "apg-esm";

const description = `
Demonstration of transforming the Abstract Syntax Tree (AST) 
to an XML representation.

Some characters are not valid XML characters and the special characters
&<>"' are converted to their respective XML entities.
`;

const THIS_FILENAME = "examples/ast-xml.js";
/* the SABNF grammar */
let abnf = "";
abnf += "text = word *(%x20 word)\n";
abnf += "word = 1*(entities / xml / non-xml)\n";
abnf += "entities = 1*(%d38 / %d60 / %d62 / %d34 / %d39)\n";
abnf += "xml =1*(%x9-A / %xD / %x21-D7FF /%xE000-FFFD / %x10000-10FFFF)\n";
abnf +=
  "non-xml = 1*(%x0-8 / %xB-C / %xE-1F / %xD800-DFFF / %xFFFE-FFFF / %x110000-11FFFF)\n";

/* the AST callback functions */
// function semFile(state, chars, phraseIndex, phraseCount, data) {
const cb = (state, chars, phraseIndex, phraseCount, data) => {
  // place holder just to put the phrase on the AST
};

/* test complete generation in one step */
const api = new Api(abnf);
api.generate();
if (api.errors.length) {
  console.log(api.errorsToAscii());
  throw new Error(`${THIS_FILENAME}grammar has errors`);
}

console.log(description);

/* make a parser from the grammar object */
const grammar = api.toObject();
const parser = new Parser(grammar);
const ast = new Ast(grammar);
parser.setAst(ast);

/* attach the callback functions to the AST */
ast.setCallback("entities", cb);
ast.setCallback("xml", cb);
ast.setCallback("non-xml", cb);
let input = "";
input += "smileys";
input += " \u{1F61C}\u{1F60E}\u{1F913}";
input += " entities &<>\"'";
input += " baddies \x00\x1F\uFFFF";
const result = parser.parse(0, input);
if (!result.success) {
  console.log("parse failed");
  process.exit(1);
}

console.log("\nTRANSLATE THE AST TO XML");
console.log(ast.toXml());
