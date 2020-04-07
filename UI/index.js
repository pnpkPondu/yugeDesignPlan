$(function(){
    createPanel();

    var displayHeight = $(window).height();
    $('body').height(displayHeight);
});

createPanel = function(){
    $('#color_plan').change(function(){
        var nowClass = $('#color_plan').prop('class');
        var newClass = 'color_plan_'+$(this).val();

        $('body').removeClass(nowClass).addClass(newClass);
        $('#color_plan').removeClass(nowClass).addClass(newClass);

        var fp = './assets/images/' + newClass + '_' + $('#title_img_plan').prop('class') +'.png';
        $('.login_title_img_panel img').prop('src', fp);
    });
    
    $('#font_plan').change(function(){
        var nowClass = $('#font_plan').prop('class');
        var newClass = 'font_plan_'+$(this).val();

        $('body').removeClass(nowClass).addClass(newClass);
        $('#font_plan').removeClass(nowClass).addClass(newClass);
    });
}


