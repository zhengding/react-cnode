

/**
 *  获取消息和消息未读消息数目的action
 */
let messagesActions = {

    fetchingMessage: function(){

        console.log('getMessage 1');

        return function(dispatch, getState){

            console.log('getMessage 2');
            let { accesstoken } = getState().User;

            fetch(`https://cnodejs.org/api/v1/messages?accesstoken=${accesstoken}`)
            .then(response => response.json())
            .then(json => {
                if(json.success){
                    dispatch(messagesActions.doneGFetchingMessage(json));
                }
            });

        }
    },

    doneGFetchingMessage: (json)=>({
        type: 'message/DONE_FETCHING_MESSAGE',
        data: json.data
    })

};

export default messagesActions;
