(function ($) {
    $.redirect = function (url, parameters, action) {
        if (typeof action == 'undefined') {
            action = 'post';
        }
        var form = $('<form action="'+url+'" method="' + action + '"></form>');
        form.appendTo('body');
        $.each(parameters, function (key, value) {
            var input = $('<input name="'+ key +'" value="' + value + '">');
            input.appendTo(form);
        });
        form.submit();
    };
}($));
