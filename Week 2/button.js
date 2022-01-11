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
}

document.getElementById("btn-fetch").addEventListener("click", async () => {
  await fetchHelloAndLog(10 * 1000);
});

document.getElementById("btn-block").addEventListener("click", async () => {
  console.log("Blocking start");
  let ct = 0;
  for (let i = 0; i < 5000000000; i++) {
    ct++;
  }
  console.log("Blocking end", ct);
});

document.getElementById("btn-alert").addEventListener("click", async () => {
  alert("Your thread is now blocked");
});

document.getElementById("btn-log").addEventListener("click", async () => {
  console.log("Hello World");
});
