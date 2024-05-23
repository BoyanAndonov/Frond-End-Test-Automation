async function fetchSequential() {
      const urls = [
          'https://swapi.dev/api/people/1',
          'https://swapi.dev/api/people/2'
      ];
  
      try {
          // Fetch the first URL
          let response = await fetch(urls[0]);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          let data = await response.json();
          console.log(data);
  
          // Fetch the second URL
          response = await fetch(urls[1]);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          data = await response.json();
          console.log(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }
  
  // Call the function to fetch data sequentially and handle errors
  fetchSequential();
  