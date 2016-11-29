// Numbers
console.log( typeof 37 ); // 'number'
console.log( typeof 3.14 );
console.log( typeof Math.LN2 );
console.log( typeof Infinity );
console.log( typeof NaN ); // Despite being "Not-A-Number"

// Strings
console.log( typeof "" );
console.log( typeof "bla" );
console.log( typeof String("abc") ); // but never use this form!

// Booleans
console.log( typeof true );
console.log( typeof false );

// Undefined
console.log( typeof undefined );
console.log( typeof declaredButUndefinedVariable );
console.log( typeof undeclaredVariable ); 

// Objects
console.log( typeof {a:1} );
console.log( typeof [1, 2, 4] ); 
console.log( typeof new Date() );

// Functions
console.log( typeof function(){} );
console.log( typeof class C {} );
console.log( typeof Math.sin );

// Symbols (ES6)
console.log( typeof Symbol() );
console.log( typeof Symbol('foo') );
