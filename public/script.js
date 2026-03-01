document.getElementById("regForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("responseMsg");

  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();
    msg.innerText = data.message;
    msg.className = "mt-3 text-success fw-bold";
    document.getElementById("regForm").reset();
  } catch (error) {
    msg.innerText = "Error connecting to server!";
    msg.className = "mt-3 text-danger fw-bold";
  }
});
