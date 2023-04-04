function solution(s) {
    let cnt = 0;
    if(s.length!=4&&s.length!=6) return false;
    let arr = s.split('')
    for(const element of arr){
        if(0<=element&&element<=9) cnt++;
    }
    if(cnt==s.length) return true;
    else return false;
}