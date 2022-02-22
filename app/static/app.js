nunjucks.configure({ autoescape: true });

$(function() {
    $("a").click(function(e) {
        render($(this).attr('href'), {});
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