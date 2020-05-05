$(function(){
    var displayHeight = $(window).height();
   $('body').height(displayHeight);

   setPaternPlan(1, 0);
});

/**
 * tab: 0=me, 1=friends
 */
setPaternPlan = function(plan, tab){
    $('#menu_panel + div').remove();

    $('#main_panel').append(
        $(`#template_patern_plan_${plan}_${tab}`).render()
    );

    setAction();
}

setAction = function(){
    $('.menu_item').off();
    $('.menu_item').click(function(){
        $('.menu_item').removeClass('select_menu');
        $(this).addClass('select_menu');

        var selectMenuId = $(this).prop('id');
        if(selectMenuId == 'menu_me'){
            setPaternPlan(1, 0);
        }
        else if(selectMenuId == 'menu_friends_list'){
            setPaternPlan(1, 1);
        }
    });

    $('#has_game_panel .one_game').off();
    $('#has_game_panel .one_game').click(function(){
        var gameName = $(this).children('.game_name').text();
        setGameDetailsPanel(gameName);
    })

    $('.tab_item').off();
    $('.tab_item').click(
        function(){
            $('.tab_item').removeClass('select_tab');
            $(this).addClass('select_tab');

            var selectTabId = $(this).prop('id');
            if(selectTabId == 'has_game_tab'){
                $('#has_game_panel').removeClass('hidden');
                $('#wish_game_panel').addClass('hidden');
            }
            else if(selectTabId == 'wish_list_tab'){
                $('#has_game_panel').addClass('hidden');
                $('#wish_game_panel').removeClass('hidden');
            }
        }
    );

    $('#friends_list_panel .one_friend').off();
    $('#friends_list_panel .one_friend').click(function(){
        var friendName = $(this).children('.friend_name').text();

        setPaternPlan(1, 0);
        $('.user_name').text(friendName);
    });

}

setGameDetailsPanel = function(gameName){
    $('#menu_me_main_panel > div').addClass('hidden');

    $('#menu_me_main_panel').append(
        $(`#template_patern_plan_1_2`).render()
    );

    $('.game_details_game_name').text(gameName);

    $('#game_details_back_btn').click(function(){
        $('#game_details_panel').remove();
        $('#menu_me_main_panel > div').removeClass('hidden');
    });
}