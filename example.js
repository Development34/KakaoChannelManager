var KaKao = require("KaKaoChannelManger");
var KaKaoChannelManger = new KaKao();

const email = ""; //이메일
const pw = ""; //비밀번호

/**
attachment
아래는 attachment의 예제입니다.
hidden_profile : 프로필 숨기기 여부
**/
const data = {
    "contents": [
        {
            "t": "text",
            "v": '안녕하세요'
        }
    ],
    "hidden_profile": true
};

/**
채널의 postId 와 channelId를 구하는 방법은 
read.md 에 채널의 postId,channelId 구하는 법을 참고해주세요.
**/

const postId = ""; //전송하고자 하는 채널의 postId
const channelId = ""; //전송하고자 하는 채널의 channelId



function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    /**
    로그인이 되어있지 않을 때만 로그인을 합니다.
    **/
    if (!KaKaoChannelManger.isLogin()) {
        KaKaoChannelManger.login(email, pw); 
    }

    if (msg == "/test") {
        KaKaoChannelManger.send(KaKaoChannelManger.cookies, data, channelId, postId);
    }
}
