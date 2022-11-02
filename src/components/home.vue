<template>
  <div>
    <div>
    <div>
      <h2>Please Login</h2>
      <div>
            <input placeholder="Enter your ID" v-model="userId"><br>
            <input placeholder="Enter your password" v-model="userPw" type="password">
          <p>
            <button @click="fn_click">
              검색
            </button>
          </p>
          {{err}}
      </div>
    </div>
  </div>  
  </div>
</template>


  <script>

  export default {
    data() {
        return {
            err : '',
            userId:'',
            userPw:'',
            information: [
                {
                    id:'a',
                    pw:'a',
                    name:'a',
                    age:'a',
                    tel:'a',
                    mail:'a',
                    address:'a'
                },
                {
                    id:'b',
                    pw:'b',
                    name:'b',
                    age:'b',
                    tel:'b',
                    mail:'b',
                    address:'b'
                },
                {
                    id:'c',
                    pw:'c',
                    name:'c',
                    age:'c',
                    tel:'c',
                    mail:'c',
                    address:'c'
                } 
            ]
        }
    },

    methods: {
      fn_click () {
        for(let i=0;i<this.information.length; i++) {
          if(this.information[i].id == this.userId && this.information[i].pw == this.userPw) {
            this.$router.push({
              path: '/info', 
              name: 'info',
              params: {id: this.information[i].id, name : this.information[i].name, age : this.information[i].age, mail : this.information[i].mail, tel : this.information[i].tel, address : this.information[i].address}
            }).catch(()=>{})
          }
          else {
           this.err = '아이디가 존재하지 않습니다' 
          }
        }
      }
    }
}
  </script>