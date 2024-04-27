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
var guest = ["Anusha", "Sana", "Raniya",];
for (var _i = 0, guest_1 = guest; _i < guest_1.length; _i++) {
    var guestLists = guest_1[_i];
    console.log("Hello ".concat(guestLists, ", would you like to join me for dinner?"));
}
;
// absent guest
var absent_guest = "Sana";
console.log("".concat(absent_guest, " can't make it to dinner."));
// Replace the guest
var new_guest_list = "Aliza";
guest[guest.indexOf(absent_guest)] = new_guest_list;
// New guest list
guest.forEach(function (guests) {
    console.log("Hello ".concat(guests, ", would you like to join me for dinner?"));
});
