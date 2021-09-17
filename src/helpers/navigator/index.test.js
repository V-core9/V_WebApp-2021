const { Vnav, V_Navigator } = require(".");
const { Vls } = require("../console/");

const vNavTest = () => {
  try {
    Vnav.registerProtocolHandler(
      "web+burger",
      "https://burgers.example.com/?burger=%s",
      "Burger handler"
    ); // last title arg included for compatibility
  } catch (err) {
    Vls.error(err);
    return err;
  }
};
const vNavTest2 = () => {
  try {
    const unread = 30;
    Vnav.setAppBadge(unread); // last title arg included for compatibility
    return true;
  } catch (err) {
    Vls.error(err);
    return err;
  }
};

module.exports = [vNavTest, vNavTest2];
