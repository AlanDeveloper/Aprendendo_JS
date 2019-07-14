## 4.0.11 (2017-02-07)

### Bug fixes

Allow all forms of member expressions to be parenthesized as lvalue.

## 4.0.10 (2017-02-07)

### Bug fixes

Don't expect semicolons after default-exported functions or classes,
even when they are expressions.

Check for use of `'use strict'` directives in non-simple parameter
functions, even when already in strict mode.

## 4.0.9 (2017-02-06)

### Bug fixes

Fix incorrect error raised for parenthesized simple assignment
targets, so that `(x) = 1` parses again.

## 4.0.8 (2017-02-03)

### Bug fixes

Solve spurious parenthesized pattern errors by temporarily erring on
the side of accepting programs that our delayed errors don't handle
correctly yet.

## 4.0.7 (2017-02-02)

### Bug fixes

Accept invalidly rejected code like `(x).y = 2` again.

Don't raise an error when a function _inside_ strict code has a
non-simple parameter list.

## 4.0.6 (2017-02-02)

### Bug fixes

Fix exponential behavior (manifesting itself as a complete hang for
even relatively small source files) introduced by the new 'use strict'
check.

## 4.0.5 (2017-02-02)

### Bug fixes

Disallow parenthesized pattern expressions.

Allow keywords as export names.

Don't allow the `async` keyword to be parenthesized.

Properly raise an error when a keyword contains a character escape.

Allow `"use strict"` to appear after other