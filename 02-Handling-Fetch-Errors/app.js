async function fetchDataWithErrorHandling() {
    const url = 'https://swapi.dev/api/people/1';

    try {
        const response = await fetch(url);
        
        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch data and handle errors
fetchDataWithErrorHandling();
