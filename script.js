function setDate(){
    const now=new Date();
    seconds=now.getSeconds();
    secondDegree=seconds*6

    minutes=now.getMinutes();
    minuteDegree=minutes*6

    hours=now.getHours()%12;
    //hourDegree=hours*6
    hourDegree=((hours*5)+(Math.floor(minutes/12)))*6

    document.getElementsByClassName("second")[0].style["transform"]=`rotate(${secondDegree}deg)`;
    document.getElementsByClassName("minute")[0].style["transform"]=`rotate(${minuteDegree}deg)`;
    document.getElementsByClassName("hour")[0].style["transform"]=`rotate(${hourDegree}deg)`;
}


setInterval(setDate,1000)


