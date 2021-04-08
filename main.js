var app= new Vue({
  el: '#root',
  data:{
    emailArray: [],
  },
  methods: {
    getRandomEmailArray: function(n){
    //     for (var i = 0; i < n; i++) {
    //       axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    //       .then((response) => {
    //       var emailEl = response.data.response;
    //       console.log(emailEl);
    //       this.emailArray.push(emailEl);
    //     });
    // }
    //console.log(this.emailArray);
  },
  },
  created: function () {
    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          var emailEl = response.data.response;
          console.log(emailEl);
          this.emailArray.push(emailEl);
        });
    }
  }
});
