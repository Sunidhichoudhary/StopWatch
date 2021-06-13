let pauseCount = 0;
    let hh=0;
    let mm=0;
    let ss=1;
    var timer;

    function pauseFn(){
        pauseCount++;

        let x = document.getElementById("pause");
        if(pauseCount%2!==0){
            x.innerHTML="continue";
            clearInterval(timer);
            timer=false;
        }
        else{
            x.innerHTML="pause";
            timer=setInterval(run,1000);
        } 
    }
    function stopFn(){
        let x = document.getElementById("pause");
        x.setAttribute("disabled","");
         
        let y = document.getElementById("stop");
        y.setAttribute("disabled","");

        let z = document.getElementById("start");
        z.removeAttribute("disabled");

        clearInterval(timer);
        timer=false;
        hh=0;mm=0;ss=0;
        stopwatch.textContent = (hh<10?"0"+hh:hh) + ":" + (mm<10?"0"+mm:mm) + ":" + (ss<10?"0"+ss:ss);
        pauseCount=0;
        x.innerHTML="pause";
    }

    function startFn() {
        let x = document.getElementById("pause");
        x.removeAttribute("disabled");
         
        let y = document.getElementById("stop");
        y.removeAttribute("disabled");

        let z = document.getElementById("start");
        z.setAttribute("disabled","");
        if(!timer)
        timer=setInterval(run,1000);
    }

    function run() {
        let stopwatch = document.getElementById("stopwatch");
        stopwatch.textContent = (hh<10?"0"+hh:hh) + ":" + (mm<10?"0"+mm:mm) + ":" + (ss<10?"0"+ss:ss);
        ss++;
        if(ss==60){
            ss=0;
            mm++;
        }
        if(mm==60){
            mm=0;
            hh++;
        }
        
    }