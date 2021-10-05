const UL = (elemOL = []) => {
  var response = "";
  console.log(typeof elemOL )
  if (typeof elemOL === "array" || typeof elemOL === "object") {
    
  if (elemOL.length > 0) {
    elemOL.forEach(item => {
      response += `- ${item}   `;
    })
  } else {
    response = `WARNING :: 0 Items proveded for the UNORDERED_LIST to print.`;
  }
  
  } else {
    response = `ERROR :: ORDERED_LIST needs array to be able to print.`;
}
  return response;
};

module.exports = UL;
