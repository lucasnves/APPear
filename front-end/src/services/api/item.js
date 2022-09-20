import Api from "./Api";

const getItens = (categoria) => {
    return Api().get('/item',{params:{categoria}});
}

const createItem = (dados) => {
    return Api().post('/item',dados)
}

const deleteItem = (itemid) => {
    return Api().delete(`/item/${itemid}`);
}

const putItem =(itemid, dados)=>{
    return Api().put(`/item/${itemid}`, dados);
}
export {getItens, deleteItem, putItem,createItem};
