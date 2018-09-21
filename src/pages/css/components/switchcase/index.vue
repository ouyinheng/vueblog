<template>
  <div class="switchcase">
    <oyh-case/>
  </div>
</template>

<script>
import oyhCase from '@/components/switchcase';
export default {
  name: 'switchcase',
  components: {
    oyhCase
  }
}
</script>

<style lang="scss" scoped>
.switchcase {
  box-sizing: border-box;
  background-color: white;
  padding: 40px;
  min-height: 400px;
  box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
}
</style>
