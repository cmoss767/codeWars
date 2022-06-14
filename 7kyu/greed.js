function getQuotes(string) {
    var reg = /"([^"]*)"/g;
    return string.match(reg);
  }