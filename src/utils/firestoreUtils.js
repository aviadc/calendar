import { async } from "@firebase/util";
import { collection, query, where, getDocs, getDoc,doc } from "firebase/firestore";
import { db } from "../main";



export const fetchUserDetails = async (email)=>{
  const q = query(collection(db, "users"), where("email", "==", email));
  const result = await getDocs(q); 
  console.log("result ref", result.docs[0]);
  const theId = result.docs[0].id;
  const refEx = await getDoc(doc(db, "cities", theId));
  console.log("theref",refEx);
  return result.empty? false : {data: result.docs[0].data(),ref: result.docs[0]};
}

