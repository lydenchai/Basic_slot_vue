<template>
<div class="container">
  <card v-for="product of products" :key="product.name">
      <h1>{{product.name}}</h1>
      <img :src="product.image" alt="">
      <p>{{product.description}}</p>
  </card>
</div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Boy",
          image: "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg",
           description: "To use the Font Awesome icons, add the following line inside the"
        },
        {
          name: "Bird",
          image: "https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg",
           description: "To use the Font Awesome icons, add the following line inside the"
        },
        {
          name: "Tree",
          image: "https://static.addtoany.com/images/dracaena-cinnabari.jpg",
           description: "To use the Font Awesome icons, add the following line inside the"
        }
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
  }
img {
  width: 20%;
}
</style>