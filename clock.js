!(function (win, doc) {
    win.requestAnimationFrame = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || window.msRequestAnimationFrame;
    var hour = doc.getElementById("div-hour"), minute = doc.getElementById("div-minute"), second = doc.getElementById("div-second");
    var start = function () {
        // 当前时间
        var now = new Date(),
            // 午夜12点整
            midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0),
            // 当前时间与午夜12的之间的毫秒差
            ms = now.getTime() - midnight.getTime(),
            // 计算时、分、秒
            hh = ms / (1000 * 60 * 60),
            mm = hh * 60,
            ss = mm * 60;
        // 实现时钟旋转
        hour.style.transform = "rotate(" + (hh * 30 + (hh / 2)) + "deg)";
        minute.style.transform = "rotate(" + (mm * 6) + "deg)";
        second.style.transform = "rotate(" + (ss * 6) + "deg)";
        win.requestAnimationFrame(start);
    }
    win.requestAnimationFrame(start);
})(window, document);