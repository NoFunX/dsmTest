<template>
  <v-card>
    <v-toolbar dense height="64px">
     

      <v-toolbar-title>
          <v-img :src="img[0]"></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="mr-16" icon>
        <v-icon class="rounded-circle primary mr-3"></v-icon>
        <span></span>
      </v-btn>

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




