import InfiniteScrollFeed from "./InfiniteScrollFeed"

function HomePage(){

    return(
        <div className="insta-background">
            <div className="app-border">
                <div className="top-bar"></div>
                <h1 className="home-insta">Instagram</h1>
                {/* instant scroll will be here */}
                <InfiniteScrollFeed/>

                <div className="bottom-bar"></div>
            </div>
        </div>
    )

}

export default HomePage