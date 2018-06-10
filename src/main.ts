var cl = console.log.bind(console);
cl('online');

var pane: JQuery = $('.flex-item'),
	box: JQuery = $('#player'),
	wh: number = pane.width() - box.width(),
	wv: number = pane.height() - box.height(),
	d: object = {},
	x: number = 5;

function newh(v: string, a: number, b: number): number {
	var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
	if (n < 1 || n > wh) {
		alert('Hboom!');
		location.reload();
	}
	return n < 0 ? 0 : n > wh ? wh : n;
}

function newv(v: string, a: number, b: number): number {
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

var song: HTMLAudioElement = new Audio("src/song.mp3");
// song.play();
song.setAttribute("autoplay", "");
// song.;