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
postId, channelId 확인 법
1.채널에 접속한다
2.보내고자 하는 포스트를 누른다.
3.맨 오른쪽 상단에 점 세개를 누르고 URL 복사를 누른다.

그러면 pf.kakao.com/뒤에 영어로 된 부분이 채널아이디이고,
그 뒤에 숫자로 된 부분이 postId이다.
**/

const postId = ""; //전송하고자 하는 채널의 postId
const channelId = ""; //전송하고자 하는 채널의 channelId



function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (!KaKaoChannelManger.isLogin()) {
        KaKaoChannelManger.login(email, pw); //로그인이 안 되어있으면 로그인을 하고 되어있다면 로그인을 하지 않습니다.
    }

    if (msg == "/test") {
        KaKaoChannelManger.send(KaKaoChannelManger.cookies, channelId, postId,JSON.stringify(data));
    }
}
