
// let city = "mombasa";

// switch(city) {
// 	case"kisumu" :
// 	    console.log("i love kenya");
// 	    break;

// 	case"mombasa" :
// 	    console.log("mombasa we go");
// 	    break;
// 	case("nakuru") :
// 	    console.log("nakuru the baze");
// 	    break;
// 	 default :
// 	     console.log("no such entry");
//    	     break;
// }


/*
if (a > b && a > c) {
	console.log("A greater than BC");
}
else if (b > a && b > c) {
	console.log("B greater than AC");
}
else if (c > a && c > b) {
	console.log("C greater BA");
}
else{
console.log("not sure");
}*/

/*let city = "nairobi"

switch(city) {
	case("nakuru") :
	    console.log("i love naks");
	    break;
	case("nairobi") :
	    console.log("the love of nairobi");
	    break;
	default :
	    console.log("meamor");
	    break;
}*/
/*let remainder = 11 % 3;
console.log(remainder)*/


// let myString = "\tfirstline\nsecondline\nThirdline";
// console.log(myString)

/*let myname = "kelvin ";
let sentence = "hello my name is " + myname + " what about your name?"
console.log(sentence);*/

/*let namelength = 0;
let name = "keashiokor";
namelength = name.length;
console.log(namelength);*/


/*let lofn = "";
let name = "kelvin";
lofn = name[0];
document.write(lofn);*/
/*
let fname = "kelvin";
fname += " mwangi";
console.log(fname);*/

/*let scores = 40;

if (scores >=75 && scores <=100) {
	console.log("FIRST CLASS");
}
else if (scores >=65 || scores <= 74) {
	console.log("SECOND CLASS UPPER");
}
else if (scores >=50 || scores <=64){
	console.log("SECOND CLASS LOWER");
}
else if (scores >=41 || scores <=49) {
	console.log("THIRD CLASS");
}
else if (scores >=30 || scores<=40) {
	console.log("PASS");
}
else{
	console.log("FAIL..............WITHDRAW")
}*/

      //WHILE LOOP

//  let count = 0;
// while (count < 10){
// document.write(count," kelvin mwangi <br>");
// count++;
// }

        //DO WHILE LOOP

// let count = 0;

// do{
// document.write(count," hello world <br>")
// count++;
// }
// while(count < 20)

      //FOR LOOP

// for(let count = 0; count < 20; count++){
// 	if (count % 2 == 0) {
// 		document.write("even <br>");
// 	}
// 	else if (count % 3 == 0) {
// 		document.write("odd <br>");
// 	}
// 	else{
// 		document.write(count,"<br>");
// 	}
// }
     //ELSE IF STATEMENT


// let num = 15;

// if (num >= 75 && num <= 100) {
// 	console.log("first class");
// }
// else if (num >=20 && num <= 74 ) {
// 	console.log("second class");
// }
// else{
// 	console.log("fail.........withdraw");
// }

      //FUNCTION

//function kenMwass() {
	//console.log("hello mwangi");
//}

// ASSESSMENT

// for (let num = 1; num < 100; num++) {
// 	if (num % 3 == 0 && num % 5 == 0) {
// 		document.write(num,"  FIZZBUZZ <br>");
// 	}
// 	else if (num % 3 == 0) {
// 		document.write(num,"  FIZZ <br>");
// 	}
// 	else if (num % 5 == 0) {
// 		document.write(num,"  BUZZ <br>");
// 	}
// 	else{
// 		document.write(num,"  num <br>");
// 	}
// }
// function calcArea(width, height ){
 
//  let area = width * height;

//  console.log(area);
// }
// calcArea(100,6);

// function kevoo(){
// 	console.log("hello kelvin");
// }


// function calc(){
// 	let w = document.getElementById("width").value;
// 	let l = document.getElementById("legth").value;

// 	let area = w + l;

// 	document.getElementById("answer").value = area;
// }



// function calck(){
// 	let a = document.getElementById("a").value;
// 	let b = document.getElementById("b").value;
// 	let c = document.getElementById("c").value;


//       let s = a * b * c/2;
// 	let area = Math.sqrt(s * (s-a) * (s-b) * (s-c));

// 	document.getElementById("answer").value = area;
// }




// function marks(){
// 	let e = document.getElementById("english").value;
// 	let k = document.getElementById("kiswahili").value;
// 	let c = document.getElementById("chemestry").value;
// 	let m = document.getElementById("maths").value;
// 	let g = document.getElementById("geography").value;
// 	let h = document.getElementById("history").value;
// 	let p = document.getElementById("physics").value;
// 	let b = document.getElementById("biology").value;
// 	let cr = document.getElementById("cre").value;

// 	let area = e + k + c + m + g + h + p + b + cr;

// 	document.getElementById("results").value = area
// }
	

// let person = new Array();
// person.name = "kelvin";
// person.age = 30;
// document.write(person.age,person.name);


// let fruitsNames = ["Banana","apple","plums","kiwi"];
// document.write(fruitsNames[0]);


// let carNames = ["lexus","xtrail","probox","prado","tesla"];
// let car1,othercars;
// [,,...othercars] = carNames;
// document.write(othercars);


// let myName = prompt("hello kelvin?");
// alert(myName.length);


// let myName = "kelvin";
// let kevoo = myName.slice(0,3);
// console.log(kevoo);

// let meName = "KELVIN";
// let name = meName.toLowerCase();
// console.log(name);


// let name = prompt("Enter your name");
// let name1 = name.slice(0,1).toUpperCase() + name.slice(1,20).toLowerCase();
// alert("Hello!" + name1);


        //arrow function


// let name = () => {
// 	document.write("hello kelvin");

// }

// name();

 
 //assingments

//  let yearsToLive = prompt("Enter your age");

//  function noOfDays() {
//    let noOfDays1 = 365 * 90;
//    let noOfDays2 = yearsToLive * 365;
//    let daysLeft = noOfDays1 - noOfDays2;
//    return daysLeft;
//  }
 
//  function noOfWeeks() {
//  	let noOfWeeks1 = 52 * 90;
//  	let noOfWeeks2 = yearsToLive * 52;
//  	let weeksLeft = noOfWeeks1 - noOfWeeks2;
//  	return weeksLeft;
//  }	

//  function noOfMonths() {
//  	let noOfMonths1 = 12 * 90;
//  	let noOfMonths2 = yearsToLive * 12;
//  	let monthsLeft = noOfMonths1 - noOfMonths2;
//  	return monthsLeft;
 		
//  }
// alert("You have " + noOfDays() + "days, " + noOfWeeks() + "weeks and " + noOfMonths() + " months left to live");


//assingments bmi calculator


// function bmiCalculator(weight, height) {
// 	let bmiWeight = weight;
// 	let bmiHeight = (height * height);

// 	let bmical = bmiWeight/bmiHeight;
// 	console.log(bmical);
// }
// bmiCalculator(90,1.7);


      //love calculator

//  let name2 = prompt("Enter your name")
//  let name3 = prompt("Enter her name")
//  let math = Math.random() * 100;
//  let math0 = Math.floor(math);

//  if (math0 < 40) {
//  	alert("The compatibility of " + name2 + " and " + name3 + " is " + math0 + 
//  		"% - put more effort");
//  }
//  else if (math0 >= 40 && math0 <= 60) {
//  	alert("The compatibility of " + name2 + " and " + name3 + " is " + math0 + 
//  		"% - you love score is fair");
//  }
//  else if (math0 >= 61 && math0 <=80) {
//  	alert("The compatibility of " + name2 + " and " + name3 + " is " + math0 + 
//  		"% - your LOVE score IS better");
//  }
// else{
//  	alert("The compatibility of " + name2 + " and " + name3 + " is " + math0 + 
//  		"% - perfect match");
//  };



           //getting a leap year

 

 // function isleap(year) {
 //        if (year % 4 === 0) {
 //          if (year % 100) {
 //            if (year % 400) {
 //             return"leap year";
 //            }
 //            else{
 //            	return"Not leap";
 //            }
 //          }
 //          else{
 //          	return"Not leap";
 //          }
 //        }
 //        else{
 //        	return"Not leap";
 //        }
 //      }  
 //      alert(isleap(2000));  

  

    // Array assigment guestlist

      let name = prompt("What is your name?");
     // let guestName = ["kelvin","Ann","deprof","rose"];

     // if (guestName.includes(name)) {
     // alert("welcome,to our guesthouse its our pleasure having you");
     // }

     // else{
     // 	alert("You are not a registered member please register");
     // }


//    kevoo =( length, width)=> {
//       let area = length * width + 1;
//       alert(area);

// }
// kevoo(4, 5);


                  //assign

// function whosBuying(names) {
//  let noofPerson = names.length;
//  let selectedPerson = Math.floor(Math.random() * noofPerson);
//  let randomPerson = names[selectedPerson];
//  return randomPerson + " is buying lunch";
  
// };

// let names = ["kevo","ann","ciru","ciku","sam"];
// console.log(whosBuying(names)); 


         //bottles of beer
// for (let num=99; num>=1; num--) {
           
//       let noBotteles = "bottles";
//       let remBottles = num - 1;

//       if (num === 1 || remBottles ===1) {
//             noBotteles = "bottle"
//       }
//       if (remBottles ===0) {
//             remBottles = "NO"
//       }
       
//       console.log(num +" " + noBotteles +" of beer on the wall");
//       console.log(num +" " + noBotteles +" of beer");
//       console.log("Take one down and pass it around", " " + remBottles+ " " + noBotteles + " of beer on the wall");
//          }


          //FUNCTION EXPRESSION
// const kev = (name) =>{
//      console.log("hello there " + name.toUpperCase());
// }

// kev("kevoo");

