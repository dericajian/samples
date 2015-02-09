var util = {

  printObject: function(o) {
    console.log(o.toString());
  },

  printArea: function(shape) {
    console.log('The area of shape '+ shape.name + ': ' + shape.area());
  }

};


export {util};

