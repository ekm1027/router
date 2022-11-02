<template>
    <div>
      <p>tel : {{tel}} </p>
      <p>Address : {{address}} </p>
      <button @click="fn_fold">
        접기
      </button>
      <button @click="fn_home">
        홈
      </button>
      <button @click="fn_change1">
        수정
      </button>
    </div>

  </template>
  
  <script>
  
  export default {
    name : 'detail',

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
      fn_fold () {
            this.$router.push({
              path: '/info',
              name: 'info',
              params: {id: this.id, name : this.name, age : this.id, mail : this.mail, tel : this.tel, address : this.address}
        })
      },
      fn_home () {
            this.$router.push({
              path: '/',
        })
      },
      fn_change1 () {
            this.$router.push({
              path: '/change',
              name: 'change',
              params: {id: this.id, name : this.name, age : this.id, mail : this.mail, tel : this.tel, address : this.address}
        })
      }
    }
  }
  </script>