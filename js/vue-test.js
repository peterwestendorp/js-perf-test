var vueTestData = [],
    vueItemCount = 999,
    vueRenderedItems = 0,
    vueStart;

Vue.component('child', {
  props: ['msg'],
  template: '<span>{{msg}}</span>',
  ready: function(){
    vueRenderedItems++;
    if(vueRenderedItems === vueItemCount){
      document.getElementById('vue-timer').innerHTML = vueItemCount+' items in '+((new Date().getTime())-vueStart)+' miliseconds';
    }
  }
});

var vm = new Vue({
  el: '#vue-test',
  data: {
    tags: []
  }
});

function startVueTest(){
  vueTestData = [];
  vueRenderedItems = 0;

  for(var i = 0; i < vueItemCount; i++){
    vueTestData.push({
      done: false,
      title: 'item '+Math.round(Math.random()*100)
    });
  }

  vueStart = new Date().getTime();

  vm.tags = vueTestData;
}
