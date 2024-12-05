const fs =require('fs')



// this is a blocing request which will require thread worker to execute these
fs.writeFileSync("./test.txt","this is my Sync ")


// this is a non blocking request this will be executed immediately
 fs.writeFile("./test.txt","This is my async",(error)=>{error})

    // async always require a call back
