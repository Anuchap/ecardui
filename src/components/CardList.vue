<template>
    <div>
        <h1>Card List</h1>
        <card />
        <card />
        <card />
        <card />
        <hr />
        <h1>form</h1>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
  components: {
      card: Card
  }
}
</script>

