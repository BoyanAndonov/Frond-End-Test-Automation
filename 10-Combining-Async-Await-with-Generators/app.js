function asyncGenerator(generatorFunc) {
    return async function() {
        const generator = generatorFunc();
        let result = generator.next();

        while (!result.done) {
            try {
                await result.value;
                console.log("Task completed");
            } catch (error) {
                console.error("Task failed:", error);
            }
            result = generator.next();
        }
    };
}

async function startAsyncGenerator() {
    const generatorFunc = function* () {
        yield new Promise(resolve => setTimeout(resolve, 1000));
        yield new Promise(resolve => setTimeout(resolve, 2000));
        yield new Promise(resolve => setTimeout(resolve, 1500));
    };

    const asyncGen = asyncGenerator(generatorFunc);

    await asyncGen();
}


