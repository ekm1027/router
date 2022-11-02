<template>
    <div>
      <div>ID : <input v-model="re_id"></div>
      <div>Name : <input v-model="re_name"></div>
      <div>Age : <input v-model="re_age"></div>
      <div>E-mail : <input v-model="re_mail"></div>
      <div>tel : <input v-model="re_tel"></div>
      <div>Address : <input v-model="re_address"></div>

      <button @click="fn_x">
        취소
      </button>
      <button @click="fn_modify">
        수정하기
      </button>
    </div>

  </template>
  
  <script>
  
  export default {
    re_id :'',
    re_name:'',
    re_age:'',
    re_mail:'',
    re_tel:'',
    re_address:'',
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
      fn_x () {
            this.$router.push({
              path: '/detail',
              name: 'detail',
              params: {id: this.id, name : this.name, age : this.id, mail : this.mail, tel : this.tel, address : this.address}
        })
      },
      fn_modify () {
            this.id = 
            this.$router.push({
              path: '/detail',
              name: 'detail',
              params: {id: this.re_id, name : this.re_name, age : this.re_id, mail : this.re_mail, tel : this.re_tel, address : this.re_address}
        })
      }
    }
  }
  </script>