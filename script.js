// let arrow = document.querySelectorAll(".arrow");
//   for (var i = 0; i < arrow.length; i++) {
//     arrow[i].addEventListener("click", (e)=>{
//    let arrowParent = e.target.parentElement.parentElement;
//    arrowParent.classList.toggle("showMenu");
//     });
//   }
//   let sidebar = document.querySelector(".sidebar");
//   let sidebarBtn = document.querySelector(".bx-menu");
//   console.log(sidebarBtn);
//   sidebarBtn.addEventListener("click", ()=>{
//     sidebar.classList.toggle("close");
//   });


let arrow = document.querySelectorAll(".arrow");

for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// Add event listener for list items
let listItems = document.querySelectorAll(".sidebar li");
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove "active" class from all list items
    listItems.forEach((li) => li.classList.remove("active"));
    
    // Add "active" class to the clicked item
    item.classList.add("active");
  });
});
