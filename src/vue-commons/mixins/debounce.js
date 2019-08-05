export default {
  methods: {
    debounce: function (func, delay) {
      var timeoutID = null
      return function () {
        clearTimeout(timeoutID)
        var args = arguments
        var that = this
        timeoutID = setTimeout(function () {
          func.apply(that, args)
        }, delay)
      }
    }
  },
}
