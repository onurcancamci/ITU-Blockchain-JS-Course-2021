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

async function main() {
  //----
  console.log("Started");
  const result = await fetchHello(5000);
  console.log(result);
}

main();
console.log("After Main");
