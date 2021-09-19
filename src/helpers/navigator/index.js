const vCon = require("../console/");

const V_Navigator = {
  activeVRDisplays: "",
  appCodeName: "",
  appName: "",
  appVersion: "",
  battery: "",
  buildID: "",
  clipboard: "",
  connection: "",
  contacts: "",
  cookieEnabled: "",
  credentials: "",
  deviceMemory: "",
  doNotTrack: "",
  geolocation: "",
  hardwareConcurrency: "",
  hid: "",
  keyboard: "",
  language: "",
  languages: "",
  locks: "",
  maxTouchPoints: "",
  mediaDevices: "",
  mediaSession: "",
  mimeTypes: "",
  onLine: "",
  oscpu: "",
  permissions: "",
  platform: "",
  plugins: "",
  product: "",
  productSub: "",
  serial: "",
  serviceWorker: "",
  storage: "",
  userAgent: "",
  userAgentData: "",
  vendor: "",
  vendorSub: "",
  webdriver: "",
  xr: "",
  canShare(data = undefined) {
    return Navigator.canshare(data);
  },
  clearAppBadge() {
    return Navigator.clearAppBadge();
  },
  getBattery() {
    return Navigator.getBattery();
  },
  getGamepads() {
    return Navigator.getGamepads();
  },
  javaEnabled() {
    return Navigator.javaEnabled();
  },
  mozIsLocallyAvailable() {
    return;
  },
  msLaunchUri() {
    return;
  },
  registerProtocolHandler(scheme, url, title) {
    return;
  },
  requestMediaKeySystemAccess() {
    return;
  },
  sendBeacon(url, data = null) {
    if (data !== null) Navigator.sendBeacon(url, data);
    Navigator.sendBeacon(url);
  },
  setAppBadge(contents = null) {
    if (contents !== null) Navigator.setAppBadge(contents);
    Navigator.setAppBadge();
  },
  share(data) {
    navigator.share(data);
  },
  vibrate(pattern = [50, 50, 50, 50]) {
    navigator.vibrate(pattern); // vibrate for 200ms
    //navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]); // Vibrate 'SOS' in Morse.
  },
};

V_Navigator.activeVRDisplays = Navigator.activeVRDisplays;
V_Navigator.appCodeName = Navigator.appCodeName;
V_Navigator.appName = Navigator.appName;
V_Navigator.appVersion = Navigator.appVersion;
V_Navigator.battery = Navigator.battery;
V_Navigator.buildID = Navigator.buildID;
V_Navigator.clipboard = Navigator.clipboard;
V_Navigator.connection = Navigator.connection;
V_Navigator.contacts = Navigator.contacts;
V_Navigator.cookieEnabled = Navigator.cookieEnabled;
V_Navigator.credentials = Navigator.credentials;
V_Navigator.deviceMemory = Navigator.deviceMemory;
V_Navigator.doNotTrack = Navigator.doNotTrack;
V_Navigator.geolocation = Navigator.geolocation;
V_Navigator.hardwareConcurrency = Navigator.hardwareConcurrency;
V_Navigator.hid = Navigator.hid;
V_Navigator.keyboard = Navigator.keyboard;
V_Navigator.language = Navigator.language;
V_Navigator.languages = Navigator.languages;
V_Navigator.locks = Navigator.locks;
V_Navigator.maxTouchPoints = Navigator.maxTouchPoints;
V_Navigator.mediaDevices = Navigator.mediaDevices;
V_Navigator.mediaSession = Navigator.mediaSession;
V_Navigator.mimeTypes = Navigator.mimeTypes;
V_Navigator.onLine = Navigator.onLine;
V_Navigator.oscpu = Navigator.oscpu;
V_Navigator.permissions = Navigator.permissions;
V_Navigator.platform = Navigator.platform;
V_Navigator.plugins = Navigator.plugins;
V_Navigator.product = Navigator.product;
V_Navigator.productSub = Navigator.productSub;
V_Navigator.serial = Navigator.serial;
V_Navigator.serviceWorker = Navigator.serviceWorker;
V_Navigator.storage = Navigator.storage;
V_Navigator.userAgent = Navigator.userAgent;
V_Navigator.userAgentData = Navigator.userAgentData;
V_Navigator.vendor = Navigator.vendor;
V_Navigator.vendorSub = Navigator.vendorSub;
V_Navigator.webdriver = Navigator.webdriver;
V_Navigator.xr = Navigator.xr;

module.exports = { vNav: V_Navigator };
