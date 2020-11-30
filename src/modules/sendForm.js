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

export default sendForm;