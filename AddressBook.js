var prompt = require('prompt-sync')();

//uc3 addressbook array
let contact = new Array();
let contactcount = 0;

//uc2 regex
let regex1 = RegExp('^[A-Z]{1}[a-z]{2,}$');
let regex2 = RegExp('^[A-za-z]{4,}$');
let zipregex = RegExp('^[0-9]{6}$');
let phoneregex = RegExp('^[789]{1}[0-9]{9}$');
let emailregex = RegExp('^($|[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+)$');

class Contact
{
    constructor(firstname, lastname, address, cityname, statename, zipnumber, phonenumber, emailaddress)
    {
        this.firstname = firstname
        this.lastname = lastname;
        this.address = address;
        this.cityname = cityname;
        this.statename = statename;
        this.zipnumber = zipnumber;
        this.phonenumber = phonenumber;
        this.emailaddress = emailaddress;
    }

    get firstname()
    {
        return this._firstname;
    }

    set firstname(firstname)
    {
        if(regex1.test(firstname))
        {
            this._firstname = firstname
        }
        else
        {
            throw "First Name is Incorrect!";
        }
    }

    get lastname()
    {
        return this._lastname;
    }

    set lastname(lastname)
    {
        if(regex1.test(lastname))
        {
            this._lastname = lastname;
        }
        else
        {
            throw "Last Name is Incorrect!";
        }
    }

    get address()
    {
        return this._address;
    }

    set address(address)
    {
        if(regex2.test(address))
        {
            this._address = address;
        }
        else
        {
            throw "Address is Incorrect!";
        }
    }

    get cityname()
    {
        return this._cityname;
    }

    set cityname(cityname)
    {
        if(regex2.test(cityname))
        {
            this._cityname = cityname;
        }
        else
        {
            throw "City is Incorrect!";
        }
    }

    get statename()
    {
        return this._statename;
    }

    set statename(statename)
    {
        if(regex2.test(statename))
        {
            this._statename = statename;
        }
        else
        {
            throw "State is Incorrect!";
        }
    }

    get zipnumber()
    {
        return this._zipnumber;
    }

    set zipnumber(zipnumber)
    {
        if(zipregex.test(zipnumber))
        {
            this._zipnumber = zipnumber;
        }
        else
        {
            throw "Zip is Incorrect!";
        }
    }

    get phonenumber()
    {
        return this._phonenumber;
    }

    set phonenumber(phonenumber)
    {
        if(phoneregex.test(phonenumber))
        {
            this._phonenumber = phonenumber;
        }
        else
        {
            throw "Phone Number is Incorrect!";
        }    
    }

    get emailaddress()
    {
        return this._emailaddress;
    }

    set emailaddress(emailaddress)
    {
        if(emailregex.test(emailaddress))
        {
            this._emailaddress = emailaddress;
        }
        else
        {
            throw "Email is Incorrect!";
        }
    }

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
}

//uc1 create contact
function createContact()
{
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

        var cobj = new Contact(fname, lname, addr, city, state, zip, phone, email);
        contact.push(cobj);
        contactcount++;
    }
}

createContact();
console.log(contact.toString()); 