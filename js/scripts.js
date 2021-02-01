// // Business Logic
// let firstName = $("#firstName").val();
// let lastName = $("#lastName").val();

// // Assembling full name
// function fullName(firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // email
// let email = $("#email").val();

// // Address components from survey input
// let addressStreet = $("#addressStreet").val();
// let city = $("#city").val();
// let state = $("#state").val();
// let zip = $("#zip").val();

// // Assembling address from address input
// function Address(addressStreet, city, state, zip){
//   this.addressStreet = addressStreet;
//   this.city = city;
//   this.state = state;
//   this.zip = zip;
// }

// let birthDate = $("#born").val();

// // Assembling contact from info provided
// function Contact(fullName, phone, email, addressStreet, city, state, zip, birthDate) {
//   this.fullName = fullName;
//   // this.phone = phone;
//   this.email = email;
//   this.address = address;
//   this.birthDate = birthDate;
// }




// User Interface Logic
$(document).ready(function() {
  $("#contacts").click(function() {
    $("#existingContacts").show();
  });
  $("#new").click(function() {
    $("#contact-form").show();
  });

});


