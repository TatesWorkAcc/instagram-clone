
function Post(){
    return(
        <div className="post-box">
            <div className="img-container">
                <h1 className="post-profile">Profile</h1>
                <button className="follow-button">Follow</button>
            </div>
            <button className="like"></button>
            <button className="comment"></button>
            <button className="share"></button>
            <button className="bookmark"></button>
        </div>
    )
}

export default Post