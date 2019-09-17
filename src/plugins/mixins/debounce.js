export default {
  methods: {
    debounce(func, delay) {
      let timeoutID = null;
      return function () {
        clearTimeout(timeoutID);
        const args = arguments;
        const that = this;
        timeoutID = setTimeout(() => {
          func.apply(that, args);
        }, delay);
      };
    },
  },
};
