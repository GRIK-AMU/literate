nunjucks.configure({ autoescape: true });

function form_to_dict(form) {
    var d = {};
    var f = new FormData(form);
    for (var element of f.keys())
        d[element] = f.get(element);
    return d;
}

function refresh() {
    $("a").on('click', function(e) {
        render($(this).attr('href'), {});
        return false;
    });
    $("form").on('submit', function(e) {
        kwargs = form_to_dict(e.target);
        // console.log(kwargs);
        render($(this).attr('action'), kwargs);
        return false;
    });
}

const start_url = window.location.href;

function render(href, kwargs)
{
    $.ajax({
        url: `${start_url}/views/${href}.html`,
        success: function (data) {
            str = nunjucks.renderString(data, kwargs);
            $("body").html(str);
            $(refresh());
        },
    })
}

$(refresh());