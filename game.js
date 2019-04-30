var timeLimit = 10000;
var prevTime, taps;
var gameOver = true;
var touchToStart = true;

$(function ()
{
	document.addEventListener("touchstart", TouchStart, { passive: false });
	document.addEventListener("touchmove", TouchMove, { passive: false });
	$("#QuitButton").click(function ()
	{
		$("#TitleScreen").show();
		$("#GameScreen").hide();
		$("#GameOverDiv").hide();
		touchToStart = true;
	});
});

function ResetGame()
{
	$("#TitleScreen").hide();
	$("#GameScreen").show();
	prevTime = Math.round(performance.now());
	taps = 1;

	requestAnimationFrame(Refresh);
}

function Refresh()
{
	var now = Math.round(performance.now()) - prevTime;
	var timeLeft = timeLimit - now;

	if (timeLeft > 0)
	{
		requestAnimationFrame(Refresh);
	}
	else
	{
		timeLeft = 0;
		gameOver = true;
		touchToStart = false;

		setTimeout(function ()
		{
			$("#GameOverDiv").show();
		}, 1500);
	}

	$("#Time").text(FormatTime(timeLeft));
}

function FormatTime(ms)
{
	//var time = 

	return ms.toString();
}

function TouchStart(e)
{
	if (!gameOver)
	{
		taps++;
		$("#Taps").text(taps);
	}
	else if (touchToStart)
	{
		gameOver = false;
		ResetGame();
		$("#Taps").text(taps);
	}
}

function TouchMove(e)
{
	e.preventDefault();
}