<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Setup Theme Wordpress</title>
    <!-- Esconde as mudanças visuais da biblioteca de acessibilidade. -->
    <!--[if lt IE 9]>
            <script src="./assets/scripts/js/jQuery.js"></script>
            <script async defer src="./assets/scripts/js/allPolify.js"></script>
        <![endif]-->
    <!--[if (gte IE 6)&(lte IE 8)]>
            <script src="./assets/scripts/js/jQuery.js"></script>
            <script async defer src="./assets/scripts/js/allPolify.js"></script>
        <![endif]-->
    <script>
        function loadJS(u) {
            const r = document.getElementsByTagName("script")[0],
                s = document.createElement("script");
            s.src = u;
            r.parentNode.insertBefore(s, r);
        }
        if (!window.HTMLPictureElement) {
            document.createElement('picture');
            loadJS("./assets/scripts/js/respimage.min.js");
        }
    </script>
    <link rel="stylesheet" type="text/css" href="./assets/css/main.css" media="print" onload="this.media='all'" />
    <link href="./assets/fontawesome/css/all.css" rel="stylesheet" type="text/css" media="print" onload="this.media='all'" />
</head>