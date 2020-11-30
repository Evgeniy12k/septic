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
export default newClass;