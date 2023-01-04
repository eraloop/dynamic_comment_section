<template>
  <div class="comment-replies">
    <div class="vertical-line">
      <div class="vl"></div>
    </div>

    <div class="replies">
      <CommentComponent />
      <CommentComponent />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted: function () {},
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>