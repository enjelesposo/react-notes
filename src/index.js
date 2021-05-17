import React from 'react';
import ReactDOM from 'react-dom';

// import CSS
import './index.css';

// component must start with a capital letter
// always return JSX
function BookList (){
    return <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
    </section>
};

const Book = () => {
    return <article className="book">
        <Image />
        <Title />
        <Author />
    </article>;
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81QRyjf28tS._AC_UL200_SR200,200_.jpg" alt="" />

const Title = () => <h1>Oh, the Places You'll Go!</h1>;

const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Dr. Seuss</h4>;

ReactDOM.render(<BookList />, document.getElementById('root')); 
