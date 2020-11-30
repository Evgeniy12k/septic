"use strict";
const calcc = () =>{
jsl(function(){
	function loadStatus(){
		var status=jsl('[name="onoffswitch"]').prop('checked');
		if(status){
			jsl('.two-well').css('display','inline-block');
		}else{
			jsl('.two-well').css('display','none');
		}
	}
	jsl('select').on('change',function(){
		calc()
	});
	jsl('[name="onoffswitch"]').on('change',function(){
		loadStatus();
		calc()
	});
	jsl('[name="onoffswitch-two"]').on('change',function(){
		calc()
	});
	loadStatus();
	jsl('.panel-heading').on('click',function(ev){
		jsl('.panel-collapse.collapse').forEach(function(el){
            el.classList.remove('in');
            
		});
		ev.target.closest('.panel').children[1].classList.add('in');
        calc()
        ev.preventDefault();
		return false;
	});
	jsl('[data-parent="#accordion"]').on('click',function(ev){
		jsl('.panel-collapse.collapse').forEach(function(el){
			el.classList.remove('in');
		});
		jsl(ev.currentTarget.hash).addClass('in');
        calc();
        ev.preventDefault();
		return false;
	});
	jsl('#accordion form').on('submit',function(ev){
		var accordionData = jsl('#accordion form').formToObject();
		if(!accordionData.onoffswitch){
			delete accordionData['two-count'];
			delete accordionData['two-diameter'];
		}
		jsl.ajax({
			url:ev.target.action,
			type:'POST',
			headers:{
				'Content-Type':'application/json',
			},
			4:function(){
				calc()
			}
		},accordionData);
		ev.preventDefault();
		return false;
	});

	function calc(){
		let accordionData = jsl('#accordion form').formToObject();
		if(!accordionData.onoffswitch){
			delete accordionData['two-count'];
			delete accordionData['two-diameter'];
		}

		let sum = 0;
		// 1. Выбираем тип камеры, получаем сумму (10000 или 15000)
		if(accordionData.onoffswitch){
			sum = 10000;
		}else{
			sum = 15000;
		}

		// 2. Далее в зависимости от диаметра к сумме добавляем 20% (от суммы полученной выше)  (если 2метра)
		if(accordionData['one-diameter'] == 2){
			sum+=sum*.2;
		}

		if(accordionData.onoffswitch){
			// 3. Далее добавляем к полученной выше сумме в зависимости от наличия колец у первого -  + 30% или 50 % от 10000
			if(accordionData['one-count'] == 2){
				sum+=.3*10000
			}
			if(accordionData['one-count'] == 3){
				sum+=.5*10000
			}
			//  и в зависимости от наличия второй камеры и кол-ва колец в ней плюс 20% или 40% от 5000 
			if(accordionData['two-count'] == 2){
				sum+=.2*5000
			}
			if(accordionData['two-count'] == 3){
				sum+=.4*5000
			}

		}else{
			// 3. Далее добавляем к полученной выше сумме в зависимости от наличия колец у первого -  + 30% или 50 % от 10000
			if(accordionData['one-count'] == 2){
				sum += .3*10000
			}
			if(accordionData['one-count'] == 3){
				sum+=.5*10000
			}
			
		}

		// 4. В зависимости от наличия днища и количества камер (если нету днища, то не добавляем) добавляем 10% или 20% от полученной суммы выше
		if(accordionData['onoffswitch-two']){
			if(accordionData['two-count'])
				sum += sum *.1;
			else
				sum += sum *.2;
		}
		jsl('[name="result"]').val(sum);
	}
	calc();
});
}


// модальное окно
const call = () => {
    const popupCall = document.querySelector('.popup-call');
      let callBtn = document.querySelectorAll('.call-btn');
        // первое модальное окно
      callBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        if(popupCall.style.opacity = '0'){
  
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
        if( popupCall.style.opacity = '1'){
            
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

// обработка кнопки Заказать со скидкой(2- модальное)

 let consultationBtn = document.querySelector('.consultation-btn');

// check Третье модально окно

    



}

// дисконт 
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
                    if(popupCheck.style.opacity = '1'){
                        
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

// кнопка больше
const newClass = () => {
    const buttonMore =  document.querySelector('.add-sentence-btn')
    const list =[...document.querySelectorAll('.sentence >.container >.text-center > .row >.col-md-4')]; 

    
    list.forEach((x) => {
        buttonMore.addEventListener('click',() =>{
            x.classList.remove('hidden');
            x.classList.remove('visible-sm-block');
            buttonMore.style.display = 'none';
        });
        
    });
};


// модальное окно Консультация.  
const helpConsul = () => {
    let consultation  = document.querySelector('.popup-consultation'),
    btnConsultation = document.querySelector('.consultation-btn');   
   
btnConsultation.addEventListener('click', () => {
        
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




// форма
const sendForm = () => {

    const errorMessage = 'Что-то пошло  не так..',
          loadMessage = 'Загрузка.',
          successMessage = ' Спасибо! мы скоро с вами свяжемся!';
    const form = document.querySelectorAll('form');
    const input = document.querySelectorAll('input');

// обработчик события для кнопки форм
for(let i = 0; i < form.length; i++) {
    form[i].addEventListener('submit', (event) =>{
        event.preventDefault();
        
    form[i].appendChild(statusMessage);//добавление элемента
//  статут загрузки 
        statusMessage.textContent = loadMessage;
// запрос к серверу
        
	const formData = new FormData(form[i]);
		
	let body = {};
	

	formData.forEach((val, key) => {
		body[key] = val;
	});
	// 
	postData(body, () =>{
		statusMessage.textContent = successMessage;
	//    очищаем все input 
		input.forEach((elem) => {
			elem.value = "";
			});
	}, (error) =>{
		statusMessage.textContent = errorMessage;
	console.error(error);
	});
	});
	}

// проверка полей
	document.addEventListener('input', (event) => {
    
		let target = event.target; 
		
		if(target.matches('.phone-user')){
			if (target.value.length > 15 && target.value.length != '' ){
				if (target.value.length > 15 && target.value.length != ''  ){
                    alert('введите правильный номер') ;
                    target.value = '';
                  }   
            }   
            target.value = target.value.replace(/[^+0-9]/gi, '');
        }  
        // if  (target.value.length < 7){
        //     alert('введите правильный номер') ;
        //     target.value = '';
        // }
		 
		 });

 document.addEventListener('input', (event) => {
	let target = event.target;

    if(target.matches('input[name$="user_name"]')) {
        if (target.value.length > 20 && target.value.length != '' ){
            alert('слишком много') ;
            target.value = '';
          }   
          target.value = target.value.replace(/[^-?!,.а-яё ]/iu, '');
    }
    
});
// проверяем строки Input на правильный ввод числа


     const statusMessage = document.createElement('div'); 
    statusMessage.style.cssText = 'color: green';
	
    const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest;

        request.addEventListener('readystatechange', () => {
           
    // проверка статуса
            if(request.readyState !== 4) {
                return;// выход из функции
            }
            if(request.status === 200) {
                outputData();
            }else {
                errorData(request.status);
            }
    
            });

// настройка соединения
        request.open('POST', './server.php');
// настрока заголовка
        request.setRequestHeader('Content-Type', 'application/json');
         
// получение данных 
      
// при работе с Json формате
         request.send(JSON.stringify(body));
    }

     
};


// запуск функций
	call();
	newClass();
	sendForm();
    calcc();
    helpConsul();
    discontModal();
    sale();