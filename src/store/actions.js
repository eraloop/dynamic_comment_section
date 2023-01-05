

// eslint-disable-next-line no-unused-vars
const voteCountUp = ({commit, state }, payload) => {
    if (payload.pId) {
        commit("setReplyVOteCountUp", payload)
        return
    } 
    commit("setVoteCountUp",payload)
}

const voteCountDown = ({ commit }, payload) => {
    if (payload.pId) {
        commit("setReplyVOteCountDown", payload)
        return
    } 
    commit("setVoteCountUp",payload)
}

export default {
    voteCountUp,
    voteCountDown
}