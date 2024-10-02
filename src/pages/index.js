import Image from "next/image";
import localFont from "next/font/local";
import {useState, useEffect} from "react";
import {json} from "next/dist/client/components/react-dev-overlay/server/shared";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home(){
const {todos,setTodos}= useState([]);
const {input,setInput}= useState({})

  useEffect(() => {
    const saveTodos = json.parse(localStorage.getItem('todos') || '[]');
    setTodos(saveTodos);
  },[]);
}

