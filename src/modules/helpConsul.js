const helpConsul = () => {
    let consultation  = document.querySelector('.popup-consultation'),
    btnConsultation = document.querySelector('.consultation-btn');   
   
btnConsultation.addEventListener('click', () => {
    const questionInput = document.querySelector('.director-form input[name="user_quest"]');
    const inputInPopup = popupConsult.querySelector('[name="user_quest"]');
    if (questionInput && inputInPopup) {
        inputInPopup.value = questionInput.value;
    };
        if(consultation.style.opacity === '0'){
             
            let n = 0;
            const timer = setInterval(() => { 
                n += 0.1;
                consultation.style.opacity = `${n}`;
    //  останавливаем таймер
                if (consultation.style.opacity === '1') {
                    clearInterval(timer);
                }

            }, 40);
            consultation.style.display = 'block';
            
        }else{
            consultation.style.display = 'block';
            consultation.style.opacity = '1';
        }
    });

    const formName3 = document.getElementById('name_13'),
    formPhone3 = document.getElementById('phone_13');
    // закрытие

    consultation.addEventListener('click', (event) => {
        let target = event.target;
    
       
        if(target.classList.contains('popup-close', 'popup-consultation popup')){
            if(consultation.style.opacity = '1'){
                
                let n = 1;
                const timer = setInterval(() => {
                    n-= 0.1;
                    consultation.style.opacity = `${n}`;
    
                    if (  consultation.style.opacity === '-0.1') {
                        // очищение полей
                        formName3.value = '';
                        formPhone3.value = '';
                        consultation.style.display = 'none';
                        clearInterval(timer);
                    }
    
                }, 40);
                
            }else{
                consultation.style.display = 'none';
            }
        }else {
            target = target.closest('.popup-content');
            if(!target){
                consultation.style.display = 'none';
                formName3.value = '';
                 formPhone3.value = ''
            }
        }
    });



    
    };

    export default helpConsul;