'use strict';

function fire(bool) {
  if (bool) {
    // var foo = 'bar';
    var _foo = 'bar';
    console.log(_foo);
  } else {
    console.log(foo); // undefined when var foo vs.
  }
}

fire(false);