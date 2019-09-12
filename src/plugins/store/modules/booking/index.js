export default {
  namespaced: true,
  state: {
    savedFilter: null
  },
  mutations: {
    save_filter(state, filter) {
      // handle date bug from json stringfy
      let fromDate = filter.fromDate;
      let toDate = filter.toDate;

      state.savedFilter = JSON.parse(JSON.stringify(filter));

      state.savedFilter.fromDate = fromDate;
      state.savedFilter.toDate = toDate;
    },
    clear_filter(state) {
      state.savedFilter = null;
    }
  }
}


/*

JSON STRINGIFY CAUSE BUG
'''Fri Aug 02 2019 17:05:45 GMT+0700 (Indochina Time)''' transform to '''2019-08-02T10:05:45.000Z'''

*/
