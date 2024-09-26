import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  const postRequestWithFetch = async (data) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  };



  return (
    <>

      {data.map(item => (
        <div key={item.id} id={item.id} className="container mx-auto mt-10 p-6 max-w-lg shadow-lg bg-white transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl active:bg-gray-200">
          <h1 className="text-2xl font-bold mb-4 relative after:block after:w-[20%] after:h-1 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
            {item.title}
          </h1>
          <p className="text-gray-600">{item.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;
