
//기본배열
let arr = [10, 20, 30, 40];

//Javascript 유용한 함수

// 1) map
arr.map(()=>{       //반복 실행하면서 return 가능
    console.log('arr map');
});

arr.forEach(()=>{        //반복문 내부에 코드 실행
    console.log('arr forEach');
});

arr.map((item)=>{       //map 내부 함수 매개변수 (item) 배열 안에 값 주입   
    console.log(item);
});

arr.map((item, index)=>{       //map 내부 함수 매개변수 (item, index) 배열 안에 값 주입   
    console.log('값 : ' + item + ' index : ' + index + ' 배열[index] : ' + arr[index]);
});

let result1 = arr.map(()=>{ //[ 99, 99, 99, 99 ]
                        return 99;
                    });
console.log(result1);   

let result2 = arr.map((item)=>{ //[ undefined, undefined, undefined, undefined ]
    console.log(item);  
});
console.log(result2);  

let result3 = arr.map((item)=>{ //[ 110, 120, 130, 140 ]
    return item + 100;  //[10 20 30 40] -> [0 0 0 0]
});
console.log(result3);  

let result4 = arr.map((item)=>{ //[ '보유한값10', '보유한값20', '보유한값30', '보유한값40' ]
    return '보유한값' + item;  //[10 20 30 40] -> [0 0 0 0]
});
console.log(result4); 

let menuArr = ['우동', '라면', '김밥'];
let result5 = menuArr.map((item, index)=>{ //[ '<p>우동</p>', '<p>라면</p>', '<p>김밥</p>' ]
    return '<p>' + item + '</p>';
});
console.log(result5);

//()=>{return data}   ()=>data
let result6 = menuArr.map((item, index)=> '<p>' + item + '</p>'); //[ '<p>우동</p>', '<p>라면</p>', '<p>김밥</p>' ]
console.log(result6);


// 2) fillter
//let arr = [10, 20, 30, 40];

//필터링
let result7 = arr.filter((value)=>{ //[ 10, 30, 40 ]
    return value != 20; //조건 결과가 참인 값들만 return
});
console.log(result7);


// 3) find
let result8 = arr.find((value)=>{ //30 //찾는값이 없으면 undefined
    return value == 30;
});
console.log(result8);

// 4) findIndex
let result9 = arr.findIndex((value, index)=>{ //1 //찾는값이 없으면 -1
    return value == 20;
});
console.log(result9);


let [n1, n2, n3] = [10, 20, 30];
console.log(n1);
console.log(n2);
console.log(n3);

let obj = {
    num1 : 30,
    num2 : 50
}
console.log(obj.num2);

let {num1, num2} = obj;
console.log(num1);
console.log(num2);
