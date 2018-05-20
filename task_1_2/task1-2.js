function ComputeBMI( height, weight){
	return BMI= (703 * weight / (height * height));
}
function calculate(height, weight){
	var height=document.getElementById("height").value;
	var weight=document.getElementById("weight").value;
	var type=document.getElementById("type");
	var score=document.getElementById('score');
	var BMI=ComputeBMI(height,weight);
	score.innerHTML=BMI;


	if (BMI<18) {
		type.innerHTML="Underweight";
	}
	else if (BMI<25 & res>18) {
		type.innerHTML="Normal";
	}
	else if(BMI>25 & res<30){
		type.innerHTML="Overweight";
	}
	else if(BMI>30){
		type.innerHTML="Obese";
	}
	else {
		type.innerHTML="Undefined";
	}


}