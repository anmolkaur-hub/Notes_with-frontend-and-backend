import { useState } from 'react'
import axios from "axios"



import './index.css'
function App() {
 
const [notes, setnotes] = useState([
  {
    title:"test title",
    description:"test description"

  },
  {
    title:"test title",
    description:"test description"

  },
  {
    title:"test title",
    description:"test description"

  },
  {
    title:"test title",
    description:"test description"

  }
])

axios.get('http://localhost:300/api/notes')
.then((res)=>{
  console.log(res.data)
})


  return (
   <>
     <div className="notes">
      {     
     notes.map(note => {
      return <div className="note">

        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </div>
     })
    }




      </div>
     




    </>
  )
}

export default App
