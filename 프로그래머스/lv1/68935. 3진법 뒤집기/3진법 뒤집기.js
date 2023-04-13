function solution(n) {
    let answer = 0;
    let arr = [];
    while(n>0){
        arr.push(n%3);
        n = Math.floor(n/3);
    }
    arr = arr.reverse();
    console.log(arr);
    for(let i = 0; i<arr.length; i++){
        answer += Math.pow(3,i)*arr[i];
    }
    return answer;
} 