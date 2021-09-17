/*jshint esversion: 8 */
const { Vls } = require("../console/");

const V_History = {
  length: "",
  scrollRestore: "",
  currentState: "",

  back() {
    history.back();
  },
  forward() {
    history.forward();
  },
  go(delta = 0) {
    history.go(delta);
  },
  pushState(state, title, url = null) {
    try {
      if (url === null) {
        history.pushState(state, title);
      } else {
        history.pushState(state, title, url);
      }
      return true;
    } catch (error) {
      Vls.error(error);
      return error;
    }
  },
  replaceState(state, title, url = null) {
    try {
      if (url === null) {
        history.replaceState(state, title);
      } else {
        history.replaceState(state, title, url);
      }
      return true;
    } catch (error) {
      Vls.error(error);
      return error;
    }
  },
};

V_History.length = history.length;
V_History.scrollRestore = history.scrollRestoration;
V_History.currentState = history.state;

const V_TimeLine = V_History;
const Vtl = V_TimeLine;

module.exports = {
  V_TimeLine: V_History,
  Vtl: V_History,
  page_prev: V_History.back,
  page_next: V_History.forward,
  page_run: V_History.go,
  push_page: V_History.pushState,
  replace_page: V_History.replaceState,
};

/*
V_TimeLine, Vtl, page_prev, page_next, page_run, push_page, replace_page
*/
