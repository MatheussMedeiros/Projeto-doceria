let imagens= document.querySelectorAll('.banner-galeria')
let modal= document.querySelector('.modal')
let modalImg= document.querySelector('#modal-img')
let btnClose= document.querySelector('#btn-close')
let srcVal="";
let btnDireita= document.querySelector('#btn-direita')
let btnEsquerda= document.querySelector('#btn-esquerda')

for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        if(i==0 || i==5 || i==8){
            btnEsquerda.classList.add('btn-active');
         } else {
            btnEsquerda.classList.remove('btn-active');
         }
         if(i==11 || i==4 || i==7){
            btnDireita.classList.add('btn-active');
         } else {
            btnDireita.classList.remove('btn-active');
         }

        srcVal=imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal-active');
        btnEsquerda.addEventListener('click', function(){
            srcVal=imagens[i=i-1].getAttribute('src');
            modalImg.setAttribute('src', srcVal);
            if(i==0 || i==5 || i==8){
                btnEsquerda.classList.add('btn-active');
             } else {
                btnEsquerda.classList.remove('btn-active');
             }
             if(i==11 || i==4 || i==7){
                btnDireita.classList.add('btn-active');
             } else {
                btnDireita.classList.remove('btn-active');
             }
        
});
        btnDireita.addEventListener('click', function(){
            srcVal=imagens[i=i+1].getAttribute('src');
            modalImg.setAttribute('src', srcVal);
            modalImg.setAttribute('src', srcVal);
            if(i==0  || i==5 || i==8){
                btnEsquerda.classList.add('btn-active');
             } else {
                btnEsquerda.classList.remove('btn-active');
             }
            if(i==11 || i==4 || i==7){
                btnDireita.classList.add('btn-active');
             } else {
                btnDireita.classList.remove('btn-active');
             }
        
});
     
    });
}

btnClose.addEventListener('click', function(){
    modal.classList.toggle('modal-active');
    
});



