//number, string, boolean, null, undefined
let number=2; //메모리에 변수를 위한 공간이 생긴다.(공간할당)
let number2=number; //새로운 변수에 기존 변수를 선언하면 또 다른 메모리 공간이 생긴다.
console.log(number);
console.log(number2);

number2=3;

console.log(number);
console.log(number2);

let obj={
  name: 'ellie',
  age:5,
}; //이런 오브젝트로 변수를 선언하면 변수들이 오브젝트로 묶여서 각각 변수가 선언되는거임
console.log(obj.name);

let obj2 = obj; //똑같이 복사됨

console.log(obj2.name);

obj.name='james';

console.log('-----');
console.log(obj.name);
console.log(obj.name);
//오브젝트안에 변수를 새로 선언해주면 기존 변수와 복제된 변수도 같이 변화하게 된다.

let a = 2;
a=5;
a=9;
//let으로 선언은 변경이 가능

const obj3={
  name:'heo',
  age:5,
};
obj3.name='james';//하지만 오브젝트 const선언해도 담겨있는 변수를 따로 선언해주느건 가능함.


const num=1;
const num2=2;
const result = num+num2;
console.log(result);
//이런걸 계속 반복적으로 만약 만들어야 한다? 그때 함수를 만드는거임(재반복)

function add(a,b){
  return a+b;
}
//add라는 함수는 말그대로 return을 a+b로 하는 함수임 즉 기능적인거임
const sum =add(3,4);
console.log(sum);

const doSomething =add;
const result2 = doSomething(2,3);
console.log(result2);
const result3 = add(2,3);
console.log(result3); 

function print(a,b){
  console.log(`${a} ${b}`);
}
print(3,4);

function surprise(operator){
  const result = operator(2,3); //add(2,3)
  console.log(result);
}
surprise(add);

function divide(num1,num2){
  return num1/num2;
}
surprise(divide);

//false: 0, -0, '',null,NaN, undefined 데이터가 없거나 비어있는건 false처리임
//true: -1, '값' 값(데이터)이 들어있으면 그냥 true
let swer; //undefined
if(false){
 console.log('true');
}else{
  console.log('false');
}
swer && console.log(swer);

class Counter{
  constructor(runEveryFiveTimes){
    this.counter=0;
    this.callBack =runEveryFiveTimes;
  }
  increase(runIf5Times){
    this.counter++;
    console.log(this.counter);
    if(this.counter%5===0){
     this.callBack && this.callBack(this.counter);
    }
  }
}

const coolCounter = new Counter();
function printSomething(num){
  console.log(`you! ${num}`);
}
function alertNum(num){
  console.log(`wow! ${num}`);
}
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

const printCounter= new Counter(printSomething);
const alertCounter = new Counter(alertNum);