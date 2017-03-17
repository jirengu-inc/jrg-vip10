/**
 * Created by ly on 2017/3/14.
 */
function musicPlayer($node) {
    this.sideBar = $node.find('.side-bar')
    this.main  = $node.find('.main')
    this.musicBox = $node.find('.music-bos')
    this.iconFont = $node.find('.iconfont')
    this.info = $node.find('.info')
    this.copyright = $node.find('.copyright')
    this.copyrightInfo = $node.find()
    this.title = $node.find('.header .title')
    this.author = $node.find('.header .author')
    this.picture = $node.find('.info .picture')
    this.lrc = $node.find('.info .lrc')
    this.timeBar = $node.find('.footer .time-bar')
    this.timeNow = $node.find('.footer .time-now')
    this.play = $node.find('.control .play')
    this.playIcon = $node.find('.control .play .iconfont')
    this.audioObject = new Audio('http://cloud.hunger-valley.com/music/玫瑰.mp3')






    this.init()
    this.bind()
}
musicPlayer.prototype ={
    init: function () {
        this.isplayed = false
        this.audioObject.volume = 0.5//初始化音量
        this.getChannels()

    },

    bind: function () {
        var self = this

        this.sideBar.on('click','li',function (e) {
            var channelId = $(this).get('data-id')
            self.getSong(channelId)
        })



        this.iconFont.on('mouseover',function () {
            $(this).css({'font-size': '40px'})

        })
        this.iconFont.on('mouseout',function () {
            $(this).css({'font-size': '16px'})

        })

        this.play.on('click',function () {
            self.playMusic()
        })

        this.back.on('click',function () {

            self.playBack()
        })

        this.forward.on('click',function () {

            self.playForward()
        })

        this.volume.on('click',function (e) {
            var percent = e.offsetX/parseInt(getComputedStyle(this).width)
            $audioObject[0].currentTime = percent * $audioObject[0].duration
            $progressNowNode.css({'width': percent * 100+"%"})
        })

        this.timeBar.on('click',function () {
            self.setTimeBar()
        })

        this.audioObject.addEventListener('ended',function () {
            self.forward.trigger('click')
        })
    },
    getChannels: function () {
        var self = this
        $.get('http://api.jirengu.com/fm/getChannels.php')
            .done(function (ret) {
                var channels = ''
                var fmInfo = JSON.parse(ret)
                for(var i in fmInfo.channels){
                    channels += '<li data-id = ' + fmInfo.channels[i].channel_id + '>' +  fmInfo.channels[i].name +'</li>'
                }
                self.sideBar.append(channels)
            })
    },
    getSong: function(channelId){
        var self = this
        self.channelId = channelId || 6
        $.get('http://api.jirengu.com/fm/getSong.php',{channel: self.channelId})
            .done(function (song) {
                var songData = JSON.parse(song)
                console.log(songData)
                self.getInfo(songData.song[0])
                self.playMusic()
            })
    },
    getInfo: function (e) {
        this.title.text(e.title)
        this.author.text(e.artist)
        this.audioObject.src = e.url
        var src = url(e.picture)
        this.picture.css({'background': src})
        this.isplayed = false
    },
    getLrc:function(e){

    },

    playMusic: function(){
        if(this.isplayed === false){
            this.audioObject.play()
            this.isplayed = true
            this.playIcon.removeClass('icon-rectangle1').addClass('icon-pause')
        }else{
            this.audioObject.pause()
            this.isplayed = false
            this.playIcon.removeClass('icon-pause').addClass('icon-rectangle1')
        }
    },
    setVolume :function (e) {
        var percent =e.offsetX/parseInt(getComputedStyle(this).width)
        $volumeNow.css({'width' : percent * 100 + '%'})
        $audioObject[0].volume = percent * 1
    }

}