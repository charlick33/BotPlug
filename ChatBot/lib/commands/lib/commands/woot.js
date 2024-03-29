// Generated by CoffeeScript 1.6.2
var wootCommand, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

wootCommand = (function(_super) {
  __extends(wootCommand, _super);

  function wootCommand() {
    _ref = wootCommand.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  wootCommand.prototype.init = function() {
    this.command = '/woot';
    this.parseType = 'startsWith';
    return this.rankPrivelege = 'user';
  };

  wootCommand.prototype.functionality = function() {
    var msg, nameIndex;

    msg = "Please WOOT on DJ Booth and support your fellow DJs! AutoWoot: http://bit.ly/Lwcis0";
    if ((nameIndex = this.msgData.message.indexOf('@')) !== -1) {
      return API.sendChat(this.msgData.message.substr(nameIndex) + ', ' + msg);
    } else {
      return API.sendChat(msg);
    }
  };

  return wootCommand;

})(Command);
