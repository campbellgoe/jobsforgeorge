'use client';

import { useEffect } from "react";

export default function Home(){
  useEffect(()=>{ 
    console.log("hello front end")
  }, [])
  return <h1>Some content</h1>
}