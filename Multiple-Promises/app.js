function multiplePromises() {
      // Create three promises with different delays and outcomes
      const promise1 = new Promise((resolve) => {
          setTimeout(() => resolve('Promise 1 resolved after 1 second'), 1000);
      });
  
      const promise2 = new Promise((resolve) => {
          setTimeout(() => resolve('Promise 2 resolved after 2 seconds'), 2000);
      });
  
      const promise3 = new Promise((_, reject) => {
          setTimeout(() => reject('Promise 3 rejected after 3 seconds'), 3000);
      });
  
      // Use Promise.allSettled to wait for all promises to settle
      Promise.allSettled([promise1, promise2, promise3])
          .then((results) => {
              results.forEach((result, index) => {
                  if (result.status === 'fulfilled') {
                      console.log(`Promise ${index + 1}: ${result.status}, value: ${result.value}`);
                  } else {
                      console.log(`Promise ${index + 1}: ${result.status}, reason: ${result.reason}`);
                  }
              });
          });
  }
  
  // Call the function to handle the promises
  multiplePromises();
  