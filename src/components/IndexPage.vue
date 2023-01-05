<template>
  <div class="container">
    <div v-for="comment in comments" :key="comment.id">
      <CommentComponent :comment="comment" />
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

  computed: {
    comments() {
      return this.$store.state.comments;
    },
  },

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