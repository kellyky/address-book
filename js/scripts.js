function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.protoype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
