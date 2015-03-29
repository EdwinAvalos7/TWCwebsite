function start()
{
	showDef();
}

function showDef()
{	
	document.getElementById("tb").innerHTML = document.getElementById("tb1").innerHTML;
}

function swap(id1, id2)
{
	temp = document.getElementById(id1).innerHTML;
	document.getElementById(id2).innerHTML = temp;
}

function color(id, bool)
{
	if(bool)
	{
		id.style.color="red";
	}
	else
	{
		id.style.color="black";
	}
}