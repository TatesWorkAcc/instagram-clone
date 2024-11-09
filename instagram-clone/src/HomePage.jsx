import InfiniteScrollFeed from "./InfiniteScrollFeed"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
function HomePage(){

    
  
    const [scrollKey, setScrollKey] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        console.log('ping')
    }, [])

    function goToMessage(){
        navigate('/messages')
    }

    return(
        <div className="insta-background">
            <div className="app-border">
                <div className="top-bar">
                    {/* <img src={profilePic}></img> */}
                    <img onClick={goToMessage} className="go-to-message" src="src/images/message-symbol.png"></img>
                </div>
                <h1 className="home-insta">Instagram</h1>
                
                {/* instant scroll will be here */}
                <InfiniteScrollFeed/>

                <div className="bottom-bar">
                    <img className="home-button"></img>
                    <img className="search-button"></img>
                    <img className="picture-button"></img>
                    <img className="reels-button"></img>
                    <img className="profile-button"></img>
                </div>
            </div>
        </div>
    )

}

export default HomePage