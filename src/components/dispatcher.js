export default {
    get: key => {
       return window.reactown.data[key];
    },
    set: (key, value) => {
      if (window.reactown.data[key] == null) value = 0
      window.reactown.data[key] = value;
    },
    displayAssets: () => {
      return window.reactown.data
    }
};
