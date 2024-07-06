"use client"
import { useState } from "react"
import Home from "./home/page"

const Page = () => {
  const [dark, setDark] = useState<boolean>(false)

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
     <Home/>
  )
}

export default Page