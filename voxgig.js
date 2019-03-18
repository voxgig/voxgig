/* Copyright (c) 2019 voxgig and other contributors, MIT License */
"use strict";

const Wreck = require("wreck");

module.exports = make_voxgig;

function make_voxgig(options) {
  return new Voxgig(options);
}

make_voxgig.search = async function(query) {
  return new Voxgig().search(query);
};

function Voxgig(options) {
  var self = this;

  self.search = async function(query) {
    const url = "https://www.voxgig.com/api/search";

    const msg = {
      role: "web",
      app: "search",
      cmd: "query",
      query: query
    };

    const { res, payload } = await Wreck.post(url, { payload: msg });
    return JSON.parse(payload.toString());
  };
}
