import React, {useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {
    const data=useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/priyanshu1520')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Followers:{data.followers}
    <img className='' src={data.avatar_url} alt="GitHub dp" />
    </div>
  )
}

export default GitHub

export const GitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/priyanshu1520')
    return response.json()
    
}