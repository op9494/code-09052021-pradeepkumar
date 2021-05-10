const { Console } = require('console');
var http = require('http'); //Imort module required
var data=[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
  85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
  "WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
  "HeightCm": 167, "WeightKg": 82}];    //Input in jasaon format
  console.log("Before Calculated");  
  console.table(data);  //This shows the Input data in form of java script console table
  var len_data=data.length   //Getting the length of an jason data in an form of an array
  for(i=0;i<len_data;i++){    //for calcualation looping the array 
    heightM=data[i].HeightCm/100.0     //Conversio of Meter to Centi meter
    bmi=(data[i].WeightKg/(heightM*heightM));  //BMI formula calcultion  using the weight and height
    if(bmi<18.5)     //If statements to calculate the catagory of an person and Helth risk of an person
    {
      BMICategory= "Under Weight";
      HealthRisk = "Malnutrition risk";
    }
    else if(bmi>=18.5&&bmi<=24.9)   
    {
      BMICategory= "Normal weight";
      HealthRisk = "Malnutrition risk";
    }
    else if (bmi>=25 &&  bmi<=29.9)
    {
      BMICategory= "Overweight";
      HealthRisk = "Low risk";
    }
    else if (bmi>=30 &&  bmi<=39.9)
    {
      BMICategory= "Moderately obese";
      HealthRisk = "Enhanced risk";
    }
    else if (bmi>=40)
    {
      BMICategory= "Severely obese";
      HealthRisk = "High risk";
    }
    else
    {
      BMICategory= "Very severely obese";
      HealthRisk = "Very high risk";
    }
    data[i]["BMI"]=bmi;
    data[i]["BMICategory"]=BMICategory;
    data[i]["HealthRisk"]=HealthRisk;
  }
  console.log("After Calculating BMI");
  console.table(data);      //This shows the calculated data in form of java script console table

  const server=http.createServer(function (req, res) {    //creating node server 
  res.writeHead(200, {'Content-Type':'text/html'});              
  res.write(                                       
    'Person        BMICategory     HealthRisk \n');       //For testing the output in Website
  for(i=0;i<len_data;i++){
    res.write(
      'Person'+i+"   "+data[i].BMICategory+"   "+data[i].HealthRisk+"\n");
  }   //To get the recursive data dynamicaly in the website
  res.end()
}).listen(8080); // port which the website can be accessed in http://localhost:8080/
