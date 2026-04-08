let N = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed:"));
let current = N;

for (let i = 0; i < 3; i++) {
    if (current % 2 == 0) {
        current = (current / 2) + seed;
    } 
    else {
        current = (current * 3) - seed;
    }
}

let middleDigit = Number(current.toString()[1]);
if (current >= 100 && current <= 999 && middleDigit == seed) {
    alert("YES, " + current);
} else {
    alert("NO, " + current);
}