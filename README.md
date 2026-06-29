## Examples of Use of apg-esm

[`apg-esm`](https://github.com/ldthomas/apg-esm) is APG an ABNF Parser Generator.
It has been written in strictly typed TypeScript.
`apg-esm-examples` is a suite of examples demonstrating the use of `apg-esm`
for both the JavaScript and the TypeScipt developer.

### The Examples

The examples have been chosen to give simple demonstrations of all aspects of using `apg-esm`.
The Javacript examples are in the `JavaScript` directory. These are all mirrored in TypeScript form
in the `TypeScript` directory.

- basic examples: a simple demonstration of the basics of generating a grammar object,
  using it to create a parser object and finally parsing an input string
  - fixed.js | fixed.ts: using a pre-generated Grammar class
  - single.js | single.ts: generating an in-memory Grammar object from an `Api` object
    with a single step
  - separate.js | separate.ts: generating an in-memory Grammar object from an `Api` object
    using the Api's separate steps
- ast.js | ast.ts: demonstration of when parser translation fails and AST translation is needed;
  demonstrates writing and using both Paser and Ast callback functions
- lookAhead.js | lookAhead.ts: demonstration of using the look ahead operators & and !
- stats.js | stats.ts: demonstrates the collection and display of node hit statistics
- trace.js | trace.ts: tracing the parser through the parse tree during parsing is essential for debugging problems;
  demonstrates tracing with look ahead operators
- traceSabnf.js | traceSabnf.ts: `apg-esm` provides a novel, alternative method of tracing;
  this example demonstrates tracing against the SABNF text rather than the operator parse tree
- udt.js | udt.ts: demonstrates using UDT handwritten code snippets for recognizing
  phrases that can be empty and phrases that cannot be empty

### Testing

In lieu of unit testing, two scripts are provided to run and check the test results.
`regen.sh` will regenerate a new Grammar class for each of the SABNF texts in the repository.
`runex.sh` will run all of the examples.
Inspection of the output of `runex.sh` should then not show any errors.
The testing workflow would then be something like:

```
bash regen.sh
npm run build
rm /tmp/runex
bash runex.sh > /tmp/runex
less /tmp/runex
```
