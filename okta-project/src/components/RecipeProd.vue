<template>
  <div class="custom-contain container">
    <div class="card">
      <div style="padding: 50px;" class="card-content ">
          <h1 style="text-align: center; font-size: 34px; margin-bottom: 0%; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Fagaras Chocolate</h1>
          <a style="display: flex; align-items: center; justify-content: center ;" href="https://storage.googleapis.com/doraly-assets-images/images/2022-02-04T10-23-36.862Z-imageFromUrl-24-0.jpeg">
            <img style="width: 25%;" src="https://storage.googleapis.com/doraly-assets-images/images/2022-02-04T10-23-36.862Z-imageFromUrl-24-0.jpeg" alt="Image description">
          </a>
<!--  <img src="fagaras-chocolate.jpg" alt="Fagaras Chocolate"> -->
          <p style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
            Welcome to the world of Fagaras Chocolate! Indulge in the rich and heavenly flavors of our exquisite chocolates. Made from the finest ingredients, each piece of Fagaras Chocolate is a work of art that will delight your senses.
          </p>
          <p style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
            Whether you are a dark chocolate enthusiast or prefer the smoothness of milk chocolate, Fagaras Chocolate has a variety of options to suit your taste. From classic flavors to innovative combinations, we have something for everyone.
          </p>
          <p style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
            Explore our collection and experience the true essence of chocolate bliss. Treat yourself or surprise your loved ones with the gift of Fagaras Chocolate. Our chocolates make perfect presents for any occasion, from birthdays to anniversaries.
          </p>
          <p style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
            Join us on this delightful journey of flavors and let Fagaras Chocolate transport you to a world of pure chocolate indulgence.
          </p>


          
      </div>


      <div class="container " style="padding-bottom: 10%;">
    <h1 style="font-size: 20px; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Recipe</h1>
    <h2 style="font-size: 20px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">Ingredients:</h2>
    <div class="ingredients">
      <ul>
        <li>200g dark chocolate</li>
        <li>100g unsalted butter</li>
        <li>150g digestive biscuits, crushed</li>
        <li>100g mixed nuts, chopped</li>
        <li>50g dried fruits (e.g., raisins, cranberries)</li>
        <li>2 tablespoons honey</li>
      </ul>
    </div>
    <h2 style="font-size: 20px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">Instructions:</h2>
    <ol>
      <li>Melt the dark chocolate and butter together in a heatproof bowl set over a pan of simmering water, stirring until smooth.</li>
      <li>Remove the bowl from the heat and stir in the crushed digestive biscuits, mixed nuts, dried fruits, and honey. Mix well to combine.</li>
      <li>Line a baking dish with parchment paper and transfer the mixture into the dish, spreading it evenly.</li>
      <li>Place the dish in the refrigerator and chill for at least 2 hours, or until the mixture is set.</li>
      <li>Once set, remove the mixture from the dish and cut it into bars or baton shapes.</li>
      <li>Your delicious Baton Fagaras is ready to be enjoyed!</li>
    </ol>
  </div>
      <!-- <body>
  
  </body> -->










    </div>

    
  </div>
</template>



  
<script>
export default {
  name: "RecipeProd",

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
