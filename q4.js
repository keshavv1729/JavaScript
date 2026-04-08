const btn4 = document.getElementById("btn4")
btn4.onclick = function Q4(){
    let base = Number(prompt("Enter base fare:"));
    let distance = Number(prompt("Enter distance:"));
    let minutesLate = Number(prompt("Enter minutes late:"));
    let seed = Number(prompt("Enter seed:"));

    let fare = base + (7 * distance);
    if (minutesLate > 15) fare += 20;
    if (distance > 10) fare += (0.10 * fare);

    if (seed % 2 != 0) {
        fare -= seed;
    } else {
        fare += seed;
    }

    let finalFare = Math.ceil(fare / 5) * 5;
    alert(finalFare);
}