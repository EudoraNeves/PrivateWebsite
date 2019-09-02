<template>
<div :id="id" class="section">
    <h2 class="sectionTitle">{{ sectionTitle }}</h2>
</div>
</template>

<script>
export default {
  name: "sections",
  props: {
      id: String,
      sectionTitle: String
  }
};
</script>

<style scoped>

.section {
    width: 55%;
    min-height: 500px;
    margin: 0 auto 45px auto;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
    background: #ffffff;
    padding: 45px;
    border-radius: 2px;
    background-clip: padding-box;
    

    text-align: center;
}

.sectionTitle {
    margin-bottom: 45px;
    text-transform: capitalize;
}

</style>
