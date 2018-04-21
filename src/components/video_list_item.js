import React from 'react';

// the first arguement in the props array has a video property- please grab that and call it video.
const VideoListItem = ( {video} ) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem
