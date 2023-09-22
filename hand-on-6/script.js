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
    const coursesItem = rawData.courses;
    console.log(coursesItem[0]);

    for (let i = 0; i <= coursesItem.length; i++) {
      //loopสำหรับวนให้แสดงค่า
      const coursesShow = document.getElementById("apicourse");
      const coursesbox = document.createElement("div"); //สร้างตัวแปรใหม่ม่รับค่า
      coursesbox.innerHTML = `<h3>${coursesItem[i].courseNo} ${coursesItem[i].abbrName}</h3>
        <br>
        <h4>CourseNameEn :</h4>
        <p>${coursesItem[i].courseNameEn}</p>
        <h4>CourseNameTh :</h4>
        <p>${coursesItem[i].courseNameTh}</p>
        <h4>credit :    </h4>
        <p>${coursesItem[i].credit}</p>
        <h4>creditHours :    </h4>
        <p>${coursesItem[i].creditHours}</p>
        <h4>department    :    </h4>
        <p>${coursesItem[i].department}</p>
        <h4>genEdType :    </h4>
        <p>${coursesItem[i].genEdType}</p>
        <h4>totalSeats :    </h4>
        <p>${coursesItem[i].totalSeats}</p>
        <h4>updatedAt :    </h4>
        <p>${coursesItem[i].updatedAt}</p>
        <br>
        <br>
      `;
      coursesShow.appendChild(coursesbox); //เขียนค่าทับ
    }

    //listitem.innerHTML = "<h1>,di,ttt</h1>";
    //listitem.textContent = coursesItem.courseNameEn;

    //coursesShow.appendChild(coursesItem);
  } catch (err) {
    console.log(err);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  //****addEventListener
  main();
});
