export default (value) => ({
    in(localProperty) {
        localStorage.setItem(localProperty, JSON.stringify(value));
    }
});