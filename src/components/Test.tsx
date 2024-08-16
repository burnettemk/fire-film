import React, { useState, useEffect } from "react";

// Define the shape of the object we are storing
interface User {
  name: string;
  age: number;
  city: string;
}

const LocalStorageArrayComponent: React.FC = () => {
  // State to hold the array of users retrieved from localStorage
  const [storedArray, setStoredArray] = useState<User[]>([]);

  // Example object to add to localStorage array
  const exampleObject: User = {
    name: "John Doe",
    age: 30,
    city: "New York",
  };

  // Function to save object to localStorage array
  const addObjectToLocalStorage = () => {
    const updatedArray = [...storedArray, exampleObject];
    localStorage.setItem("users", JSON.stringify(updatedArray));
    setStoredArray(updatedArray); // Update the state with the new array
  };

  // Function to remove object by index from localStorage array
  const removeObjectFromLocalStorage = (index: number) => {
    const updatedArray = storedArray.filter((_, i) => i !== index); // Remove the object at the specified index
    localStorage.setItem("users", JSON.stringify(updatedArray));
    setStoredArray(updatedArray); // Update the state with the new array
  };

  // Function to continuously check for array in localStorage
  useEffect(() => {
    const interval = setInterval(() => {
      const stored = localStorage.getItem("users");
      if (stored) {
        setStoredArray(JSON.parse(stored) as User[]); // Update state with the value in localStorage
      } else {
        setStoredArray([]); // Set state to empty array if nothing is in localStorage
      }
    }, 1000); // Check every second

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div>
      <h1>Store and Display an Array of Objects in LocalStorage</h1>

      <button onClick={addObjectToLocalStorage}>
        Add Object to LocalStorage
      </button>

      <div id="displayArea">
        {storedArray.length > 0 ? (
          <div>
            <h3>Stored Objects:</h3>
            <ul>
              {storedArray.map((user, index) => (
                <li key={index}>
                  Name: {user.name}, Age: {user.age}, City: {user.city}
                  <button onClick={() => removeObjectFromLocalStorage(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No objects stored.</p>
        )}
      </div>
    </div>
  );
};

export default LocalStorageArrayComponent;
