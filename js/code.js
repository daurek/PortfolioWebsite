$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function()
{
    var $section = $('.progress-element');

    $(document).bind('scroll', function(ev)
    {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;

        if (scrollOffset > containerOffset)
        {
            $(document).unbind('scroll');
            $(".progress-element").each(function()
            {
                var progressBar = $(".progress-bar");
                    progressBar.each(function(indx)
                    {
                        $(this).animate({"width": $(this).attr("aria-valuenow") + "%"}, 500);
                    });
            });
        }
    });
});
