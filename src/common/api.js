const domain = "http://localhost:3000/api/v1";
// const domain = "https://testserver-fuha.onrender.com/api/v1";
const api = {
  signUp: {
    url: `${domain}/users/sign-up`,
    method: "post",
  },
  signIn: {
    url: `${domain}/users/sign-in`,
    method: "post",
  },
  getProfile: {
    url: `${domain}/users`,
    method: "patch",
  },
  getCourses: {
    url: `${domain}/courses`,
    method: "get",
  },
  getCourse: {
    url: `${domain}/courses`,
    method: "get",
  },
};
export default api;
