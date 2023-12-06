'use strict';
console.log('Hello World!');

// 2. Variable
// let (added in ES6)
{
let name='ellie';
console.log(name);
name='hello'; //재선언됨
console.log(name);
}//중괄호를 치면 읽을 수 없게됨 블록스코프임

//3. Constants
const daysInWeek=7;
const maxNumber=5;
//특징으로
//안정성이 있음 
//쓰레드 부분에 있어서 안정적이다.
//사람의 실수를 적게 만들어줌

//4. variable types

const count=17;
const size=17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
//오잉 가르쳐 주는 대로 출력으로 띄웠는데 count랑 size의 변수 값이 안나오네요..?

const infinity= 1/0;
const negativeInfinity=-1/0;;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char='c';
const brendan='brendan';
const greeting =`hello `+brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
//자바스크립트는 자바랑 다르게 따로 문자 관련해서 선언방식이 간단하네
//변수 선언할 때는 작은따옴표가 맞는거 같은데 그 외에는 백틱 `이거 써야되네

//boolean
const canRead =true;
const test =3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing =null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x; //아니면 그냥 선언 안되어 있으면
console.log(`value: ${x}, type: ${typeof x}`);

const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1===symbol2);
//서로 다른걸로 인식을 해버림 심볼을 쓰면 즉 인자값이 같아도 다른것으로 인식되는듯?
const gsymbol1=Symbol.for('id');
const gsymbol2=Symbol.for('id');
console.log(gsymbol1===gsymbol2);
//만약 string 적으로 둘의 값이 같으면 Sybol.for로 나타내면 같은 인자값을 가진걸로 판단해줌
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
//그리고 심볼은 바로 출력이 안되므로 .description을 적어줘야 가능함

let text='hello';
console.log(text.charAt(0)); //h로 출력됨 (순서는0,1,2.. 이렇게 순서로 뜸 자바랑같네) 
console.log(`value: ${text}, type: ${typeof text}`);//string으로 뜸
text=1;
console.log(`value: ${text}, type: ${typeof text}`);//number로 뜸
//자바스크립트는 변수의 타입의 변경이 가능함(자바에서는 꿈도 못꾸는게 가능하네)
text='7'+5;
console.log(`value: ${text}, type: ${typeof text}`);//string으로 잡힌다.
//상수+문자 하면 string으로 잡힘
text='8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
//이렇게 하면 둘다 문자가 아니라 숫자로 인식해서 숫자로 처리해버림

const ellie={name: 'ellie', age: 20};//object로 잡혀서 자체를 변경은 안되지만
// 각각의 변수에 대해서는 변경이 가능함
ellie.age=21;
console.log(ellie.age);//21로 뜬다.