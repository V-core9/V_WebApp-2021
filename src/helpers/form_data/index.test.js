/*jshint esversion: 8 */
const { Vfd } = require(".");
const vCon = require("../console/");

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

  vCon.log(Vfd);
};

//VfdTest();

vCon.log(Vfd.formsList);

module.exports = VfdTest;
