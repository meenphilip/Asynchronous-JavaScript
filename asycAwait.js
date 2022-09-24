async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 1000);
  });

  const error = false;
  if (!error) {
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error("something went wrong"));
  }
}

myFunc()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
