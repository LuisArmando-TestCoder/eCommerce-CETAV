export default ({obj, array, name}) => {
    array.splice(0, 0, obj);
    localStorage.setItem(name, JSON.stringify(array));
}