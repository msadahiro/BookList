import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return(
                <li key={book.title} className="list-group-item">{book.title} </li>
            );
        });
    }
    render(){
        return(
            <ul className = 'list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}

// this function is the glue between react and redux
function mapStateToProps(state){
    // taking state as an argument
    // Whatever is returned will show up as props inside of BookList
    return{
        books: state.books
    }
}

export default connect (mapStateToProps)(BookList)
// connect takes a function and a component and produces a container. 
