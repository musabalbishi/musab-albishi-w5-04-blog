const form = document.getElementById("addForm");
const blogList = document.getElementById("blog-list");
const deleteBtn = document.getElementById("del-btn");

// add blog

const deleteBlog = (e) => {
  e.preventDefault();
  if (e.target.contains("delete")) {
    console.log("1");
  }
};

const addBlog = (e) => {
  e.preventDefault();

  // get input value
  const blogTxt = document.getElementById("ta").value;
  // create the element
  let li = document.createElement("li");
  //   add the class name
  li.className = "list-group-item m-2";
  //
  li.appendChild(document.createTextNode(blogTxt));
  //
  blogList.appendChild(li);

  //   delete button
  const delBtn = document.createElement("delBtn");
  //   add classes
  delBtn.className = "btn btn-danger btn-sm";
  delBtn.appendChild(document.createTextNode("X"));

  li.appendChild(delBtn);
  blogList.appendChild(li);
};

// submit
form.addEventListener("submit", addBlog);
delBtn.addEventListener("click", deleteBlog);
