$(document).ready(function(){ var playlist = [ { title:"大师工作室", artist:"大师工作室", mp3:"http://cloud.tjit.net/public/uploads/20200210/8/8_E4aYI7fS_大师工作室.mp3", poster: "" }, 
 { title:"大师工作室", artist:"大师工作室", mp3:"http://y2-p-p.qq190.net/UserSongs/2020/02/80bd0ffd3c4545c8856ad34ba33bd31f_mp3.m4a", poster: "" },
 { title:"大师工作室", artist:"大师工作室", mp3:"http://y2-p-p.qq190.net/UserSongs/2020/02/32fd27c74e154aa78c0e4cc35d37f84b_mp3.m4a", poster: "" },
 { title:"大师工作室", artist:"大师工作室", mp3:"http://y2-p-p.qq190.net/UserSongs/2020/02/2b17fc2a88ce478a9cdbb4f96b35fa37_mp3.m4a", poster: "" },
 { title:"摇头 (by大师工作室)", artist:"By 大师工作室", mp3:"http://y2-p-p.qq190.net/UserSongs/2020/02/7956ae67c18c4e06ab4dd42a4a0d3516_mp3.m4a", poster: "" },
 { title:"火车进站", artist:"By 大师工作室", mp3:"http://y2-p-p.qq190.net/UserSongs/2020/02/4eb2d59c0a9c4f569b34c84d5b42afb6_mp3.m4a", poster: "" },
 { title:"Seve", artist:"By 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=462552812.mp3", poster: "" },
 { title:"End Of The Night", artist:"By 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1324159296.mp3", poster: "" },
 { title:"Shots (Broiler Remix)", artist:"By 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=31789010.mp3", poster: "" },
 { title:"最近", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1357825630.mp3", poster: "" },
 { title:"Superstar", artist:"By 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=492145159.mp3", poster: "" },
 { title:"无名之辈", artist:"By 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1376142151.mp3", poster: "" },
 { title:"我愿意平凡的陪在你身旁 (DjYaha版)", artist:"By 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1376093547.mp3", poster: "" },

 { title:"年少有为", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1293886117.mp3", poster: "" },
 { title:"我的名字", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=554241732.mp3", poster: "" },
 { title:"Trippy Love", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=410801523.mp3", poster: "" },
 { title:"遇见", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=287035.mp3", poster: "" },
 { title:"当真", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1304882023.mp3", poster: "" },
 { title:"Are You With Me", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=29806043.mp3", poster: "" },
 { title:"Fade", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=29947420.mp3", poster: "" },
 { title:"Five Hours", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=28263911.mp3", poster: "" },
 { title:"我走后", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1370047789.mp3", poster: "" },
 { title:"赤伶", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1313118277.mp3", poster: "" },
 { title:"倒数", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1299550532.mp3", poster: "" },
 { title:"爱情错觉", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1369825073.mp3", poster: "" },
 { title:"多想在平庸的生活拥抱你", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1346104327.mp3", poster: "" },
 { title:"晚安", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1359356908.mp3", poster: "" },
 { title:"孤身", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1365393542.mp3", poster: "" },
 { title:"一曲相思", artist:"By 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1313558186.mp3", poster: "" },
 { title:"醉仙美", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1338146682.mp3", poster: "" },
 { title:"会不会", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1338545703.mp3", poster: "" },
 { title:"浪子回头", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=516728102.mp3", poster: "" },
 { title:"Turn All The Lights On", artist:"By 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=21792987.mp3", poster: "" },
 { title:"得过且过", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1355916784.mp3", poster: "" },
 { title:"Nevada", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=418602088.mp3", poster: "" },
 { title:"夜之光", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1320649834.mp3", poster: "" },
 { title:"光年之外", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=449818741.mp3", poster: "" },
 { title:"沙漠骆驼", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=486814412.mp3", poster: "" },
 { title:"bad guy", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1355147933.mp3", poster: "" },
 { title:"知否知否", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1343472148.mp3", poster: "" },
 { title:"I Will Be OK", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=421148673.mp3", poster: "" },
 { title:"狂浪", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1331819040.mp3", poster: "" },
 { title:"往后余生", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=557584888.mp3", poster: "" },
 { title:"林中鸟", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=404784564.mp3", poster: "" },
 { title:"一生兄弟", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=33891852.mp3", poster: "" },
 { title:"欠我一个未来", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1351615116.mp3", poster: "" },
 { title:"绿色", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1345848098.mp3", poster: "" },
 { title:"你的酒馆对我打了烊", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1341964346.mp3", poster: "" },

 { title:"你是人间的四月天", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1358631061.mp3", poster: "" },
 { title:"晴天", artist:"by 大师工作室 ", mp3:"http://music.163.com/song/media/outer/url?id=482999668.mp3", poster: "" },
 { title:"我曾", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1336856777.mp3", poster: "" },

 { title:"我愿意平凡的陪在你身旁", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1351551838.mp3", poster: "" },
 { title:"只是太爱你", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=28111646.mp3", poster: "" },
 { title:"那个女孩", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1300994613.mp3", poster: "" },


 { title:"伪装", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1348548292.mp3", poster: "" },
 { title:"清明上河图", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1339684071.mp3", poster: "" },

 { title:"体面", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1336295999.mp3", poster: "" },

 { title:"像鱼", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1331819951.mp3", poster: "" },
 { title:"渡我不渡她", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1354425063.mp3", poster: "" },
 { title:"生而为人", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=1335350269.mp3", poster: "" },
 { title:"像我这样的人", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=569213220.mp3", poster: "" },
 { title:"烟火里的尘埃", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=29004400.mp3", poster: "" },
 { title:"有可能的夜晚", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=26217171.mp3", poster: "" },
 { title:"七秒钟的记忆", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=26609877.mp3", poster: "" }, 
 { title:"泡沫", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=26113988.mp3", poster: "" },
 { title:"迎着风", artist:"by 大师工作室", mp3:"http://music.163.com/song/media/outer/url?id=434022356.mp3", poster: "" },
 ]; var cssSelector = { jPlayer: "#jquery_jplayer", cssSelectorAncestor: ".music-player" }; var options = { swfPath: "Jplayer.swf", supplied: "ogv, m4v, oga, mp3" }; var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options); });
