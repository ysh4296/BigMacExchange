import Script from 'next/script';

const GoogleAdsense = () => {
    if (process.env.NODE_ENV !== 'production') {
        return null;
    }
    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.GOOGLE_ADSENSE_ACCOUNT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
};

export default GoogleAdsense;
