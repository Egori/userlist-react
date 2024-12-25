import axios from "axios";

export const fetchUsers = async (page, limit, search) => {
  const params = {
    _page: page,
    _limit: limit,
    name_like: search,  // Фильтрация по имени
  };

  const response = await axios.get("http://localhost:5000/users", { params });
  return response.data;
};