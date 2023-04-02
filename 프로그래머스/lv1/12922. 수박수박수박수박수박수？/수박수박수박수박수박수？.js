function solution(n) {
    let answer = '';
    for(let i=0; i<n; i++){
        if((i+1)%2==1) answer += '수';
        else answer += '박';
    }
    return answer;
}