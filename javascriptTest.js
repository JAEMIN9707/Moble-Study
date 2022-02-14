let start = new Date(); //측정 시작

let sum = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
    let result = a + b;
    return result; // 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 합니다.
  };
  
  console.log( sum(1, 2) ); // 3
  
  let end = new Date(); //측정 종료

  console.log( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` );