import Script from 'next/script';

const Addons = () => {
    if (process.env.NODE_ENV !== 'production') {
        return null;
    }
    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.GOOGLE_ADSENSE_ACCOUNT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        >
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-QLT29C3YQ4"
            ></script>
            <script>
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QLT29C3YQ4');
        `}
            </script>
        </Script>
    );
};

export default Addons;
