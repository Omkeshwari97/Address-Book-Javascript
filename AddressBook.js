var prompt = require('prompt-sync')();

//uc1 create contact
let contact = new Array();
let contactcount = 0;

let regex1 = RegExp('^[A-Z]{1}[a-z]{2,}$');
let regex2 = RegExp('^[A-za-z]{4,}$');
let zipregex = RegExp('^[0-9]{6}$');
let phoneregex = RegExp('^[789]{1}[0-9]{9}$');
let emailregex = RegExp('^($|[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+)$');

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

    if(regex1.test(fname) && regex1.test(lname) && regex2.test(addr) && regex2.test(city) && regex2.test(state)
    && zipregex.test(zip) && phoneregex.test(phone) && emailregex.test(email))
    {
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
    }
    else
    {
        throw 'Invalid input';
    }
    contactcount++;
}

console.log(contact.toString()); 