const { Vfd } = require(".");
const Vls = require("../console/");

const demoFormSample = {
  name: "demoFormSample",
  selector: "#demoFormSampleElemID",
  template: `<form id="demoFormSampleElemID" name="demoFormSample">
                    <div>
                      <label for="username">Enter name:</label>
                      <input type="text" id="username" name="username">
                    </div>
                    <div>
                      <label for="useracc">Enter account number:</label>
                      <input type="text" id="useracc" name="useracc">
                    </div>
                    <div>
                      <label for="userfile">Upload file:</label>
                      <input type="file" id="userfile" name="userfile">
                    </div>
                    <input type="submit" value="Submit!">
                  </form>`,
};

const VfdTest = () => {
  Vfd.addNewForm(demoFormSample);

  Vls.log(Vfd);
};

VfdTest();

Vls.log(Vfd.formsList);

module.exports = VfdTest;
