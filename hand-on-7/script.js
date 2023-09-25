const login = async (username, password) => {
  // * fill here...

  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/login", {
      // * fill here...
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username, //username ตัวแรกคือ Key username ตัวที่2 คือ ค่าparameter
        password: password, //password ตัวแรกคือ Key password ตัวที่2 คือ ค่าparameter
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${res.status} - ${data.message}`);
    }

    return data.accessToken;
  } catch (err) {
    alert(err);
  }
};

const main = async () => {
  //Async
  const usernameInput = document.getElementById("username");

  const passwordInput = document.getElementById("password");

  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!passwordInput.value || !usernameInput.value) {
      alert("Please input something");
      return;
    }

    // * fill here...?
    const accessToken = await login(usernameInput.value, passwordInput.value); //เอาค่าที่กรอกมาใส่**อย่าลืม.values ถ้ามีapiให้ใส่await
    alert("Sucess to login");

    localStorage.setItem("token", accessToken);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
