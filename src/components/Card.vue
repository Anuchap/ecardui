<template>
  <div class="card text-center">
    <img :src="'images/cards/' + src" :title="name" />
    <label>{{name}}</label>
  </div>
</template>

<script>
export default {
  props: ['name', 'src'],
}
</script>

<style scoped>
img {
  width: 150px;
  margin-top: 5px;
}

.card {
  width: 160px;
  float: left;
}
</style>


