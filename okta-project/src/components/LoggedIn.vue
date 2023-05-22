<template>
  <div class="custom-contain container">
    <div class="card">
      <div class="card-content center-align">
        <h3 style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" v-if="activeUser.name != null">Welcome, {{ activeUser.name }}!</h3>
        <h3 style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" v-else>Welcome User! Please Log in :)</h3>
        <!-- Additional content -->
        <h5 v-if="activeUser.name == null" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;"> This webpage is dedicated for Făgăraș Chocolate! </h5>
        <div style="text-align: left;" v-if="activeUser.name != null">
          <p style="text-indent: 20px; margin-bottom: 15px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Făgăraș Chocolate - the favorite product of consumers in Romania, which has preserved its recipe for over 50
            years. It represents the production of the "Făgăraș" brand, which belongs to the Romanian company
            "Kandia-Excelent".</p>
          <p style="text-indent: 20px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">This is a chocolate and confectionery factory with a history of about 130 years, whose production base is
            located in the city of Timișoara. For several decades, the chocolate producer company Făgăraș, together with
            the Kandia Dulce and Laura brands, holds a 20% market share in the confectionery market in Romania.</p>
        </div>
        <a style="display: flex; align-items: center; justify-content: center ;"
          href="https://storage.googleapis.com/doraly-assets-images/images/2022-02-04T10-23-36.862Z-imageFromUrl-24-0.jpeg">
          <img style="width: 25%;"
            src="https://storage.googleapis.com/doraly-assets-images/images/2022-02-04T10-23-36.862Z-imageFromUrl-24-0.jpeg"
            alt="Image description">
        </a>

      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "LoggedIn",

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
  