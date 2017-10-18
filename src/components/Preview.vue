<template>
  <div>
    <h1>Preview Package</h1>
    <img :src="'images/cards/' + formData.card.imagePath" :title="formData.card.name" />
    <h4>{{formData.message}}</h4>
  </div>
</template>


<script>
import storage from '../storage';

export default {
  data() {
    return {
      formData: storage.get()
    }
  }
}
</script>

