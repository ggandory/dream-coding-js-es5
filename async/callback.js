'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration  var같은게 가장 위로 올라가서 선언
console.log('1');
setTimeout(() => console.log('2'), 1000); //1초뒤에 출력(비동기)
console.log('3');

// Synchronous callback 동기콜백
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback 비동기 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); //비동기

// Callback Hell example 전형적인 콜백 지옥(유지보수 어렵다.)
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);