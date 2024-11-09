import { useEffect, useState } from "react"

function Post(){

    const [like, setLike] = useState('white')

    useEffect(() => {
        localStorage.setItem('item', like)
    }, [like])
    // so you can check and uncheck the like button when things are remounted

    function handleLike(){
        if(like === 'white')
            setLike('red')
        else
            setLike('white')
    }

    return(
        <div className="post-box">
            <div className="img-container">
                <h1 className="post-profile">Profile</h1>
                <button className="follow-button">Follow</button>
            </div>
            <button onClick={handleLike} style={{backgroundColor: like}} className="like"></button>
        </div>
    )
}

export default Post