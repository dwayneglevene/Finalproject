   function costSplit(){
var friendAmount = document.getElementById("friends");

var billAmount = document.getElementById("total");

var totalperPerson = document.getElementById("Totalper");
  
 var tax1 = document.getElementById("tax"); 
//totalperPerson.value = billAmount.value + tip / friendAmount.value;

totalperPerson.value = billAmount.value/ friendAmount.value;

 var roundedTPP = Math.round(totalperPerson.value);
  console.log(roundedTPP)

 }
       function calc4(){
        
       var billAmount = parseInt(document.getElementById('total').value);
       var friendAmount = document.getElementById("friends").value;

       var tip1 = billAmount * 0;
    var tax1 = document.getElementById("tax");
       tax1.value = tip1;

       var a = document.getElementById("result").innerHTML = "This is your total bill with the tip included" + " " + "$" + parseInt(billAmount + tip1);

       console.log('This is the total amount after i do the cost split', billAmount);
       console.log('This is how much we need to tip after the total amount', tip1);
       console.log('This is the amount of people', friendAmount);
        
      
   } 
   function calc(){
       var billAmount = parseInt(document.getElementById('total').value);
       var friendAmount = document.getElementById("friends").value;

       var tip1 = billAmount * .10;
    var tax1 = document.getElementById("tax");
       tax1.value = tip1;

       document.getElementById("pops").style.display='block';
       var a = document.getElementById("result").innerHTML = "This is your total bill with the tip included" + " " + "$" + parseInt(billAmount + tip1);

       console.log('This is the total amount after i do the cost split', billAmount);
       console.log('This is how much we need to tip after the total amount', tip1);
       console.log('This is the amount of people', friendAmount);
        
   }
   function calc2(){
       var billAmount = parseInt(document.getElementById('total').value);
       var friendAmount = document.getElementById("friends").value;

       var tip1 = billAmount * .15;
		var tax1 = document.getElementById("tax");
       tax1.value = tip1;

       document.getElementById("pops").style.display='block';
       var a = document.getElementById("result").innerHTML = "This is your total bill with the tip included" + " " + "$" + parseInt(billAmount + tip1);

       console.log('This is the total amount after i do the cost split', billAmount);
       console.log('This is how much we need to tip after the total amount', tip1);
       console.log('This is the amount of people', friendAmount);
        
   } 
  
     function calc3(){
       var billAmount = parseInt(document.getElementById('total').value);
       var friendAmount = document.getElementById("friends").value;

       var tip1 = billAmount * .30;
    var tax1 = document.getElementById("tax");
       tax1.value = tip1;

       document.getElementById("pops").style.display='block';
       var a = document.getElementById("result").innerHTML = "This is your total bill with the tip included" + " " + "$" + parseInt(billAmount + tip1);

       console.log('This is the total amount after i do the cost split', billAmount);
       console.log('This is how much we need to tip after the total amount', tip1);
       console.log('This is the amount of people', friendAmount);
        
   }
   function amountWTax(){
   	var billAmount = parseInt(document.getElementById("total").value);
   	// console.log(billAmount + " is billAmount")
   	var friendAmount = parseInt(document.getElementById("friends").value);
   	// console.log(friendAmount + " is friendAmount")
   	var tax1 = parseInt(document.getElementById("tax").value);
   	// console.log(tax1 + " is tax1")
   	var totalperPersonTax = document.getElementById("TotalwTip");
   	totalperPersonTax = (billAmount + tax1) /friendAmount
   	console.log(totalperPersonTax);
    document.getElementById("totalwTip").value = totalperPersonTax;

   }




