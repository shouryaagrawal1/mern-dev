function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i === 0) return false;
        return true;
    }
}
const num = 50;
for(let i = 1; i <= 50; i++){
    console.log(isPrime(i));
}