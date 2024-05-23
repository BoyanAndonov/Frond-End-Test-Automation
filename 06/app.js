async function retryPromise(promiseFunc, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await promiseFunc();
      return result;
    } catch (error) {
      if (i === retries - 1) throw error;
    }
  }
}

const unstablePromise = () => new Promise((resolve, reject) => {
  Math.random() > 0.5 ? resolve('Success!') : reject(new Error('Failed!'));
});

async function startRetry() {
  try {
    const result = await retryPromise(unstablePromise);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}


