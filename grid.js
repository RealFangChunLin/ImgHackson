// const Vue = require('vue');
var db = require('../record');

Vue.component('demo-grid', {
    template: '#grid-template',
    replace: true,
    props: {
      data: Array,
      columns: Array,
      filterKey: String
    },
    data: function () {
      var sortOrders = {}
      this.columns.forEach(function (key) {
        sortOrders[key] = 1
      })
      return {
        sortKey: '',
        sortOrders: sortOrders
      }
    },
    computed: {
      filteredData: function () {
        var filterKey = this.filterKey && this.filterKey.toLowerCase()
        var data = this.getImages(filterKey);
        if (filterKey) {
          data = data.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        return data
      }
    },
    filters: {
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },
    methods: {
      getImages: function (content) {
        db.datasource.query({content:"/"+content+"/"},function(err,newdoc){
          return newdoc;
        });
        // return [{content: 'B0001', path: 'C://Users/Administrator/Documents/Tencent Files/282513713/FileRecv/car1.jpg'},
        // {content: 'B777', path: 'C://Users/Administrator/Documents/Tencent Files/282513713/FileRecv/car2.jpg'}];
      }
    }
  })
  
  var demo = new Vue({
    el: '#demo',
    data: {
      searchQuery: '',
      gridColumns: ['image', 'content', 'path'],
      gridData: []
    }
  })
  
  