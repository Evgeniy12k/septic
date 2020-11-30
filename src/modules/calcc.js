'use strict';
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

    export default calcc;