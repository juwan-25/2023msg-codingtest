function solution(n, m) {
    let gcd = (a, b)=>{
        while(b!=0){
            let temp = a%b;
            a = b;
            b = temp;
        }
        return a;
    };
    let lcm = n*m/gcd(n,m);
  
    return [gcd(n,m), lcm];
}