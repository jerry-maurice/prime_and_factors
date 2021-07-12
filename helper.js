/*
** function that takes an array of numbers, then find and return all prime numbers in a sorted array
*/
function primes(numbers){
    let list_prime = new Array();
    for(let n of numbers){
        // check if number is prime and add it to the list_prime array
        if(checkedPrime(n)){
            list_prime.push(n);
        }
    }
    return list_prime.sort((a,b) => a -b);
}

/*
**function that checks if number is prime
*/
function checkedPrime(num){
    let verify = true;
    for(let i=2;i<=(num/2);i++){
        if(num % i ==0){
            verify = false;
        }
    }
    return verify;
}

/*
** function that takes an array of numbers and return an array of prime factors for each number
*/
function factors(numbers){
    let prime_factors = new Array();
    for(let n of numbers){
        let numberFactors = new Array();
        for(let i = 1; i<=n;i++){
            if(n%i == 0 && checkedPrime(i)){
                numberFactors.push(i);
            }
        }
        prime_factors.push(numberFactors);
    }
    return prime_factors;
}
