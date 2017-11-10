// const and let are block level declarations

function fire(bool) {
  if (bool) {
    // var foo = 'bar';
    let foo = 'bar'; // Block level declaration
    console.log(foo);
  } else {
    console.log(foo); // undefined when using var vs. ReferenceError when using let
  }
}

fire(false);

// const is not 100% immutable
const names = ['Ryan', 'Jemma'];
names = ['Fred']; // will not work
names.push('Rebecca'); // will alter const

// best example to use const
const months = ['Jan', 'Feb', 'Mar', ...];
