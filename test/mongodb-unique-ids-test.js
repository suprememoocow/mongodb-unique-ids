var assert = require('assert');
var ObjectID = require('bson').ObjectID;
var mongodbUniqueIds = require('..');
var ID_SET = ['51adcd412aefe1576f000005', '51adcd412aefe1576f000006', '51adcd412aefe1576f000007', '51adcd412aefe1576f000008', '51adcd412aefe1576f000009'];

describe('mongodb-unique-ids', function() {
  it('should work with string ids', function() {
    assert.deepEqual(['51adcd412aefe1576f000005'], mongodbUniqueIds(
      ['51adcd412aefe1576f000005', '51adcd412aefe1576f000005']
    ));

    assert.deepEqual(['51adcd412aefe1576f000005', '51adcd412aefe1576f000006'], mongodbUniqueIds(
      ['51adcd412aefe1576f000005', '51adcd412aefe1576f000005', '51adcd412aefe1576f000006']
    ));
  });

  it('should work with object ids', function() {
    assert.deepEqual([new ObjectID('51adcd412aefe1576f000005')], mongodbUniqueIds(
      [new ObjectID('51adcd412aefe1576f000005'), new ObjectID('51adcd412aefe1576f000005')]
    ));

    assert.deepEqual([new ObjectID('51adcd412aefe1576f000005'), new ObjectID('51adcd412aefe1576f000006')], mongodbUniqueIds(
      [new ObjectID('51adcd412aefe1576f000005'), new ObjectID('51adcd412aefe1576f000005'), new ObjectID('51adcd412aefe1576f000006')]
    ));
  });

  it('should work with very large sets of Strings', function() {
    var bigSet = [];
    for (var i = 0; i < 20000; i++) {
      bigSet.push(ID_SET[i % ID_SET.length]);
    }
    assert.deepEqual(ID_SET, mongodbUniqueIds(bigSet));
  });

  it('should work with very large sets of ObjectIDs', function() {
    var uniqueIds = ID_SET.map(function(id) {
      return new ObjectID(id);
    });

    var bigSet = [];
    for (var i = 0; i < 20000; i++) {
      bigSet.push(uniqueIds[i % uniqueIds.length]);
    }
    assert.deepEqual(uniqueIds, mongodbUniqueIds(bigSet));
  });

  it.skip('should work with mixed', function() {
    // This does not currently work
    assert.deepEqual(['51adcd412aefe1576f000005'], mongodbUniqueIds(
      ['51adcd412aefe1576f000005', new ObjectID('51adcd412aefe1576f000005')]
    ));
  });
});
