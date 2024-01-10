import { useState, useEffect } from "react";

export default function App(){
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch (
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setItems(data)
    }
    fetchData();
}, [] );

const largeTitles = items.filter((item) => item.title.length > 12);
const smallTitles = items.filter((item) => item.title.length < 12);
const userIdsOf1 = items.filter((item) => item.userId === 1);
const userIdsOf2 = items.filter((item) => item.userId === 2);

  return (
    <div>
      <h2>Large Titles</h2>
      <ul>
        {largeTitles.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <h2>Small Titles</h2>
      <ul>
        {smallTitles.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <h2>User Id's of 1</h2>
      <ul>
        {userIdsOf1.map((item) => (
          <li key={item.id}>{item.title}: {item.userId}</li>
        ))}
      </ul>
      <h2>User Id's of 2</h2>
      <ul>
        {userIdsOf2.map((item) => (
          <li key={item.id}>{item.title}: {item.userId}</li>
        ))}
      </ul>
    </div>
      
  );
};