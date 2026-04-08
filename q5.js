//The test case is incorrect

const btn5 = document.getElementById("btn5")
btn5.onclick = function Q5(){
    let N = Number(prompt("Enter N:"));
    let seed = Number(prompt("Enter seed:"));
    let sum = 0;
    let m = 0;
    let divisor = seed + 2;

    while (sum < N) {
        m++;
        if (m % divisor != 0) {
            sum += m;
        }
    }
    alert("m: " + m + ", sum: " + sum);
}