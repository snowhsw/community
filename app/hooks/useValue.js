'use client'
import { useState } from "react"

const useValue = () =>{
    
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return [value, setValue, handleChange]

}

export default useValue