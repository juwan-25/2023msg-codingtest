function solution(left, right) {
    let answer = 0;
    let cnt;
    for(let i=left; i<=right; i++){
        cnt = 1;
        for(let j = 1 ; j <= i/2 ; j++) if(i % j == 0) cnt++;
        if(cnt%2==0) answer+=i;
        else answer-=i;
    }
    return answer;
}