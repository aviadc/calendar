import { async } from "@firebase/util";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../main";



export const fetchUserDetails = async (email)=>{
  const q = query(collection(db, "users"), where("email", "==", email));
  const result = await getDocs(q); 
  return result.empty? false : result.docs[0].data();
}

