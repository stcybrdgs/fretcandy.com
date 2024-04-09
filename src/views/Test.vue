<script>
export default {}
</script>

<template>
  <div class="test">
    <h1>Testing...</h1>
    <span
      class="icon-test"
      v-for="icon in ['account', 'help', 'bell', 'pencil']"
    >
      <base-icon :name="icon"></base-icon>
    </span>
  </div>
</template>

<style>
h1 {
  text-align: center;
}

.icon-test {
  font-size: 3em;
  text-align: center;
  display: block;
  width: 100%;
}
</style>

