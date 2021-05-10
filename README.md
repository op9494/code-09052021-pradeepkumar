# BMI CALCULATOR USING Node js

BMI-Body Mass Index Calculator:

This is an small chuck to calculate the BMI using the  data.js file contains the Jason data that can calculate the Persons risk and Catagory of Weight using BMI formula as follows

> BMI = kg/m2

If the input should be in the format of Weight(Kg) and Height(Cm).If the given height is Meter then delete line mentioned in the program.
 

## HOW TO INSTALL?

1.Install Node above 13.XX and test using the CMD below.
   Using the link below
   
  >https://nodejs.org/en/download/
   
   Check the version using the CMD
   
   >node -v

2.Then the code which u want as wanted and mentioned in the Comment
3.Run the node code using

Install the module required by running the CMD below

>npm install

Update the module by running the CMD below

>npm update   

Run the node js file by using the CMD below

>node data.js


Can Access the Application through

>http://localhost:8080/


Your output as in Javascript table as follows.:
```
Before Calculated
┌─────────┬──────────┬──────────┬──────────┐
│ (index) │  Gender  │ HeightCm │ WeightKg │
├─────────┼──────────┼──────────┼──────────┤
│    0    │  'Male'  │   171    │    96    │
│    1    │  'Male'  │   161    │    85    │
│    2    │  'Male'  │   180    │    77    │
│    3    │ 'Female' │   166    │    62    │
│    4    │ 'Female' │   150    │    70    │
│    5    │ 'Female' │   167    │    82    │
└─────────┴──────────┴──────────┴──────────┘
After Calculating BMI
┌─────────┬──────────┬──────────┬──────────┬────────────────────┬────────────────────┬─────────────────────┐
│ (index) │  Gender  │ HeightCm │ WeightKg │        BMI         │    BMICategory     │     HealthRisk      │
├─────────┼──────────┼──────────┼──────────┼────────────────────┼────────────────────┼─────────────────────┤
│    0    │  'Male'  │   171    │    96    │ 32.83061454806607  │ 'Moderately obese' │   'Enhanced risk'   │
│    1    │  'Male'  │   161    │    85    │ 32.79194475521777  │ 'Moderately obese' │   'Enhanced risk'   │
│    2    │  'Male'  │   180    │    77    │ 23.76543209876543  │  'Normal weight'   │ 'Malnutrition risk' │
│    3    │ 'Female' │   166    │    62    │ 22.49963710262738  │  'Normal weight'   │ 'Malnutrition risk' │
│    4    │ 'Female' │   150    │    70    │ 31.11111111111111  │ 'Moderately obese' │   'Enhanced risk'   │
│    5    │ 'Female' │   167    │    82    │ 29.402273297715947 │    'Overweight'    │     'Low risk'      │
└─────────┴──────────┴──────────┴──────────┴────────────────────┴────────────────────┴─────────────────────┘
```
