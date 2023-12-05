/*
1 crea una classe User per la creazione di oggeti di tipo "utente"... 
*/

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(user) {
        if (this.age > user.age) {
            return `${this.firstName} ${this.lastName} è piu vecchio di ${user.firstName} ${user.lastName}`;
        } else if (this.age < user.age) {
            return `${this.firstName} ${this.lastName} è più giovane di ${user.firstName} ${user.lastName}`;
        } else {
            return `${this.firstName} ${this.lastName} e ${user.firstName} ${user.lastName} hanno la stessa età`;
        }

    }
}

let user1 = new User('Pippo', 'Disney', 45, 'Las Vegas');
let user2 = new User('Pluto', 'Disney', 30, 'Hollywood');

// console.log(user1.compareAge(user2));
document.getElementById('user1FirstName').textContent = 'First Name: ' + user1.firstName;
document.getElementById('user1LastName').textContent = 'Last Name: ' + user1.lastName;
document.getElementById('user1Age').textContent = 'Age: ' + user1.age;
document.getElementById('user1Location').textContent = 'Location: ' + user1.location;

document.getElementById('user2FirstName').textContent = 'First Name: ' + user2.firstName;
document.getElementById('user2LastName').textContent = 'Last Name: ' + user2.lastName;
document.getElementById('user2Age').textContent = 'Age: ' + user2.age;
document.getElementById('user2Location').textContent = 'Location: ' + user2.location;

document.getElementById('comparisonResult').textContent = user1.compareAge(user2);
    

// 2 crea un form per la creazione di oggeti "Pet"..

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMContentLoaded event triggered.");
    class Pet {
        constructor(petName, ownerName, species, breed) {
            this.petName = petName;
            this.ownerName = ownerName;
            this.species = species;
            this.breed = breed;
        }

        toString() {
            return `${this.petName} - ${this.ownerName} - ${this.species} - ${this.breed}`;
        }

        static haveSameOwner(pet1, pet2) {
            return pet1.ownerName === pet2.ownerName;
        }
    }

    function addPet() {
        console.log("Adding a pet...");

        const petName = document.getElementById('petName').value;
        const ownerName = document.getElementById('ownerName').value;
        const species = document.getElementById('species').value;
        const breed = document.getElementById('breed').value;

        console.log(`Pet Details: ${petName}, ${ownerName}, ${species}, ${breed}`);

        const pet = new Pet(petName, ownerName, species, breed);
        petList.push(pet);

        
        const listItem = document.createElement('li');
        listItem.textContent = pet.toString();

        console.log("Pet added to the list:", pet.toString());

        document.getElementById('petList').appendChild(listItem);

       
        document.getElementById('petName').value = '';
        document.getElementById('ownerName').value = '';
        document.getElementById('species').value = '';
        document.getElementById('breed').value = '';
        
    }

    const petList = [];
    
    document.getElementById('addPetButton').addEventListener('click', addPet);

});



