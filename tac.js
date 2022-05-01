var player = 1;
var btns = document.getElementsByTagName("button");
$("button").click(function() 
{
	if(player == 1) 
    {
        if(!$(this).hasClass("fa fa-o") && !$(this).hasClass("fa fa-times"))
        {
            $(".sp1").removeClass("active");
            $(".sp2").addClass("active");
            $(this).addClass("fa fa-o");
            player = 2;
            checkWin("fa fa-o");
        }
        else 
        {
            $(this).css("background-color", "red");
		    setTimeout(() => { $(this).css("background-color", "white");}, 100);
        }
	}
	else 
    {
        if(!$(this).hasClass("fa fa-o") && !$(this).hasClass("fa fa-times"))
        {
            $(".sp2").removeClass("active");
            $(".sp1").addClass("active");
            $(this).addClass("fa fa-times");
            player = 1;
            checkWin("fa fa-times");
	    }
        else 
        {
            $(this).css("background-color", "red");
		    setTimeout(() => { $(this).css("background-color", "white");}, 150);
        }
    }
});
function checkWin(playerSign) {
	if ($(".box1").hasClass(playerSign) && $(".box2").hasClass(playerSign) && $(".box3").hasClass(playerSign))
	{
        var arr = [1,2,3];
		winner(arr,playerSign);
	} 
    else if ($(".box4").hasClass(playerSign) && $(".box5").hasClass(playerSign) && $(".box6").hasClass(playerSign))
	{
		var arr = [4,5,6];
		winner(arr,playerSign);
	} else if ($(".box7").hasClass(playerSign) && $(".box8").hasClass(playerSign) && $(".box9").hasClass(playerSign))
	{
		var arr = [7,8,9];
		winner(arr,playerSign);
	} else if ($(".box1").hasClass(playerSign) && $(".box4").hasClass(playerSign) && $(".box7").hasClass(playerSign))
	{
		var arr = [1,4,7];
		winner(arr,playerSign);
	} else if ($(".box2").hasClass(playerSign) && $(".box5").hasClass(playerSign) && $(".box8").hasClass(playerSign))
	{
		var arr = [2,5,8];
		winner(arr,playerSign);
	} else if ($(".box3").hasClass(playerSign) && $(".box6").hasClass(playerSign) && $(".box9").hasClass(playerSign))
	{
		var arr = [3,6,9];
		winner(arr,playerSign);
	} else if ($(".box1").hasClass(playerSign) && $(".box5").hasClass(playerSign) && $(".box9").hasClass(playerSign))
	{
		var arr = [1,5,9];
		winner(arr,playerSign);
	} else if ($(".box3").hasClass(playerSign) && $(".box5").hasClass(playerSign) && $(".box7").hasClass(playerSign))
	{
		var arr = [3,5,7];
		winner(arr,playerSign);
	}
    else
    {
        if(allFilled())
        {
            $(".result").removeClass("hide");
            $(".result").text("IT'S A TIE. GO ON");
        }
    }
}
function allFilled()
{
    for(var i=1;i<10;i++)
    {
        if(!$(".box"+i).hasClass("fa"))
        {
            return false;
        }
    }
    return true;
}
function disable()
{
    for(var i=0;i<btns.length;i++)
    {
        btns[i].disabled = true;
    }
}
function winner(arr,symbol)
{
    for(var i=0;i<arr.length;i++)
    {
        $(".box"+arr[i]).css("color", "white");
        $(".box"+arr[i]).css("background-color", "green");
    }
	if(symbol == "fa fa-o")
    {
        $(".result").removeClass("hide");
        $(".result").html("<span>PLAYER&nbsp;</span><i class='fa fa-o'></i><span>&nbsp;WON</span>");
    }
    else
    {
        $(".result").removeClass("hide");
        $(".result").html("<span>PLAYER&nbsp;</span><i class='fa fa-times'></i><span>&nbsp;WON</span>");
    }
    disable();
}


