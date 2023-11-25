const sqlite3 = require('sqlite3').verbose();
import { NextResponse } from "next/server";
import connect from "@/utils/dbcon";


export async function GET(request) {
  try{
      
    const {mobile} = await request.json()
    const db = await connect(mobile);
    
    let sql2 = `ALTER TABLE user ADD COLUMN address3`;
    
    db.run(sql2);

    return new NextResponse("Success",{status:200});

  }catch(err){
    return new NextResponse("Database Error",{status:500});
  }
  
};

export async function POST(request){

  const {mobile,action} = await request.json()
  
  if(action==="create")
  {
  try{ 
  const db = await connect(mobile);

  let sql2 = `ALTER TABLE user ADD COLUMN address5`;
    
    db.run(sql2);

    return new NextResponse("Success",{status:200});

}catch(err){
  return new NextResponse("Database Error",{status:500});
}  
  }else{
    return new NextResponse("Action not match",{status:400});
  }

}

