if (varmierror == '0')

{
$(document).ready(function () {
$.notify({
// options
icon: 'glyphicon glyphicon-thumbs-up',
title: 'MESAJINIZ BAŞARIYLA BİZE ULAŞTI!',
message: 'Teşekkürler, ekibimiz en kısa sürede ilettiğiniz konuyla ilgili size geri dönüş sağlayacaktır.'
}, {
// settings
type: 'success'
});
    });
}

if (varmierror == '1')
        {
            $(document).ready(function () {
                $.notify({
                    // options
                    icon: 'glyphicon glyphicon-thumbs-up',
                    title: 'MESAJ ULAŞTIRILAMADI!',
                    message: 'Lütfen form doğrulama sorusunun cevabını doğru yazdığınızdan emin olarak tekrar deneyiniz.'
                }, {
                    // settings
                    type: 'danger'
                });
            });
        }