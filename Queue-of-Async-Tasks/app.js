class AsyncQueue {
    constructor() {
        this.queue = Promise.resolve(); // Initialize with a resolved promise
    }

    async add(task) {
        this.queue = this.queue.then(async () => {
            try {
                console.log("Task started");
                await task(); // Await the completion of the task
                console.log("Task completed");
            } catch (error) {
                console.error("Task failed:", error);
            }
        });
    }
}

// Example usage:
async function startQueue() {
    const queue = new AsyncQueue();

    // Adding asynchronous tasks to the queue
    await queue.add(async () => {
        // Simulated asynchronous task
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Task 1 done");
    });

    await queue.add(async () => {
        // Simulated asynchronous task
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Task 2 done");
    });

    await queue.add(async () => {
        // Simulated asynchronous task
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Task 3 done");
    });
}


