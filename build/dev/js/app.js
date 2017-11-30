var critica = document.getElementsByClassName("critica");
var numCritica = 0;

function _(a) {
    return document.getElementById(a)
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        width: "100%",
        height: "100%",
        videoId: "QFIbc-Wo8bM",
        events: {
            onReady: onPlayerReady
        }
    })
}

function loadAssets() {
    var a = new XMLHttpRequest;
    a.open("GET", "img/logotipo_mientras_el_lobo_no_esta.svg", !0), a.responseType = "blob", a.send();
    var b = new XMLHttpRequest;
    b.open("GET", "img/informacion_lobo_no_esta.jpg", !0), b.responseType = "blob", b.send();
    var c = [],
        d = [];
    for (e = 1; e <= 9; e++) d.push("fav/favicon" + e + ".png");
    d.push("fav/favicon.ico");
    for (var e = 0; e < d.length; e++) c[e] = new XMLHttpRequest, c[e].open("GET", d[e], !0), c[e].responseType = "blob", c[e].send();
    for (var f = [], g = ["fonts/bold/gb.eot", "fonts/bold/gb.svg", "fonts/bold/gb.ttf", "fonts/bold/gb.woff", "fonts/bold/gb.woff2"], e = 0; e < g.length; e++) f[e] = new XMLHttpRequest, f[e].open("GET", g[e], !0), f[e].responseType = "blob", f[e].send()
}

function supportedVideoFormat(a) {
    var b = " ";
    return "probably" == a.canPlayType("video/webm") || "maybe" == a.canPlayType("video/webm") ? b = "webm" : "probably" != a.canPlayType("video/mp4") && "maybe" != a.canPlayType("video/mp4") || (b = "mp4"), b
}

function loadAssetsDesktop() {
    function d(a) {
        if (a.lengthComputable) {
            var b = a.loaded / a.total * 100,
                c = document.createElement("div");
            c.style.position = "absolute", c.style.bottom = "10%", c.style.width = b + "%", c.style.height = "2px", c.style.background = "#fff", wrapDesktopInit.appendChild(c), b > 99 && (wrapDesktopInit.style.opacity = "0", interfaceDesk.style.display = "block", setTimeout(function() {
                interfaceDesk.style.opacity = "1", videoSettings.style.opacity = "1", wrapDesktopInit.style.display = "none"
            }, 1e3))
        }
    }
    var a = document.createElement("video");
    a.id = "vLoading", a.style.width = "100%", wrapAni.appendChild(a);
    var b, c = supportedVideoFormat(vTag);
    " " == c ? b = 0 : "mp4" == c ? b = 1 : "webm" == c && (b = 2);
    var e = new XMLHttpRequest;
    if (e.open("GET", "assets/melne.mp3", !0), e.responseType = "blob", e.send(), document.body.appendChild(audioTag), audioTag.id = "audioTrack", audioTag.setAttribute("loop", " "), audioTag.appendChild(sourceTag), sourceTag.setAttribute("type", "audio/mpeg"), sourceTag.setAttribute("src", "assets/melne.mp3"), audioTag.setAttribute("autoplay", " "), vAudio.addEventListener("click", function() {
            muteButton = !muteButton, muteButton ? (audioTag.muted = !0, iconAudio.setAttribute("src", "img/icons/audioMuted.svg")) : muteButton || (audioTag.muted = !1, iconAudio.setAttribute("src", "img/icons/audio.svg"))
        }), 1 === b) {
        var f = new XMLHttpRequest;
        for (f.open("GET", "assets/loading.mp4", !0), f.responseType = "blob", a.setAttribute("src", "assets/loading.mp4"), a.setAttribute("autoplay", " "), f.send(), g = 0; g <= 9; g++) urlVidList480_mp4.push("assets/vid/480clip" + g + ".mp4");
        for (var g = 0; g < urlVidList480_mp4.length; g++) xhrVidList480_mp4[g] = new XMLHttpRequest, xhrVidList480_mp4[g].open("GET", urlVidList480_mp4[g], !0), xhrVidList480_mp4[g].responseType = "blob", xhrVidList480_mp4[g].send();
        xhrVidList480_mp4[0].addEventListener("progress", d)
    }
    if (2 === b) {
        var h = new XMLHttpRequest;
        for (h.open("GET", "assets/loading.webm", !0), h.responseType = "blob", h.onload = function() {
                4 == this.readyState && (a.setAttribute("src", "assets/loading.webm"), a.setAttribute("autoplay", " "))
            }, h.send(), g = 0; g <= 9; g++) urlVidList480_webm.push("assets/vid/480clip" + g + ".webm");
        for (var g = 0; g < urlVidList480_webm.length; g++) xhrVidList480_webm[g] = new XMLHttpRequest, xhrVidList480_webm[g].open("GET", urlVidList480_webm[g], !0), xhrVidList480_webm[g].responseType = "blob", xhrVidList480_webm[g].send();
        xhrVidList480_webm[0].addEventListener("progress", d)
    }
    for (var i = [], j = ["img/reparto/Emiliano_Carrillo_Mientras_El_Lobo_No_Esta.jpg", "img/reparto/Luis_de_la_Rosa_Mientras_El_Lobo_No_Esta.jpg", "img/reparto/Luyani_Carazo_Mientras_El_Lobo_No_Esta.jpg", "img/reparto/Mauricio_Garcia_Lozano_Mientras_El_Lobo_No_Esta.jpg", "img/reparto/Michel_Arluk_Mientras_El_Lobo_No_Esta.jpg", "img/reparto/Miranda_Kay_Mientras_El_Lobo_No_Esta.jpg"], g = 0; g < j.length; g++) i[g] = new XMLHttpRequest, i[g].open("GET", j[g], !0), i[g].responseType = "blob", i[g].send();
    var k = [],
        l = [];
    for (g = 1; g <= 4; g++) l.push("img/feed/feed" + g + ".jpg");
    for (var g = 0; g < l.length; g++) k[g] = new XMLHttpRequest, k[g].open("GET", l[g], !0), k[g].responseType = "blob", k[g].send();
    for (var m = [], n = ["img/icons/audio.svg", "img/icons/audioMuted.svg", "img/icons/bullet.svg", "img/icons/calidadHide.svg", "img/icons/calidadShow.svg", "img/icons/close.svg", "img/icons/facebook.svg", "img/icons/footerShow.svg", "img/icons/full.svg", "img/icons/instagram.svg", "img/icons/pause.svg", "img/icons/play.svg", "img/icons/prev.svg", "img/icons/sig.svg", "img/icons/twitter.svg", "img/icons/youtube.svg"], g = 0; g < n.length; g++) m[g] = new XMLHttpRequest, m[g].open("GET", n[g], !0), m[g].responseType = "blob", m[g].send();
    for (var o = [], p = ["fonts/book/gb.eot", "fonts/book/gb.ttf", "fonts/book/gb.woff", "fonts/book/gb.woff2"], g = 0; g < p.length; g++) o[g] = new XMLHttpRequest, o[g].open("GET", p[g], !0), o[g].responseType = "blob", o[g].send();
    for (var q = [], r = ["fonts/medium/gb.eot", "fonts/medium/gb.ttf", "fonts/medium/gb.woff", "fonts/medium/gb.woff2"], g = 0; g < r.length; g++) q[g] = new XMLHttpRequest, q[g].open("GET", r[g], !0), q[g].responseType = "blob", q[g].send()
}

function loadAssetsDesktop720() {
    var a, b = supportedVideoFormat(vTag);
    if (" " == b ? a = 0 : "mp4" == b ? a = 1 : "webm" == b && (a = 2), 1 === a) {
        for (c = 0; c <= 9; c++) urlVidList720_mp4.push("assets/vid/720/720clip" + c + ".mp4");
        for (var c = 0; c < urlVidList720_mp4.length; c++) xhrVidList720_mp4[c] = new XMLHttpRequest, xhrVidList720_mp4[c].open("GET", urlVidList720_mp4[c], !0), xhrVidList720_mp4[c].responseType = "blob", xhrVidList720_mp4[c].send()
    }
    if (2 === a) {
        for (c = 0; c <= 9; c++) urlVidList720_webm.push("assets/vid/720/720clip" + c + ".webm");
        for (var c = 0; c < urlVidList720_webm.length; c++) xhrVidList720_webm[c] = new XMLHttpRequest, xhrVidList720_webm[c].open("GET", urlVidList720_webm[c], !0), xhrVidList720_webm[c].responseType = "blob", xhrVidList720_webm[c].send()
    }
}

function initSliderVideo() {
    function b(a) {
        var b = " ";
        return "probably" == a.canPlayType("video/webm") || "maybe" == a.canPlayType("video/webm") ? b = "webm" : "probably" != a.canPlayType("video/mp4") && "maybe" != a.canPlayType("video/mp4") || (b = "mp4"), b
    }

    function e() {
        function b() {
            a[1].oncanplay = function() {
                wrapDesktopInit.style.opacity = "0", interfaceDesk.style.display = "block", setTimeout(function() {
                    interfaceDesk.style.opacity = "1", videoSettings.style.opacity = "1", wrapDesktopInit.style.display = "none"
                }, 1e3)
            }
        }

        function c(b) {
            var c = a[numVideo];
            if (c.play(), 1 === b && (console.log(" "), c.style.display = "block", c.play(), c.onended = function() {
                    c.style.display = "none", numVideo++, 10 === numVideo && (numVideo = 1), d()
                }), 2 === b && (c.pause(), c.style.display = "none", numVideo--, numVideo < 1 && (numVideo = 9), setTimeout(function() {
                    c = a[numVideo], c.style.display = "block", c.play(), c.onended = function() {
                        c.style.display = "none", numVideo++, 10 === numVideo && (numVideo = 0), d()
                    }
                }, 50)), 3 === b && (c.pause(), c.style.display = "none", numVideo++, 10 === numVideo && (numVideo = 1), setTimeout(function() {
                    c = a[numVideo], c.style.display = "block", c.play(), c.onended = function() {
                        c.style.display = "none", numVideo++, 10 === numVideo && (numVideo = 0), d()
                    }
                }, 50)), 4 === b) {
                var e = _("iconPlay");
                videoPause = !videoPause, videoPause ? (c.pause(), e.setAttribute("src", "img/icons/pause.svg")) : videoPause || (c.play(), e.setAttribute("src", "img/icons/play.svg"))
            }
            5 === b && (document.mozFullScreen || document.webkitFullScreen ? document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen() : videoSliderWrap.mozRequestFullScreen ? videoSliderWrap.mozRequestFullScreen() : videoSliderWrap.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT))
        }

        function d() {
            c(1)
        }
        var a = document.getElementsByTagName("video");
        a[0].setAttribute("poster", " "), b(), c(1), vPrev.addEventListener("click", function() {
            c(2)
        }), vNext.addEventListener("click", function() {
            c(3)
        }), vPlay.addEventListener("click", function() {
            c(4)
        }), vFull.addEventListener("click", function() {
            c(5)
        })
    }
    for (var a, c = 0; c <= 9; c++) {
        a = document.createElement("video"), a.style.width = "100%", a.style.height = "100%", a.style.objectFit = "cover", a.style.display = "none", a.setAttribute("preload", "auto"), a.setAttribute("poster", "img/poster/p" + c + ".jpg");
        var d = b(a);
        a.setAttribute("src", "assets/vid/720/720clip" + c + "." + d), videoSliderWrap.appendChild(a), 9 === c && e()
    }
}

function loadAssetsMobile() {
    function c(c) {
        if (c.lengthComputable) {
            var d = c.loaded / c.total * 100;
            b.style.width = d + "%", d >= 100 && (a.style.opacity = "0", b.style.opacity = "0", f(), setTimeout(function() {
                a.style.display = "none", b.style.display = "none"
            }, 700))
        }
    }

    function f() {
        function b() {
            switch (window.orientation) {
                case -90:
                case 90:
                    a.style.backgroundImage = "url(img/poster_mientras_el_lobo_no_esta_horizontal.jpg)", a.style.backgroundRepeat = "no-repeat", a.style.backgroundSize = "cover";
                    break;
                default:
                    wrapMobileImg.style.backgroundRepeat = "no-repeat", wrapMobileImg.style.backgroundSize = "cover", wrapMobileImg.style.backgroundImage = "url(img/poster_mientras_el_lobo_no_esta_vertical.jpg)"
            }
        }
        var a = document.body;
        window.matchMedia("(orientation: portrait)").matches && (wrapMobileImg.style.backgroundImage = "url(img/poster_mientras_el_lobo_no_esta_vertical.jpg)", wrapMobileImg.style.backgroundRepeat = "no-repeat", wrapMobileImg.style.backgroundSize = "cover"), window.addEventListener("orientationchange", b)
    }
    var a = document.createElement("div");
    document.body.appendChild(a), a.className = "transition", a.style.position = "absolute", a.style.top = "0", a.style.left = "0", a.style.width = "100%", a.style.height = "100%", a.style.background = "#000";
    var b = document.createElement("div");
    a.appendChild(b), b.style.position = "absolute", b.style.top = "calc(50% - 5px)", b.style.height = "5px", b.style.background = "#fff";
    var d = new XMLHttpRequest;
    d.open("GET", "img/poster_mientras_el_lobo_no_esta_vertical.jpg", !0), d.responseType = "blob", d.addEventListener("progress", c), d.send();
    var e = new XMLHttpRequest;
    e.open("GET", "img/poster_mientras_el_lobo_no_esta_horizontal.jpg", !0), e.responseType = "blob", e.send()
}

function iPadImg() {
    wrapMobileImg.style.display = "block"
}


function swapCritic(){
  function fadeIn(e){
    e.style.display = "block";
    setTimeout(function(){
      e.style.opacity = "0.6";
      e.style.marginTop = "0";
    },100);
  }



  function fadeOut(e){
    e.style.opacity = "0";
    e.style.marginTop = "-20px";
    setTimeout(function(){
      e.style.display = "none";
    },800);
  }

  setTimeout(function(){
    /* SLIDER */
    numCritica++;
    if(numCritica < critica.length){
      swapCritic();
    }
    if(numCritica >= critica.length){
      numCritica = 0;
      swapCritic();
    }
  },5000);


  /* CASOS */
  if(numCritica === 0){
    fadeOut(critica[2]);
    setTimeout(function(){
        fadeIn(critica[0]);
    },1000);
  }
  if(numCritica === 1){
    fadeOut(critica[0]);
    setTimeout(function(){
        fadeIn(critica[1]);
    },1000);
  }
  if(numCritica === 2){
    fadeOut(critica[1]);
    setTimeout(function(){
      fadeIn(critica[2]);
    },1000);
  }
}

function bulletCero() {
    repartoBullet[0].style.opacity = "1", repartoBullet[1].style.opacity = "0.5", repartoBullet[2].style.opacity = "0.5", repartoBullet[3].style.opacity = "0.5", repartoBullet[4].style.opacity = "0.5", repartoBullet[5].style.opacity = "0.5"
}

function bulletUno() {
    repartoBullet[0].style.opacity = "0.5", repartoBullet[1].style.opacity = "1", repartoBullet[2].style.opacity = "0.5", repartoBullet[3].style.opacity = "0.5", repartoBullet[4].style.opacity = "0.5", repartoBullet[5].style.opacity = "0.5"
}

function bulletDos() {
    repartoBullet[0].style.opacity = "0.5", repartoBullet[1].style.opacity = "0.5", repartoBullet[2].style.opacity = "1", repartoBullet[3].style.opacity = "0.5", repartoBullet[4].style.opacity = "0.5", repartoBullet[5].style.opacity = "0.5"
}

function bulletTres() {
    repartoBullet[0].style.opacity = "0.5", repartoBullet[1].style.opacity = "0.5", repartoBullet[2].style.opacity = "0.5", repartoBullet[3].style.opacity = "1", repartoBullet[4].style.opacity = "0.5", repartoBullet[5].style.opacity = "0.5"
}

function bulletCuatro() {
    repartoBullet[0].style.opacity = "0.5", repartoBullet[1].style.opacity = "0.5", repartoBullet[2].style.opacity = "0.5", repartoBullet[3].style.opacity = "0.5", repartoBullet[4].style.opacity = "1", repartoBullet[5].style.opacity = "0.5"
}

function bulletCinco() {
    repartoBullet[0].style.opacity = "0.5", repartoBullet[1].style.opacity = "0.5", repartoBullet[2].style.opacity = "0.5", repartoBullet[3].style.opacity = "0.5", repartoBullet[4].style.opacity = "0.5", repartoBullet[5].style.opacity = "1"
}

function sliderReparto(a) {
    1 === a && (repartoWrap.style.display = "block", setTimeout(function() {
        repartoWrap.style.top = "0", repartoWrap.style.opacity = "1";
        feedWrap.style.zIndex = "-100";
    }, 100), videoSettings.style.display = "none"), 2 === a && (repartoWrap.style.top = "100%", repartoWrap.style.opacity = "0", videoSettings.style.display = "block", feedWrap.style.zIndex = "500000"), 3 === a && (moveLeft++, moveLeft > 5 && (moveLeft = 0)), 4 === a && (moveLeft--, moveLeft < -5 && (moveLeft = 0)), 0 === moveLeft && (sliderMove.style.left = "0", bulletCero()), 1 !== moveLeft && moveLeft !== -5 || (sliderMove.style.left = "-100%", bulletUno()), 2 !== moveLeft && moveLeft !== -4 || (sliderMove.style.left = "-200%", bulletDos()), 3 !== moveLeft && moveLeft !== -3 || (sliderMove.style.left = "-300%", bulletTres()), 4 !== moveLeft && moveLeft !== -2 || (sliderMove.style.left = "-400%", bulletCuatro()), 5 !== moveLeft && moveLeft !== -1 || (sliderMove.style.left = "-500%", bulletCinco())
}

function onPlayerReady(a) {
    verTrailer.addEventListener("click", function() {
        audioTag.muted = !0, iconAudio.setAttribute("src", "img/icons/audioMuted.svg"), trailer.style.display = "block", setTimeout(function() {
            trailer.style.opacity = "1", a.target.playVideo()
        }, 100)
    }), closeTrailer.addEventListener("click", function() {
        trailer.style.opacity = "0", setTimeout(function() {
            trailer.style.display = "none", a.target.stopVideo(), audioTrack.muted = !1, iconAudio.setAttribute("src", "img/icons/audio.svg")
        }, 100)
    })
}

var canPlayT = 0,
    wrapDesktopInit = _("wrapDesktopInit"),
    wrapDesktop = _("wrapDesktop"),
    wrapMobileImg = _("wrapMobileImg"),
    wrapAni = _("wrapAni"),
    interfaceDesk = _("interfaceDesk");
wrapMobileImg.className = "transition", wrapDesktopInit.className = "transition";
var vTag = document.createElement("video"),
    initAni = 0,
    xhrVidList480_mp4 = [],
    urlVidList480_mp4 = [],
    xhrVidList480_webm = [],
    urlVidList480_webm = [],
    xhrVidList720_mp4 = [],
    urlVidList720_mp4 = [],
    xhrVidList720_webm = [],
    urlVidList720_webm = [],
    videoSliderWrap = _("videoSliderWrap"),
    trailerPortrait = _("trailerPortrait"),
    trailerPText = _("trailerPText"),
    trailerLandscape = _("trailerLandscape"),
    trailerLText = _("trailerLText"),
    interfaceLand = _("interfaceLand"),
    audioTag = document.createElement("audio"),
    sourceTag = document.createElement("source"),
    vPrev = _("vPrev"),
    vPlay = _("vPlay"),
    vNext = _("vNext"),
    vFull = _("vFull"),
    vAudio = _("vAudio"),
    vCalidad = _("vCalidad"),
    irReparto = _("irReparto"),
    repartoWrap = _("repartoWrap"),
    irInicio = _("irInicio"),
    videoSettings = _("videoSettings"),
    prevReparto = _("prevReparto"),
    nextReparto = _("nextReparto"),
    sliderMove = _("sliderMove"),
    feedWrap = _("feedWrap"),
    footer = document.getElementsByTagName("footer")[0],
    btnFooter = _("btnFooter"),
    muteButton = !1,
    variconAudio = _("iconAudio"),
    verTrailer = _("verTrailer"),
    closeTrailer = _("closeTrailer"),
    trailer = _("trailer"),
    tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var c480p = _("c480p"),
    c720p = _("c720p"),
    calidad720 = !1,
    player;
window.onload = function() {
    var a = 0,
        b = null != navigator.userAgent.match(/iPad/i);
    b && (a = 1, iPadImg()),
        function(b) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = 1)
        }(navigator.userAgent || navigator.vendor || window.opera), 1 == a && (loadAssetsMobile(), wrapDesktopInit.style.display = "none", wrapDesktop.style.display = "none", videoSliderWrap.style.display = "none", repartoWrap.style.display = "none", feedWrap.style.display = "none", footer.style.display = "none", btnFooter.style.display = "none"), 0 == a && (loadAssetsDesktop(), loadAssetsDesktop720(), swapCritic(), initSliderVideo(), onYouTubeIframeAPIReady(), interfaceLand.style.display = "none")
};
var numVideo = 1,
    videoPause = !1;
trailerPortrait.addEventListener("touchstart", function() {
    trailerPortrait.style.background = "rgba(255,255,255,0.5)", trailerPText.style.color = "#000"
}), trailerPortrait.addEventListener("touchend", function() {
    trailerPortrait.style.background = "rgba(255,255,255,0)", trailerPText.style.color = "#808080"
}), trailerLandscape.addEventListener("touchstart", function() {
    trailerLandscape.style.background = "rgba(255,255,255,0.5)", trailerLText.style.color = "#000"
}), trailerLandscape.addEventListener("touchend", function() {
    trailerLandscape.style.background = "rgba(255,255,255,0)", trailerLText.style.color = "#808080"
});
var repartoSlider = document.getElementsByClassName("repartoSlider"),
    repartoBullet = document.getElementsByClassName("repartoBullet"),
    moveLeft = 0;
prevReparto.addEventListener("click", function() {
    sliderReparto(4)
}), nextReparto.addEventListener("click", function() {
    sliderReparto(3)
}), irReparto.addEventListener("click", function() {
    sliderReparto(1)
}), irInicio.addEventListener("click", function() {
    sliderReparto(2)
}), repartoBullet[0].addEventListener("click", function() {
    sliderMove.style.left = "0%", bulletCero()
}), repartoBullet[1].addEventListener("click", function() {
    sliderMove.style.left = "-100%", bulletUno()
}), repartoBullet[2].addEventListener("click", function() {
    sliderMove.style.left = "-200%", bulletDos()
}), repartoBullet[3].addEventListener("click", function() {
    sliderMove.style.left = "-300%", bulletTres()
}), repartoBullet[4].addEventListener("click", function() {
    sliderMove.style.left = "-400%", bulletCuatro()
}), repartoBullet[5].addEventListener("click", function() {
    sliderMove.style.left = "-500%", bulletCinco()
});
var cerrarFooter = _("cerrarFooter");
btnFooter.addEventListener("click", function() {
    footer.style.bottom = "-20px"
}), btnCerrarF.addEventListener("click", function() {
    footer.style.bottom = "-100%"
});
var overBtnSet = document.getElementsByClassName("overBtnSet"),
    iconCalidad = _("iconCalidad"),
    changeCalidad = !1,
    subCalidad = _("subCalidad");
vCalidad.addEventListener("mouseover", function() {

}), vCalidad.addEventListener("mouseout", function() {

}), vAudio.addEventListener("mouseover", function() {
    overBtnSet[1].style.opacity = "1", overBtnSet[1].style.top = "0"
}), vAudio.addEventListener("mouseout", function() {
    overBtnSet[1].style.opacity = "0", overBtnSet[1].style.top = "-40px"
}), vFull.addEventListener("mouseover", function() {
    overBtnSet[2].style.opacity = "1", overBtnSet[2].style.top = "0"
}), vFull.addEventListener("mouseout", function() {
    overBtnSet[2].style.opacity = "0", overBtnSet[2].style.top = "-40px"
}), vCalidad.addEventListener("click", function() {
    changeCalidad = !changeCalidad, changeCalidad ? (iconCalidad.setAttribute("src", "img/icons/calidadHide.svg"), subCalidad.style.opacity = "1", subCalidad.style.display = "block") : changeCalidad || (iconCalidad.setAttribute("src", "img/icons/calidadShow.svg"), subCalidad.style.opacity = "0", subCalidad.style.display = "none")
});
