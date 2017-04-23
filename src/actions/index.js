export function selectBook(book){
    // selectBook is an ActionCreator, it needs to reutn an action
    // an object with a type property
    // actions have two values... type and sometimes.. a payload
    // type is ALWAYS UPPERCASE
    return {
        type:'BOOK_SELECTED',
        payload:book
    };
}