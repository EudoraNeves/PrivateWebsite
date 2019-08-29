<template>
<div class="hireDownload">
    <button> {{ buttonText }}</button>
</div>
</template>

<script>
export default {
  name: 'hireDownload',
  props: {
    buttonText: String
  }
}
</script>

<style scoped>
button {
    margin-right: 10px;
    color: #fff;
    text-transform: uppercase;
    background-color: #008fa0;
    background-clip: padding-box;
    padding: 8px 15px;
    border-radius: 2px;
    height: 39px;
}


</style>
