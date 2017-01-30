$(document).ready(function(){
    $(".add-item").click(function(){
        var item = $("#item").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + item + "</td></tr>";
        $("table tbody").append(markup);
    });

    // Find and remove selected table rows
    $(".delete-item").click(function(){
        $("table tbody").find('input[name="record"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();
            }
        });
    });
});