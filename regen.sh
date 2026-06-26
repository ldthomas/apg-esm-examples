#!/usr/bin/env node
node node_modules/apg-esm/dist/apg/generator.js -i JavaScript/basic/float.txt -o JavaScript/basic/float
node node_modules/apg-esm/dist/apg/generator.js -i JavaScript/float-udt.txt -o JavaScript/float-udt
node node_modules/apg-esm/dist/apg/generator.js -i JavaScript/lookAhead.txt -o JavaScript/lookAheadGrammar
node node_modules/apg-esm/dist/apg/generator.js --typescript -i TypeScript/basic/float.txt -o TypeScript/basic/float
node node_modules/apg-esm/dist/apg/generator.js --typescript -i TypeScript/float-udt.txt -o TypeScript/float-udt
node node_modules/apg-esm/dist/apg/generator.js --typescript -i TypeScript/lookAhead.txt -o TypeScript/lookAheadGammar
