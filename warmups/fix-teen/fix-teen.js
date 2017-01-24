function noTeenSum(num1, num2, num3, callback) {
   return(callback(num1) + callback(num2) + callback(num3));
}

function fixteen(n) {
    if (n >= 13 && n <= 19 && n !== 15 && n !== 16) {
        n = 0;
    }
    return n;
}

noTeenSum(1, 2, 3, fixTeen) //→ 6 
noTeenSum(2, 13, 1, fixTeen) //→ 3 
noTeenSum(2, 1, 14, fixTeen) //→ 3 
noTeenSum(2, 15, 14, fixTeen) //→ 17