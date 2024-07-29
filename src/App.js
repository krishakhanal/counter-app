import React, { useState } from 'react'; // Import React and the useState hook
import './App.css'; // Import the CSS file

const App = () => {
  const [count, setCount] = useState(0); // Define a state variable 'count' with initial value 0, and a function 'setCount' to update it

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1> {/* Heading for the app */}
        <p>{count}</p> {/* Display the current count */}
        <div>
          <button onClick={() => setCount(count + 1)}>Increment</button> {/* Button to increment the count */}
          <button onClick={() => setCount(count - 1)}>Decrement</button> {/* Button to decrement the count */}
          <button onClick={() => setCount(0)}>Reset</button> {/* Button to reset the count to 0 */}
        </div>
      </header>
    </div>
  );
};

export default App; // Export the App component
