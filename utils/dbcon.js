const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const connect = (mobile) => {
 
  const dirPath = "./data/" + mobile;

  if (!fs.existsSync(dirPath)) {
    fs.mkdir(dirPath, function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log("New directory successfully created.")
      }
    });
  }

  const dbPath = dirPath+ "/data.db";

  if (!fs.existsSync(dbPath)) {
    fs.copyFile('simple.db', dbPath, (err) => {
      if (err) throw err;
      console.log('source.txt was copied to destination.txt');
    });
    }  
    
  
  //const dbPath = "data/" + mobile + "/data.db";
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.error('Error connecting to the SQLite database:', err);
        reject(err);
      } else {
        console.log('Connected to the SQLite database.');
        resolve(db);
      }
    });
  });
};

export default connect;

