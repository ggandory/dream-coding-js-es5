// 1. +기호를 이용하는 
console.log('my' + 'cat');
console.log('1' +2);
console.log(`string literals: 1+2=${1+2}`);

//   '\'' 따옴표 안에 따옴표 넣으려면 \이거 넣어줘야함 \n은 줄바꿈 \t 탭키
//2. 연산자
console.log(1+1); //add
console.log(1-1); //빼기
console.log(1/1);//나누기
console.log(1*1);//곱하기
console.log(5%2);// 나머지
console.log(2**3); //제곱

//3. 증감
let counter =2;
const preIncrement = ++counter;
//counter=counter+1이랑 같은거임 전위연산
//preIncrement =counter;
//counter++ 이건 후위연산

//4.연산 다른거
let x=3;
let y=6;
x+=y; //x=x+y; 랑 같은거임
x-=y; //x=x-y;
x*=y; //x=x*y;
x/=y; //x=x/y;

//5. 비교연산(이건 뭐 쉬운거지뭐)
console.log(10<6); //less than
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

//6. 논리형 비교 || (or), &&(and), !(not)
const value1=false;
const value2=4<2;

//||(or) 어느 하나라도 true면 그냥 바로 true임 (또는 이기때문에 하나라도 되면 됨)
console.log(`or: ${value1 || value2 || check()}`);

function check(){
  for(let i =0; i<10;i++){
//wasting time
console.log('huhhuh');
}
return true;
}

//&&(and) 하나라도 안되면 안됨 모두가 다 똑같아야됨
console.log(`or: ${value1 && value2 && check()}`);

function check(){
  for(let i =0; i<10;i++){
//wasting time
console.log('huhhuh');
}
return true;
}

//!(not)
console.log(!value1); //반대로 나옴

//7.Equality
const stringFive='5';
const numberFive =5;
//== loose equality, with type conversion 형이 달라도 비교해줌
console.log(stringFive == numberFive);
console.log(stringFive!=numberFive);

//===strich equality, no type conversion 형이 다르면 아예 다른거임 내용이 같아도
console.log(stringFive===numberFive);
console.log(stringFive!==numberFive);

// object equality by reference 메모리에는 다른 레퍼런스가 들어있음
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1; //할당해버림
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true 

// equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false);  //true
console.log('' === false); //false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if 
// if, else if, else
const name = 'df';
if (name === 'ellie') { //이게 true면 가로 안에 바로 실행
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');
//이름이 ellie인지 확인하고 ? 다음에 오는건 맞으면 yes 출력 아니면 no 출력

// 10. Switch statement 스위치 구문
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops 반복문
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) { //조건 만족할 때까지 계속 반복
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {//여기는 무조건 실행함 그다음 반복문
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin(시작); condition(조건); step(과정))
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) { //for 반복문
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue (조금 헷갈리네 여기는)
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
let gone=8;

