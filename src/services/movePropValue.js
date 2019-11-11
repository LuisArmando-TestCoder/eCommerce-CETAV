export default ({obj, name, to}) => {
    if(obj[name] + to >= 1) obj[name] += to; 
}