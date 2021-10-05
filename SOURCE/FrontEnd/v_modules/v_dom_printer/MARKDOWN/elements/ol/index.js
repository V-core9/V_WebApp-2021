const OL = (elemOL = []) => {
  var helperNumber = 1;
  var response = "";
  console.log(typeof elemOL )
  if (typeof elemOL === "array" || typeof elemOL === "object") {
    
  if (elemOL.length > 0) {
    elemOL.forEach(item => {
      response += `${helperNumber}. ${item}   `;
      helperNumber++;
    })
  } else {
    response = `WARNING :: 0 Items proveded for the ORDERED_LIST to print.`;
  }
  
  } else {
    response = `ERROR :: ORDERED_LIST needs array to be able to print.`;
}
  return response;
};

module.exports = OL;
