<template>
  <li @click="handleClick">{{content}}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    handleClick() {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<style scoped>
</style>
