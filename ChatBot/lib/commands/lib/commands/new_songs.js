// Generated by CoffeeScript 1.6.2
var newSongsCommand, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

newSongsCommand = (function(_super) {
  __extends(newSongsCommand, _super);

  function newSongsCommand() {
    _ref = newSongsCommand.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  newSongsCommand.prototype.init = function() {
    this.command = '/newsongs';
    this.parseType = 'startsWith';
    return this.rankPrivelege = 'user';
  };

  newSongsCommand.prototype.functionality = function() {
    var arts, cMedia, chans, chooseRandom, mChans, msg, selections, u, _ref1;

    mChans = this.memberChannels.slice(0);
    chans = this.channels.slice(0);
    arts = this.artists.slice(0);
    chooseRandom = function(list) {
      var l, r;

      l = list.length;
      r = Math.floor(Math.random() * l);
      return list.splice(r, 1);
    };
    selections = {
      channels: [],
      artist: ''
    };
    u = data.users[this.msgData.fromID].getUser().username;
    if (u.indexOf("MistaDubstep") !== -1) {
      selections['channels'].push('MistaDubstep');
    } else if (u.indexOf("Underground Promotions") !== -1) {
      selections['channels'].push('UndergroundDubstep');
    } else {
      selections['channels'].push(chooseRandom(mChans));
    }
    selections['channels'].push(chooseRandom(chans));
    selections['channels'].push(chooseRandom(chans));
    cMedia = API.getMedia();
    if ((cMedia != null) && (_ref1 = cMedia.author, __indexOf.call(arts, _ref1) >= 0)) {
      selections['artist'] = cMedia.author;
    } else {
      selections['artist'] = chooseRandom(arts);
    }
    msg = "Everyone's heard that " + selections['artist'] + " track! Get new music from http://youtube.com/" + selections['channels'][0] + " http://youtube.com/" + selections['channels'][1] + " or http://youtube.com/" + selections['channels'][2];
    return API.sendChat(msg);
  };

  newSongsCommand.prototype.memberChannels = ["JitterStep", "MistaDubstep", "DubStationPromotions", "UndergroundDubstep", "JesusDied4Dubstep", "DarkstepWarrior", "BombshockDubstep", "Sharestep"];

  newSongsCommand.prototype.channels = ["BassRape", "Mudstep", "WobbleCraftDubz", "MonstercatMedia", "UKFdubstep", "DropThatBassline", "Dubstep", "VitalDubstep", "AirwaveDubstepTV", "EpicNetworkMusic", "NoOffenseDubstep", "InspectorDubplate", "ReptileDubstep", "MrMoMDubstep", "FrixionNetwork", "IcyDubstep", "DubstepWeed", "VhileMusic", "LessThan3Dubstep", "PleaseMindTheDUBstep", "ClownDubstep", "TheULTRADUBSTEP", "DuBM0nkeyz", "DubNationUK", "TehDubstepChannel", "BassDropMedia", "USdubstep", "UNITEDubstep"];

  newSongsCommand.prototype.artists = ["Skrillex", "Doctor P", "Excision", "Flux Pavilion", "Knife Party", "Krewella", "Rusko", "Bassnectar", "Nero", "Deadmau5", "Borgore", "Zomboy"];

  return newSongsCommand;

})(Command);
