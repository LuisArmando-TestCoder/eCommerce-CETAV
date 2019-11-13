export default ({obj, array, name}) => {
    array.push(obj);
    localStorage.setItem(name, JSON.stringify(array));
}