<template>
  <div class="Tooltip">
    <h3 class="title">Tooltip</h3>
    <section class="section">
      <tool-tip content="adf">
        <div class="btn-tip">下</div>
      </tool-tip>
    </section>
  </div>
</template>

<script>
import toolTip from '@/components/ToolTip';
export default {
  name: 'Tooltip',
  components: {
    toolTip
  }
}
</script>
<style lang="scss" scoped>
  .Tooltip {
    .title {
      display: inline-block;
      margin-bottom: 30px;
    }
    .section {
      .btn-tip {
        padding: 5px 10px;
        border: 1px solid gainsboro;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
        font-size: 0.8rem;
        cursor: pointer;
      }
    }
  }
</style>
