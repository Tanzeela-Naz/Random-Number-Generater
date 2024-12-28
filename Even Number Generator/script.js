
        //Even Number Generator using while loop
function generate() {
    let number = parseInt(document.getElementById('number').value); 
    let result = document.getElementById('result');
    result.innerHTML = "";

    if (isNaN(number) || number > 50) { 
        result.textContent = "Please enter a valid number less than or equal to 50!";
        result.style.color = "red";
    } else {
        let evenNumber = 2; 
        while (evenNumber <= number) {
            result.innerHTML += evenNumber + "<br>"; 
            evenNumber += 2; 
        }
        result.style.color = "green"; 
    }
}
