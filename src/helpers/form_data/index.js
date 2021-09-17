/*jshint esversion: 8 */
const { Vls } = require("../console/");
const appCfg = require("../../app_config");

const V_FormData = {
  formsList: [],
  addNewForm(form = null) {
    try {
      if (form === null) {
        Vls.error(this);
        Vls.trace();
        return false;
      }
      document.body.innerHTML += form.template;
      form.elem = document.querySelector(form.selector);
      form.data = new FormData(form.elem);

      return this.formsList.push(form);
    } catch (err) {
      Vls.error(err);
      return err;
    }
  },
  append(name, value, filename = null) {
    try {
      if (filename !== null) {
        this.data.append(name, value, filename);
      } else {
        this.data.append(name, value);
      }
      return true;
    } catch (error) {
      Vls.error(error);
      return error;
    }
  },
  delete(name) {
    try {
      this.data.delete(name);
      return true;
    } catch (error) {
      Vls.error(error);
      return error;
    }
  },
  entries() {
    try {
      const entriesHelper = this.data.entries();
      Vls.log(entriesHelper);
      return entriesHelper;
    } catch (err) {
      Vls.error(err);
      return err;
    }
  },
  get(name) {
    try {
      const getHelper = this.data.get(name);
      Vls.log(getHelper);
      return getHelper;
    } catch (err) {
      Vls.error(err);
      return err;
    }
  },
  getAll(name) {
    try {
      const getAllHelper = this.data.getAll(name);
      Vls.log(getAllHelper);
      return getAllHelper;
    } catch (err) {
      Vls.error(err);
      return err;
    }
  },
  has(name) {
    try {
      const hasHelper = this.data.has(name);
      Vls.log(hasHelper);
      return hasHelper;
    } catch (err) {
      Vls.error(err);
      return err;
    }
  },
  keys() {
    try {
      const keysHelper = this.data.keys();
      Vls.log(keysHelper);
      return keysHelper;
    } catch (err) {
      Vls.error(err);
      return err;
    }
  },
  set(name, value, filename = null) {
    try {
      if (filename !== null) {
        this.data.set(name, value, filename);
      } else {
        this.data.set(name, value);
      }
      return true;
    } catch (error) {
      Vls.error(error);
      return error;
    }
  },
  values() {
    try {
      const valuesHelper = this.data.values();
      Vls.log(valuesHelper);
      return valuesHelper;
    } catch (err) {
      Vls.error(err);
      return err;
    }
  },
};

module.exports = {
  Vfd: V_FormData,
  V_FormData: V_FormData,
};
