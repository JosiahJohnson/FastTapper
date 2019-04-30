var timeLimit = 10000;
var prevTime, taps;
var gameOver = true;

$(function ()
{
	document.addEventListener("touchstart", TouchStart, { passive: false });
	document.addEventListener("touchmove", TouchMove, { passive: false });
});

function ResetGame()
{
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
		alert("Score: " + taps);
	}

	$("#Time").text(timeLeft);
}

function TouchStart(e)
{
	if (!gameOver)
	{
		taps++;
	}
	else
	{
		gameOver = false;
		ResetGame();
	}

	$("#Taps").text(taps);
}

function TouchMove(e)
{
	e.preventDefault();
}