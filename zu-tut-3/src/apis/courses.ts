import axios from "axios";

export const getCourses = () => axios.get("http://localhost:3004/users");

export const createCourse = (description: string) => {
  return axios.post("http://localhost:3004/courses", { description });
};
