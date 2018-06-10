var cl = console.log.bind(console);
cl('online');
var pane = $('.flex-item'), box = $('#player'), wh = pane.width() - box.width(), wv = pane.height() - box.height(), d = {}, x = 5;
function newh(v, a, b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    if (n < 1 || n > wh) {
        alert('Hboom!');
        location.reload();
    }
    return n < 0 ? 0 : n > wh ? wh : n;
}
function newv(v, a, b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    if (n < 1 || n > wv) {
        alert('Wboom!');
        location.reload();
    }
    return n < 0 ? 0 : n > wv ? wv : n;
}
$(window).keydown(function (e) { d[e.which] = true; });
$(window).keyup(function (e) { d[e.which] = false; });
setInterval(function () {
    box.css({
        left: function (i, v) { return newh(v, 37, 39); },
        top: function (i, v) { return newv(v, 38, 40); }
    });
    wh = pane.width() - box.width();
    wv = pane.height() - box.height();
}, 20);
var song = new Audio("src/song.mp3");
song.play();
