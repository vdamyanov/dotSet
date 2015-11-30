function dotSet(obj, path, set){
  var children = path.split(".");
  var result = obj;
  for (var i = 0; i < children.length; i++) {
    var attr = children[i];
    if (!result[attr]){
      result[attr] = {};
    }
    if (set && i == children.length-1){
      result[attr] = set;
      return obj;
    }
    result = result[attr];
  }
  return result;
}