// Question 21

// They think of something you could store in a TypeScript Object. Write a program 
// that creates Objects containing these items.




const user:{
             name: string; age: number; gender: string; hobbies: string[]; country: string; 
           }=

            {
            name: "Areesha",
            age: 17,
            gender: "Female",
            hobbies: ["Sports", "Music", "Makeup"],
            country: "Pakistan"
            };

console.log(user);

console.log(`The name is ${user.name}, and age ${user.age}, and is ${user.gender}, and her hobbies ${user.hobbies}, and her lived in ${user.country}`);