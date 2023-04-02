function solution(s) {
    let answer = '';
    let str = s.split('').sort().reverse();
    for(let i in str){
        answer += str[i];
    }
    return answer;
}