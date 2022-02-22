nunjucks.configure({ autoescape: true });

$(function() {
    $("a").click(function() {
        return render($(this).attr('href'), {});
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