
// Basic Operations - Example //
// if you wish to use for the select menu //
function handleBasicOperation(type) {


    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    let result;
    
    switch (type) {

        case "add": result = num1 + num2; break;

        case "rest": result = num1 - num2; break;

        case "mult": result = num1 * num2; break;
       
        case "divide": result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;

        case "percent": result = num2 !== 0 ? num1 % num2 : "cannot divide by zero"; break;

        default: result = "Invalid operation";
    }

    document.getElementById("basicResult").textContent = `Result: ${result}`;
}



document.querySelector(".addBtn").addEventListener("click", function() {
       handleBasicOperation("add");
});

document.querySelector(".restBtn").addEventListener("click", function(){
    handleBasicOperation("rest");
});

document.querySelector(".multBtn").addEventListener("click", function(){
    handleBasicOperation("mult");
});

document.querySelector(".divideBtn").addEventListener("click", function(){
    handleBasicOperation("divide");
});

document.querySelector(".percentBtn").addEventListener("click", function(){
    handleBasicOperation("percent");
});

// Math Formula Handlers


function calculateRectangleArea(width,length) {

    const result = document.getElementById("rectResult");
    result.textContent = `The area of a rectangle, with a width of ${width} and a length of ${length} is equal to ${width * length} square`;
}

document.querySelector(".rectangleBtn").addEventListener("click", function(){

    const width = parseFloat(document.getElementById("rectWidth").value);
    const length = parseFloat(document.getElementById("rectLength").value);
    calculateRectangleArea(width,length);
});



function CircleArea(radius) {
    const result = document.getElementById("circleResult");
    const area = Math.PI * radius ** 2;
    result.textContent = `The are of a circle with a radius of ${radius} is equal to ${area.toFixed(2)}`;
}

document.querySelector(".areaBtn").addEventListener("click", function(){
    const radius = parseFloat(document.getElementById("circleRadius").value);
    CircleArea(radius);
});


function Theorem(a,b) {
    const result = document.getElementById("pythagoreanResult");
    result.textContent = `The hypotenuse of a triangle with the sides  ${a} and ${b} is  ${Math.sqrt(a ** 2 + b ** 2).toFixed(2)}`;

}

document.querySelector(".theoremBtn").addEventListener("click", function(){
    const a = parseFloat(document.getElementById("sideA").value);
    const b = parseFloat(document.getElementById("sideB").value);
    Theorem(a,b);
});



function Interest(p,r,t) {
    const result = document.getElementById("interestResult");
    const Interest = p * r * t; 
    result.textContent = `The simple interest for $ ${p} at a rate of ${r * 100} over a time of ${t} years, is $ ${Interest.toFixed(2)}.`;
}

document.querySelector(".calculateBtn").addEventListener("click", function(){
    const p = parseFloat(document.getElementById("principal").value);
    const r = parseFloat(document.getElementById("rate").value);
    const t = parseFloat(document.getElementById("time").value);
    Interest(p,r,t);
});



function Power(base,exponent){
    const result = document.getElementById("powerResult");
    const powerV = base ** exponent;
    result.textContent = `${base} raised to the power of ${exponent} is equal to = ${powerV}.`;
}

document.querySelector(".powerBtn").addEventListener("click", function(){
    const base = parseFloat(document.getElementById("base").value);
    const exponent = parseFloat(document.getElementById("exponent").value);
    Power(base, exponent);
});



function Perimeter(l,w){
    const result = document.getElementById("perimeterResult");
    const perimeterR = 2 * (l + w);
    result.textContent = ` The perimeter of a rectangle with a width of ${w} and a length of ${l} is equal to ${perimeterR}.`;
}

document.querySelector(".perimeterBtn").addEventListener("click", function(){
    const l = parseFloat(document.getElementById("periLength").value);
    const w = parseFloat(document.getElementById("periWidth").value);
    Perimeter(l, w);
});



function Circumference(radius){
    const result = document.getElementById("circumferenceResult");
    const circumference = 2 * Math.PI * radius;
    result.textContent = `The circumference of a circle with a radius of ${radius} is ${circumference.toFixed(2)}.`;
}

document.querySelector(".circleBtn").addEventListener("click", function(){
    const radius = parseFloat(document.getElementById("circRadius").value);
    Circumference(radius);
});



function TriangleA(base, height){
    const result = document.getElementById("triangleAreaResult");
    const area = 0.5 * base * height;
    result.textContent = `The area of a triangle with a base of ${base} and a heigth of ${height} is equal to ${area}`
}

document.querySelector(".calcAreaBtn").addEventListener("click", function(){
    const base = parseFloat(document.getElementById("triangleBase").value);
    const height = parseFloat(document.getElementById("triangleHeight").value);
    TriangleA(base, height);
});



function VolumeC(side){
    const result = document.getElementById("cubeVolumeResult");
    const volume = side ** 3;
    result.textContent = `The volume of a cube with a side of ${side} is ${volume}.`;
}

document.querySelector(".cubeBtn").addEventListener("click", function(){
    const side = parseFloat(document.getElementById("cubeSide").value);
    VolumeC(side);
});



function PrismVolume(l,w,h){
    const result = document.getElementById("prismVolumeResult");
    result.textContent = `The volume of a prism with a length of ${l}, a width of ${w} and a height of ${h} is equal to ${l * w * h}. `;
}

document.querySelector(".prismBtn").addEventListener("click", function(){
    const l = parseFloat(document.getElementById("prismLength").value);
    const w = parseFloat(document.getElementById("prismWidth").value);
    const h = parseFloat(document.getElementById("prismHeight").value);
    PrismVolume(l,w,h);
});



function CylinderVolume(radius, height){
    const result = document.getElementById("cylinderVolumeResult");
    const volume = Math.PI * radius ** 2 * height;
    result.textContent = `The volume of a cylinder with a radius of ${radius} and a height of ${height} is ${volume.toFixed(2)}.`;
}

document.querySelector(".cylinderBtn").addEventListener("click", function(){
    const radius = parseFloat(document.getElementById("cylRadius").value);
    const height = parseFloat(document.getElementById("cylHeight").value);
    CylinderVolume(radius, height);
});




function Speed(distance, time){
    const result = document.getElementById("speedResult");
    if (time === 0){
        result.textContent = "Time cannot be 0 !" ;
        return;
    }
    const speed = distance / time;
    result.textContent = `The speed of a distance ${distance} over a time ${time} is equal to ${speed.toFixed(2)} .`;
}

document.querySelector(".speedBtn").addEventListener("click", function(){
    const distance = parseFloat(document.getElementById("distance1").value);
    const time = parseFloat(document.getElementById("time1").value);
    Speed(distance, time);
});




function DensintyR(mass, volume){
    const result = document.getElementById("densityResult");
    if (time === 0){
        result.textContent = "Volume cannot be 0!";
        return;
    }

    const d = mass / volume;
    result.textContent = ` The density of an object with a mass of ${mass} and a volume of ${volume} is equal to = ${d.toFixed(2)}. `;
}

 document.querySelector(".densityBtn").addEventListener("click", function(){
    const mass = parseFloat(document.getElementById("mass1").value);
    const volume = parseFloat(document.getElementById("volume1").value);
    DensintyR(mass,volume);
 });


function BMI(weight, height) {
    const result = document.getElementById("bmiResult");

    if (height === 0) {
        result.textContent = "Height cannot be 0!";
        return;
    }

    const bmi = weight / (height ** 2);
    result.textContent = `The BMI for a weight of ${weight} kg and a height of ${height} m is ${bmi.toFixed(2)}.`;
}

document.querySelector(".bmiBtn").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight1").value);
    const height = parseFloat(document.getElementById("height1").value);
    BMI(weight, height);
});



function QuadraticDiscriminant(a, b, c) {
    const result = document.getElementById("discriminantResult");
    const discriminant = (b ** 2) - (4 * a * c);

    result.textContent = `For the equation with a=${a}, b=${b}, and c=${c}, the discriminant is ${discriminant.toFixed(2)}.`;
}

document.querySelector(".discriminantBtn").addEventListener("click", function() {
    const a = parseFloat(document.getElementById("a1").value);
    const b = parseFloat(document.getElementById("b1").value);
    const c = parseFloat(document.getElementById("c1").value);
    QuadraticDiscriminant(a, b, c);
});  