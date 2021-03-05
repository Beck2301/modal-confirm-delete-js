$(document).ready(function()
{
$('#confirm-delete').on('show.bs.modal',function(){
        $('.btn-ok').click(function(){
        console.log("Llamamos a la función de eliminación");
    });
});
        
    $('#go').click(function()
    {
        $('#confirm-delete').modal('show');
       
    })
});