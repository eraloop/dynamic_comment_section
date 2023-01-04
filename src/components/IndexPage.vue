<template>
  <div class="container">
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
            <button class="reply">
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

.container {
  margin: 2em;
  padding: 15px;
  width: 100%;
}

.comment {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 8fr;
  grid-gap: 10px;
  height: 150px;
  width: 600px;
  background: hsl(0, 0%, 100%);
  border-radius: 10px;
  box-shadow: 0 3px 10px hsl(223, 19%, 93%);
  border: none;
  padding: 10px;
}

.votting-sect {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: hsl(228, 33%, 97%);
  height: 80%;
  width: 40px;
  border-radius: 10px;
  margin: 10px;
}

.voteCount {
  padding: 10px 0;
  margin: 0;
  color: hsl(238, 40%, 52%);
  font-family: "Rubik-Medium";
}

.votting-sect button {
  background: none;
  border: none;
}

.comment-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comment-head .bio {
  display: flex;
  justify-content: center;
  align-items: center;
}

.comment-head h4 {
  font-size: 14px;
  font-family: "Rubik-Medium";
  color: hsl(212, 24%, 26%);
  padding: 0 13px;
  text-transform: lowercase;
}

.comment-head p {
  text-transform: lowercase;
  color: hsl(211, 10%, 45%);
  font-family: "Rubik-Regular";
  font-size: 13px;
}

.comment-text {
  font-family: "Rubik-Regular";
  font-size: 14px;
  font-weight: 300;
  color: hsl(211, 10%, 45%);
  margin: 10px 30px 0 0;
}

.comment-action {
  padding: 0 10px;
}

.comment-action button {
  background: none;
  color: hsl(238, 40%, 52%);
  font-family: "Rubik-Medium";
}
</style>