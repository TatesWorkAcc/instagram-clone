import { useUser } from './UserContext'
// imports userame

function MessagePage(){


    const {username} = useUser()
        // sets the data to a constant called username
    
    function test() {
        console.log(username)
    }

    return(
        
        <div className="insta-background">
            <div className="app-border">
                <div className="top-bar-message">
                    <h1 className='username-message'>{username}</h1>
                    <button onClick={test}></button>
                </div>
            </div>
        </div>    
    )
}

export default MessagePage