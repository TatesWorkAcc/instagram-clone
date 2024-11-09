import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './Post';

const style = {
  border: '1px solid green',
  height: '600px', // Set a fixed height to ensure scrolling
  overflowY: 'auto', // Enable vertical scrolling
};

function InfiniteScrollFeed() {
  const [dataSource, setDataSource] = useState(Array.from({ length: 50 }));
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch more data
  const fetchMoreData = () => {
    console.log('Fetching data...'); // This should log when scrolling to the bottom

    setTimeout(() => {
      setDataSource((prevData) => {
        const updatedData = prevData.concat(Array.from({ length: 20 }));

        // Check if we should stop fetching more data
        if (updatedData.length >= 1000) {
          setHasMore(false); // Set to false to stop loading more
        }

        return updatedData;
      });
    }, 500);
  };

  useEffect(() => {
    console.log('Initial data loaded');
  }, []);

  return (
    <div style={style} className="infinite-scroll" id="scroll-container">
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scroll-container" // Make sure this matches the id
      >
        {dataSource.map((_, index) => (
          <Post key={index} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default InfiniteScrollFeed;
