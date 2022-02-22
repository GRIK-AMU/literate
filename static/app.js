nunjucks.configure({ autoescape: true });

function form_to_dict(form) {
    var d = {};
    var f = new FormData(form);
    for (var element of f.keys())
        d[element] = f.get(element);
    return d;
}

$(function() {
    $("a").click(function(e) {
        e.preventDefault();
        render($(this).attr('href'), {});
    });
    $("form").submit(function(e) {
        e.preventDefault();
        kwargs = form_to_dict(e.target);
        // console.log(kwargs);
        render($(this).attr('action'), kwargs);
    });
});

function render(href, kwargs)
{
    $.ajax({
        url: `views/${href}.html`,
        success: function (data) {
            str = nunjucks.renderString(data, kwargs);
            $("body").html(str);
        },
    })
}