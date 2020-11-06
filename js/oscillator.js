var oscill;
rangefreq.oninput = Test;
freq.oninput= Test;

oddfreq.onclick=AddOddBtn;                      
addfreq.onclick=AddOddBtn;

function AddOddBtn(){
    let val = +freq.value + +this.value;
    if(val>+freq.max||val<+freq.min){return}                    // заменить на карент велью в объекте
 
    freq.value=+freq.value + +this.value;
    rangefreq.value=+rangefreq.value + +this.value;

    setFreqOscillator(+rangefreq.value + +this.value); 
}

onoffoscill.onclick=function(){
    if (!!!oscill){createOscillator()}
    if (oscill.playing){
        this.innerHTML='СТАРТ';
        oscill.disconnect(audioctx.destination); 
        oscill.playing=false;
    }else{
        this.innerHTML='СТОП';
        oscill.connect(audioctx.destination); 
        oscill.playing=true;  
    }  
}

function setFreqOscillator(Hz){                            // будущий метод
    if (oscill){
        oscill.frequency.value=Hz;  
    }         
}

function createOscillator(){
    audioctx= new (window.AudioContext || window.webkitAudioContext)();
    oscill=audioctx.createOscillator();
    //oscill.type='SINE'
    oscill.frequency.setValueAtTime(rangefreq.value, audioctx.currentTime);
    oscill.start();
    oscill.playing=false; 
}

function Test(){
    freq.value=this.value;
    rangefreq.value=this.value;
    setFreqOscillator(this.value); 
}

crt.onclick=()=>{
   createOscillator(); 
}