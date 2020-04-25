import React, { useState } from "react"

const Form = ({addNewName}) => {
    const [teamMembers, setTeamMembers] = useState({
        name: "",
        email: "",
        role: "",
    })

    const changeHandler = event => {
        setTeamMembers({...teamMembers,
            [event.target.name]: event.target.value
        })
    }

    const submit = event => {
        event.preventDefault()
        addNewName(teamMembers)
    };

    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="namebox">Full Name:</label>
                <input id="namebox" onChange={changeHandler} type="text" name="name" value={teamMembers.name} />
                <label htmlFor="emailbox">Email Address:</label>
                <input id="emailbox" onChange={changeHandler} type="email" name="email" value={teamMembers.email} />
                <label htmlFor="rolebox">Role:</label>
                <input id="rolebox" onChange={changeHandler} type="text" name="role" value={teamMembers.role} />
                <button type="submit">Submit!</button>
            </form> 
        </div>
    )

}
export default Form;