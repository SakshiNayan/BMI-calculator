window.onload=()=>{
    let buttonCal= document.querySelector('#calculate')
    buttonCal.addEventListener('click',CalculateBMI)

};
function CalculateBMI(){
    let age = parseInt(document.querySelector('#age').value)
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result")
    var male = document.getElementById("male");
    var female = document.getElementById("female");

    if(age >120 && age < 2){
        result.innerHTML='Please provide age between 2-120'
    }
    else if(height ==="" || isNaN(height)){
        result.innerHTML='provide valid height!'
    }
    else if(weight ==="" || isNaN(weight)){
        result.innerHTML='provide valid weight!'
    }
    else if(age === "" || (male.checked == false && female.checked == false)){
        alert("All fields are required!");
    }
    else{
        let bmi =(weight / ((height* height)/1000)).toFixed(2);
        if(bmi < 16){
            result.innerHTML= `BMI : ${bmi}  (Severe Thinness) `;
        }
        else if(bmi > 16 && bmi<=17) result.innerHTML= `BMI : ${bmi}  (Moderate Thinness) `;
        else if(bmi > 17 && bmi <= 18.5) result.innerHTML= `BMI : ${bmi}  (Mild Thinness) `;
        else if(bmi > 18.5 && bmi <= 25) result.innerHTML= `BMI : ${bmi}  (Normal) `;
        else if(bmi > 25 && bmi <= 30) result.innerHTML= `BMI : ${bmi}  (Overweight) `;
        else if(bmi > 30 && bmi <= 35) result.innerHTML= `BMI : ${bmi}  (Obese Class I) `;
        else if(bmi > 35 && bmi <= 40) result.innerHTML= `BMI : ${bmi}  (Obese Class II) `;
        else result.innerHTML= `BMI : ${bmi}  (Obese Class III) `;

    }
    
}
