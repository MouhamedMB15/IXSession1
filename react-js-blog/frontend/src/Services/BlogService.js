


//Fetch API

//Create Blog 
const createBlog = async (blog) => {
  const response = await fetch("http://localhost:8000/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: blog,
  });

  if (!response.ok) {
    let res = await response.json();
    throw res;
  }

  const responseData = await response.json();
  return responseData;
};
// Blogs Fetching
const fetchBlogs = async () => {
  const response = await fetch("http://localhost:8000/api/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    let res = await response.json();
    throw res;
  }

  const responseData = await response.json();
  return responseData;
};

//Get Blog by Id
const fetchBlogById = async (id) => {
  const response = await fetch("http://localhost:8000/api/blogs/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    let res = await response.json();
    throw res;
  }

  const responseData = await response.json();
  return responseData;
};

// Blogs By Cateogry ID
const fetchBlogsByCategoryId = async (categoryId) => {
  const response = await fetch(
    "http://localhost:8000/api/blogs/category/" + categoryId,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    let res = await response.json();
    throw res;
  }

  const responseData = await response.json();
  return responseData;
};
//Aytoru ID
// const fetchBlogsByAuthorId = async (authorId) => {
//   const response = await fetch(
//     "http://localhost:8000/api/blogs/author/" + authorId,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!response.ok) {
//     let res = await response.json();
//     throw res;
//   }

//   const responseData = await response.json();
//   return responseData;
// };

//Update Blog By ID
const updateBlog = async (blog) => {
  const response = await fetch(
    "http://localhost:8000/api/blogs/" + blog.get("id"),
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: blog,
    }
  );

  if (!response.ok) {
    let res = await response.json();
    throw res;
  }

  const responseData = await response.json();
  return responseData;
};

//Delete Blog By ID
const deleteBlogsById = async (id) => {
  const response = await fetch("http://localhost:8000/api/blogs/" + id, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    let res = await response.json();
    throw res;
  }

  const responseData = await response.json();
  return responseData;
};






  const blogService = {
    createBlog,
    fetchBlogs,
    fetchBlogById,
    fetchBlogsByCategoryId,
    updateBlog,
    deleteBlogsById,

  };
  
  export default blogService;