export default o => ({
    in: (array) => array.map(obj => JSON.stringify(obj)).indexOf(JSON.stringify(o)) > -1,
    where: (array) => array.map(obj => JSON.stringify(obj)).indexOf(JSON.stringify(o))
});