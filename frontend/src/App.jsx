import React, { useEffect, useState } from "react";

const App = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/")
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
           <h1>{message}</h1> 
        </div>
    );
};

export default App;
