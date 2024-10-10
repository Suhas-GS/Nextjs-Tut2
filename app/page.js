// Two Way Binding

// "use client"
// import React, { useState } from 'react'

// const page = () => {
//   const [username, setusername] = useState("")
//   return (
//     <div>
//       <h1>Enter your name:</h1>
//       <form>
//         <input type="text" value={username}
//         onChange = {(e)=>{
//           setusername(e.target.value)
//           console.log(username); 
//         }}
//         />
//       </form>
//     </div>
//   )
// }

// export default page

//-------------------------------------------------------------------------------------------

// Routing

// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       <h1>This is Home Page</h1>
//       <a href="/Contact">Contact</a>
//     </div>
//   )
// }

// export default page

//--------------------------------------------------------------------------------

// Dynamic Routing & API Calling
// "use client"
// import axios from 'axios'
// import React,{ useState,useEffect } from 'react'

// const page = () => {
//   const [users, setusers] = useState([])
//   const getUsers = async ()=>{
//     const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
//     console.log(data)
//     setusers(data)
//   }
//   useEffect(() => {
//     getUsers()
//   }, [])

//   return (
//     <div>
//       <button onClick={getUsers}>
//         Get Data
//       </button>
//       <div>
//         <ul>
//         {users.map((e)=>{
//           return <li>{e.username} --- 
//           <a href={`/${e.id}`}>Explore</a> 
//           </li>
//         })}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default page

// ---------------------------------------------------------------------------------------------

// Passing values without context api

// "use client"
// import Header from '@/Components/Header'
// import React,{ useState } from 'react'

// const page = () => {
//     const [num, setNum] = useState(10)
//   return (
//     <div className="page-class">
//         <Header num={num}/>
//         This is Home Page
//     </div>
//   )
// }

// export default page

// --------------------------------------------------------------------------

// Context API
// "use client"
// import Header from '@/Components/Header'
// import { MyContext } from '@/Helper/Context'
// import React,{ useContext } from 'react'

// const page = () => {
//   const user = useContext(MyContext)  
//   return (
//     <div>
//         {user} -- in Home Page
//         <Header/>
//     </div>
//   )
// }

// export default page

//----------------------------------------------------------------------

// Showing Flash Message (react toastify)
// https://fkhadra.github.io/react-toastify/introduction/

// "use client"  
// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const page = () => {
//     const notify =()=>{
//         toast("Login Sucessful")
//     }
//   return (
//     <div>
//         <button onClick={notify}>
//             Login
//         </button>
//         <ToastContainer/>

//     </div>
//   )
// }

// export default page

//----------------------------------------------------------------------------------

//For deploying
import React from 'react'

const page = () => {
    return (
        <div>
            <h1>Some random stuff</h1>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Facere veniam quasi quas porro quis, iste aperiam commodi facilis,
               est ipsum enim sint vitae, odio quam nobis. 
               Iusto nisi adipisci dicta.
            </p>
        </div>
    )
}

export default page




