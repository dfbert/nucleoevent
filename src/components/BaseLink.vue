<template>
  <a :href="this.$router.resolve(to).route.fullPath">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ["to"]
};
</script>