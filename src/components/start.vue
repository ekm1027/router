<template>
    <div>
      <button @click="fn_start">
        로그인
      </button>
    </div>

  </template>
  
  <script>
  
  export default {
    name : 'home',

    methods: {
      fn_start () {
            this.$router.push({
              path: '/home',
              name: 'home'
        }).catch(()=>{})
      }
    }
  }
  </script>