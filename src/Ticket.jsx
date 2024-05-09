import './stylesheets/global.css';
import {checkifloggedin, signout, gsignin} from './functions/user'
import {auth, db} from './functions/firebase'
import { addDoc, collection } from "firebase/firestore"
import React, { useState} from 'react';

const Ticket = () => {

  const ticketcollectref = collection(db, "tickets")

  const [source, getSource] = useState('Thane')
  const [destination, getDestination] = useState('Panvel')

  const handleSource = (event) => { getSource(event.target.value) }
  const handleDestination = (event) => { getDestination(event.target.value)}

  const SubmitTicket = async () => {
    
    if(checkifloggedin() == 1){ 
        
        try {
            await addDoc(ticketcollectref, {
        
                name: auth.currentUser.displayName,
                source: source,
                destination: destination,
                userId: auth?.currentUser?.uid,
      
            });
        } catch (err) {
            console.error(err);
            }}
    else{
        gsignin()
        }   
  };

  const [selectedSource, setSelectedSource] = useState('');

  const stations = [
    "Thane", "Airoli", "Ghansoli", "Turbhe", "Vashi", "Juinagar", "Belapur", "Panvel",
    "Ghatkopar", 
    "Kurla", "Vidyavihar", "Dadar", "Byculla", "Chinchpokli", "Currey Road", 
    "Parel", "Dadar (C.R.)", "Masjid", "Sandhurst Road", "Charni Road", 
    "Grant Road", "Mumbai Central", "Mahalaxmi", "Lower Parel", "Elphinstone Road", 
    "Dadar (Western Line)", "Prabhadevi", "Matunga Road", "Mahim", "Bandra", 
    "Khar Road", "Santacruz", "Vile Parle", "Andheri", "Jogeshwari", "Goregaon", 
    "Malad", "Kandivali", "Borivali", "CSMT"
  ];


  return(
  <div>

        <div className = "mf-container">
            <div className = "mf">
                <h1>Book Online Ticket</h1>
                <div className = "sel">

                    <div>
                        <label>Source</label>
                        <select name="s" id="s" onChange={handleSource} >
                            {stations.map((station, index) => (
                            <option key={index} value={station}>
                                {station}
                            </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Destination</label>
                    <select name = "Destination" onChange = {handleDestination} id = "d">
                        {stations.map((station, index) => (
                                <option key={index} value={station}>
                                    {station}
                                </option>
                                ))}
                        </select>
                    </div>

                </div>
                
                <div className = "extbt">
                    <div className = "options">
                        <label htmlFor = "fc">First Class</label>
                        <input type = "checkbox" id = "fc"></input>
                        <label htmlFor = "sc">Second Class</label>
                        <input type = "checkbox" id = "sc"></input>
                    </div>
                    <button onClick = {SubmitTicket}>Submit</button>
                    
                </div>
            </div>
        </div>
  </div>
  )}


export default Ticket;
