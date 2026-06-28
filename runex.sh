#!/usr/bin/env node
# run all JavaScript tests
# typically:
#   bash runex.sh >/tmp/runex
#   less /tmp/runex
node JavaScript/basic/fixed.js
node JavaScript/basic/separate.js
node JavaScript/basic/single.js
node JavaScript/ast.js
node JavaScript/lookAhead.js
node JavaScript/stats.js
node JavaScript/trace.js
node JavaScript/traceSabnf.js
node JavaScript/udt.js
#
# run all TypeScript tests
node dist/TypeScript/basic/fixed.js
node dist/TypeScript/basic/separate.js
node dist/TypeScript/basic/single.js
node dist/TypeScript/ast.js
node dist/TypeScript/lookAhead.js
node dist/TypeScript/stats.js
node dist/TypeScript/trace.js
node dist/TypeScript/traceSabnf.js
node dist/TypeScript/udt.js
