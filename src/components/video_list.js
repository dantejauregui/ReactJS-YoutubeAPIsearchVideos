import React from 'react';
import VideosListItem from './video_list_item'

const VideoList = (props) => {
	//con esto creara un nuevo array de 5 elementos con cda uno un TAG <videolistitem />
	const videoItems = props.videos.map((video) => {
		return <VideosListItem 	onVideoSelect={props.onVideoSelect}	key={video.etag} video={video} />
			
	});
	


	return (
		<ul className="col-md-4 list-group">

			{videoItems} 

		</ul>
	);
};

export default VideoList;