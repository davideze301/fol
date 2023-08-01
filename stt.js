

let form = document.forms['form'];
form.addEventListener('click', function(event){
    event.preventDefault()
    let name = form['name'].value;
    let phone = form['phone'].value;
    let email = form['email'].value;
    let address = form['address'].value;
    let country = form['country'].value;
      let dob = form['dob'].value;
    let date = new Date(dob)
    let today = new Date()
    let age = today.getTime() - date.getTime()
    age = Math.floor(age/(1000*60*60*24*365.25)) 
   console.log(age)

 let nameErr = "";
 let phoneErr ="";
 let emailErr = "";
 let homeErr ="";
 let countryErr ="";
 let dobyErr ="";

 if( name ==""){
    nameErr ="Your name is required"
 }
 if(phone ==""){
    phoneErr ="Your phone number is required"
 }else if(phone.length != 11){
    phoneErr ="Invalid phone number "
 }
 if(email == ""){
    emailErr = "your email is required"
 }else if(email.endsWith('.com') == false){
    emailErr = "Invalid email"
 }else if(email.includes('@') == false){
    emailErr = "Invalid email"
 } 
 if (address ==""){
    homeErr ="please fill your home address"
 }
 if (country ==""){
   countryErr ="please fill your home address"
}
 if(dob ==""){
  dobyErr="select your date of birth"
 }


 if(nameErr == false && phoneErr == false && emailErr == false && countryErr==false && homeErr==false && dobErr==false){
    document.getElementById('name').innerHTML=name
    document.getElementById('phone').innerHTML=phone 
    document.getElementById('email').innerHTML=email
    document.getElementById('address').innerHTML=address
    document.getElementById('dob').innerHTML= age
    document.getElementById('country').innerHTML=country

 }else{
       document.getElementById('nameErr').innerHTML=nameErr;
       document.getElementById('phoneErr').innerHTML=phoneErr
       document.getElementById('emailErr').innerHTML=emailErr
       document.getElementById('homeErr').innerHTML=homeErr
       document.getElementById('dobErr').innerHTML=dobyErr
   document.getElementById('countryErr').innerHTML=countryErr
 }

})
// let form = document.getElementById('registration');

// function getData(event){
//     event.preventDefault()
   
// }