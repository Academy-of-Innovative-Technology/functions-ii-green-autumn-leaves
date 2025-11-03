
// Basic Operations - Example //
// if you wish to use for the select menu //
function handleBasicOperation(type) {
    const num1;
    const num2;

    let result;
    
    switch (type) {
        case "add": result = num1 + num2; break;
       
        case "divide": result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
        
        default: result = "Invalid operation";
    }

    document.getElementById("basicResult").textContent = `Result: ${result}`;
}

// Math Formula Handlers




function Theorem(a,b) {
    const result = document.querySelector("#pythagoreanResult");
    result.textContent = `Calculate the hypotenuse ${a} + ${b} = ${Math.sqrt(a ** 2 + b ** 2)}`;

}

document.querySelector(".theoremBtn").addEventListener("click", function(){
    Theorem(a,b)
});