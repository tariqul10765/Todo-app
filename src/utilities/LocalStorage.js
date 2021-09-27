const addDataToLocalStorage = (data) => {
    const exist = localStorage.getItem('todos');

    let todos = [];
    if(!exist){
        todos.push(data);
    }
    else {
        todos = JSON.parse(exist);
        todos.push(data);
    }

    localStorage.setItem('todos', JSON.stringify(todos));
}

const getDataToLocalStorage = (key) => {
    const getData = localStorage.getItem(key);
    return JSON.parse(getData);
}

const deleteDataFromLocalStorage = (data) => {
    // console.log(data);
    const getData = localStorage.getItem('todos');
    const parseData = JSON.parse(getData);

    const index = parseData.findIndex(d => d.text === data.text)
    parseData.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(parseData));
        
}
const updateDataToLocalStorage = (data) => {
    const getData = localStorage.getItem('todos');
    const parseData = JSON.parse(getData);

    const index = parseData.findIndex(d => d.text === data.text)
    parseData.splice(index, 1, data);

    localStorage.setItem('todos', JSON.stringify(parseData));
}

export {
    addDataToLocalStorage, 
    getDataToLocalStorage, 
    deleteDataFromLocalStorage, 
    updateDataToLocalStorage
};