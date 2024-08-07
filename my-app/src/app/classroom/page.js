"use client"

import Button from "@/components/Button";
import Header from "@/components/Header"

export default function Home() {
    
    function hist(){
        return location.href
    }

    //Siempre un componente tiene que devolver una etiqueta html
    return(
        <>
            <Header></Header>   
            <Button clase={"./historia/page.js"} text="Historia"/> 
        </>
    )
}