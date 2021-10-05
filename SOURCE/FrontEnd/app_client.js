const V_DisplayDriver = require("./v_modules/v_display_driver/displayDriver");

const vApp = () => {
  if (typeof this.bootStatus === "undefined") this.bootStatus = null;
  this.vDisplay = V_DisplayDriver;

  this.boot = () => {
    console.log("[-IN_PROGRESS-] :: V_Application Boot Starting >->-> ");

    vApp.bootStatus = true;
    console.log("[-COMPLETED-] :: V_Application Boot Completed >->-> ");
  };

  if (this.bootStatus === null) this.boot();
};

vApp();


console.info(appConfigPageInfo);
