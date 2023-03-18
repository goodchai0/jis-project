let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Prevents HTML handling submission
  // let file_upload = document.getElementById("myFile").files[0];
  // let formData = new FormData();
  // console.log(file_upload);
  // formData.append("file_upload", file_upload);
  // console.log(...formData);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  let file_upload, file;
  async function Main() {
    file = document.getElementById("myFile").files[0];
    file_upload = await toBase64(file);
    console.log(file_upload);

    fetch("http://127.0.0.1:8000/api/file/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ file_upload: file_upload }), // Payload is formData object
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    console.log(JSON.stringify({ file_upload: file_upload }));
  }
  Main();
  console.log(file_upload);
});
