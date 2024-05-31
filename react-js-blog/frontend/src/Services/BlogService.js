

//Blog Service 

//Create Blog
const createBlog = async (blog) => {
  const response = await fetch("http://localhost:8000/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });

  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};


//Fetch Blogs
const fetchBlogs = async () => {
  const response = await fetch("http://localhost:8000/api/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};


//Fetch Blog By ID
const fetchBlogByID = async (id) => {
  const response = await fetch("http://localhost:8000/api/blogs/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};


//Fetcj Blogs By Category ID
const fetchBlogsByCategoryId = async (categoryId) => {
  const response = await fetch(
    "http://localhost:8000/api/blogs/categories/" + categoryId,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};


//Fetch Blogs By Author ID
const fetchBlogsByAuthorId = async (authorId) => {
  const response = await fetch(
    "http://localhost:8000/api/blogs/author/" + authorId,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};


//Update Blog
const updateBlog = async (blog) => {
  const response = await fetch("http://localhost:8000/api/blogs/" + blog.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};


//Delete Blog
const deleteBlog = async (id) => {
  const response = await fetch("http://localhost:8000/api/blogs/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};

const blogService = {
  createBlog,
  fetchBlogs,
  fetchBlogByID,
  fetchBlogsByCategoryId,
  fetchBlogsByAuthorId,
  updateBlog,
  deleteBlog,
};

export default blogService;