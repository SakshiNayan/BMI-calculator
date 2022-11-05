window.onload=()=>{
    let buttonCal= document.querySelector('#calculate')
    buttonCal.addEventListener('click',CalculateBMI)

}
function CalculateBMI(){
    let age = parseInt(document.getElementById('age').value)
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let result = document.getElementById("result")
    var male = document.getElementById("male");
    var female = document.getElementById("female");

    if(age ==="" || age>2 && age<120){
        result.innerHTML='Please provide age between 2-120'
    }
    else if(height ==="" || isNaN(height)){
        result.innerHTML='provide valid height!'
    }
    else if(weight ==="" || isNaN(weight)){
        result.innerHTML='provide valid weight!'
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
