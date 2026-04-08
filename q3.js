const btn3 = document.getElementById("btn3")
btn3.onclick = function Q3(){
    let N = Number(prompt("Enter N:"));
    let K = Number(prompt("Enter K:"));
    let res = -1;
    i=0
    while(res = -1 && i < 100000) {
        let num = N + i;
        let m = Number(num.toString().split('').reverse().join(''));
        
        if (num == m && num % K === 0) {
            res = i;
            break;
        }
        i++
    }
    alert(res);
}