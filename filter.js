function filter(inputArr, searchTerm) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!inputArr.length) throw Error("inputArr cannot be empty"); // new line
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.includes(searchTerm)
    });
  }
  
  module.exports = filter;