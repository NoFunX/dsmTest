<template>
    <div class="wrapper">
        <v-img 
          style="height:200px; width: 200px" 
          class="mx-auto mt-5"
          :src="img"
          ></v-img>
        <form
            class="mx-auto secondary"
            style="width: 30%; margin-top: 2%; margin-bottom: 4%; box-shadow: 0 7px 10px grey; "
        >
            <div class="primary pt-3 pb-3">
                <span style="color: white" class="ml-5">Авторизация</span>
            </div>

            <header 
                class="mx-auto mt-10"
                style="width: 80%;">
                <h1 class="mb-2">DSM Portal</h1>
                <span align="center">Здравствуйте, пожалуйста, авторизуйтесь.</span>
            </header>

            <v-text-field
                class="mx-auto mt-10"
                style="width: 80%"
                v-model="login"
                label="Логин"
                type="text"
                required
            >
            </v-text-field>
            
            <v-text-field
                class="mt-5 mx-auto"
                style="width: 80%"
                v-model="password"
                label="Пароль"
                type="password"
                required
            >
            </v-text-field>

             <v-btn class="ml-11 mt-7 primary pr-14 pl-14 mb-10" @click="loginIn">Войти</v-btn>
        </form>

        <span style="margin-bottom: 2%; display: inline-block; ">DSM Portal 1.0.2 © 2021</span>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        img: require('C:/Evgeniy/dsm/src/img/logo1.png'),
        JwtRequestDto: {
          login: "",
          password : ""
        }
      }
    },

     methods: {
      loginIn: function () {
        this.$store.dispatch('login', this.JwtRequestDto)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    }
  
  }
</script>
