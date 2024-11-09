import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Post from './Post'

function InfiniteScrollFeed(){
    const [dataSource, setDataSource] = useState(Array.from({length: 20}))
    const [hasMore, setHasMore] = useState(true)

    const fetchMoreData = () => {
        setTimeout(() => {
            setDataSource(dataSource.concat(Array.from({length:20})))
        }, 500)
    }

    return( 
        <div className='infinite-scroll'>
            <InfiniteScroll 
            dataLength={dataSource.length} 
            next={fetchMoreData} 
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            >
                {dataSource.map((item, index)=>{
                    return <Post key={index}></Post>
                    // the key makes sure each one is unique
                })}
            </InfiniteScroll>
        </div>
    )

}

export default InfiniteScrollFeed