<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Seemlessly switch between
    </h3>
    <p>understanding user needs,</p>
    <p>speaking designer lingo,</p>
    <p>and chatting it up in developer code</p>
  </div>
</template>

<style scoped>
/* h1 {
  font-family: infinity;
  font-weight: 700;
  font-size: 5.5rem;
  line-height: 120%;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>
