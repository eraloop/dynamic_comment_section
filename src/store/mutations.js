
const setVoteCountUp = (state, payload) => {
      let result = state.comments.find((cmt) => 
        cmt.id === payload.id
    )
    console.log(result)
}

const setVoteCountDown = (state, payload) => {
    let comment = state.comments.find((cmt) => 
        cmt.id === payload.id
    )
    console.log(comment)
}

const setReplyVoteCountUp = (state, payload) => {
    let reply = state.comment.replies.find((rep) => 
        rep.id === payload.id
    )
    console.log(reply)
}

const setReplyVoteCountDown = (state, payload) => {
    console.log(payload)
}


export default {
    setReplyVoteCountUp,
    setVoteCountUp,
    setVoteCountDown,
    setReplyVoteCountDown
}