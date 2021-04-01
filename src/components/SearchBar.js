import React from 'react';

class SearchBar extends React.Component {
    // sets state value to a string
    state = { term: '' };

    // function that console logs the search value
    onFormSubmit = (event) => {
        // preventDetault keeps page from refreshing itself
        event.preventDefault();
        // invoke the onFormSubmit function
        this.props.onSubmit(this.state.term);
    }

    // rendering the search bar
    render() {
        return (
        <div className="ui segment">
    {/* calls the function to console log the value when user submits */}
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                <label>Image Search</label>
                    <input 
                // props
                    type="text" 
                    value={this.state.term} 
                // calls function to update set state and rerender when a change is made in the form
                    onChange={e => this.setState({ term: e.target.value })}
                     />
                </div>  
            </form>  
        </div>
        );
    }
};

export default SearchBar;