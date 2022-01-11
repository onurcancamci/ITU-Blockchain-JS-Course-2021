async function myFetch(url, data = {}) {
  return fetch(`http://localhost:3000${url}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      ["Content-Type"]: "application/json",
    },
  }).then((res) => res.json());
}

async function fetchHello(ms = 0) {
  return myFetch("/hello", { ms: ms });
}

async function fetchHelloAndLog(ms = 0) {
  const result = await fetchHello(ms);
  console.log(result);
  return result;
}

async function main() {
  const requests = [];
  for (let i = 0; i < 10; i++) {
    requests.push(fetchHelloAndLog(3000));
  }
  console.log(requests);

  console.log("Waiting requests");
  await Promise.all(requests);
  console.log("All completed");
}

main();
