const discontModal = () =>{
    let discountBtn = document.querySelectorAll('.discount-btn');
    let  popupDiscount = document.querySelector('.popup-discount');
    discountBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            if(popupDiscount.style.opacity = '0'){
                
                let n = 0;
                const timer = setInterval(() => { 
                    n += 0.1;
                    popupDiscount.style.opacity = `${n}`;
        //  останавливаем таймер
                    if (popupDiscount.style.opacity === '1') {
                        clearInterval(timer);
                    }
    
                }, 40);
                popupDiscount.style.display = 'block';
                
            }else{
                popupDiscount.style.display = 'block';
                popupDiscount.style.opacity = '1';
            }
        });
    }); 
    const formName = document.getElementById('name_1'),
    formPhone = document.getElementById('phone_1');
    
    
    // закрытие окна
    popupDiscount.addEventListener('click', (event) => {
        let target = event.target;
    
       
        if(target.classList.contains('popup-close', 'popup-call popup')){
            if(popupDiscount.style.opacity = '1'){
                let n = 1;
                const timer = setInterval(() => {
                    n-= 0.1;
                    popupDiscount.style.opacity = `${n}`;
    
                    if (popupDiscount.style.opacity === '-0.1') {
                        // очищение полей
                        formName.value = '';
                        formPhone.value = '';
                        popupDiscount.style.display = 'none';
                        clearInterval(timer);
                    }
    
                }, 40);
                
            }else{
                popupDiscount.style.display = 'none';
            }
        }else {
            target = target.closest('.popup-content');
            if(!target){
                popupDiscount.style.display = 'none';
                formName.value = '';
                 formPhone.value = '';
            }
        }
    });
    
    };
    export default discontModal;