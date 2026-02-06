import Link from "next/link";
import Script from "next/script";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: "f", url: "https://facebook.com" },
    { name: "Instagram", icon: "📷", url: "https://instagram.com" },
    { name: "Twitter", icon: "𝕏", url: "https://twitter.com" },
    { name: "LinkedIn", icon: "in", url: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-6 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Ikad Hotels</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Luxury and comfort across Lagos
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61558804720679" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-lg transition-colors" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/ikadhotels" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 text-lg transition-colors" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/victoria-island" className="hover:text-white transition-colors">Victoria Island</Link></li>
              <li><Link href="/yaba" className="hover:text-white transition-colors">Yaba</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Victoria Island Booking</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p><a href="https://www.booking.com/hotel/ng/the-haven-suite.html?aid=2416740&label=metakayak-linkdsk-hcomparetous-city-M2017355_los-01_bw-001_curr-USD_nrm-01_gstadt-02_gstkid-00_lang-en_clkid-QgSVyNDjT3TfNWR7tWXgyKi04VMAmT4u-uTTW5XilPWiTsfukL0UB0Q%3D%3D&sid=0f64c98da9d8bcfeb4f241a350648084&all_sr_blocks=1092116603_382085595_2_1_0&checkin=2026-01-26&checkout=2026-01-27&dest_id=-2017355&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1092116603_382085595_2_1_0&hpos=1&matching_block_id=1092116603_382085595_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1092116603_382085595_2_1_0__6682&srepoch=1769379656&srpvid=39472c530737fe329359ed5acde9c2b3&type=total&ucfs=1&" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><i className="fa-solid fa-hotel"></i> Booking.com</a></p>
              <p><a href="https://www.expedia.com/Lagos-Hotels-Ikad-Hotel-And-Suite.h103402219.Hotel-Information?chkin=2026-01-26&chkout=2026-01-27&x_pwa=1&rfrr=HSR&pwa_ts=1769379764255&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=6289147&destination=Lagos%2C+Lagos%2C+Nigeria&destType=MARKET&neighborhoodId=6354406&selected=103402219&latLong=6.52437%2C3.3792&sort=RECOMMENDED&userIntent=&searchId=da5f8011-45d8-49ac-867f-334c90f43d63" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><i className="fa-solid fa-plane"></i> Expedia</a></p>
              <p><a href="https://www.trip.com/hotels/detail/?cityId=87698&hotelId=102356645&checkIn=2026-01-27&checkOut=2026-01-28&adult=2&children=0&subStamp=1188&crn=1&ages=&travelpurpose=0&curr=USD&link=title&hoteluniquekey=H4sIAAAAAAAA_-NaycjFJMEkxMTBKDWPkePLtcUL2ISYDQ2MDO4zWmyVd5RvfR24w6rQwfPsGSCwKXUI4JnEKMmZBgYeDoJg-pmLgxMrxwtmCaYZjEvXPjdYwci4kXGHHFArR4DDDkamE4waC5iO7TtvsIsJouwQkJ7JLsFyionhEhPDLSaGR0wMr5gYPjEx_IKqaGJm6GJmmMQMUTeLmWERM4MUb1KipXmqiYlhWpq5oYmCkMb7jbdOsxkpTWJkiog4xShlaG5maWxhYGBiZmJkomeZbJiSUm5U4mqe6W_FLMXo5sEYxGbpYmZs4hilxcUcGuwiGM9-TjLwlrSDFIinCONpgXiGMF4Sa2qebkRExnSRAsYuRg4BRg_GCMYKxleMIFU_wP4FAFsnOu1FAQAA&subChannel=&masterhotelid_tracelogid=ba97e441ff714&NewTaxDescForAmountshowtype0=T&detailFilters=17%7C1~17~1*80%7C0%7C1~80~0&hotelType=normal&display=exavg&isFirstEnterDetail=T&locale=en-XX" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><i className="fa-solid fa-globe"></i> Trip.com</a></p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Victoria Island</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p><a href="tel:09163738458" className="hover:text-white transition-colors"><i className="fa-solid fa-phone"></i> +234 916 373 8458</a></p>
              <p><a href="https://wa.me/2349163738458?text=Hello%20Ikad%20Hotels%20Victoria%20Island" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors"><i className="fa-brands fa-whatsapp"></i> WhatsApp</a></p>
              <p><a href="https://www.facebook.com/profile.php?id=61558804720679" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><i className="fa-brands fa-facebook-f"></i> Facebook</a></p>

            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Yaba</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p><a href="tel:08147318331" className="hover:text-white transition-colors"><i className="fa-solid fa-phone"></i> +234 814 731 8331</a></p>
              <p><a href="https://wa.me/2348147318331?text=Hello%20Ikad%20Hotels%20Yaba" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors"><i className="fa-brands fa-whatsapp"></i> WhatsApp</a></p>
              <p><a href="https://www.facebook.com/profile.php?id=61559000253887" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><i className="fa-brands fa-facebook-f"></i> Facebook</a></p>
              <p><a href="https://www.instagram.com/ikadhotels" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors"><i className="fa-brands fa-instagram"></i> Instagram</a></p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p><a href="tel:09163738458" className="hover:text-white"><i className="fa-solid fa-phone"></i> General</a></p>
              <p><a href="mailto:ikadhotelvi@gmail.com" className="hover:text-white"><i className="fa-solid fa-at"></i> info@ikadhotels.com</a></p>
              <p><a href="mailto:victoria@ikadhotels.com" className="hover:text-white"><i className="fa-solid fa-at"></i> Victoria Island</a></p>
              <p><a href="mailto:yaba@ikadhotels.com" className="hover:text-white"><i className="fa-solid fa-at"></i> Yaba</a></p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">&copy; {currentYear} Ikad Hotels. All Rights Reserved.</p>
        </div>
      </div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5VCFDDPX38"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-5VCFDDPX38');`,
        }}
      />
    </footer>
  );
}
