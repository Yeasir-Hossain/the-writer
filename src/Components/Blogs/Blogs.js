import React from 'react';

const Blogs = () => {
    return (
        <div className='container p-2'>
            <h2>1 Difference between `authorization` and `authentication`</h2>
                <h4>Answer:Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization works through settings that are implemented and maintained by the organization.</h4>
            <h2>2 Why are you using `firebase`? What other options do you have to implement authentication?</h2>
                <h4>Answer:For authentication,hosting,cloud services and database for our app.Google,Facebook,Play games,Phone number,Game center, Apple, Github, Anonymous, Microsoft, Twitter, Yahoo</h4>
            <h2> 3 What other services does `firebase` provide other than authentication</h2>
                <h4>Answer:</h4>
                <h4>-Firebase database</h4>
                <h4>-Realtime Database</h4>
                <h4>-Storage</h4>
                <h4>-Hosting</h4>
                <h4>-Functions</h4>
        </div>
    );
};

export default Blogs;