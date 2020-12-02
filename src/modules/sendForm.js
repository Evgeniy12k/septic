const sendForm = () => {

    const errorMessage = 'Что-то пошло  не так..',
          loadMessage = 'Загрузка.',
          successMessage = 'Спасибо! мы скоро с вами свяжемся!';
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
postData(body)
    .then((response) => {
          if(response.status !== 200) {
                            throw new Error('status network not 200');
          }
             
          statusMessage.textContent = successMessage;
            setTimeout(() => {
                
              statusMessage.textContent = '';
              document
                .querySelectorAll(".popup")
                .forEach(x => (x.style.display = " none "));
             },3000);
          
                    
         input.forEach((elem) => {
			elem.value = "";
			});
     })
     .catch((error) => {
        statusMessage.textContent = errorMessage;
         
      });
      

 }

);
}
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


 
 
};


const statusMessage = document.createElement('div'); 
statusMessage.style.cssText = 'color: green';

const postData = (body) => {
    return fetch('./server.php', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    


};

export default sendForm;