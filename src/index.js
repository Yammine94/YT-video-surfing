import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyA5fcV1IBXhf1Ynfl0J-Srfj0ixRWQb71M';





class App extends React.Component  {

    constructor(props){
        super(props);

        this.state= { 
            videos:[],
            selectedVideo: null
        };
        this.videoSearch('surfboards')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (data) =>{
         this.setState({videos: data,
                        selectedVideo: data[0]
                        });
        });
    }

    render(){
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));