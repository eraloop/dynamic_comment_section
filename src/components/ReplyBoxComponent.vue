<template>
  <div v-if="replyMessage" class="reply-sec">
    <div class="profile">
      <img
        src="~@/assets/avatars/image-maxblagun.png"
        height="40px"
        width="40px"
      />
    </div>

    <div class="comment-box">
      <textarea v-model="replyContent" class="reply-input" type="text" />
      <button @click="sendReply" :disabled="isDisabled" class="reply-btn">
        Reply
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    replyMessage: {
      type: Boolean,
      required: true,
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted: function () {},
};
</script>
