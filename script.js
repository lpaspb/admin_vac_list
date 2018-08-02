
$(document).ready(function() {
    $(function () {
        
    var checkbox = $(".check");
    
    var charge = $(".charge");
    
    var checks = []
    $('.add').click(function(){
        
    $('.question-card-content').append('<div class="card w-85 mb-2"><div class="card-body"><h5 class="card-title">Для менеджера<span class="ml-2">✎</span></h5><p class="card-text"><span class="badge badge-light mr-2">Опыт работы <span class="m-1 text-secondary">✕</span></span><a href="#" class="btn btn-link p-0 pr-2 pl-2">+</a></p></div></div>')
        
    });
        
    $('.question_button').click(function(){
        var option = 0;
        option = $("#inputGroupSelectQ option:selected").text();
        
        if ($("#inputGroupSelectQ option:selected").val() != 0){
            $('.draw').html('<span class="badge badge-light mr-2">' + option + '</span>');
        } else {
            $('.draw').html('<span class="badge badge-light mr-2">Нет</span>');
        }
    });
    
    $('#v-pills-profile-tab2').click(function(){
        
        $('#questions').removeClass('hide')
        $('#vac').addClass('hide')
        console.log('click2')
    });
        
    $('#v-pills-profile-tab1').click(function(){
        
        $('#vac').removeClass('hide')
        $('#questions').addClass('hide')
        console.log('click1')
        
    });
    
       
        
        $(document).on('click', 'li', function(){
        
        if ($(this).attr("class").indexOf("it1") != -1) {
        $('.card1').removeClass('hide')
        $('.card2').addClass('hide')
        $('.it1 > a').addClass('active')
        $('.it2 > a').removeClass('active')
            
        } else if ($(this).attr("class").indexOf("it2") != -1) {
            $('.card2').removeClass('hide')
        $('.card1').addClass('hide')
        $('.it2 > a').addClass('active')
        $('.it1 > a').removeClass('active')
        console.log($('.card2 < a'))
        }
    });
        
   
        
        
    $('.option1').click(function(){
         $('.draw').html('<span></span')
        if(checks.length == 0) {
        $('.draw').html('<span class="mr-2">нет</span>');    
        }
        for (var i = 0; i < checks.length; i++) {
        
       
       
        $('.draw').append('<span class="badge badge-light mr-2">' + checks[i] + '</span>');
       
        
        
        }
    })
        
        
    $('.check').change(function(){
        
         if($('.check').is(":checked")) {
            $(".manyactions").removeClass('hide');
            $(".vac-check").prop('checked', true);
             
             $(".ques").addClass('draw');
          }
         else {
             
             $(".vac-check").prop('checked', false);
             //$(".manyactions").addClass('hide')
             //$(".charge").addClass('hide')
             //$(".pres").addClass('hide')
             //$(".danger").addClass('hide') 
             //$(".custom-select").val(0);

             $(".ques").removeClass('draw');
           
        }
         
         
    });
    
    $('.vac-check').change(function(){   
        
         if($(this).is(":checked")) {
            $(".manyactions").removeClass('hide');
            
             $(this).parent().parent('div').parent('a').find('.ques').addClass('draw')
             
            
             
        } 
         else if ($(this).is(":checked") == false){
             //$(".manyactions").addClass('hide')
             //$(".charge").addClass('hide')
             //$(".pres").addClass('hide')
             //$(".danger").addClass('hide') 
             
             $(this).parent().parent('div').parent('a').find('.ques').removeClass('draw')
             
        }
         
        
    });
        
        
        
    $('.asel').change(function(){
            
        
        
        if ($(this).val() == 0) {
            $(".charge").addClass('hide')
             $(".pres").addClass('hide')
             $(".danger").addClass('hide')
        } else if ($(this).val() == 1) {
            $(".charge").removeClass('hide')
             $(".pres").addClass('hide')
             $(".danger").addClass('hide')
        }else if ($(this).val() == 2) {
            $(".pres").removeClass('hide')
             $(".charge").addClass('hide')
             $(".danger").addClass('hide')
        } else {
            $(".pres").addClass('hide')
             $(".charge").addClass('hide')
             $(".danger").removeClass('hide')
        }
    
    })

    });
});


