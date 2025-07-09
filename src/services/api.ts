import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/employees`;

export interface User {
  id: number;
  image: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
}

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(API_URL);
  return response.data;
};
