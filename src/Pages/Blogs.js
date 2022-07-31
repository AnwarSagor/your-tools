import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-12 my-12'>
            <h2 className='font-extrabold mb-4 text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300'>Blogs</h2>


            <div class="card bg-base-100 mb-4 shadow-xl">
                <div class="card-body">
                    <p> <strong>Question: 1.	How will you improve the performance of a React Application?</strong> </p>
                    <p> <strong>Answer:</strong> </p>
                </div>
            </div>

            <div class="card bg-base-100 mb-4 shadow-xl">
                <div class="card-body">
                    <p> <strong>Question: 2.	What are the different ways to manage a state in a React application?</strong> </p>
                    <p> <strong>Answer:</strong> </p>
                </div>
            </div>

            <div class="card bg-base-100 mb-4 shadow-xl">
                <div class="card-body">
                    <p> <strong>Question: 3.	How does prototypical inheritance work?</strong> </p>
                    <p> <strong>Answer:</strong> </p>
                </div>
            </div>

            <div class="card bg-base-100 mb-4 shadow-xl">
                <div class="card-body">
                    <p> <strong>Question: 4.	Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`</strong> </p>
                    <p> <strong>Answer:</strong> </p>
                </div>
            </div>

            <div class="card bg-base-100 mb-4 shadow-xl">
                <div class="card-body">
                    <p> <strong>Question: 5.	You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?  </strong> </p>
                    <p> <strong>Answer:</strong> </p>
                </div>
            </div>

            <div class="card bg-base-100 mb-4 shadow-xl">
                <div class="card-body">
                    <p> <strong>Question: 6.	What is a unit test? Why should write unit tests?</strong> </p>
                    <p> <strong>Answer:</strong> </p>
                </div>
            </div>


        </div>
    );
};

export default Blogs;