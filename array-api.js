//10가지 사용할만한 api 모음집들
// Q1. make a string out of an array 
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(',');
  console.log(result);//구분자 안넣어도 자동으로 ,가 들어가긴함 
}

// Q2. make an array out of a string
{
  const fruits = 'apple, kiwi, banana, cherry';
  const result = fruits.split(',');
  console.log(result); //구분자 없으면 싹다 한곳에 들어가버림
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); //거꾸로 출력해버림
  console.log(result);
  console.log(array);//기본 array도 반대로 변환시켜버림
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);//인덱스 2번부터 5번까지(마지막5번 인덱스는 배제됨)
  console.log(result);//즉 인덱스 2~4번까지 뽑힘
  console.log(array);//기본 array는 변환은 없음 대신 splice는 변환이 있음
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90 (점수가 90점 이상인 애들)
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students 등록한 학생들만
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88] 변환해준다 생각하면 됨
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result); //boolean 형태로 값을 확인하고 없으면 false로 뜨고 있으면 true

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); //모든게 만족을 해야함 every는 그래서 !을 넣은듯
}
console.clear();
// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}//reduce는 순차적으로 값이 전달되는거임 그리고 다음에 출력되는것들이 이전값들하고 합쳐짐:누적값 됨
//값이 적은것 부터 출력하는데 다음 출력에서 계속 누적되면 더해지면서 출력됨

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score) //매핑으로 새롭게 변환 점수들로 배열 리턴됨
    .filter((score) => score >= 50)
    .join();//이거 하나의 스트링으로 묶어버리는거다.
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a) //이건 내림차순
    .join();
  console.log(result);
}