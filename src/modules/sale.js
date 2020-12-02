const  sale = () =>{
    let check = document.querySelector('.check-btn'),
            popupCheck = document.querySelector('.popup-check');
           
    check.addEventListener('click', () => {
            
            if(popupCheck.style.opacity === '0'){
                 
                let n = 0;
                const timer = setInterval(() => { 
                    n += 0.1;
                    popupCheck.style.opacity = `${n}`;
        //  останавливаем таймер
                    if (popupCheck.style.opacity === '1') {
                        clearInterval(timer);
                    }
    
                }, 40);
                popupCheck.style.display = 'block';
                
            }else{
                popupCheck.style.display = 'block';
                popupCheck.style.opacity = '1';
            }
        });
    
        const formName2 = document.getElementById('name_12'),
    formPhone2 = document.getElementById('phone_12');
        // закрываем модалку
        popupCheck.addEventListener('click', (event) => {
            let target = event.target;
        
           
            if(target.classList.contains('popup-close', 'popup-call popup')){
                if(popupCheck.style.opacity === '1'){
                    
                    let n = 1;
                    const timer = setInterval(() => {
                        n-= 0.1;
                        popupCheck.style.opacity = `${n}`;
        
                        if ( popupCheck.style.opacity === '-0.1') {
                            // очищение полей
                            formName.value = '';
                            formPhone.value = '';
                            popupCheck.style.display = 'none';
                            clearInterval(timer);
                        }
        
                    }, 40);
                    
                }else{
                    popupCheck.style.display = 'none';
                }
            }else {
                target = target.closest('.popup-content');
                if(!target){
                    popupCheck.style.display = 'none';
                    formName.value = '';
                     formPhone.value = ''
                }
            }
        });
    
    };
    export default sale;