import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map( video => {
    /* List items should have unique keys so react can update them efficiently*/
    return <VideoListItem key={video.etag} video={video} />;
  });
  return (
    <ul className = "col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;
