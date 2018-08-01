
$(document).ready(function() {
    $(function () {
        
    var checkbox = $(".check");
    
    var charge = $(".charge");
    
    
     $('.check').change(function(){
        
         if($('.check').is(":checked")) {
            $(".manyactions").removeClass('hide');
            $(".vac-check").prop('checked', true);
             
        } 
         else {
             
             $(".vac-check").prop('checked', false);
             $(".manyactions").addClass('hide')
             $(".charge").addClass('hide')
             $(".pres").addClass('hide')
             $(".danger").addClass('hide') 
             
             
        }
         
         
    });
    
    $('.vac-check').change(function(){   
        
         if($(this).is(":checked")) {
            $(".manyactions").removeClass('hide');
            
             
        } 
         else if ($(this).is(":checked") == false){
             $(".manyactions").addClass('hide')
             $(".charge").addClass('hide')
             $(".pres").addClass('hide')
             $(".danger").addClass('hide') 
             
             
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


