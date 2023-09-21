const main = () => {
  //ประกาศเพื่อให้สามารถประกาศ scriptในhtmlด้านบนได้
  const mytodolistInput = document.getElementById("mytodolist");
  const mytodolistButton = document.getElementById("addtodolist");
  const mytodolistShow = document.getElementById("listtodo");

  mytodolistButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");
    const deleteList = document.createElement("button");
    deleteList.classList.add("deletebutton");
    deleteList.textContent = "X";
    newList.textContent = mytodolistInput.value;
    newList.addEventListener("click", () => {
      newList.classList.toggle("list-decoration");
    });
    deleteList.addEventListener("click", (e) => {
      mytodolistShow.removeChild(newList);
      mytodolistShow.removeChild(deleteList);
    });
    mytodolistShow.appendChild(newList);
    mytodolistShow.appendChild(deleteList);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  //****addEventListener
  main();
});
