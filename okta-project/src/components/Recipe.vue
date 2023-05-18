<template>
  <div class="custom-contain container">
    <div class="card">
      <div class="card-content center-align">
        <h1>Welcome, {{ activeUser.name }}!</h1>
        <!-- Additional content -->
        <h2> A MERS VARULE</h2>

      </div>
    </div>
  </div>
</template>



  
<script>
export default {
  name: "Recipe",

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

  methods: {
    async refreshActiveUser() {
      const user = await this.$auth.getUser()
      this.activeUser.name = user.name
      this.activeUser.role = user.roles

      console.log(user); // Log user roles to the console
    },
  }
}
</script>
