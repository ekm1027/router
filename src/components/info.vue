<template>
    <div>
      <p>ID : {{id}} </p> 
      <p>Name : {{name}} </p>
      <p>Age : {{age}} </p>
      <p>E-mail : {{mail}} </p>
      <button @click="fn_more">
        더 보기
      </button>
      <button @click="fn_home">
        홈
      </button>
    </div>

  </template>
  
  <script>
  // import detail from '../components/detail.vue'

  export default {
   
    computed: {
      id() {
        return this.$route.params.id
      },
      name() {
        return this.$route.params.name
      },
      age() {
        return this.$route.params.age
      },
      mail() {
        return this.$route.params.mail
      },
      tel() {
        return this.$route.params.tel
      },
      address() {
        return this.$route.params.address
      }
    },

    methods: {
      fn_more() {
            this.$router.push({
              path: '/detail',
              name: 'detail',
              params: {id: this.id, name : this.name, age : this.id, mail : this.mail, tel : this.tel, address : this.address}
        })
      },

      fn_home() {
            this.$router.push({
              path: '/',
        })
      }
    }
}
  </script>