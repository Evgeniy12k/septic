"use strict";
const togglePopUp = () => {
    const popupCall = document.querySelector('.popup-call');
      let callBtn = document.querySelectorAll('.call-btn');
      
   
        
 callBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        if(window.innerWidth > 768){
            popupCall.style.opacity = '0'; 
            let n = 0;
            const timer = setInterval(() => { 
                n += 0.1;
                popupCall.style.opacity = `${n}`;
    //  останавливаем таймер
                if (popupCall.style.opacity === '1') {
                    clearInterval(timer);
                }

            }, 40);
            popupCall.style.display = 'block';
            
        }else{
            popupCall.style.display = 'block';
            popupCall.style.opacity = '1';
        }
    });
}); 
const formName = document.getElementById('name_1'),
formPhone = document.getElementById('phone_1');


// закрытие окна
popupCall.addEventListener('click', (event) => {
    let target = event.target;

   
    if(target.classList.contains('popup-close', 'popup-call popup')){
        if(window.innerWidth > 768){
            popupCall.style.opacity = '1';
            let n = 1;
            const timer = setInterval(() => {
                n-= 0.1;
                popupCall.style.opacity = `${n}`;

                if (popupCall.style.opacity === '-0.1') {
                    // очищение полей
                    formName.value = '';
                    formPhone.value = '';
                    popupCall.style.display = 'none';
                    clearInterval(timer);
                }

            }, 40);
            
        }else{
            popupCall.style.display = 'none';
        }
    }else {
        target = target.closest('.popup-content');
        if(!target){
            popupCall.style.display = 'none';
            formName.value = '';
             formPhone.value = '';
        }
    }
});



};





togglePopUp();