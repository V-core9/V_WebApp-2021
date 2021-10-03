const browserReloader = {
  refresh_time : 5000,    // -> [Milliseconds] -- [ time between check requests ] 
  reload_delay : 1500,    // -> [Milliseconds] -- [ basically a time that can be extended for different purposes && even used to block reload ] 
  url: "/autoReloadInfo.json",
  data: null,
  runner: {
    interval: null,
    status: null,
    try_count: 0
  },
  autoloadData() {
    console.log(this);
    fetch(this.url)
      .then((response) => {
        return response.json();
      })
      .then((autoStatus) => {
        console.log(autoStatus);

        if (browser_reloader.data === null) {
          console.log("Adding Browser Autoreloader Data >>> ")
          browser_reloader.data = autoStatus;
          return autoStatus;
        };

        console.log("last_build : " + browser_reloader.data.last_build + " || online : " + autoStatus.last_build);
        if (autoStatus.last_build != browser_reloader.data.last_build) {
          console.log("===============================================\nBUILD UPDATED >> RELOADING >>")
          browser_reloader.stopRunner(); 
          var helper = 5;
          console.log('reloading in 5s')
              setInterval(() => {
                helper--;
                console.log('reloading in ' + helper + 's');
                if (  helper == 0 ) {
                  console.log('reloading . . . . .');
                  location.reload();
                }
              }, 1000);
          };
      });
  },
  stopRunner() {
    console.log("< _i_ > I WILL ONCE STOP YOU FROM GREAT THINGS >>>");
    clearInterval(this.runner.interval);
    this.runner.status = "stopped";
    this.runner.interval = null;
    this.updateGUI();
  },
  startRunner() {
    console.log("I WILL ONCE DO GREAT THINGS....");
    if (this.runner.status !== "running") {
      this.stopRunner();
      this.runner.status = "running";
      this.updateGUI();
      this.runner.interval = setInterval(() => {
        if (browser_reloader.runner.status !== "running") {
          browser_reloader.stopRunner();
        } else {
          console.log("[ " + browser_reloader.runner.try_count + " ]..And again....again...");
          browser_reloader.autoloadData();
          browser_reloader.runner.try_count++;
          browser_reloader.updateGuiTryCount();
        }
      }, this.refresh_time );
    } else {
      console.log("Please stop the first poor running thing....")
    }
  },
  updateGUI() {
    if (document.querySelector("vinf[name='autoreloader_status']") !== null) {
      document.querySelector("vinf[name='autoreloader_status']").setAttribute('status', browser_reloader.runner.status);
      document.querySelector("vinf[name='autoreloader_status'] val").innerText = browser_reloader.runner.status.toUpperCase();
    }
  },

  updateGuiTryCount() {
    if (document.querySelector("vinf[name='autoreloader_try_count']") !== null) {
      document.querySelector("vinf[name='autoreloader_try_count'] val").innerText = browser_reloader.runner.try_count;
    }
  },
  addGui(selector = "v__root_main") {
    
    document.querySelector(selector).insertAdjacentHTML("beforeend",`<v_block><title>Dev Page Auto ReLoader</title><vinf name='autoreloader_status' ><name>Running Status:</name><val></val></vinf><vinf name='autoreloader_try_count' ><name>Checks Done:</name><val></val></vinf><v_controls><v_btn left_mouse='startRunner'>Start Runner</v_btn><v_btn left_mouse='stopRunner'>Stop Runner</v_btn></v_controls></v_block>`);

    document.querySelector("v_btn[left_mouse='startRunner']").addEventListener('click', (event) => {
      browser_reloader.startRunner();
    });
    document.querySelector("v_btn[left_mouse='stopRunner']").addEventListener('click', (event) => {
      browser_reloader.stopRunner();
    });
    this.updateGUI();
  },
  
  init() {
    this.startRunner();
  }
}

browser_reloader.init();

module.exports = browser_reloader;
