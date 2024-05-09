import {auth, googleProvider, db} from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  signInWithPopup, onAuthStateChanged, signOut} from 'firebase/auth';
import { getDocs, collection } from "firebase/firestore"

const ticketcollectref = collection(db, "tickets")

/* NORMAL EMAIL AND PASSWORD CODE

const [email, setemail] = useState('')
const [password, setpass] = useState('')

const echange = (event) => {  setemail(event.target.value)  }
const pchange = (event) => {  setpass(event.target.value)  }

const signup = async() => {

try {await createUserWithEmailAndPassword(auth, email, password)}
catch(error){console.error(error.message) }
}
const signin = async() => {

try { await signInWithEmailAndPassword(auth, email, password)  }
catch(error){  console.error(error.message) }

}*/

//GOOGLE SIGN IN CODE 

/*onAuthStateChanged(auth, (user) => {

  if(user) {
    console.log("Succesfully ticket printed")
    userloggedin = "true"
  }
  else{
    console.log("Not logged in")
    userloggedin = "false"
    console.log(userloggedin)
  }
})*/

export const checkifloggedin = () => {

    try{
      console.log(auth.currentUser.email)
      return 1}
    catch(err){
      console.log("Not logged in, trying to login now")
    }
 }

export const signout = async () => {
  
  try{

    console.log(auth.currentUser.email)

    try {
      
      await signOut(auth);
      console.log("Succesfully signed out")
    } catch (err) {
      console.error(err);
    }}
  catch(err){
    console.log("Already signed out")}
   
};

export const gsignin = async() => {

  try{
    await signInWithPopup(auth, googleProvider)
  }catch(err){
    console.error(err.message)
  }   
} 

//const [print_tickets, readtickets] = useState([])


/*export const getTickets = async() => {

    try{
      const data = await getDocs(ticketcollectref)
      const filteredData = data.docs.map((doc) => ({

        ...doc.data(),

      }))
      console.log(filteredData);
      //readtickets(filteredData);
    }catch(err){

      console.error(err)
      }  
}*/

export const getTickets = async (userId) => {
  try {
    const data = await getDocs(ticketcollectref);
    const docss = data.docs

    const filteredData = data.docs
      .filter((doc) => doc.data().userId === userId)
      .map((doc) => ({ ...doc.data() }));
    
      console.log(filteredData)

    return filteredData;
    // Now, filteredData contains only the objects with the specified userId
    // readtickets(filteredData);
  } catch (err) {
    console.error(err);
  }
};