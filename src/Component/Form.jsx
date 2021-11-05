import React, { useState } from 'react'

const Form = () => {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        if (email && password) {
            const newEntry = { id: new Date().getTime().toString(), email: email, password: password }

            setAllEntry([...allEntry, newEntry]);
            setEmail("");
            setPassword("");
        } else {
            alert('Please fill the form')
        }
    }


    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <input type="text" name="email" id="email" autoComplete="off"
                        value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <input type="password" name="password" id="pwd" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit">Login</button>
            </form>

            <div>
                {
                    allEntry.map((curElem) => {
                        const { id, email, password } = curElem;
                        return (
                            <div className="para" key={id}>
                                {/* <p>{curElem.email}</p>
                                <p>{curElem.password}</p> */}
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Form
