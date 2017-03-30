function musicPlayer($node) {
    this.createHtml($node)//创建html
    this.linkCss()//引入css
    this.getChannels($node)//获取音乐频道
    this.init($node)//初始化音乐播放器
    //下面都是绑定事件
    this.bind($node)
    this.bindOther($node)
    this.bindDragDiv($node)
}
musicPlayer.prototype = {
    init: function ($node) {
        this.audioObject = $node.find('#music')[0]//绑定音乐
        this.isplayed = false//初始化音乐是否播放，否
        this.musicList = []//初始化音乐容器空数组
        this.musicIndex = 0//初始化音乐idx
        this.audioObject.volume = 0.5//初始化音量为0.5
        this.volumeCurrent = this.audioObject.volume//当前音乐音量
        this.channelId = 'public_fengge_qingyinyue'//初始化音乐频道
        this.lyricArr = []//初始化歌词空数组

        var self = this
        setInterval(function ($node) {
            self.progressBar($node)
            self.getTime($node)
        }, 500)//监听时间

        //绑定一大堆$node下面的对象
        this.dragDiv = $node.find('.drag-div')
        this.music = $node.find('.music')
        this.sideBar = $node.find('.side-bar')
        this.main = $node.find('.main')
        this.channelListIcon = $node.find('.channel-list-icon')
        this.info = $node.find('.info')
        this.copyrightIcon = $node.find('.copyright .icon-banquan')
        this.copyrightInfo = $node.find('.copyright-info')
        this.title = $node.find('.header .title')
        this.author = $node.find('.header .author')
        this.picture = $node.find('.picture')
        this.lrc = $node.find('.music-box .show-lrc')
        this.timeBar = $node.find('.time .time-bar')
        this.timeNow = $node.find('.time .time-now')
        this.currentTime = $node.find('.time .current-time')
        this.totalTime = $node.find('.time .total-time')
        this.volume = $node.find('.volume .volume-bar')
        this.volumeNow = $node.find('.volume .volume-now')
        this.playBtnIcon = $node.find('.play-btn .iconfont')
        this.play = $node.find('.play-btn .play')
        this.playIcon = $node.find('.play-btn .play .iconfont')
        this.forward = $node.find('.play-btn .forward ')
        this.back = $node.find('.play-btn .back')
        this.jingyin = $node.find('.volume .jingyin .iconfont')
        this.yinliang = $node.find('.volume .yinliang .iconfont')
        this.showLrc = $node.find('.control .lrc-btn .icon-diaozhenggeci1')

    },
    bind: function ($node) {
        var self = this
        this.play.on('click', function () {
            self.playMusic()
        })//点击播放键事件
        this.forward.on('click', function () {
            self.getSong()
            self.isplayed = false
            self.playForward()
            self.getLyric($node)

        })//下一曲事件
        this.back.on('click', function () {
            self.isplayed = false
            self.playBack()
            self.getLyric($node)
        })//上一曲事件
        this.sideBar.on('click', 'li', function () {
            $(this).addClass("active").siblings().removeClass("active");
            self.channelId = $(this).attr("channel-id")
            self.musicList = []
            self.musicIndex = 0
            self.isplayed = false
            self.channelListIcon.trigger('click')
            for (var i = 0; i < 3; i++) {
                self.getSong()
            }
            self.clickChannelGetSong($node)
        })//选择频道
        this.audioObject.addEventListener('playing', function () {
            self.setTime()
            setInterval(function () {
                self.progressBar()
            }, 500)
        })//监听音乐播放时做什么事
        this.audioObject.addEventListener('ended', function () {
            self.forward.trigger('click')
        })//监听音乐结束时做什么事
        this.volume.on('click', function (e) {
            var percent = e.offsetX / parseInt(getComputedStyle(this).width)
            self.volumeNow.css({'width': percent * 100 + '%'})
            self.audioObject.volume = percent * 1
        })//改变音量
        this.timeBar.on('click', function (e) {
            var percent = e.offsetX / parseInt(getComputedStyle(this).width)
            self.audioObject.currentTime = percent * self.audioObject.duration
            self.timeNow.css({'width': percent * 100 + "%"})
        })//改变时间进度
    },
    bindOther: function ($node) {
        var self = this
        this.channelListIcon.on('click', function () {
            self.sideBar.toggle(300)
        })//绑定频道列表触发事件
        this.copyrightIcon.on('click', function () {
            self.copyrightInfo.slideToggle(500)
        })//绑定版权信息事件
        this.jingyin.on('click', function () {
            if (self.audioObject.volume !== 0) {
                self.volumeCurrent = self.audioObject.volume
                self.audioObject.volume = 0
                self.changeVolumeBar()
            } else {
                self.audioObject.volume = self.volumeCurrent
                self.changeVolumeBar()
            }
        })//绑定静音事件
        this.yinliang.on('click', function () {
            $node.find('.volume .jingyin').toggle(500)
            $node.find('.volume .volume-bar').toggle(500)
        })//绑定音量控制显示事件
        this.showLrc.on('click', function () {
            $node.find('.lrc-box .show-lrc').toggle(500)
        })//绑定歌词显示事件
        this.playBtnIcon.on('mouseover', function () {
            $node.find(this).addClass('active')
        })//鼠标放到播放键时，不透明
        this.playBtnIcon.on('mouseout', function () {
            $node.find(this).removeClass('active')
        })//鼠标离开播放键，透明
    },//绑定一些其他图标事件
    bindDragDiv : function($node){
        var self = this;
        this.dragDiv.on("mousedown",function(e){
            var posX = e.pageX - self.dragDiv.offset().left,
                posY = e.pageY - self.dragDiv.offset().top;
            self.dragDiv.parent(".music-player").addClass("onMove").data('newPos',{X:posX,Y:posY});
            self.oldX = e.pageX;
            self.oldY = e.pageY;
        }).on("mouseup",function(e){
            self.dragDiv.parent(".music-player").removeClass("onMove").removeData('newPos');
            if ((self.oldX - e.pageX == 0) && (self.oldY - e.pageY == 0) && ($(this).parent().attr("class") === 'music-player')){
                $node.find(".music").fadeToggle(500);
            }
        });
        $('body').on("mousemove",function(e){
            $node.find('.onMove').length && $node.find('.onMove').offset({
                top: e.pageY - $node.find('.onMove').data('newPos').Y,
                left: e.pageX - $node.find('.onMove').data('newPos').X
            });
        })
    },//如何拖动音乐盒
    getChannels: function ($node) {
        $.get('http://api.jirengu.com/fm/getChannels.php')
            .done(function (ret) {
                var channels = ''
                var fmInfo = JSON.parse(ret)
                for (var i in fmInfo.channels) {
                    channels += '<li channel-id = ' + fmInfo.channels[i].channel_id + '>' + fmInfo.channels[i].name + '</li>'
                }
                $node.find('.side-bar').append(channels)
            })
    },//获取频道
    getSong: function () {
        var self = this
        $.get('http://api.jirengu.com/fm/getSong.php', {channel: self.channelId})
            .done(function (song) {
                var songData = JSON.parse(song)
                var musicRandom = {
                    src: songData.song[0].url,
                    title: songData.song[0].title,
                    author: songData.song[0].artist,
                    picture: songData.song[0].picture,
                    sid: songData.song[0].sid,
                    lrc: songData.song[0].lrc
                }//将音乐信息生成一个对象，然后push到 musicList 数组里
                self.musicList.push(musicRandom)
                console.log(self.musicList)
            })
    },//获取音乐信息
    getInfo: function () {
        var self = this
        $(this.audioObject).attr('src', self.musicList[self.musicIndex].src)
        this.author.text(self.musicList[self.musicIndex].author)
        this.title.text(self.musicList[self.musicIndex].title)
        this.picture.css({'background': 'url(' + self.musicList[self.musicIndex].picture + ')'})
    },//获取数组里音乐的信息
    getTime: function () {
        var min = parseInt(this.audioObject.currentTime / 60)
        var second = parseInt(this.audioObject.currentTime % 60) + ''
        second = second.length == 2 ? second : '0' + second
        var time = min + ':' + second
        this.currentTime.text(time)
    },//获取时间
    setTime: function () {
        var mins = parseInt(this.audioObject.duration / 60)
        var seconds = parseInt(this.audioObject.duration % 60) + ''
        seconds = seconds.length == 2 ? seconds : '0' + seconds
        var time = mins + ':' + seconds
        this.totalTime.text(time)
    },//设置时间
    playMusic: function () {
        if (this.isplayed === false) {
            this.audioObject.play()
            this.isplayed = true
            this.playIcon.removeClass('icon-bofang').addClass('icon-zanting')
        } else {
            this.audioObject.pause()
            this.isplayed = false
            this.playIcon.removeClass('icon-zanting').addClass('icon-bofang')
        }
    },//播放（暂停）音乐
    playForward: function () {
        if (this.musicIndex < this.musicList.length - 1) {
            this.musicIndex++
        } else {
            this.musicIndex = 0
        }
        this.getInfo()
        this.playMusic()
    },//下一曲
    playBack: function () {
        if (this.musicIndex > 0) {
            this.musicIndex--
        } else {
            this.musicIndex = this.musicList.length - 1
        }
        this.getInfo()
        this.playMusic()
    },//上一曲
    clickChannelGetSong:function ($node) {
        var self = this
        $.get('http://api.jirengu.com/fm/getSong.php', {channel: self.channelId})
            .done(function (song) {
                var songData = JSON.parse(song)
                var musicRandom = {
                    src: songData.song[0].url,
                    title: songData.song[0].title,
                    author: songData.song[0].artist,
                    picture: songData.song[0].picture,
                    sid: songData.song[0].sid,
                    lrc: songData.song[0].lrc
                }
                //将音乐信息生成一个对象，然后push到 musicList 数组里
                self.musicList.push(musicRandom)
                self.playBack()
                self.getLyric($node)
                console.log(self.musicList)
            })
    },//切换频道时获取的音乐
    progressBar: function () {
        var percent = this.audioObject.currentTime / this.audioObject.duration
        this.timeNow.css({'width': percent * 100 + "%"})
    },//进度条
    changeVolumeBar: function () {
        var percent = this.audioObject.volume
        this.volumeNow.css({'width': percent * 100 + '%'})
    },//音量条
    getLyric: function ($node) {
        var self = this;
        $.get('http://api.jirengu.com/fm/getLyric.php', {sid: self.musicList[self.musicIndex].sid})
            .done(function (lyr) {
                var lyr = JSON.parse(lyr);
                if (!!lyr.lyric) {
                    self.lrc.empty();//先清空歌词内部
                    var line = lyr.lyric.split('\n');//歌词为以排数为界的数组
                    line = line.slice(1)
                    var timeReg = /\[\d{2}:\d{2}.\d{2}\]/g;//时间的正则
                    var result = [];
                    if (line != "") {
                        for (var i in line) {//遍历歌词数组
                            var time = line[i].match(timeReg);//每组匹配时间 得到时间数组
                            if (!time)continue;//如果没有 就跳过继续
                            var value = line[i].replace(timeReg, "");// 纯歌词
                            for (j in time) {//遍历时间数组
                                var t = time[j].slice(1, -1).split(':');//分析时间  时间的格式是[00:00.00] 分钟和毫秒是t[0],t[1]
                                //把结果做成数组 result[0]是当前时间，result[1]是纯歌词
                                var timeArr = parseInt(t[0], 10) * 60 + parseFloat(t[1]); //计算出一个curTime s为单位
                                result.push([timeArr, value]);
                                //console.log(timeArr,value)
                            }
                        }
                    }
                    //时间排序
                    result.sort(function (a, b) {
                        return a[0] - b[0];
                    });
                    self.lyricArr = result;//存到lyricArr里面
                    // console.log(self.lyricArr);
                    self.renderLyric($node);//渲染歌词
                }
                ;
            }).fail(function () {
            self.lrc.html("<li>本歌曲展示没有歌词</li>");
        });
    },//获取歌词
    renderLyric: function ($node) {
        var lyrLi = "";
        for (var i = 0, l = this.lyricArr.length; i < l; i++) {
            lyrLi += "<li data-time='" + this.lyricArr[i][0] + "'>" + this.lyricArr[i][1] + "</li>";
        }
        //console.log(lyrLi);
        this.lrc.append(lyrLi);
        this.lrcTime($node);//怎么展示歌词
    },//渲染歌词
    lrcTime: function ($node) {
        var self = this;
        setInterval(function () {
            self.showLyric($node);
        }, 200)
    },//歌词时间
    showLyric: function ($node) {
        var self = this,
            liH = $node.find(".show-lrc li").eq(5).outerHeight() - 3; //每行高度
        for (var i = 0; i < self.lyricArr.length; i++) {//遍历歌词下所有的li
            var curT = $node.find(".show-lrc li").eq(i).attr("data-time");//获取当前li存入的当前一排歌词时间
            var nexT = $node.find(".show-lrc li").eq(i + 1).attr("data-time");
            var curTime = self.audioObject.currentTime;
            if ((curTime > curT) && (curT < nexT)) {//当前时间在下一句时间和歌曲当前时间之间的时候 就渲染 并滚动
                $node.find(".show-lrc li").removeClass("active");
                $node.find(".show-lrc li").eq(i).addClass("active");
                self.lrc.css('top', -liH * (i - 2));
            }
        }
    },//显示歌词

    createHtml: function ($node) {
        var html = ''
        html += '<div class="music-player">'
            + '<div class="drag-div" ><i class="iconfont icon-yinle"></i></div>'
            + '<div class="music">'
            + '<ul class="side-bar"></ul>'
            + '<div class="main">'
            + '<div class="picture"></div>'
            + '<div class="music-box">'
            + '<div class="info">'
            + '<div class="header">'
            + '<span class="channel-list-icon"><i class="iconfont icon-diaozhenggeci"></i></span>'
            + '<div class="copyright">'
            + '<i class="iconfont icon-banquan"></i>'
            + '<div class="copyright-info"><p>made by ly</p><p>version 1.1.0</p></div>'
            + '</div>'
            + '<p class="title">hello</p>'
            + '  <p class="author">ly</p>'
            + '</div>'
            + '</div>'
            + '<div class="lrc-box"><ul class="show-lrc"></ul></div>'
            + '<div class="play-btn">'
            + '<span class="back"><i class="iconfont icon-ttpodicon1"></i></span>'
            + '<span class="play"><i class="iconfont icon-bofang"></i></span>'
            + '<span class="forward"><i class="iconfont icon-ttpodicon"></i></span>'
            + '</div>'
            + '</div>'
            + '<div class="control">'
            + '<span class="lrc-btn"><i class="iconfont icon-diaozhenggeci1"></i></span>'
            + '<div class="time">'
            + '<span class="current-time">0:00</span>'
            + '<div class="time-bar">'
            + '<div class="time-now"></div>'
            + '</div>'
            + '<span class="total-time">0:00</span>'
            + '</div>'
            + '<div class="volume">'
            + '<span class="jingyin"><i class="iconfont icon-jingyin"></i></span>'
            + '<div class="volume-bar">'
            + '<div class="volume-now"></div>'
            + '</div>'
            + '<span class="yinliang"><i class="iconfont icon-yinliang"></i></span>'
            + '</div>'
            + '</div>'
            + '<audio id="music" src="">获取的音乐</audio>'
            + '</div>'
            + '</div>'
            + '</div>'
        $node.append(html)
    },//创建音乐播放器html
    linkCss: function () {
        var link = ' <link rel="stylesheet" type="text/css" href="./css/music-font/iconfont.css">'
            + '<link rel="stylesheet" href="./css/music.css">'
        $('head').append(link)
    },//引入音乐播放器css
}



