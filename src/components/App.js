import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import './App.css';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash
        .get('https://api.unsplash.com/search/photos', {
            params: { query: term },
    
        });
        // update state so the component rerenders
        this.setState({ images: response.data.results });
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;
