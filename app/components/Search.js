// Include React
import React from 'react';

// Creating the Results component
class Search extends React.Component {
    // Here we render the function
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Search</h3>
                </div>
                <div className="panel-body text-center">
                    <h1>title:</h1>
                    <p>{this.props.title}</p>
                    <h2>date:</h2>
                    <p>{this.props.date}</p>
                    <h3>url:</h3>
                    <p>{this.props.url}</p>
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Search