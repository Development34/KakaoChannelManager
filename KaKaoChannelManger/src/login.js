module.exports=function(){const o=require("././crypto").CryptoJS,e=Utils.getRandomUserAgent();function t(){this.cryptoKey=null,this.cookies=new java.util.HashMap}const s=function(){let o=org.jsoup.Jsoup.connect("https://accounts.kakao.com/login/").header("User-Agent",e).header("referer","https://accounts.kakao.com/").header("Upgrade-Insecure-Requests","1").data("app_type","web").data("continue","https://accounts.kakao.com/weblogin/account/info").ignoreHttpErrors(!0).method(org.jsoup.Connection.Method.GET).execute(),t=o.parse().getElementById("__NEXT_DATA__"),s=JSON.parse(t.data());s=s.props.pageProps.pageContext.commonContext,this.cryptoKey=s.p,this.csrfToken=s._csrf;let n=o.cookies(),r=n.keySet().toArray();for(let o=0;o<r.length;o++)this.cookies.put(r[o],n.get(r[o]));let a=org.jsoup.Jsoup.connect("https://stat.tiara.kakao.com/track/").header("User-Agent",e).header("referer","https://accounts.kakao.com/").data("d",'{"sdk":{"type":"WEB","version":"1.1.22"}}').ignoreContentType(!0).ignoreHttpErrors(!0).method(org.jsoup.Connection.Method.GET).execute().cookies(),c=a.keySet().toArray();for(let o=0;o<c.length;o++)this.cookies.put(c[o],a.get(c[o]))};return t.prototype.isLogin=function(){if(this.cookies.isEmpty())return!1;return 200===org.jsoup.Jsoup.connect("https://pf.kakao.com/rocket-web/web/users").cookies(this.cookies).header("User-Agent",e).header("Content-Type","application/json").header("Referer","https://pf.kakao.com/").ignoreContentType(!0).ignoreHttpErrors(!0).method(org.jsoup.Connection.Method.GET).execute().statusCode()},t.prototype.send=function(o,e,t,s){let n=org.jsoup.Jsoup.connect("https://pf.kakao.com/rocket-web/web/profiles/"+t+"/posts/"+s+"/comments").header("referer","https://pf.kakao.com/"+t).header("Content-Type","application/json").cookies(o).requestBody(JSON.stringify(e)).maxBodySize(0).ignoreContentType(!0).ignoreHttpErrors(!0).method(org.jsoup.Connection.Method.POST).execute();return 200!==n.statusCode()?{status:"fail",code:n.statusCode}:{status:"sucess",code:n.statusCode}},t.prototype.login=function(t,n){if(this.cookies.isEmpty()){s.call(this);let r=org.jsoup.Jsoup.connect("https://accounts.kakao.com/api/v2/login/authenticate.json").header("User-Agent",e).header("Referer","https://accounts.kakao.com/login/?continue=https%3A%2F%2Fpf.kakao.com%2F_ydgun%2Fposts#login").header("Host","accounts.kakao.com").header("Content-Type","application/json").cookies(this.cookies).requestBody(JSON.stringify({_csrf:this.csrfToken,activeSso:!0,loginKey:t,loginUrl:"/login?continue=https%3A%2F%2Fpf.kakao.com%2F_ydgun%2Fposts&talk_login=",password:o.AES.encrypt(n,this.cryptoKey).toString(),staySignedIn:!1})).ignoreContentType(!0).ignoreHttpErrors(!0).method(org.jsoup.Connection.Method.POST).execute();if(200!==r.statusCode())throw new Error("Invaild email or password");return this.cookies=r.cookies(),r.cookies()}throw new Error("you already have logined")},t}();