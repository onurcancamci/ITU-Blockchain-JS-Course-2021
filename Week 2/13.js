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

async function fetchHelloAndLog(ms = 0, id = 0) {
  const result = await fetchHello(ms);
  console.log(result, id);
}

async function main() {
  for (let i = 0; i < 10; i++) {
    //await fetchHelloAndLog(1000, i);
  }

  for (let i = 0; i < 10; i++) {
    console.log(i, "I is added to the event loop");
    fetchHelloAndLog(2000, i);
  }
}

main();
