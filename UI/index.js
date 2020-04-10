$(function(){
     var displayHeight = $(window).height();
    $('body').height(displayHeight);

    setPaternPlan(1);
});

setPaternPlan = function(num){
    $('.body_panel .login_items_panel').children().remove();

    $('.body_panel .login_items_panel').append(
        $(`#template_patern_plan_${num}`).render()
    )

    createPanel();
}

createPanel = function(){
    $('#patern_plan').change(function(){
        var nowClass = $('#patern_plan').prop('class');
        var newClass = 'patern_plan_'+$(this).val();

        $('body').removeClass(nowClass).addClass(newClass);
        $('#patern_plan').removeClass(nowClass).addClass(newClass);

        setPaternPlan($(this).val());
    });

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

    setAction();
}

setAction = function(){
    $('input.login_id').keydown(function(e){
        if(e.originalEvent.code == 'Enter'){
            $('#next_btn').click();
        }
    });

    $('input.password').keydown(function(e){
        if(e.originalEvent.code == 'Enter'){
            $('#login_btn').click();
        }
    });

    $('#next_btn').click(function(){
        $('.login_id_panel').addClass('hidden');
        $('.password_panel').removeClass('hidden');

        $('#next_btn').addClass('hidden');
        $('#pre_btn').removeClass('hidden');
        $('#login_btn').removeClass('hidden');

        $('.password').focus();
    });

    $('#pre_btn').click(function(){
        $('.login_id_panel').removeClass('hidden');
        $('.password_panel').addClass('hidden');

        $('#next_btn').removeClass('hidden');
        $('#pre_btn').addClass('hidden');
        $('#login_btn').addClass('hidden');
    });

    $('#login_btn').click(function(){
        console.log('login');
    });
}


