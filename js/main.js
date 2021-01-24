let showToday=document.getElementById("showToday");

    function getmyDay()
    {
        let Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        return Days[day];
    }
function showMyToday()
{
    let now=new Date(),
     hours=now.getHours()-12,
     min=now.getMinutes(),
     sec=now.getSeconds();
     day=now.getDay();

    if(hours<10)
    {
        hours= '0'+hours;
    }
    if(min<10)
    {
        min= '0'+min;
    }
    if(sec<10)
    {
        sec= '0'+sec;
    }

    showToday.innerHTML= `Today is : ${getmyDay()} , Current time : ${hours}:${min}:${sec}`

}

    window.onload=function()
    {
        setInterval(showMyToday,1000);
    }
    