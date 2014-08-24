$(function(){

    function clearWinner(){
        $('.winner').removeClass('winner');
    };

    function cupUp(){
        $('.winner .cup').addClass('cupUp');
    };

    function cupDown(){
        $('.cup').removeClass('cupUp');
    };

    $('.cup').on('click', function(){
        if($(this).hasClass('cupUp')){
            cupDown();
        }
        else if($(this).parent().hasClass('winner')){
            $(this).addClass('cupUp');
            $('.message').fadeIn();
            setTimeout(cupDown, 700);
            setTimeout(clearLeft, 1000);
            setTimeout(clearWinner, 1000);
            setTimeout(function hideMessage(){ $('.message').fadeOut()}, 1700);
        }
        else {
            $(this).addClass('cupUp');
            setTimeout(cupDown, 500);
        }
    });

    $('#youHaveWon button').on('click', function(){
        $('.message').fadeOut();
    });

    function selectRandomWinner(){
        var rand = getRandNumber();
        $('.cupWrap:nth-of-type(' + rand + ')').addClass('winner');
    };
    window.getRandNumber = getRandNumber;

    function getRandNumber(){
        var rand = Math.round((Math.random() * 2)) + 1;
        return rand;
    };

    function clearLeft(){
        $('#cup1').parent().css('left', 0);
        $('#cup2').parent().css('left', 280);
        $('#cup3').parent().css('left', 560);
    };


    $('.button').on('click', function(){
        changeCount = 0;
        $('.message').fadeOut();
        $('input').prop('disabled', true);
        clearLeft();
        clearWinner();
        selectRandomWinner();
        setTimeout(cupUp, 1000);
        setTimeout(cupDown, 1500);
        setTimeout(interval, 2000);
    });

    var changeCount = 0;

    function mixTwoRandomCups(){
        var firstCupNumber = getRandNumber();
        var secondCupNumber = getRandNumber();

        if (firstCupNumber != secondCupNumber)  {
            var $firstCup = $('#cup' + firstCupNumber).parent();
            var $secondCup = $('#cup' + secondCupNumber).parent();

            var firstLeft = $firstCup.css('left');
            var secondLeft = $secondCup.css('left');

            $firstCup.css('left', secondLeft);
            $secondCup.css('left', firstLeft);

            changeCount = changeCount + 1;

            if(changeCount > 15) {
                clearInterval(mixCups);
                $('input').prop('disabled', false);
            }
        } else {
            mixTwoRandomCups();
        }
    };

    function interval(){
        mixCups = setInterval(mixTwoRandomCups, 500);
    };
    var mixCups;

});











