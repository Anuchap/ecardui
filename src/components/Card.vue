<template>
  <div>
    <h4>{{name}}</h4>
    <img :src="'images/cards/' + src" :title="name" />
  </div>
</template>

<script>
export default {
  props: ['name', 'src'],
}
</script>

<style>
img {
  width: 100px;
}
</style>


