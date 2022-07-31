import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:mx-12 my-6'>


            <div class="card bg-base-100 mb-4 shadow-xl text-justify ">
                <div class="card-body">
                    <p> <strong>Question: 1.	How will you improve the performance of a React Application?</strong> </p>
                    <p> <strong>Answer: </strong>
                        (1)	Include binding functions in constructors: When we include an arrow function in a class, we do it as an object rather than as the class' prototype property. Additionally, each object of the component will include different instances of these functions if we use the component more than once. Binding functions with the constructor is the most dependable method of using them.
                        (2)	Steer clear of inline style attributes: When styles are implied inline, the browser frequently spends a lot of time rendering. Because the browser must map all of the React style rules to the CSS properties, scripting and rendering take time. A quicker approach is to create a unique style.js file and import it into the component.
                        (3)	Use React fragments to reduce the number of additional tags while also satisfying the requirement that the component have a single parent element.
                        (4)	Avoid using inline methods in the render method. If we do, each time we render, a new instance of the object will be created by the inline function, and there will be numerous instances of it. This will make trash collection take longer. We can define functions outside the render method and call them as needed to optimize that.
                        (5)	A single file containing the entire front end code should not be used: We can shorten the time it takes to deliver bundled files to the browser transformers by dividing the files into resource and on-demand code files.
                    </p>
                </div>
            </div>

            <div class="card bg-base-100 mb-4 shadow-xl text-justify">
                <div class="card-body">
                    <p> <strong>Question: 2.	What are the different ways to manage a state in a React application?</strong> </p>
                    <p> <strong>Answer: </strong> useState, useState, useReducer, useSWR, useParams, useRouter, useHistory & useLocation are the different ways to manage states.

                        useState: useState is regarded as the pioneering tool for managing component state. Any legitimate data value, including primitive and object values, can be accepted. Additional components can receive its setter method as a callback function.

                        useReducer: Another choice that can be utilized for either a local or a global state is useReducer. Under the hood, it is quite similar to useState, except that it accepts a reducer rather than just an initial state. useReducer is more dynamic overall than useState because it comes with a built-in ability to use the reducer function to carry out a variety of various state operations.

                        useSWR: Here is an example of how to retrieve a user's profile from a client API using useSWR. The endpoint from which to request data is supplied to our fetcher function when we execute useSWR, which then returns both the requested data and an error condition. SWR makes our components look more nicer and manage unsuccessful requests much easier. You can give useSWR global parameters, such as your fetcher function (so you don't have to pass it in each time) and a set of times to refetch data after an error.

                        useHistory & useLocation: If you're using React Router, useHistory or useLocation will provide you all the details you require. The majority of the time, custom hooks provide all the necessary details about our location, history, and pathname, making it simple to maintain URL state.

                        useParams: useParams is used for any route parameters that are required, such as when retrieving data.

                        useRouter: Nearly everything in Next.js may be accessed directly by invoking useRouter.
                    </p>
                </div>
            </div>

            <div class="card bg-base-100 mb-4 shadow-xl text-justify">
                <div class="card-body">
                    <p> <strong>Question: 3.	How does prototypical inheritance work?</strong> </p>
                    <p> <strong>Answer: </strong>
                        When we read an object's properties and one of them is missing, JavaScript automatically reads the missing value from the prototype. This is referred to as prototypal inheritance in programming. There are numerous ways to set the internal, secret attribute [[Prototype]]. One of these is to utilize the unique name "proto," as in:
                        if animal = eats: true; if rabbit = jumps: true; rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal.

                        JavaScript will now take a property from the animal if it is lacking when we read a property from the rabbit. For illustration:
                        If animal = eats: true; if rabbit = jumps: true; rabbit.__proto__ = animal; // (*) // we can find both properties in rabbit now:
                        alert( rabbit.eats ); // true (**)
                        alert( rabbit.jumps ); // true.

                        Here, the line (*) designates animal as the model for the rabbit. The property rabbit.eats (**), which alert then tries to read, is not in the rabbit, so JavaScript follows the [[Prototype]] reference and discovers it in the animal. Here, we might argue that "rabbit derives from animal in a prototypical manner" or "animal is the prototype of rabbit". Therefore, if an animal has a lot of beneficial traits and skills, they are automatically present in rabbits. These qualities are referred to be "inherited." If we have an animal method, we can apply it to the rabbit:
                        If  animal = eats: true, walk() alert("Animal walk");; if rabbit = jumps: true, __proto__: animal; // walk is taken from the prototype; rabbit.walk(); // Animal walk.

                    </p>
                </div>
            </div>

            <div class="card bg-base-100 mb-4 shadow-xl text-justify">
                <div class="card-body">
                    <p> <strong>Question: 4.	Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`</strong> </p>
                    <p> <strong>Answer: </strong>
                        The state should never be updated directly for the following reasons:
                        If you update it directly, calling setState() afterwards can just overwrite your update.
                        Directly updating the state does not immediately alter this.state. Instead, it generates a pending state transition that only returns the present value when accessed after using this function.
                        All component states will be out of your control.
                    </p>
                </div>
            </div>

            <div class="card bg-base-100 mb-4 shadow-xl text-justify">
                <div class="card-body">
                    <p> <strong>Question: 5.	You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?  </strong> </p>
                    <p> <strong>Answer: </strong>
                        Using includes(): If a value is present in an array or not, includes() returns either true or false.
                        The indexOf() method delivers the initial index of a value within an array when used. The method returns -1 if there are no matches.
                        When using the find() method, the first result in an array that fits a function's criteria is returned. The method returns undef if there is no match.
                        Using the filter() method: The filter() method returns a new array containing all the values from the array that satisfy the function's criteria. If there is no match, the procedure returns an empty array.
                    </p>
                </div>
            </div>

            <div class="card bg-base-100 mb-4 shadow-xl text-justify">
                <div class="card-body">
                    <p> <strong>Question: 6.	What is a unit test? Why should write unit tests?</strong> </p>
                    <p> <strong>Answer: </strong>
                        A unit test: Individual software modules or components are tested as part of a type of software testing called unit testing. During the unit testing stage of software development, the smallest testable components of an application, known as units, are individually and independently checked for proper operation.

                        Why we should write unit tests: Unit testing reduce costs and waste. We typically test the pleasant option more thoroughly than the sad path. You would have to continuously resolving problems brought up by your potential users if you released such an app without conducting extensive testing. The time spent resolving these problems could have been better spent developing new features or improving the current system. Remember that repairing problems without first running tests may result in the introduction of fresh bugs.
                        Unit tests that are written well serve as documentation for your code. Any developer can easily understand the objective of your functions by looking at your tests.
                        The process of debugging is made easier.
                        Extreme programming is a key component that includes unit testing. In essence, extreme programming is a "test-everything-that-can-possibly-break" approach to programming.
                        Unit testing creates code.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Blogs;