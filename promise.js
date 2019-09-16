var p = new Promise((resolve, reject) => {
    setTimeout(() => {        
       // resolve(1);
       reject(new Error('test error'));
    }, 2000);

});

p
  .then(result => console.log('result', result))
  .catch(err => console.log('error', err.message));
