<template>
  <div class="">
    <div class="comment">
      <div class="votting-sect">
        <div class="votting-btn">
          <button @click="voteCountUp(comment)" class="increment-vote">
            <img
              src="../static/images/icon-plus.svg"
              height="11px"
              width="11px"
            />
          </button>

          <div class="voteCount">
            <h5>{{ comment.voteCount }}</h5>
          </div>

          <button @click="voteCountDown(comment)" class="decrement-vote">
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
            <img :src="comment.avatar" height="30px" width="30px" />
            <h4 class="name">{{ comment.sender }}</h4>
            <p class="last-seen">{{ comment.last_seen }}</p>
          </div>

          <div class="comment-action">
            <button @click="launchReply" class="reply">
              <img
                src="../static/images/icon-reply.svg"
                height="10px"
                width="10px"
              />
              Reply
            </button>
          </div>
        </div>
        <div class="comment-text">
          <p>
            {{ comment.text }}
          </p>
        </div>
      </div>
    </div>

    <ReplyBoxComponent :replyMessage="replyMessage" :id="comment.id" />

    <div class="comment_replies">
      <div class="comment-replies">
        <div class="vertical-line">
          <div class="vl"></div>
        </div>

        <div class="replies">
          <div v-for="reply in comment.replies" :key="reply.id" class="comment">
            <div class="votting-sect">
              <div class="votting-btn">
                <button @click="voteCountUp(reply)" class="increment-vote">
                  <img
                    src="../static/images/icon-plus.svg"
                    height="11px"
                    width="11px"
                  />
                </button>

                <div class="voteCount">
                  <h5>{{ reply.voteCount }}</h5>
                </div>

                <button @click="voteCountDown(reply)" class="decrement-vote">
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
                  <img :src="reply.avatar" height="30px" width="30px" />
                  <h4 class="name">{{ reply.sender }}</h4>
                  <p class="last-seen">{{ reply.last_seen }}</p>
                </div>

                <div class="comment-action">
                  <button @click="launchReplyComment" class="reply">
                    <img
                      src="../static/images/icon-reply.svg"
                      height="10px"
                      width="10px"
                    />
                    Reply
                  </button>
                </div>
              </div>
              <div class="comment-text">
                <p>
                  {{ reply.text }}
                </p>
              </div>
            </div>

            <!-- <ReplyBoxComponent :replyMessage="replyMessage" :id="reply.id" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ReplyBoxComponent from "./ReplyBoxComponent.vue";

export default {
  name: "CommentComponent",

  props: {
    comment: {
      type: Object,
      required: true,
    },
  },

  components: { ReplyBoxComponent },
  data() {
    return {
      replyMessage: false,
      replyContent: "",
    };
  },
  computed: {
    isDisabled() {
      return !this.replyContent;
    },
  },

  methods: {
    launchReply() {
      this.replyMessage = !this.replyMessage;
    },

    launchReplyComment() {
      this.replyMessage = !this.replyMessage;
    },

    sendReply() {
      console.log("reply sent");
      this.replyContent = "";
      this.replyMessage = false;
    },

    voteCountUp(payload) {
      if (payload.id && payload.pId) {
        this.$store.dispatch("voteCountUp", {
          id: payload.id,
          pid: payload.pId,
        });
        return;
      }
      this.$store.dispatch("voteCountUp", { id: payload.id });
    },

    voteCountDown(payload) {
      if (payload.id && payload.pId) {
        this.$store.dispatch("voteCountDown", {
          id: payload.id,
          pid: payload.pId,
        });
        return;
      }
      this.$store.dispatch("voteCountDown", { id: payload.id });
    },
  },

  mounted: function () {
    if (this.replyContent !== "") {
      this.replyMessage = true;
    }
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>