export const triangular = (n) => {   
    const result = (n * (n + 1)) / 2
    
    return result
}

export const fibonacci = (n) => {
    
    if(n <= 2)return 1
    let serieFib = [0,1,1]
    for (let i = 3; i <= n; i++) {
        serieFib[i] = serieFib[i-1] + serieFib[i-2]
        
    }
    return serieFib[n]
}

export const esPrimo = (num) => {
  if (num <=1 ) return false;
  if (num <=3 ) return num;

  for (let i = 2; i < num; i++) {   
    if(num % i === 0){
        return false
    }    
  }
  return num 
}

export const primo = (n) => {
    let numPrimo = 2;
    if (n < 1)return 0
    let count = 0;
    while (count < n) {
        if(esPrimo(numPrimo)){
            count++
            numPrimo = esPrimo(numPrimo)
        }
        numPrimo++
    }
    return numPrimo-1
}

