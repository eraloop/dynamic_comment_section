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
    return {
      comments: [
        {
          id: 1,
          sender: "amyrobson",
          voteCount: 6,
          last_seen: "1 week ago",
          avatar: "require(`../static/images/avatars/image-amyrobson.png`)",
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            harum ad, illo laudantium commodi doloremque optio ut fugiat, vero
            sequi officiis. Facilis ratione error dolorem laudantium natus
            accusantium nihil commodi et?`,
          replies: [
            {
              id: 1,
              sender: "juliusomo",
              voteCount: 6,
              last_seen: "2 days ago",
              avatar: "require(`../static/images/avatars/image-juliusomo.png`)",
              text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                  harum ad, illo laudantium commodi doloremque optio ut fugiat, vero
                    sequi officiis. Facilis ratione error dolorem laudantium natus
                    accusantium nihil commodi et?`,
            },
            {
              id: 1,
              sender: "juliusomo",
              voteCount: 6,
              last_seen: "2 days ago",
              avatar: "require(`../static/images/avatars/image-juliusomo.png`)",
              text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                  harum ad, illo laudantium commodi doloremque optio ut fugiat, vero
                    sequi officiis. Facilis ratione error dolorem laudantium natus
                    accusantium nihil commodi et?`,
            },
          ],
        },
        {
          id: 1,
          sender: "juliusomo",
          voteCount: 6,
          last_seen: "2 months ago",
          avatar: "require(`../static/images/avatars/image-juliusomo.png`)",
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            harum ad, illo laudantium commodi doloremque optio ut fugiat, vero
            sequi officiis. Facilis ratione error dolorem laudantium natus
            accusantium nihil commodi et?`,
          replies: [
            {
              id: 1,
              sender: "amyrobson",
              voteCount: 6,
              last_seen: "1 week ago",
              avatar: "require(`../static/images/avatars/image-amyrobson.png`)",
              text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                  harum ad, illo laudantium commodi doloremque optio ut fugiat, vero
                    sequi officiis. Facilis ratione error dolorem laudantium natus
                    accusantium nihil commodi et?`,
            },
          ],
        },
      ],
    };
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