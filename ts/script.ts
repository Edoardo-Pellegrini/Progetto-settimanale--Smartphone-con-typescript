class Smartphone{
    carica:number;
    numeroChiamate:number;

    constructor(carica:number,numeroChiamate:number){
        this.carica = carica
        this.numeroChiamate = numeroChiamate;


    }
    get carica_(){
        return this.carica
    }
    ricarica5(){
        this.carica += 5.00;
        aggiorna_dati(iphone,iphone1,iphone2)
        console.log('Carica iphone1 :'+iphone.carica)
        console.log('Carica iphone2 :'+iphone1.carica)
        console.log('Carica iphone3 :'+iphone2.carica)
        
       
            
            
            
            
            
            
    
        
    }
    ricarica10(){
        this.carica += 10.00;
        aggiorna_dati(iphone,iphone1,iphone2)
        console.log('Carica iphone1 :'+iphone.carica)
        console.log('Carica iphone2 :'+iphone1.carica)
        console.log('Carica iphone3 :'+iphone2.carica)
            
    }

    chiamata(){
        console.log('numero on =  '+ on)
        let ele = this;
        if(on == 0  ){

            if(this.carica>=0.20){
            

                console.log('chiamata accesa')
                this.numeroChiamate +=1
                console.log('Numero di chiamate telefono ='+this.numeroChiamate) 
                aggiorna_dati(iphone,iphone1,iphone2)
                on = 1;
                timer = setInterval(function time(){
    
                    if(on == 1){
                        if(ele == iphone){
                            document.querySelectorAll('.timer')[0].innerHTML = (h>9 ? h: '0' + h )+ ':'+ (min>9 ? min: '0' + min) +'.'+ (sec>9 ? sec: '0'+ sec)  ;
                            
                            sec++
                        
                        
                            console.log( 'Timer Chiamata ='+h +' '+ min +' ' +sec)
                            if(sec == 60){
                                sec = 0;
                                
                                min++
                                if(ele.carica>=0.20){
                                    ele.carica -=0.20;
                                    console.log('Saldo telefono = '+ele.carica)
                                    aggiorna_dati(iphone,iphone1,iphone2)
                                }else{
                                    clearInterval(timer);
                                    sec = 0;
                                    min = 0;
                                    h = 0;
                                    on = 0;
                                    document.querySelectorAll('.timer')[0].innerHTML = '';
                                    
                                
                                    console.log('credito insufficente,chiamata terminata')
                    
                                }
                            }
                            else if(min == 60){
                                min = 0;
                                h++
                            }
                        }
                        else if(ele == iphone1){
                            document.querySelectorAll('.timer')[1].innerHTML = (h>9 ? h: '0' + h )+ ':'+ (min>9 ? min: '0' + min) +'.'+ (sec>9 ? sec: '0'+ sec)  ;
                            
                            sec++
                        
                        
                            console.log( 'Timer Chiamata ='+h +' '+ min +' ' +sec)
                            if(sec == 60){
                                sec = 0;
                                
                                min++
                                if(ele.carica>=0.20){
                                    ele.carica -=0.20;
                                    console.log('Saldo telefono = '+ele.carica)
                                    aggiorna_dati(iphone,iphone1,iphone2)
                                }else{
                                    clearInterval(timer);
                                    sec = 0;
                                    min = 0;
                                    h = 0;
                                    on = 0;
                                    document.querySelectorAll('.timer')[1].innerHTML = '';
                                    
                                
                                    console.log('credito insufficente,chiamata terminata')
                    
                                }
                            }
                            else if(min == 60){
                                min = 0;
                                h++
                            }
                        }
                        else if(ele == iphone2){
                            document.querySelectorAll('.timer')[2].innerHTML = (h>9 ? h: '0' + h )+ ':'+ (min>9 ? min: '0' + min) +'.'+ (sec>9 ? sec: '0'+ sec)  ;
                            
                            sec++
                        
                        
                            console.log( 'Timer Chiamata ='+h +' '+ min +' ' +sec)
                            if(sec == 60){
                                sec = 0;
                                
                                min++
                                if(ele.carica>=0.20){
                                    ele.carica -=0.20;
                                    console.log('Saldo telefono = '+ele.carica)
                                    aggiorna_dati(iphone,iphone1,iphone2)
                                }else{
                                    clearInterval(timer);
                                    sec = 0;
                                    min = 0;
                                    h = 0;
                                    on = 0;
                                    document.querySelectorAll('.timer')[2].innerHTML = '';
                                    
                                
                                    console.log('credito insufficente,chiamata terminata')
                                    alert('credito insufficente,chiamata terminata')
                                }
                            }
                            else if(min == 60){
                                min = 0;
                                h++
                            }
                        }
                    }
                    
                   
                },1000);
                this.carica -= 0.20;
                console.log('Saldo telefono = '+this.carica.toFixed(2))
                aggiorna_dati(iphone,iphone1,iphone2)
            }else{
               alert('credito insufficente')
               console.log('credito insufficente')
            }
            
            
             
        }
            
        else if(on == 1){
            //chiusura chiamata
            clearInterval(timer);
            sec = 0;
            min = 0;
            h = 0;
            on = 0;
            document.querySelectorAll('.timer')[0].innerHTML = '';
            document.querySelectorAll('.timer')[1].innerHTML = '';
            document.querySelectorAll('.timer')[2].innerHTML = '';
        }
        
        
    }
    resetChiamate(){
        this.numeroChiamate = 0;
        aggiorna_dati(iphone,iphone1,iphone2)
        console.log('Chiamate resettate')
        alert('reset chiamate effettuato')
    }
    
    
        
    
    
    
   

}
let on = 0;





let iphone = new Smartphone(0.40,0);
let iphone1 = new Smartphone(1.00,0);
let iphone2 = new Smartphone(0.60,0);

let telefoni = [] = [iphone,iphone1,iphone2];








// funzione timer chiamata 
let sec = 0;
let min = 0;
let h = 0;
let timer : number;


/* function time(){
    
    if(on == 1){
        document.querySelector('#timer')?.innerHTML = (h>9 ? h: '0' + h )+ ':'+ (min>9 ? min: '0' + min) +'.'+ (sec>9 ? sec: '0'+ sec) ;
        sec++
    
    
        console.log(h +' '+ min +' ' +sec)
        if(sec == 60){
            sec = 0;
            
            min++
            if(this.carica>=0.20){
                iphone.carica -=0.20;
                console.log(iphone.carica)
                saldo()
            }else{
                iphone.chiamata()
                alert('Chiamata terminata per credito insufficente')

            }
        }
        else if(min == 60){
            min = 0;
            h++
        }
    }
    return sec
   
} */

let cont = 0;
function ricarica(ele:Smartphone){
    let h = document.querySelectorAll('.soldi')[0]
    let h1 = document.querySelectorAll('.soldi')[1]
    let h2 = document.querySelectorAll('.soldi')[2]
    let ric5:any = document.createElement('div')
    if(cont==0){
        let btn = document.createElement('button')
        btn.innerHTML = '5$'
        btn.addEventListener('click',()=>ele.ricarica5())
        
        let btn2 = document.createElement('button')
        btn2.innerHTML = '10$'
        btn2.addEventListener('click',()=>ele.ricarica10())
        ric5.appendChild(btn)
        ric5.appendChild(btn2)
        if(ele == iphone){h.appendChild(ric5)}
        else if(ele == iphone1){h1.appendChild(ric5)}
        else{h2.appendChild(ric5)}
        
        
        /* h?.addEventListener('click',()=>{
            document.getElementsByClassName('.navbar')[0].innerHTML = '<p>logo</p><p>Saldo:'+ele.carica+'$</p>'
            document.getElementsByClassName('.navbar')[1].innerHTML = '<p>logo</p><p>Saldo:'+ele.carica+'$</p>'
            document.getElementsByClassName('.navbar')[2].innerHTML = '<p>logo</p><p>Saldo:'+ele.carica+'$</p>'
        }) */
        cont = 1;
    }else if(cont==1){
        h.innerHTML='';
        h1.innerHTML='';
        h2.innerHTML='';
        cont = 0;
        

    }
    
}



let body = document.querySelector('body');
body != null;


let foto =['download','OIP','ter'];
let ind = -1;
document.addEventListener('DOMContentLoaded', () => {


    let flex = document.createElement('div')
    flex.className = 'flex'
    let div1 = document.querySelector('#append') as HTMLDivElement
    div1.appendChild(flex)



    telefoni.forEach(function(ele){
        ind++
        let telefono = document.createElement('div')
        telefono.className = 'telefono';
        telefono.style.backgroundImage = 'url(../img/'+foto[ind]+'.jpg)'
        
        flex.appendChild(telefono)
        let navbar = document.createElement('div')
        navbar.className = 'navbar'
        navbar.innerHTML = '<p><i class="bi bi-apple"></i></p><p>Saldo:'+ele.carica.toFixed(2)+'$</p>'
        telefono.appendChild(navbar);
        let main = document.createElement('div')
        
        let btn = document.createElement('button')
        btn.innerHTML ='<i class="bi bi-coin"></i>Ricarica'
        btn.addEventListener('click',()=>ricarica(ele))
        main.appendChild(btn)
        let h3 = document.createElement("h3")
        h3.className ='soldi'
        let h4 = document.createElement("h4")
        h4.className ='timer'
        main.appendChild(h3)
        main.appendChild(h4)
        let call = document.createElement('button')
        call.innerHTML ='<i class="bi bi-telephone-fill"></i>'
        call.addEventListener('click',()=>ele.chiamata())
        main.appendChild(call)
        telefono.appendChild(main)



        let footer = document.createElement('div')
        footer.className = 'footer'
        let p = document.createElement('p')
        if(ele == iphone1){
            p.style.color = 'black'
        }
        p.innerHTML = '<i class="bi bi-telephone-outbound-fill" ></i>...'+ele.numeroChiamate+'chiamate effettuate'
        let reset = document.createElement('button')
        reset.innerHTML ='<i class="bi bi-telephone-minus-fill"></i>'
        reset.addEventListener('click',()=>ele.resetChiamate())
        footer.appendChild(p)
        footer.appendChild(reset)
        telefono.appendChild(footer)
        

    })

    
    
});
function aggiorna_dati(ele:Smartphone,ele1:Smartphone,ele2:Smartphone){
    document.querySelectorAll('.navbar')[0].innerHTML = '<p><i class="bi bi-apple"></i></p><p>Saldo:'+iphone.carica.toFixed(2)+'$</p>'
    document.querySelectorAll('.navbar')[1].innerHTML = '<p><i class="bi bi-apple"></i></p><p>Saldo:'+iphone1.carica.toFixed(2)+'$</p>'
    document.querySelectorAll('.navbar')[2].innerHTML = '<p><i class="bi bi-apple"></i></p><p>Saldo:'+iphone2.carica.toFixed(2)+'$</p>'
    document.querySelectorAll('p')[2].innerHTML ='<i class="bi bi-telephone-outbound-fill" ></i>...'+ele.numeroChiamate+'chiamate effettuate'
    document.querySelectorAll('p')[5].innerHTML ='<i class="bi bi-telephone-outbound-fill" ></i>...'+ele1.numeroChiamate+'chiamate effettuate'
    document.querySelectorAll('p')[8].innerHTML ='<i class="bi bi-telephone-outbound-fill" ></i>...'+ele2.numeroChiamate+'chiamate effettuate'
    /* let i:number; */
    /* for (let i = 0; i < telefoni.length; i++) {

        const element = document.querySelectorAll('.navbar')[i] ;
        if(i=0){
            element.innerHTML ='<p>logo</p><p>Saldo:'+ele.carica+'$</p>'
        }else if(i=1){
            element.innerHTML ='<p>logo</p><p>Saldo:'+ele1.carica+'$</p>'
        }else if(i=2){
            element.innerHTML ='<p>logo</p><p>Saldo:'+ele2.carica+'$</p>'
        }
        
        
    } */
    /* for(let i = 0, i>=telefoni.length, i++){
       document.querySelectorAll('.navbar')[i].innerHTML ='<p>logo</p><p>Saldo:'+ele.carica+'$</p>'
    }; */

    /* document.querySelector('.navbar')?.innerHTML = '<p>logo</p><p>Saldo:'+ele.carica+'$</p>' */
}



/* <div class="flex">
        <div class="telefono" id="iphone">
            <div id="navbar">
                <p>logo</p>
                
                <p>Saldo:<span id="carica"></span>$</p>
            </div>
            <div>
                <h2><i class="bi bi-coin" onclick="ricarica()"></i></h2> <!-- ricarica soldi -->
                <h3 id="soldi"></h3>
                <h4 id="timer"></h4>
                <h2><i class="bi bi-telephone-fill" onclick="iphone.chiamata()"></i></h2> <!-- chiamare -->
            </div>
            <div id="footer">
                <p><i class="bi bi-telephone-outbound-fill" ></i>  <span id="chiamate">  </span>chiamate effettuate</p><!-- numero chiamate -->
                <p><i class="bi bi-telephone-minus-fill"onclick="iphone.resetChiamate()"></i></p><!-- reset chiamate -->
               
            </div> 
            


        </div>
       
  
    </div>



 */