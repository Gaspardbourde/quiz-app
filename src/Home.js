import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
    return (
        <>
        <Header />
        <main>
        <section className="home-section">
            <h2><b>So you think you know ReactJS?</b> Take the 10 quizzes below to test your knowledge.</h2>
            <div className="two-cols">
            <div>
            <p><b>1</b> - &nbsp;javascript short-circuiting: <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>2</b> - &nbsp;Array and object destructing: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>3</b> - &nbsp;Arrow Functions: <Link to="/quiz-questions/3">Start</Link> </p>
            <p><b>4</b> - &nbsp;Componet and props: <Link to="/quiz-questions/4">Start</Link> </p>
            <p><b>5</b> - &nbsp;UI rendering: <Link to="/quiz-questions/5">Start</Link> </p>
            </div>
            <div>
            <p><b>6</b> - &nbsp;State and Hook: <Link to="/quiz-questions/6">Start</Link> </p>
            <p><b>7</b> - &nbsp;Use state hook: <Link to="/quiz-questions/7">Start</Link> </p>
            <p><b>8</b> - &nbsp;Use effect hook: <Link to="/quiz-questions/8">Start</Link> </p>
            <p><b>9</b> - &nbsp;Single page application: <Link to="/quiz-questions/9">Start</Link> </p>
            <p><b>10</b> - &nbsp;Deploying apps to github pages: <Link to="/quiz-questions/10">Start</Link> </p>
            </div>
            </div>

        </section>
        </main>
        <Footer />
        </>
    );
}   

export default App;