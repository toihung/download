$('a#sohelDesign').attr('href', 'https://www.facebook.com/hung.pr0.vn/').text('Sohel Mahmud').attr('style', 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:15px!important;color:#f0f0f0!important;');
setInterval(function () {
    if (!$('a#sohelDesign:visible').length) {
        window.location.href = 'https://www.facebook.com/hung.pr0.vn/'
    }
}, 2500)