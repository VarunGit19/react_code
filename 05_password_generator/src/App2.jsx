import React, { useCallback, useEffect, useState, useRef } from 'react'

const App2 = () => {

    const [length, setLength] = useState(8)
    const [charAllowed, setCharAllowed] = useState(false)
    const [numAllowed, setNumAllowed] = useState(false)
    const [password, setPassword] = useState("")

    const passRef = useRef(null)


    const generatePassword = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (charAllowed) {
            str += "~`!@#$%^&*:;><.,/-"
        }

        if (numAllowed) {
            str += "1234567890"
        }

        for (let i = 1; i <= length; i++) {
            let strIndex = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(strIndex)
        }

        setPassword(pass)
    },
    [length, numAllowed, charAllowed])

    useEffect(() => {
        generatePassword()
    }, [length, numAllowed, charAllowed, generatePassword])

    const copyPasswordToClipboard = useCallback(() => {
        passRef.current?.select()
        // passwordRef.current?.setSelectionRange(0, 3)
        window.navigator.clipboard.writeText(password)
      },
      [password])

    return (
        <>
            <div className='bg-gray-700 mx-auto my-5 max-w-md px-3 py-4 rounded-lg text-white'>
                <div className='text-orange-500 text-center px-2 py-2 mx-2 my-2'>
                    <h1>Password Generator</h1>
                </div>

                <div className="text-center mx-auto my-auto px-auto py-auto text-orange-500">
                    <input
                        type="text"
                        value={password}
                        placeholder='Password'
                        className='rounded-lg px-2 py-2'
                        readOnly
                        ref={passRef}
                    />

                    <button className='bg-blue-700 rounded-lg mx-1 px-2 text-lg text-white'
                    onClick={copyPasswordToClipboard}>Copy</button>
                </div>
                <div>
                    <div className="gap-x-1 flex items-center">
                        <input type="range"
                            min={6}
                            max={100}
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                        />
                        <label>Length: {length}</label>
                    </div>

                    <div className="gap-x-1 flex items-center">
                        <input type="checkbox"
                            defaultChecked={numAllowed}
                            onChange={() => setNumAllowed((prev) => !prev)}
                        />
                        <label>Numbers</label>
                    </div>

                    <div className="gap-x-1 flex items-center">
                        <input type="checkbox"
                            defaultChecked={charAllowed}
                            onChange={() => setCharAllowed((prev) => !prev)}
                        />
                        <label>Characters</label>
                    </div>
                </div>
            </div>
        </>

    )
}

export default App2