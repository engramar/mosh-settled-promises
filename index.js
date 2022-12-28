//Already resolved promise
const p = Promise.resolve({ id: 1});
p.then(result => console.log(result));

//Already rejected promise
const p2 = Promise.reject(new Error('reason for rejection...'));
p2.catch(error => console.log(error));
