import Script from 'next/script';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="vector-script" strategy="afterInteractive">
        {`
          !function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);
          vector.load("0bd6c765-d450-48c5-a3b5-bd6efa61d6ac");
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 