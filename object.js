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
  negativeStrings: function() {
    return this.numberyStrings.filter(el => Number(el) < 0);
    /*
    this.numberyStrings.filter(el => {
      Number(el) < 0;
    });*/
  },
  positiveStrings: function() {
    return this.numberyStrings.filter(el => Number(el) > 0 || el == "");
    /*let arr = [];
    this.numberyStrings.forEach(el => {
      if (Number(el) > 0) {
        arr.push(el);
      }
      return arr; //why return undefined
    });*/
  },
  zeroStrings: function() {
    if (this.numberyStrings.length == 0) {
      return this.numberyStrings;
    } else {
      //this.numberyStrings.filter(el => Number(el) === 0 || Number(el) === -0 || el === "");
      let arr = [];
      this.numberyStrings.forEach(el => {
        if (Number(el) === 0 || Number(el) === -0 || el === "") {
          arr.push(el);
        }
      });
      return arr;
    }
  },
  numberyAsNumbers: function() {
    if (this.numberyStrings.length == 0) {
      return this.numberyStrings;
    } else {
      let arr = [];
      this.numberyStrings.forEach(el => arr.push(Number(el)));
      return arr;
    }
  },
  NaNyAsNumbers: function() {
    if (this.NaNyStrings.length == 0) {
      return this.NaNyStrings;
    } else {
      let arr = [];
      this.NaNyStrings.forEach(el => arr.push(Number(el)));
      return arr;
    }
  },
  sumOfNumbery: function() {
    if (this.numberyStrings.length == 0) {
      return 0;
    } else {
      return this.numberyStrings.reduce((a, b) => Number(a) + Number(b), 0);
    }
  },
  sumOfNaNy: function() {
    if (this.NaNyStrings.length == 0) {
      return 0;
    } else {
      return this.NaNyStrings.reduce((a, b) => Number(a) + Number(b), 0);
    }
  }
};
