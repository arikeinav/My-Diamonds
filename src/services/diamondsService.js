import Axios from "axios";
import httpService from "./httpService";

const axios = Axios.create({
  withCredentials: false,
});

// const api ="https://api.midonline.com/api/QueryApi/GetInventory?q=qqR9BP3NvbZ7aFAHstt5DQ%3d%3d"

export const diamondsService = {
  query,
  getDiamondsList,
};

async function query(){
  
    const user = await httpService.post('auth/checkIfUser')
    if (!user) return 
    return getDiamondsList()
  }


async function getDiamondsList() {
  const diamonds = await axios.get(
    "https://api.midonline.com/api/QueryApi/GetInventory?q=qqR9BP3NvbYXzxCRkJ1goQ%3d%3d"
  );
  return diamonds.data;
}
