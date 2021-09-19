const { Vnav } = require(".");
const vCon = require("../console/");

async function vNavTest() {
  try {
    Vnav.registerProtocolHandler(
      "web+burger",
      "https://burgers.example.com/?burger=%s",
      "Burger handler"
    ); // last title arg included for compatibility
  } catch (err) {
    vCon.error(err);
    return err;
  }
}
async function vNavTest2() {
  try {
    const unread = 30;
    Vnav.setAppBadge(unread); // last title arg included for compatibility
    return true;
  } catch (err) {
    vCon.error(err);
    return err;
  }
}

module.exports = [vNavTest, vNavTest2];
