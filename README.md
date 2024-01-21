This project is an E-commerce bike store and is an updated version of the first one I created with vanilla JavaScript.


TECHNOLOGIES USED

This website uses react.js and CSS on the front end to display a stylish website with interactivity. It also uses redux toolkit and react-router to manage complex state and to create seamless navigation across several pages.

In the backend, this site uses node.js, express, and stripe to create a backend that is able to return JSON data from a seperate file back to the front end and to send the customers filled cart to stripe to handle payment.


BIGGEST CHALLENGE

In building this website the biggest challenge I faced was handling the complex state needed to handle the wishlist and cart variable across a handful of files.

Initially I attempted simply using react's useState and passing the variable as props to the other files. This however did not work and I next tried using useContext paired with useReducer.

This worked better than useState alone however there were still bugs appearing. Then I found redux toolkit and with a quick lesson in how to use it I had managed to create a few slices which were now able to handle the complex state with ease.


WHAT THIS TAUGHT ME

Finding ways to handle the sites complex state taught me a lot about ways to manage state in react like useState, useReducer, useContext, and finally reduc toolkit.

Learning more about these methods also taught me a lot about when to consider using each of these methods.