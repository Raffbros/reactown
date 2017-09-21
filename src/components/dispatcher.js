export default {
    get: key => {
       return window.reactown.data[key];
    },
    set: (key, value) => {
        window.reactown.data[key] = value;
    }
};
