
export default {
    comments: [
        {
            id: 1,
            sender: "amyrobson",
            voteCount: 6,
            last_seen: "1 week ago",
            avatar: require(`@/assets/avatars/image-amyrobson.png`),
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            harum ad, illo laudantium commodi doloremque optio ut fugiat, vero
            sequi officiis. Facilis ratione error dolorem laudantium natus
            accusantium nihil commodi et?`,

            replies: [
                {
                    id: '1rep1',
                    pId: 1,
                    sender: "juliusomo",
                    voteCount: 6,
                    last_seen: "2 days ago",
                    avatar: require(`@/assets/avatars/image-juliusomo.png`),
                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                  harum ad, illo laudantium commodi doloremque optio ut fugiat, vero
                    sequi officiis. Facilis ratione error dolorem laudantium natus
                    accusantium nihil commodi et?`,
                },
                {
                    id: '1rep2',
                    pId: 1,
                    sender: "juliusomo",
                    voteCount: 6,
                    last_seen: "2 days ago",
                    avatar: require(`@/assets/avatars/image-juliusomo.png`),
                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                  harum ad, illo laudantium commodi doloremque optio ut fugiat, vero
                    sequi officiis. Facilis ratione error dolorem laudantium natus
                    accusantium nihil commodi et?`,
                },
            ],
        },

        {
            id: 2,
            sender: "juliusomo",
            voteCount: 6,
            last_seen: "2 months ago",
            avatar: require(`@/assets/avatars/image-juliusomo.png`),
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            harum ad, illo laudantium commodi dolor emque optio ut fugiat, vero
            sequi officiis. Facilis ratione error dolorem laudantium natus
            accusantium nihil commodi et?`,
            
            replies: [
                {
                    id: '2rep1',
                    pId: 2,
                    sender: "amyrobson",
                    voteCount: 6,
                    last_seen: "1 week ago",
                    avatar: require(`@/assets/avatars/image-amyrobson.png`),
                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                    harum ad, illo laudantium commodi doloremque optio ut fugiat, vero
                    sequi officiis. Facilis ratione error dolorem laudantium natus
                    accusantium nihil commodi et?`,
                },
            ],
        },
    ]
 }