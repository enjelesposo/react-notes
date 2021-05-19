import React from 'react';
import ReactDOM from 'react-dom';

// import CSS
import './index.css';

// set up list
const books = [
    {   
        id: 1,
        img: "https://images-na.ssl-images-amazon.com/images/I/81QRyjf28tS._AC_UL200_SR200,200_.jpg",
        title: 'Oh, the Places You\'ll Go!',
        author: 'Dr. Seuss'
    },
    {
        id: 2,
        img: "https://images-na.ssl-images-amazon.com/images/I/91OmGflKYaL._AC_UL200_SR200,200_.jpg",
        title: 'Goodnight Moon',
        author: 'Margaret Wise Brown'
    },
    {
        id: 3,
        img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
        title: 'I Love You to the Moon and Back',
        author: 'Amelia Hepworth'
    },
    {
        id: 4,
        img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
        title: 'If Animals Kissed Good Night',
        author: 'Ann Whitford Paul '
    }
];
// component must start with a capital letter
// always return JSX

function BookList (){
    return <section className="booklist">

       {books.map(book => {
           return <Book key={book.id} {...book}/>
       })}

    </section>
};

const Book = ({img, title, author}) => {
    // const {title, author, img} = props;
    // onClick, onMouseOver
    const clickHandler = (e) =>{
        console.log(e);
        console.log(e.target);
        alert('Hello world!');
    };
    const complexClick = (author) => {      // needs a prop
        console.log(author);
    }

    return <article className="book" onMouseOver = {() => console.log(title)}>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick = {clickHandler}>click me!</button>
        <button type='button' onClick = {() => complexClick(author)}>complex onCLick example</button>
    </article>;
}

ReactDOM.render(<BookList />, document.getElementById('root')); 
