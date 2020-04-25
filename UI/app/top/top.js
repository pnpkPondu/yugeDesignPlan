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

    var h = $('#main_panel').height() - 132;
    $('.item_contens').height(h);

    setAction();
}

setGameDetailsPanel = function(gameName){
    $('#main_panel > div').addClass('hidden');
    var paternPlanNum = $('#patern_plan').prop('class').replace('patern_plan_', '');

    $('#main_panel').append(
        $(`#template_patern_plan_${paternPlanNum}_2`).render()
    );

    $('.game_details_game_name').text(gameName);

    $('#game_details_back_btn').click(function(){
        $('#game_details_panel').remove();
        $('#main_panel > div').removeClass('hidden');
    });
}

setAction = function(){
    $('.tab_item').off();
    $('.tab_item').click(
        function(){
            $('.tab_item').removeClass('select_tab');
            $(this).addClass('select_tab');

            var paternPlanNum = $('#patern_plan').prop('class').replace('patern_plan_', '');
            var selectTabId = $(this).prop('id');
            if(selectTabId == 'tab_me'){
                setPaternPlan(paternPlanNum, 0);
            }
            else if(selectTabId == 'tab_friends'){
                setPaternPlan(paternPlanNum, 1);
            }
        }
    );

    $('#friends_list_panel .one_friend').off();
    $('#friends_list_panel .one_friend').click(function(){
        var friendName = $(this).children('.friend_name').text();

        $('#friend_game_panel .item_name').text(friendName + '\'s Games');

        $('.one_friend').removeClass('select_friend not_select_friend');
        $('.one_friend').addClass('not_select_friend');
        $(this).removeClass('not_select_friend').addClass('select_friend');

        $('.item_name').removeClass('hidden');
        $('.item_contens').removeClass('hidden');
    });

    $('.one_game').off();
    $('.one_game').click(function(){
        var gameName = $(this).children('.game_name').text();
        setGameDetailsPanel(gameName);
    })
}