import api from "./MainApi";


const API_url = `${api}/inventory`;
//create new inventory item
const createNew = async (itemData) => {
    const response = await api.post(API_url, itemData);
    return response.data
}

//get all inventory item
const getItems = async()=> {
    let res;
    res = await api.get(API_url);
    return res;
}
//delete item
const deleteItems = async (id) => {
    const response = await api.delete(API_url+id);
    return response.data
}
//get a item
const getItem = async (id) => {
    const response = await api.delete(API_url + id);
    return response.data;
}
//update inventory
const updateInv = async (id, itemData)=>{
    const response = await api.patch(`${API_url}${id}`, itemData);
    return response.data;
}

const inventoryService = {
    createNew, getItem, getItems, updateInv, deleteItems,
};
export default inventoryService;