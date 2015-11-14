$( document ).ready(function(){
       $(".button-collapse").sideNav();
      $('select').material_select();
       $('.datepicker').pickadate({
   selectMonths: true, // Creates a dropdown to control month
   selectYears: 15 // Creates a dropdown of 15 years to control year
 });
})

function create()
{
    
     

}


function addmember()
{
    var name =  $(':text[name="share_ppl_name_input"]').val();
    var mail =  $(':text[name="share_ppl_address_input"]').val();
    var auth = $('select[name="share_ppl_auth_imput"]').val();


 $('.memberlist').after("<tr><td>"+ name +"</td><td>" + mail + "</td><td>" + auth + "</td></tr>");   
    
}

