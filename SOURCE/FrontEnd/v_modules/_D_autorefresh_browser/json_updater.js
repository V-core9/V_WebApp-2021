//-> Uses FS to save .
let fs = require("fs");

// arBaseConfig => Auto Page Refresher Base Config
const arBaseConfig = require('./_config')

//==>> Updates JSON File That is Being Loaded from the front end  ]----
const jsonUpdater = (arInfo = null) => {
  try {
    //<i>-> If Whole Object is null 
    arInfo = (arInfo === null) ? arBaseConfig.default : arInfo;
    //[o]=[> Adding the time of update    ]>-----
    arInfo.last_build = Date.now();
    //[+]=[> Additional Info that may be useful  ]>-----
    if (typeof arInfo.default_reload_interval === 'undefined') arInfo.default_reload_interval = arBaseConfig.default.default_reload_interval;
    if (typeof arInfo.default_reload_delay === 'undefined') arInfo.default_reload_delay = arBaseConfig.default.default_reload_delay;
    if (typeof arInfo.run_test_id === 'undefined') arInfo.run_test_id = arBaseConfig.default.run_test_id;
    if (typeof arInfo.force_reload === 'undefined') arInfo.force_reload = arBaseConfig.default.force_reload;
    if (typeof arInfo.force_specific_reload_interval === 'undefined') arInfo.force_specific_reload_interval = arBaseConfig.default.force_specific_reload_interval;
    if (typeof arInfo.force_specific_reload_delay === 'undefined') arInfo.force_specific_reload_delay = arBaseConfig.default.force_specific_reload_delay;
    if (typeof arInfo.force_clear_cookies === 'undefined') arInfo.force_clear_cookies = arBaseConfig.default.force_clear_cookies;

    //[w]=[> And just write it down to JSON file ]>-----
    fs.writeFileSync(buildInfoFileLocation, JSON.stringify(arBaseConfig.arFileUrl, true, 2));
    return true;
  } catch (err) {
    return err;
  }
}

jsonUpdater();

