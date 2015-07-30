/**
 * Given a list of ObjectIDs OR a list of Strings, returns the unique ones.
 * Has a worst-case performance of O(n), unlike _.unique which is O(n²)
 *
 * Important: the behaviour is undefined when the list has a mixture of ObjectIDs and Strings
 *
 * Highly optimised so not so pretty
 */
module.exports = function mongodbUniqueIds(ids) {
  if (!ids) return [];
  if (ids.length < 2) return ids; // You need two items to need uniqueness

  var result = new Array(ids.length);

  var u = {};
  var c = 0;
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    var idRepresentation;
    if (!id) {
      idRepresentation = 'null';
    } else {
      if (typeof id == 'string') {
        idRepresentation = id;
      } else {
        idRepresentation = id.id;
      }
    }

    if (!u[idRepresentation]) {
      u[idRepresentation] = true;
      result[c] = id;
      c++;
    }
  }

  result.length = c;

  return result;
};
