import React from 'react'
import "./InputUserInfo.css"


const InputUserInfo = ({userInfo,setUserInfo,setSubmitted}:InputUserInfoProps) => {

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {name,value} = e.currentTarget
        setUserInfo({...userInfo, [name]:value})
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        setSubmitted(true)
    }

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label><br />
        <input type="text" id="fname" name="fname" onInput={handleChange}/> <br />
    
        <label htmlFor="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname" onInput={handleChange}/><br />
    
        <label htmlFor="street">Street:</label><br />
        <input type="text" id="street" name="street" onInput={handleChange}/><br />
    
        <label htmlFor="city">City:</label><br />
        <input type="text" id="city" name="city" onInput={handleChange}/><br />
    
        <label htmlFor="state">State:</label><br />
        <input type="text" id="state" name="state" onInput={handleChange}/><br />
    
        <label htmlFor="zip">Zip Code:</label><br />
        <input type="text" id="zip" name="zip" onInput={handleChange}/><br />
    
        <br />
        <button type="submit">Submit</button> <br />
    </form>);
}

export default InputUserInfo