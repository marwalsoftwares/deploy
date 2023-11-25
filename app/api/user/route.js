import { headers } from 'next/headers'
 
export async function GET(request) {

  const headersList = headers()
  const referer = headersList.get('referer')
  
  //create db file*************************
  //createFile('simple.db', 'my content\n', function (err) {});

  //copy file from simple.db
  const fs = require('fs');

// File database file will be created or overwritten by default.
if (!fs.existsSync("./data")) {
fs.mkdir("./data", function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("New directory successfully created.")
  }
})
}

if (!fs.existsSync("./data/9357268288")) {
fs.mkdir("./data/9357268288", function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("New directory successfully created.")
  }
})
}


if (!fs.existsSync("./data/9357268288/data.db")) {
fs.copyFile('simple.db', './data/9357268288/data.db', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});
}
  ///Connect db***********************
  const sqlite3  = require("sqlite3").verbose();
  const db =new sqlite3.Database("./data/9357268288/data.db",sqlite3.OPEN_READWRITE,(err)=>{
         if(err) return console.log(err.message);

  });

    

   //Create Table************************
   /* let sql = `CREATE TABLE user(id INTEGER PRIMARY KEY ,first_name,last_name,username,password,email)`;
   db.run(sql);
 
   let sql2 = `ALTER TABLE user ADD COLUMN address`;
   db.run(sql2);
     */

   //const { exec } = require("child_process");
  //**dir */
  /* exec("dir", (error, stdout, stderr) => {
       if (error) {
           console.log(`error: ${error.message}`);
           return;
       }
       if (stderr) {
           console.log(`stderr: ${stderr}`);
           return;
       }
       console.log(`stdout: ${stdout}`);
   }); 
    */

return new Response('Hello, Next.js!', {
    status: 200,
    headers: { referer: referer },
  })
}