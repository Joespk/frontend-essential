const main = () => {
  //ประกาศเพื่อให้สามารถประกาศ scriptในhtmlด้านบนได้
  const frontendInput = document.getElementById("frontend");

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
  });
};

document.addEventListener("DOMContentLoaded", () => {
  //****addEventListener
  main();
});
