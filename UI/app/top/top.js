$(function(){
    var displayHeight = $(window).height();
   $('body').height(displayHeight);

   setPaternPlan(1, 0);

});

/**
 * tab: 0=me, 1=friends
 */
setPaternPlan = function(plan, tab){
    $('#main_panel').children().remove();

    $('#main_panel').append(
        $(`#template_patern_plan_${plan}_${tab}`).render()
    );

    setAction();
}

setAction = function(){
    $('.tab_item').click(
        function(){
            $('.tab_item').removeClass('select_tab');
            $(this).addClass('select_tab');
        }
    );
}