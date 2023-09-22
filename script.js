const main = async () => {
  //fetch api
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses");
    console.log(response);

    const rawData = await response.json();

    if (!response.ok) {
      throw new Error(`code - $(response.status)-$(rawData.message)`);
    }

    console.log(rawData);
  } catch (err) {
    console.log(err);
  }

  //ประกาศเพื่อให้สามารถประกาศ scriptในhtmlด้านบนได้
  /*const frontendInput = document.getElementById("frontend");

  const frontendButton = document.getElementById("add-front");

  const frontendMilestonesList = document.getElementById("frontend-milestone");

  frontendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");

    newList.textContent = frontendInput.value;

    frontendMilestonesList.appendChild(newList);
  });

  const backendInput = document.getElementById("backend");

  const backendButton = document.getElementById("add-back");

  const backendMilestonesList = document.getElementById("backend-milestone");

  backendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newListB = document.createElement("li");

    newListB.textContent = backendInput.value;

    backendMilestonesList.appendChild(newListB);
  });*/
};

document.addEventListener("DOMContentLoaded", () => {
  //****addEventListener
  main();
});
