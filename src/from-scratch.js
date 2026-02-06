const resolvedWrapper = (value) => {
  return Promise.resolve(value);
};

const rejectedWrapper = (errorMessage) => {
  let error = new Error(errorMessage);
  const myPromise = new Promise((resolve, reject) => {
    reject(error);
  });
  return myPromise;
  // return Promise.reject(errorMessage);
};

const handleResolvedPromise = (promise) => {
  return promise.then((message) => {
    console.log(message);
    return message.toUpperCase();
  });
};

const handleResolvedOrRejectedPromise = (promise) => {};

const pauseForMs = (ms) => {};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
