// Question 15

// Changing Guest List: You just heard that one of your guests can’t make 
// the dinner, so you need to send out a new set of invitations. You’ll have to think
// of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end
// of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the 
// name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still 
// in your list.

// Ex : 14
let guest: string[] = ["Anusha","Sana","Raniya",]

for(let guestLists of guest){
    console.log(`Hello ${guestLists}, would you like to join me for dinner?`)
};

// absent guest
let absent_guest = "Sana";
console.log(`${absent_guest} can't make it to dinner.`);

// Replace the guest
let new_guest_list = "Aliza";
guest[guest.indexOf(absent_guest)] = new_guest_list;

// New guest list
guest.forEach(guests => {
    console.log(`Hello ${guests}, would you like to join me for dinner?`)
});