import React, { useState, useEffect } from 'react';
import './card.css'
function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      {data ? (
        <div className='card-wrapper'>
          {data.map(item => (
            <div key={item.id} className="card">
              <img src={item.url} alt={item.title} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      ) : (
        <p >Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;
