import { useState, useRef } from "react"


function LoginPage(){

    const [password, setPassword] = useState('')
    const [noPass, setNoPass] = useState('none')
    const [username, setUsername] = useState('')
    const [noUsername, setNoUsername] = useState('none')

    const usernameRef = useRef('')

    function isLoggedIn(){
        if(password === ''){
            setNoPass('block')
            return
        }
        
        if(username === ''){
            setNoUsername('block')
            return
        }
        if(username.length > 0 && password.length > 0){
            usernameRef.current = username
            console.log('logged in')
            window.location.href = '/home'
        }
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)

        setNoPass('none')
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)

        setNoUsername('none')
    }

    return(
        <div className="insta-background">
            <div className="app-border">
                <h1 className="login-text">Instagram</h1>
                <input value={username} onChange={handleUsernameChange} className="login-input" placeholder="Phone number, username, or email"></input>
                <input value={password} onChange={handlePasswordChange} className="password-input" placeholder="Password"></input>
                <button onClick={isLoggedIn} type="submit" className="login-button">Log in</button>
                <h1 className="no-username" style={{display: noUsername}}>Missing username</h1>
                <h1 className="no-pass" style={{display: noPass}}>Please enter a password</h1>
            </div>
        </div>
    )

}

export default LoginPage