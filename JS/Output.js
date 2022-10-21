var a = 123;
function fun() {
    console.log(a);
    var a = 1;
    console.log(a);
}
fun();
208.39
//------Question-2 --------------------//
function F() {
    var arr = [], i;
    for (i = 0; i < 3; i++) {
        arr[i] = function () {
            return i;
        };
    }
    return arr;
}
var arr = F();

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());
//--------------------------------
//What's the output
var consoleLog = console.log;
var ob = {
    a: 'hello',
    fun: function () {
        var self = this;
        consoleLog('outer a = ', this.a);
        this.a = 'world';
        consoleLog('outer self a = ', self.a);

        (function x() {
            consoleLog('inner a', this.a);
            consoleLog('inner self a', self.a)
        })();
    }
};
ob.fun();

function X() {
    this.a = 'abc';
}
ob.fun.call(X()/window/new X()/undefined)
//******************************** */
var consoleLog = console.log;
var ob = {
    a: 'hello',
    fun: function () {
        var self = this;
        consoleLog('outer a = ', this.a);
        consoleLog('outer self a = ', self.a);

        (function x() {
            consoleLog('inner a', this.a);
            consoleLog('inner self a', self.a)
        }.bind(this))();
    }
};
ob.fun();
//******************* */

function customSetInterval (cb, interval) {
    return setTimeout( () => {
      if (typeof cb == 'function') {
        cb()
        // Recurse
        customSetInterval(cb, interval)
      } else {
        console.error(new Error('Expecting a function as a callback'))
      }
    }, interval)
  }

  // ****************** //
  const promise4 = Promise.reject(new Error('error happened'));
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

// Promise.all([promise2, promise3, promise4]).then((values) => {
//     console.log(values);
// }).catch(err => {
//     console.log(err)
// });

async function fun(){
    try {
    var x = await Promise.allSettled([promise2, promise3, promise4]);
    
        console.log(x);
    }catch(e){
        console.log(e);
    }
}

fun();

// *************** //
function reverseString(str){
    
    const strArr = str.split('');
    if(strArr.length === 0) return '';
    if(strArr.length === 1) return str;
    const end = strArr.length;
    return reverseString(str.slice(1, end))+str[0];
   
   }
   
   const x  = reverseString('abcde');
   
   console.log(x);
   // ************* //
   Polyfill - call vs apply vs bind

   https://medium.com/@ankur_anand/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b
