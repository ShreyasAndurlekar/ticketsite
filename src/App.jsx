import Frontpage from './frontpage'
import Topnav from './topnav'
import Tickets from './tickets'
import { useState, useEffect} from 'react'
import {getTickets, signout} from './functions'
import {auth} from './config/firebase'

let alltickets

const App = () => {

  useEffect(() => {
    console.log("This is what's causing it");
    signout();
  }, []); // Empty dependency array means the effect runs once on mount
  

    const [showApp, setShowApp] = useState(true)

    return (
        <div>
        <Topnav onTicketButtonClick={async() => {  

            try{
              
              alltickets = await getTickets(auth.currentUser.uid)
              console.log("Hi dudes",alltickets)
              setShowApp(false) 
            }
            catch(err){

              alert("Not signed in")
            }

        }} normalButtonClick={() => setShowApp(true)} />
        {showApp ? (
  <Frontpage/>
) : (
  alltickets.map((obj, index) => (
    <Tickets
      key={index} // Use a unique identifier if available in your data
      name={obj.name}
      source={obj.source}
      destination={obj.destination}
    />
  ))
)}
        </div>
       
    )
}

export default App

