<template>
  <div class="container">
    <CommentComponent />
    <!-- reply comment section -->

    <div class="comment-replies">
      <div class="vertical-line">
        <div class="vl"></div>
      </div>

      <div class="replies">
        <CommentComponent />
        <CommentComponent />
      </div>
    </div>
  </div>
</template>
<script>
import CommentComponent from "./CommentComponent.vue";
export default {
  components: { CommentComponent },
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
.container {
  margin: 2em;
  padding: 15px;
  width: 670px;
}
</style>