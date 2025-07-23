
import Header from "@/components/header"
import Footer from "@/components/footer"
import PurchasePage from "@/components/purchase-page"


export default function SteamPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Meta Pixel Code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1440391710625809');
          fbq('track', 'PageView');`
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1440391710625809&ev=PageView&noscript=1"
          alt="fb pixel"
        />
      </noscript>
      <Header />
      <main>
        <PurchasePage slug="steam" />
      </main>
      <Footer />
    </div>
  )
}
