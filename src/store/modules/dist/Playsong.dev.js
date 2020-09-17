"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.index = exports.playstart = exports.playsongUrl = exports.playsongdetail = exports.playsong = exports.reqPlaysongUrlAction = exports.reqPlaysongdetailAction = exports.reqPlaysongAction = exports.changeIndexAction = exports.changePlaystartAction = exports.changePlaysongUrlAction = exports.changePlaysongdetailAction = exports.changePlaysongAction = void 0;

var _request = require("../../utils/request");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initState = {
  data: {},
  detail: {},
  url: {},
  playstart: false,
  index: 0
}; //reducer

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "changePlaysong":
      return _objectSpread({}, state, {
        data: action.data
      });

    case "changePlaysongdetail":
      return _objectSpread({}, state, {
        detail: action.detail
      });

    case "changePlaysongUrl":
      return _objectSpread({}, state, {
        url: action.url
      });

    case "changePlaystart":
      return _objectSpread({}, state, {
        playstart: action.bool
      });

    case "changeIndex":
      return _objectSpread({}, state, {
        index: action.index
      });

    default:
      return state;
  }
}; //actions
//修改


var changePlaysongAction = function changePlaysongAction(data) {
  return {
    type: "changePlaysong",
    data: data
  };
};

exports.changePlaysongAction = changePlaysongAction;

var changePlaysongdetailAction = function changePlaysongdetailAction(detail) {
  return {
    type: "changePlaysongdetail",
    detail: detail
  };
};

exports.changePlaysongdetailAction = changePlaysongdetailAction;

var changePlaysongUrlAction = function changePlaysongUrlAction(url) {
  return {
    type: "changePlaysongUrl",
    url: url
  };
};

exports.changePlaysongUrlAction = changePlaysongUrlAction;

var changePlaystartAction = function changePlaystartAction(bool) {
  return {
    type: "changePlaystart",
    bool: bool
  };
};

exports.changePlaystartAction = changePlaystartAction;

var changeIndexAction = function changeIndexAction(index) {
  return {
    type: "changeIndex",
    index: index
  };
}; //组件触发请求


exports.changeIndexAction = changeIndexAction;

var reqPlaysongAction = function reqPlaysongAction(id) {
  return function (dispatch, getState) {
    var data = getState().playsong.data;

    if (id === data.id) {
      return;
    } else {
      dispatch(changePlaysongAction({}));
    }

    (0, _request.reqLyric)({
      id: id
    }).then(function (res) {
      var lyric = res.data.lrc.lyric;
      var arr = lyric.split('[').slice(1);
      var result = [];
      arr.forEach(function (item) {
        //item- '00:00.000] 作曲 : 姚六一'
        var tempArr = item.split(']'); //['00:00.000','作曲 : 姚六一']

        result.push({
          time: tempArr[0].slice(0, 5),
          lyc: tempArr[1]
        });
      });
      lyric = result.filter(function (item) {
        return item.lyc !== '\n';
      });
      dispatch(changePlaysongAction(lyric));
    });
  };
};

exports.reqPlaysongAction = reqPlaysongAction;

var reqPlaysongdetailAction = function reqPlaysongdetailAction(id) {
  return function (dispatch, getState) {
    var data = getState().playsong.data;

    if (id === data.id) {
      return;
    } else {
      dispatch(changePlaysongdetailAction({}));
    }

    (0, _request.reqSongdetail)({
      ids: id
    }).then(function (res) {
      dispatch(changePlaysongdetailAction(res.data.songs[0].al));
    });
  };
};

exports.reqPlaysongdetailAction = reqPlaysongdetailAction;

var reqPlaysongUrlAction = function reqPlaysongUrlAction(id) {
  return function (dispatch, getState) {
    var data = getState().playsong.data;

    if (id === data.id) {
      return;
    } else {
      dispatch(changePlaysongUrlAction({}));
    }

    (0, _request.reqSongurl)({
      id: id
    }).then(function (res) {
      dispatch(changePlaysongUrlAction(res.data.data[0]));
    });
  };
}; //导出数据


exports.reqPlaysongUrlAction = reqPlaysongUrlAction;

var playsong = function playsong(state) {
  return state.playsong.data;
};

exports.playsong = playsong;

var playsongdetail = function playsongdetail(state) {
  return state.playsong.detail;
};

exports.playsongdetail = playsongdetail;

var playsongUrl = function playsongUrl(state) {
  return state.playsong.url;
};

exports.playsongUrl = playsongUrl;

var playstart = function playstart(state) {
  return state.playsong.playstart;
};

exports.playstart = playstart;

var index = function index(state) {
  return state.playsong.index;
};

exports.index = index;
var _default = reducer;
exports["default"] = _default;