const btn6 = document.getElementById("btn6")
btn6.onclick = function Q6(){
    let a = parseInt(prompt("Correct answers:"));
    let b = parseInt(prompt("Partially correct:"));
    let c = parseInt(prompt("Wrong answers:"));

    let score = (3 * a) + b - (2 * c);
    if (score < 0) score = 0;
    if (a + b + c > 50) score -= 10;

    let s = (score >= 60) ? "PASS" : "FAIL";
    alert(score + ", "+ s);
}