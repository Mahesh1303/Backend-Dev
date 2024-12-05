console.log("Welcome to Backend Mahesh")



// Custom Package.json Scripts can be made to easily help out project whenever we need to start something before the execcution of the project or something like clearingup the memory etc we could use these so that it is easy to find that js file and we can run directly with the scripts

// things like connecting database before starting the backend etc needs to be done so its always required or a practice to write custom 
//Package.json scripts

// package .json is our configuration files



// Modules 

const math= require('./Math') 
// or destructure it {add,sub}=require('./Math')

console.log(math.add(1,3))
console.log(math.sub(1,3))
