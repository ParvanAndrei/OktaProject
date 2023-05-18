<template>
  <div class="profile custom-container container ">
    <h1 class="ui header">
      <i
          aria-hidden="true"
          class="drivers license outline icon"
      >
      </i>
      <h1 style="font-family:Georgia, 'Times New Roman', Times, serif; font-size: 17px; display: flex;">
      My User Profile (ID Token Claims)
    </h1>
    </h1>
    <p>
      Below is the information from your ID token which was obtained during the
      <a href="https://developer.okta.com/docs/guides/implement-auth-code-pkce">PKCE Flow</a>
      and is now stored in local storage.
    </p>
    <p>
      This route is protected by Okta with the <code>requiresAuth: true</code> metadata in <code>router/index.js</code>. This ensures that this page cannot be accessed until you have authenticated.
    </p>
    <table class="ui table" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 17px;">
      <thead>
      <tr>
        <th>Claim</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(claim, index) in claims"
          :key="index"
      >
        <td>{{claim.claim}}</td>
        <td :id="'claim-' + claim.claim">{{claim.value}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


  
<script>
export default {
  name: 'Profile-Us',
  data () {
    return {
      claims: []
    }
  },
  async created () {
    const idToken = await this.$auth.tokenManager.get('idToken')
    this.claims = await Object.entries(idToken.claims).map(entry => ({ claim: entry[0], value: entry[1] }))
  }
}
</script>
