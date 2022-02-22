nunjucks.configure({ autoescape: true });

$(function() {
    $("a").click(function(e) {
        render($(this).attr('href'), {});
        e.preventDefault();
    });
    $("form").submit(function(e) {
        kwargs = $(this).serializeArray();
        console.log(kwargs);
        render($(this).attr('action'), kwargs);
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