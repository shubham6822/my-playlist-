"use client"
import React, { useEffect, useState } from 'react'


export default function Page() {
  const [token,setToken] = useState()
  useEffect(()=>{
    const fetchAccessToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const response = await fetch('/api/auth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
    
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch access token');
      }
    const data = await response.json()
    console.log(data.access_token);
    setToken(data.access_token)
      return response.json(); 
    };
   const token = fetchAccessToken()
  },[])

useEffect(()=>{
  const fetchLikedSongs = async (accessToken:any) => {
    const response = await fetch('/api/liked-songs', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch liked songs');
    }
  const data = await response.json()
  console.log("data",data);
  
    return await response.json(); // Liked songs data
  };
  const data =  fetchLikedSongs(token)  
  
},[token])

  return (
    <div>page </div>  
  )
}
