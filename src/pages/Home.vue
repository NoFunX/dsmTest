<template>
    <div>
        <toolbar/>
  <v-card 
    style="margin-bottom: 20%"
    class=""
    height="100%"
    width="300"
  >
    <v-navigation-drawer
      class="primary accent-4 pt-5"
      width="300"
      dark
      permanent
    >
    <span style="color: #FFFFFF" class="ml-5">Меню</span>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          class="mt-n2"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
    </div>
</template>

<script>
    import Toolbar from '@/components/Toolbar'

    export default {
        components: {
            Toolbar
        },

        data () {
            return {
                items: [
                    { title: 'Главная', icon: 'mdi-home', link: '/' },
                    { title: 'Проекты', icon: 'mdi-folder-outline', link: '/projects' },
                    { title: 'Модели', icon: 'mdi-chart-pie', link: '/models' },
                    { title: 'Настройки', icon: 'mdi-cog-transfer-outline', link: '/settings' },
                    { title: 'Администрирование', icon: 'mdi-briefcase-variant-outline', link: '/admin' },
                ],
      }
    },
}
</script>