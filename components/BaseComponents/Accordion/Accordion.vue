<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null
      },
      arrow: {
        count: 0,
        active: null
      }
    };
  },
  provide() {
    return { Accordion: this.Accordion };
  }
};
</script>

<style lang="css" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  box-sizing: border-box;
}

@media (max-width: 640px) {
  li {
    width: auto;
  }
}
</style>
