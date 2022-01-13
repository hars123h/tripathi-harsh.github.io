$(document).ready(function(e) {
    $('.deleteModelButton').off().on("click",function(){
        if(confirm('CAUTION : Are you sure you want to delete this model ?') == true){
            $.ajax({
                url: '/deleteModel',
                data: $(this).prev().serialize(),
                type: 'POST',
                success: function(response){
                    $('#modelsTable').html(response);
                },
                error: function(error){
                    console.log(error);
                }
            });
        } else {
            return false;
        }
    });

    $('.deleteDataframeButton').off().on("click", function(){
        if(confirm('CAUTION : this will also delete all the models linked to this file') == true){
            $.ajax({
                url: '/deleteDataframe',
                data: $(this).prev().serialize(),
                type: 'POST',
                success: function(response){
                    $('.myFilesWrapper').html(response);
                    // re render models
                    $.ajax({
                        url : "/refreshModels",
                        type : "GET",
                        success : function(response){
                            $('#modelsTable').html(response);
                        }
                    })
                },
                error: function(error){
                    console.log(error);
                }
            });
        } else {
            return false
        }
    });

    $('.copyDefaultButton').off().click(function() {
        $.ajax({
            url: '/copyDefault',
            data: $(this).prev().serialize(),
            type: 'POST',
            success: function(response){
                $('.myFilesWrapper').html(response);
            },
            error: function(error){
                // check error code here , if 400 or 401 -> window.redirect.href = "somepage";
                console.log(error);
            }
        });
    });

});
