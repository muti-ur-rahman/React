import React, { useCallback, useState } from 'react'

export default function PGen() {
    const [length, setLength] = useState (8)
    const [numberAllowed, setNumberAllowed] = useState (false)
    const [charAllowed, setCharacterAllowed] = useState (false)
    const [Password, setPassword] = useState ("")

    const PasswordGenerator = useCallback( () => {
        let pass = ""   
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (numberAllowed) str += "@#$%&*^~_+[]{}\|<>"
    })

  return (
    <>
    
    <div className='flex flex-col bg-inherit'>
    <div className='text-lg bg-slate-600' 
    > GENERATING PASSWORD  
    
    </div>
    </div>
    </>
  )
}
