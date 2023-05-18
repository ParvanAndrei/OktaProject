<template>
  <div>
    <nav class="ui inverted top fixed menu" style="background-color: cornflowerblue;">
      <div class="ui container">
        <router-link v-if="!activeUser" to="/home" class="header item" style="display: inline-flex; align-items: center;">
          <img class="ui mini image" src="./assets/fagaras.png" style="width: 60px; height: 60px;">
          <span style="font-size: 20px; margin-left: 10px;font-family: Georgia, 'Times New Roman', Times, serif ; font-size: 17px">Făgăraș</span>
        </router-link>
        <router-link v-else to="/" class="header item" style="display: inline-flex; align-items: center;">
          <img class="ui mini image" src="./assets/fagaras.png" style="width: 60px; height: 60px;">
          <span style="font-size: 20px; margin-left: 10px;  Georgia, 'Times New Roman', Times, serif ; font-size: 17px">Făgăraș</span>
        </router-link>
        <ul class="right">
          <li><a @click.prevent="login" style="font-family:Georgia, 'Times New Roman', Times, serif ; font-size: 17px" v-if="activeUser.name == null">Login</a></li>
          <li><a class="item" style="font-family:Georgia, 'Times New Roman', Times, serif ; font-size: 17px " v-if="activeUser.name && activeUser.name === 'Oana Ianosiu'" v-on:click="redirectToReteta">Recipe</a></li>
          <li><a class="item" style="font-family:Georgia, 'Times New Roman', Times, serif ; font-size: 17px " v-if="activeUser.name != null" v-on:click="redirectToProfile">Profile</a></li>
          <li><a class="item" style="font-family:Georgia, 'Times New Roman', Times, serif ; font-size: 17px" v-if="activeUser.name != null" v-on:click="logout()">Logout</a></li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import router from './router'

export default {
  name: 'App',
  data() {
    return {
      activeUser: {
        name: null
      },
    }
  },
  async created() {
    await this.refreshActiveUser()
  },
  watch: {
    '$route': 'refreshActiveUser'
  },
  methods: {
    login() {
      this.$auth.signInWithRedirect()
    },
    async refreshActiveUser() {
      this.activeUser = await this.$auth.getUser()

    },
    async logout() {
      try {
        await this.$auth.signOut()
        router.push('/');
      } catch (error) {
        console.log(error);
      }

    },
    profile() {
      this.$router.push('/');
      
    },

    redirectToProfile() {
      this.$router.push('/profile');
    },

    reteta() {
      this.$router.push('/');
      
    },

    redirectToReteta() {
      this.$router.push('/reteta');
    }
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 65px;
}

body {
  background-color: #EAEDED;
}

.custom-contain {
  margin-top: 100px;
}
</style>
