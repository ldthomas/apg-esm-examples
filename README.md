## Examples of Use of apg-esm

[`apg-esm`](https://github.com/ldthomas/apg-esm) is APG an ABNF Parser Generator.
It has been written in strictly typed TypeScript.
`apg-esm-examples` is a suite of examples demonstrating the use of `apg-esm`
for both the JavaScript and the TypeScipt developer.

## The Examples

The examples have been chosen to demonstrate most all aspects of using `apg-esm`.
The Javacript examples in the `JavaScript` directory are all mirrored in TypeScript form
in the `TypeScript` directory.

- basic examples: a simple demonstration of the basics of generating a grammar object,
  using it to create a parser object and finally parsing an input string.
  - fixed.js: using a pre-generated Grammar class
  - single.js: generating an in-memory Grammar object from an `Api` object
    and generating a grammar object with it with a single step
  - separate.js: generating an in-memory Grammar object from an `Api` object
    and generating a grammar object with it using the Api's separate steps
