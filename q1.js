const btn1 = document.getElementById("btn")



btn1.onclick = function Q1(){
    var L = Number(prompt("Enter L"))
    var R = Number(prompt("Enter R"))
    var K = Number(prompt("Enter K"))
    var count = 0
    for(let i=L; i < (R+1); i++){
        if(i%K == 0){
            //console.log(i)
            if(isPrime(sumOfDigits(i))){
                if(containZero(i)){
                    count = count + 1
                    console.log("count = "+ count + " for " + i)
                }
            }
        }
        
    }
    alert(count)

    function sumOfDigits(a){
        let temp = a
        let sum = 0
        while(temp != 0){
            sum += temp % 10
            temp = Math.floor(temp/10)
            //console.log("digit sum = "+sum)
        }
        return sum
    }

    function containZero(a){
        let temp = a
        let check = 1
        if(a == 0){
            check = 0
            return check
        }
        while(Math.floor(temp/10) != 0){
            if(temp%10 == 0){
                check = 0
                return 0   
            }
            temp = Math.floor(temp/10)
            //console.log("zero check = "+check)
        }
        return check
    }

    function isPrime(a){
        let temp = 2
        let check = 1
        while(temp <= Math.sqrt(a)){
            if(a%temp == 0){
                console.log(a%temp)
                check = 0
                break
            }
            console.log("prime = "+check)
            temp++        
        }
        return check
    }
    
}