import { async } from "@firebase/util";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../main";



export const isDocumentExist = async (email)=>{
  const q = query(collection(db, "users"), where("email", "==", email));
  const result = await getDocs(q); 
  console.log("result",result.docs[0].data());
  return !result.empty;
}

export const fetchUserDetails = async (email)=>{

}