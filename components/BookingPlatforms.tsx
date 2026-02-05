export default function BookingPlatforms() {
  const platforms = [
    {
      name: "Booking.com",
      icon: "🏨",
      url: "https://www.booking.com/hotel/ng/the-haven-suite.html?aid=2416740&label=metakayak-linkdsk-hcomparetous-city-M2017355_los-01_bw-001_curr-USD_nrm-01_gstadt-02_gstkid-00_lang-en_clkid-QgSVyNDjT3TfNWR7tWXgyKi04VMAmT4u-uTTW5XilPWiTsfukL0UB0Q%3D%3D&sid=0f64c98da9d8bcfeb4f241a350648084&all_sr_blocks=1092116603_382085595_2_1_0&checkin=2026-01-26&checkout=2026-01-27&dest_id=-2017355&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1092116603_382085595_2_1_0&hpos=1&matching_block_id=1092116603_382085595_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1092116603_382085595_2_1_0__6682&srepoch=1769379656&srpvid=39472c530737fe329359ed5acde9c2b3&type=total&ucfs=1&",
      color: "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      name: "Expedia",
      icon: "✈️",
      url: "https://www.expedia.com/Lagos-Hotels-Ikad-Hotel-And-Suite.h103402219.Hotel-Information?chkin=2026-01-26&chkout=2026-01-27&x_pwa=1&rfrr=HSR&pwa_ts=1769379764255&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=6289147&destination=Lagos%2C+Lagos%2C+Nigeria&destType=MARKET&neighborhoodId=6354406&selected=103402219&latLong=6.52437%2C3.3792&sort=RECOMMENDED&userIntent=&searchId=da5f8011-45d8-49ac-867f-334c90f43d63",
      color: "bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border-yellow-200",
    },
    {
      name: "Trip.com",
      icon: "🌍",
      url: "https://www.trip.com/hotels/detail/?cityId=87698&hotelId=102356645&checkIn=2026-01-27&checkOut=2026-01-28&adult=2&children=0&subStamp=1188&crn=1&ages=&travelpurpose=0&curr=USD&link=title&hoteluniquekey=H4sIAAAAAAAA_-NaycjFJMEkxMTBKDWPkePLtcUL2ISYDQ2MDO4zWmyVd5RvfR24w6rQwfPsGSCwKXUI4JnEKMmZBgYeDoJg-pmLgxMrxwtmCaYZjEvXPjdYwci4kXGHHFArR4DDDkamE4waC5iO7TtvsIsJouwQkJ7JLsFyionhEhPDLSaGR0wMr5gYPjEx_IKqaGJm6GJmmMQMUTeLmWERM4MUb1KipXmqiYlhWpq5oYmCkMb7jbdOsxkpTWJkiog4xShlaG5maWxhYGBiZmJkomeZbJiSUm5U4mqe6W_FLMXo5sEYxGbpYmZs4hilxcUcGuwiGM9-TjLwlrSDFIinCONpgXiGMF4Sa2qebkRExnSRAsYuRg4BRg_GCMYKxleMIFU_wP4FAFsnOu1FAQAA&subChannel=&masterhotelid_tracelogid=ba97e441ff714&NewTaxDescForAmountshowtype0=T&detailFilters=17%7C1~17~1*80%7C0%7C1~80~0&hotelType=normal&display=exavg&isFirstEnterDetail=T&locale=en-XX",
      color: "bg-green-50 hover:bg-green-100 text-green-700 border-green-200",
    },
  ];

  return (
    <section className="py-40 px-6" style={{ backgroundColor: "var(--light-gray)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest gold uppercase mb-4">BOOK WITH US</p>
          <h3 className="text-5xl font-light text-navy mb-3" style={{ fontFamily: "var(--font-playfair)" }}>Book With Your Favorite Platform</h3>
          <p className="text-gray-600">We&apos;re available on all major booking sites for your convenience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-8 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center text-center ${platform.color}`}
            >
              <span className="text-4xl mb-3">{platform.icon}</span>
              <span className="font-bold text-lg">{platform.name}</span>
              <span className="text-sm mt-2 opacity-75">Book now →</span>
            </a>
          ))}
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200 text-center">
          <p className="text-gray-700">
            <strong>Direct Booking:</strong> You can also contact us directly for the best rates and special offers
          </p>
        </div>
      </div>
    </section>
  );
}
