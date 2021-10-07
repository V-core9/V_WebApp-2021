const appMode = "LIVE";

switch (appMode) {
  case "dev":
    module.exports = {
      name: "dev",
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
      name: "test",
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
      name: "LIVE",
      language: "EN",
      onlySecure: true,
      origin: "*",
      port: 400,
      target: "web",
      printConsole: false,
    };
    break;
}
