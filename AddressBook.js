var prompt = require('prompt-sync')();

//uc1 create contact
let contact = new Array();
let contactcount = 0;
while(contactcount != 2)
{
    let fname = prompt('Enter first name : ');
    let lname = prompt('Enter last name : ');
    let addr = prompt('Enter address : ');
    let city = prompt('Enter city : ');
    let state = prompt('Enter state : ');
    let zip = prompt('Enter zip : ');
    let phone = prompt('Enter phone number : ');
    let email = prompt('Enter email : ');

    contact.push(
    {
        firstname : fname,
        lastname : lname,
        address : addr,
        cityname : city,
        statename : state,
        zipnumber : zip,
        phonenumber : phone,
        emailaddress : email,
        toString()
        {
            return '\n First name : ' + this.firstname +
            ' Last name : ' + this.lastname +
            ' Address : ' + this.address +
            ' City : ' + this.cityname +
            ' State : ' + this.statename +
            ' Zip : ' + this.zipnumber +
            ' Phone : ' + this.phonenumber +
            ' Email : ' + this.emailaddress 
        }
    });
    contactcount++;
}

console.log(contact.toString()); 