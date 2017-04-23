import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return(
                <li 
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">{book.title} </li>
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

// Anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, result should be passed to all reducers -- that's what mapdispatch is doing with dispatch. 
    // take all these actions and make sure they get passed to all reducers in the application
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}


// Promote BookList from a component to a container. It needs to know about this new dispatch method, selectBook. Make it available as a prop.

export default connect (mapStateToProps, mapDispatchToProps)(BookList)
// connect takes a function and a component and produces a container. 
