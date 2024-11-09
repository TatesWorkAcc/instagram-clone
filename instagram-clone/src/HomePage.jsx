import InfiniteScrollFeed from "./InfiniteScrollFeed"
import { useNavigate } from 'react-router-dom'
import {useUser} from './UserContext'
function HomePage(){

    const {username} = useUser()

    const navigate = useNavigate()

    function goToMessage(){
        navigate('/messages')
    }

    return(
        <div className="insta-background">
            <div className="app-border">
                <div className="top-bar">
                    <img onClick={goToMessage} className="go-to-message" src="src/images/message-symbol.png"></img>
                </div>
                <h1 className="home-insta">Instagram</h1>
                
                {/* instant scroll will be here */}
                <InfiniteScrollFeed/>

                <div className="bottom-bar"></div>
            </div>
        </div>
    )

}

export default HomePage