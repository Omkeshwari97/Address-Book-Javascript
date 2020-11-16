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
        
        if(duplicateCheck(cobj))
        {
            console.log("Details already exists!");
        }    
        else
        {
            contact.push(cobj);
        }
        contactcount++;
    }
}

createContact();
console.log(contact.toString()); 
/*
//uc4 edit contact
function editContact(fullname)
{
    contact.forEach(
        c => {
            if((c._firstname + " " + c._lastname) == fullname)
            {
                let choice = parseInt(prompt('Enter choice : 1. Edit Phone Number 2. Edit email 3. Exit'));
                switch(choice)
                {
                    case 1 : let phone = prompt('Enter phone number : ');
                             c._phonenumber = phone;
                             break;
                    
                    case 2 : let email = prompt('Enter email : ');
                             c._emailaddress = email;
                             break;
                    
                    case 3 : return;
                }
            }
    });
}

let editfullname = prompt('Enter full name to be edited : ');
editContact(editfullname);
console.log(contact.toString());

//uc5 delete contact
function deleteContact(fullname)
{
    let i = 0;
    contact.forEach(
        c => {
            if((c._firstname + " " + c._lastname) == fullname)
            {
                contact.splice(i, 1);
            }
        i++;
    });
}

let deletefullname = prompt('Enter full name to be deleted : ');
deleteContact(deletefullname);
console.log(contact.toString());

//uc6 count contact
function contactCount()
{
    console.log("Total Contacts : " + contact.length);
}
contactCount();
*/
//uc7 check duplicates
function duplicateCheck(newContact)
{
    contact.forEach(
        c => {
            if((c._firstname + " " + c._lastname) == (newContact._firstname + " " + newContact._lastname))
            {
                return true;
            }
    });
}
/*
//uc8 search by city state
function searchPersonByCity(fullname, city)
{
    return contact.filter(c => c._cityname == city)
                    .filter(c => (c._firstname + " " + c._lastname) == fullname);
}

function searchPersonByState(fullname, state)
{
    return contact.filter(c => c._statename == state)
                    .filter(c => (c._firstname + " " + c._lastname) == fullname);
}

let fullnameforcity = prompt('Enter full name : ');
let searchCity = prompt('Enter city : ');
console.log("Person in " + searchCity + " is : " + searchPersonByCity(fullnameforcity, searchCity));

let fullnameforstate = prompt('Enter full name : ');
let searchState = prompt('Enter state : ');
console.log("Person in " + searchState + " is : " + searchPersonByState(fullnameforstate, searchState));

//uc9 view contact by city state
function viewPersonsByCity(city)
{
    let list = contact.filter(c => c._cityname == city);
    return list;
}

function viewPersonsByState(state)
{
    let list = contact.filter(c => c._statename == state);
    return list;
}

let viewbycity = prompt('Enter city : ');
console.log("Persons in " + viewbycity + " are : " + viewPersonsByCity(viewbycity));

let viewbystate = prompt('Enter state : ');
console.log("Persons in " + viewbystate + " are : " + viewPersonsByState(viewbystate));

//uc10 contact count by city state
function countPersonsByCity(city)
{
    let list = contact.filter(c => c._cityname == city);
    return list.length;
}

function countPersonsByState(state)
{
    let list = contact.filter(c => c._statename == state);
    return list.length;
}

let countbycity = prompt('Enter city : ');
console.log("Total Persons in " + countbycity + " are : " + countPersonsByCity(countbycity));

let countbystate = prompt('Enter state : ');
console.log("Total Persons in " + countbystate + " are : " + countPersonsByState(countbystate));

//uc11 sort entries by name
function compareByName(a, b) 
{
    let contact1 = (a._firstname + " " + a._lastname).toLowerCase();
    let contact2 = (b._firstname + " " + b._lastname).toLowerCase(); 
 
    if (contact1 < contact2)
    {
      return -1;
    }
    
    if (contact1 > contact2)
    {
      return 1;
    }

    return 0;
  }
  
  function sortByName() 
  {
    contact.sort(compareByName);
    console.log(contact.toString());    
  }
  sortByName();
  */
  //uc12
  function compareByZip(a, b) 
  {
      if (a._zipnumber < b._zipnumber)
      {
        return -1;
      }
      
      if (a._zipnumber > b._zipnumber)
      {
        return 1;
      }
  
      return 0;
    }
    
    function sortByZip() 
    {
      contact.sort(compareByZip);
      console.log(contact.toString());    
    }
    sortByZip();
  