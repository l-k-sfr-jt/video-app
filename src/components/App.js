import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";


const App = () => {
    const [videos, search] = useVideos('cycling');
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(()=> {
        setSelectedVideo(videos[0]);
    },[videos]);

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelected={setSelectedVideo}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

// class App extends React.Component {
//
//     state = {videos: [], selectedVideo: null};
//
//     componentDidMount() {
//         this.onTermSubmit('cycling');
//     }
//
//     onTermSubmit = async (term) => {
//         const {data} = await youtube.get('/search', {
//             params: {
//                 q: term
//             }
//         });
//
//         this.setState({videos: data.items, selectedVideo: data.items[0]})
//     }
//
//     onVideoSelected = (video) => {
//         console.log(video);
//         this.setState({selectedVideo: video})
//     }
//
//     render() {
//         return (
//             <div className="ui container">
//                 <SearchBar onFormSubmit={this.onTermSubmit}/>
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo}/>
//                         </div>
//                        <div className="five wide column">
//                            <VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected}/>
//                        </div>
//
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default App;