import React, {Component} from 'react';

class ShelfChanger extends Component{
    render(){
        const {shelf, handleChange} = this.props;
    return (
        <div className="book-shelf-changer">
            <select value={shelf} onChange={(event) => {handleChange(event.target.value)}}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
    }
}

export default ShelfChanger;

