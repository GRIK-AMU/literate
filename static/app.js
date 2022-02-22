nunjucks.configure({ autoescape: true });

$(function() {
    $("a").click(function(e) {
        render($(this).attr('href'), {});
        e.preventDefault();
    });
    $("form").submit(function(e) {
        render($(this).attr('action'), $(this).serializeArray());
        e.preventDefault();
    });
});

function render(href, kwargs)
{
    $.ajax({
        url: `views/${href}.html`,
        success: function (data) {
            str = nunjucks.renderString(data, kwargs)
            $("body").html(str)
        },
    })
}