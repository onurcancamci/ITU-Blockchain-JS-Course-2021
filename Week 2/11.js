async function myFetch(url, data = {}) {
  return fetch(`http://localhost:3000${url}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      ["Content-Type"]: "application/json",
    },
  }).then((res) => res.json());
}

const fetchResultPromise = myFetch("/hello", { ms: 10000 });

fetchResultPromise
  .then((data) => {
    console.log("Received Data", data);
  })
  .then(() => {
    console.log("Finished");
  });
