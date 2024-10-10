"use client"
import axios from 'axios'
import React,{ useState,useEffect } from 'react'

const page = ({params}) => {
    const id = params.id
    const [users, setusers] = useState([])
   const getUsers = async ()=>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
    setusers(data)
  }
  useEffect(() => {
    getUsers()
  }, [])
    return (
    <div>
        {JSON.stringify(users)}
    </div>
  )
}

export default page