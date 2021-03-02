<template>
  <v-card style="box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2)">
    <v-toolbar dense height="64px">
     

      <v-toolbar-title class="ml-5">
          <v-img :src="img[0]"></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div style="margin-right: 120px" class="d-flex">
        <div class="mr-3 d-inline-block primary mt-1" style="border-radius: 50%; width: 40px; height: 40px"></div>
        <div>
        <b class="text-lg-h6">Петр Иванов</b>
        <span class="d-block mt-n2" style="color: #b1b3b1">User@gmail.com</span>
        </div>
      </div>

      <div style="width: 1px; height: 40px" class="grey mr-7"></div>

      <v-btn icon width="8px" heigth="4px" class="mr-5">
          <v-img :src="img[1]"></v-img>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>


<script>
export default {
    data(){
        return {
            img: [require('C:/Evgeniy/dsm/src/img/logo.png'), require('C:/Evgeniy/dsm/src/img/Vector.png')],
            color: '#48BBC8'
        }
    }
}
</script>




