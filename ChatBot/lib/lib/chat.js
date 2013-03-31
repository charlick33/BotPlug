// Generated by CoffeeScript 1.6.2
var chatCommandDispatcher;

chatCommandDispatcher = function(chat) {
  var c, cmd, _i, _len, _results;

  chatUniversals(chat);
  _results = [];
  for (_i = 0, _len = cmds.length; _i < _len; _i++) {
    cmd = cmds[_i];
    c = new cmd(chat);
    if (c.evalMsg()) {
      break;
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};