const appMode = "dev";

switch (appMode) {
  case "dev":
    module.exports = {
      language: "EN",
      onlySecure: false,
      origin: "localhost",
      port: 420,
      target: "web",
      printConsole: true,
    };

    break;

  case "test":
    module.exports = {
      language: "EN",
      onlySecure: true,
      origin: "localhost",
      port: 440,
      target: "web",
      printConsole: true,
    };
    break;

  default:
    module.exports = {
      language: "EN",
      onlySecure: true,
      origin: "*",
      port: 400,
      target: "web",
      printConsole: false,
    };
    break;
}
