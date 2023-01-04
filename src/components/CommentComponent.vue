<template>
  <div class="">
    <div class="comment">
      <div class="votting-sect">
        <div class="votting-btn">
          <button class="increment-vote">
            <img
              src="../static/images/icon-plus.svg"
              height="11px"
              width="11px"
            />
          </button>

          <div class="voteCount">
            <h5>12</h5>
          </div>

          <button class="decrement-vote">
            <img
              src="../static/images/icon-minus.svg"
              height="3px"
              width="10px"
            />
          </button>
        </div>
      </div>

      <div class="comment-body">
        <div class="comment-head">
          <div class="bio">
            <img
              src="../static/images/avatars/image-amyrobson.png"
              height="30px"
              width="30px"
            />
            <h4 class="name">Amyrobson</h4>
            <p class="last-seen">1 month ago</p>
          </div>

          <div class="comment-action">
            <button @click="launchReply" class="reply">
              <img
                src="../static/images/icon-reply.svg"
                height="10px"
                width="15px"
              />
              Reply
            </button>
          </div>
        </div>
        <div class="comment-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            harum ad, illo laudantium commodi doloremque optio ut fugiat, vero
            sequi officiis. Facilis ratione error dolorem laudantium natus
            accusantium nihil commodi et?
          </p>
        </div>
      </div>
    </div>

    <div v-if="replyMessage" class="reply-sec">
      <div class="profile">
        <img
          src="../static/images/avatars/image-maxblagun.png"
          height="40px"
          width="40px"
        />
      </div>

      <div class="comment-box">
        <textarea class="reply-input" type="text" />
        <button class="reply-btn">Reply</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      replyMessage: false,
    };
  },
  computed: {},
  methods: {
    launchReply() {
      this.replyMessage = !this.replyMessage;
    },
  },
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