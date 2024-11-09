import { useUser } from './UserContext'
import { useNavigate } from 'react-router-dom'
// imports username

function MessagePage(){


    const {username} = useUser()
        // sets the data to a constant called username
    
    const navigate = useNavigate()

    function goHome(){
        navigate('/home')

    }

    return(
        
        <div className="insta-background">
            <div className="app-border">
            <img onClick={goHome} className='back-home' src='src/images/back-arrow.png'></img>
                <div className="top-bar-message">
                    <h1 className='username-message'>{username}</h1>
                </div>
                <h1 className='mes-text'>Messages</h1>
            </div>
        </div>    
    )
}

export default MessagePage