// Generated by CoffeeScript 1.4.0
var popCommand,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

popCommand = (function(_super) {

  __extends(popCommand, _super);

  function popCommand() {
    return popCommand.__super__.constructor.apply(this, arguments);
  }

  popCommand.prototype.init = function() {
    this.command = '/pop';
    this.parseType = 'exact';
    return this.rankPrivelege = 'mod';
  };

  popCommand.prototype.functionality = function() {
    var djs, popDj;
    djs = API.getDJs();
    popDj = djs[djs.length - 1];
    return API.moderateRemoveDJ(popDj.id);
  };

  return popCommand;

})(Command);
