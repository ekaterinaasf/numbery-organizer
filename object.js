const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function(param) {
    //isNaN
    //if (typeof param == "string" || typeof param == "string") {
    if (typeof param == "string" && !isNaN(param)) {
      return true;
    } else {
      return false;
    }
  },
  addString: function(param) {
    if (typeof param == "String" || typeof param == "string") {
      if (isNaN(param)) {
        this.NaNyStrings.push(param);
      } else {
        this.numberyStrings.push(param);
      }
      return true;
    } else {
      return false;
    }
  },
  allStrings: function() {
    if (this.numberyStrings.length == 0) {
      return this.NaNyStrings;
    } else if (this.NaNyStrings.length == 0) {
      return this.numberyStrings;
    } else {
      return this.numberyStrings.concat(this.NaNyStrings);
    }
  },
  evenStrings: function() {
    if (this.numberyStrings.length == 0) {
      return this.numberyStrings;
    } else {
      let arr = [];
      this.numberyStrings.forEach(el => {
        if (Number(el) % 2 === 0) {
          arr.push(el);
        }
      });
      return arr;
    }
  },
  oddStrings: function() {
    if (this.numberyStrings.length == 0) {
      return this.numberyStrings;
    } else {
      let arr = [];
      this.numberyStrings.forEach(el => {
        if (Number(el) % 2 != 0) {
          arr.push(el);
        }
      });
      return arr;
    }
  },
  negativeStrings: function() {},
  positiveStrings: function() {},
  zeroStrings: function() {},
  numberyAsNumbers: function() {},
  NaNyAsNumbers: function() {},
  sumOfNumbery: function() {},
  sumOfNaNy: function() {}
};
