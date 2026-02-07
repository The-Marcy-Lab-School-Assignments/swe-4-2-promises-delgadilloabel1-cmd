# Short Response Questions

## Question 1: Promise States

What are the three states of a Promise? For each state, explain what it represents and which Promise method (`.then()` or `.catch()`) is used to handle it.

**Your Answer:**

A Promise has three states:

- **Pending**: The asynchronous operation is still in progress and has not completed yet. No handlers run while the promise is pending.

- **Resolved**: The operation completed successfully and returned a value. This state is handled using `.then()`.

- **Rejected**: The operation failed and returned an error. This state is handled using `.catch()`.

The `.then()` method is used to run code when a promise resolves successfully and can be chained to handle subsequent results.  
The `.catch()` method is used to handle errors when a promise is rejected.

## Question 2: Callback Hell vs. Promise Chaining

Explain why deeply nested callbacks (callback hell) are problematic, and describe how Promise chaining with `.then()` solves this problem.

**Your Answer:**

Callback hell is problematic because deeply nested callbacks make code hard to read, debug, and maintain. Often called the **“Pyramid of Doom,”** it happens when each asynchronous operation depends on the result of the previous one, causing excessive nesting.

A **Promise** is an object that represents the eventual result of an asynchronous operation, either a successful value or an error. Promise chaining with `.then()` solves callback hell by allowing asynchronous logic to be written in a flat, readable sequence. Each `.then()` runs when the previous promise resolves and returns a new promise, which keeps the code predictable and easier to maintain.

## Question 3: Error Handling with `.catch()`

If you have a chain of three `.then()` calls followed by a single `.catch()`, and the second `.then()` throws an error, what happens? Why is this behavior useful?

**Your Answer:**

If you have a chain of three `.then()` calls followed by a single `.catch()`, and the second`.then()` throws an error, the promise chain stops executing any remaining `.then()` calls and immediately jumps to the `.catch()`.

The first `.then()` runs successfully, the second .then() throws an error, the remaining `.then()` is skipped, and the `.catch()` handles the error.

This behavior is useful because it **allows errors to be handled in one centralized place** instead of requiring error handling at every step. It makes promise chains s**afer to maintain and prevents failures from silently continuing through the rest of the chain.**
