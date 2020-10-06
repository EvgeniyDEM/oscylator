var oscill;

rangefreq.oninput =function(){
   //console.log(this.value);
   freq.value=this.value;

   oscill.frequency.value=+this.value; 
}
freq.oninput=function(){
   console.log(this.value);
   rangefreq.value=this.value;

   oscill.frequency.value=+this.value; 
}

oddfreq.onclick=function(){
   if(freq.min==freq.value){return}                      // заменить на карент велью в объекте
   freq.value=freq.value-this.value;
   rangefreq.value=rangefreq.value-this.value;

}

addfreq.onclick=function(){
    if(freq.max==freq.value){return} 
    freq.value=+freq.value + +this.value;
    rangefreq.value=+rangefreq.value + +this.value; 
}

btnstart.onclick=function(){
     createOscillator()  
}

btnstop.onclick=function(){
    if (oscill){
        oscill.stop()
    }  
}

function createOscillator(){
    audioctx= new (window.AudioContext || window.webkitAudioContext)();
    oscill=audioctx.createOscillator();

    //oscill.type='SINE'
    oscill.frequency.value=440;
    oscill.connect(audioctx.destination); 
    oscill.start();
}