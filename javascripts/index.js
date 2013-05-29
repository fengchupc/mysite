$(function() {
    $('#loading').activity();
    setTimeout("removeit()", 3000);
    $('#contant').hide();
    setInterval("timeStr = new Date().toLocaleString();timer.innerText=timeStr;", 1000);
    //show clock
    $('#footer').hide();
    /*
     $('#loading').blurjs({
     source: 'body',
     overlay: 'rgba(0,0,255,0.4)'
     });*/
    $('#mylist li div.back').hide().css('left', 0);

    $('#mylist li').hover(function() {
        $(this).find('div').stop().rotate3Di('flip', 250, {
            direction : 'unclockwise',
            sideChange : mySideChange
        });
    }, function() {
        $(this).find('div').stop().rotate3Di('unflip', 500, {
            sideChange : mySideChange
        });
    });
})
function removeit() {
    $('#loading').activity(false);
    $('#loading').hide();
    $('#contant').show();
    $('#footer').show();
}

function mySideChange(front) {
    if (front) {
        $(this).parent().find('div.front').show();
        $(this).parent().find('div.back').hide();

    } else {
        $(this).parent().find('div.front').hide();
        $(this).parent().find('div.back').show();
    }
}

