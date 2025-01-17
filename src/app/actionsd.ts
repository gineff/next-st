"use server"

import { MongoClient } from "mongodb";
const mongodb_uri = <string>process.env.NEXT_PUBLIC_MONGODB_URI
//import db from "./db";
const client = new MongoClient(mongodb_uri)




export async function requestEmail() {
  "use server"
  await new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
  try{
    const user = await client.db("flibusta").collection("Users").findOne({})
    return user?.email
  }catch(e){
    console.log(e)
  return "Ivan";

  }
  /*const user = await client.db("flibusta").collection("Users").findOne({})
  if(user) return user.email*/
  /*console.log("requestEmail")
    try {
        const users = await db.collection('Users')
        const user = await users.findOne({_id: new db.ObjectId("642cebc47615c00cb35ba0f0")});
        console.log(user)
        return user!.email;
    } catch (error) {
        console.error('Failed to get users:', error);
        //throw new Error('Failed to get users.');
        return "Ivan"
    } finally {
        db.close();
    }*/
}
