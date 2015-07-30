# mongodb-unique-ids

[![Build Status](https://travis-ci.org/suprememoocow/mongodb-unique-ids.svg?branch=master)](https://travis-ci.org/suprememoocow/mongodb-unique-ids)

A tiny utility for returning a unique set of `ObjectID`-like identifiers, given
an array of `ObjectID`-like identifiers.

```shell
npm install mongodb-unique-ids
```

## Why not just use `_.unique`?

1. `_.unique` is `O(n²)`. If you have large arrays of ids, it will severely impact on your server performance.
2. `_.unique` doesn't even work with ObjectIDs.

## Using

```javascript
var uniqueIds = require('mongodb-unique-ids');
uniqueIds(['51adcd412aefe1576f000005', '51adcd412aefe1576f000006']) // -> ['51adcd412aefe1576f000005', '51adcd412aefe1576f000006']
uniqueIds(['51adcd412aefe1576f000005', '51adcd412aefe1576f000005']) // -> ['51adcd412aefe1576f000005']
uniqueIds([new ObjectID('51adcd412aefe1576f000005'), new ObjectID('51adcd412aefe1576f000005')]) // -> [new ObjectID('51adcd412aefe1576f000005')]
```

# License

License
The MIT License (MIT)

Copyright (c) 2015, Andrew Newdigate

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
