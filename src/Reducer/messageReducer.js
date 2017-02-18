

/**
 * 存储消息的reducer
 */

const messageInitState = {

    data: {

     /*  返回数数据中data的大致结构
        has_read_messages: [],
        hasnot_read_messages: [
            {
                id: "543fb7abae523bbc80412b26",
                type: "at",
                has_read: false,
                author: {
                    loginname: "alsotang",
                    avatar_url: "https://avatars.githubusercontent.com/u/1147375?v=2"
                },
                topic: {
                    id: "542d6ecb9ecb3db94b2b3d0f",
                    title: "adfadfadfasdf",
                    last_reply_at: "2014-10-18T07:47:22.563Z"
                },
                reply: {
                    id: "543fb7abae523bbc80412b24",
                    content: "[@alsotang](/user/alsotang) 哈哈",
                    ups: [ ],
                    create_at: "2014-10-16T12:18:51.566Z"
                }
            },
            ....*/
    }
};

const Message = (state = messageInitState, action) => {

    switch (action.type) {
        case 'message/DONE_FETCHING_MESSAGE':
            return { data: action.data };


        default:
            return state;
    }

};



export default Message;
