async function fetchWithTimeout(url = "https://swapi.dev/api/people/1", timeout = 2000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId); // Clear the timeout if the fetch succeeds
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetch successful:", data);
        return data;
    } catch (error) {
        console.error("Fetch failed:", error);
        throw error;
    }
}
