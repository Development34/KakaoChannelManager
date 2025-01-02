var KaKao = require("KaKaoChannelManger");
var KaKaoChannelManger = new KaKao();

const email = ""; // your email
const pw = ""; // your password

const data = {
    "contents": [
        {
            "t": "text",
            "v": '안녕하세요'
        }
    ],
    "hidden_profile": true
};

const postId = "";
const channelId = "";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (!KaKaoChannelManger.isLogin()) {
        KaKaoChannelManger.login(email, pw);
    }

    if (msg == "/test") {
        KaKaoChannelManger.send(KaKaoChannelManger.cookies, channelId, postId,JSON.stringify(data));
    }
}
