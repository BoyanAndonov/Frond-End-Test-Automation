async function fetchParallel() {
  const urls = [
      'https://swapi.dev/api/people/1',
      'https://swapi.dev/api/people/2'
  ];

  try {
      // Create an array of fetch promises
      const fetchPromises = urls.map(url => fetch(url));

      // Wait for all fetch requests to complete
      const responses = await Promise.all(fetchPromises);

      // Check each response for errors and parse the JSON
      const dataPromises = responses.map(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      });

      // Wait for all JSON parsing to complete
      const data = await Promise.all(dataPromises);

      // Log the results
      console.log(data[0]);
      console.log(data[1]);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Call the function to fetch data in parallel and handle errors
fetchParallel();
