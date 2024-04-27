// Question 17

// Shrinking Guest List: You just found out that your new dinner table won’t 
// arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message
// saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain 
// in your list. Each time you pop a name from your list, print a message to that
// person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting 
// them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your
// list to make sure you actually have an empty list at the end of your program.

// Ex 16
let guest: string[] = ["Anusha","Sana","Raniya"]

for(let guestLists of guest){
    console.log(`Hello ${guestLists},I found a bigger dinner table!`)
};

guest.unshift("Areeba");
// console.log(guest);

guest.splice(2,1,"wajiha");
// console.log(guest);

guest.push("Huzaifa");
// console.log(guest);


guest.forEach(guest => {
    console.log(`Dear ${guest}  would you like to join me for bigger dinner Table? `)
});

// Ex 17
console.log("Unfortunately, I can only invite two people for dinner.");

while(guest.length > 2){
   let remove_guest = guest.pop();
   console.log(`Sorry ${remove_guest} I can't invite you to dinner.`)
};

guest.forEach(guests => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guest.splice(0, guest.length);
console.log(guest);