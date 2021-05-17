import React from 'react';
import ReactDOM from 'react-dom';

// import CSS
import './index.css';

// set up var
const firstBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/81QRyjf28tS._AC_UL200_SR200,200_.jpg",
    title: 'Oh, the Places You\'ll Go!',
    author: 'Dr. Seuss'
}
const secondBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/91OmGflKYaL._AC_UL200_SR200,200_.jpg",
    title: 'Goodnight Moon',
    author: 'Margaret Wise Brown'
};

// component must start with a capital letter
// always return JSX
function BookList (){
    return <section className="booklist">

        {/* using children prop*/}

        <Book 
            title = {firstBook.title}
            author = {firstBook.author}
            img = {firstBook.img}
        >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolores nostrum laudantium consequatur ipsa ullam voluptatibus sint blanditiis tempore!</p>
        </Book>

        <Book
            title = {secondBook.title}
            author = {secondBook.author}
            img = {secondBook.img}
        />

    </section>
};

const Book = (props) => {
    const {title, author, img, children} = props;
    return <article className="book">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        {children}
    </article>;
}

ReactDOM.render(<BookList />, document.getElementById('root')); 
