import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { News } from '../shared/modal/news';
import { AddNewsComponent } from './add-news/add-news.component';
import { NewsService } from './news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   /*articles= [
    {
    "source": {
    "id": null,
    "name": "Cointelegraph"
    },
    "author": "Cointelegraph By Mark Binns",
    "title": "Crypto banks are going to swallow fiat banks in 3 years — or even less",
    "description": "In three years, a younger generation of banking customers won’t do business with a traditional fiat bank unless it offers access to crypto.",
    "url": "https://cointelegraph.com/news/crypto-banks-are-going-to-swallow-fiat-banks-in-3-years-or-even-less",
    "urlToImage": "https://s3.eu-central-1.amazonaws.com/s3.cointelegraph.com/uploads/2020-10/aff60277-298e-4c8a-b686-b965288b19b3.jpg",
    "publishedAt": "2020-10-10T08:00:00Z",
    "content": "Within a few years, a younger generation of financial services customers are going to be able to walk into a bank and gain access to credit products, savings accounts and investments that can host bo… [+5584 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "This is Money"
    },
    "author": "By Lee Boyce for Thisismoney.co.uk",
    "title": "Best savings accounts: Have people stopped chasing better rates?",
    "description": "When it comes to hunting a good savings rate, it's safe to say that since the pandemic unfolded in March, it has been an increasingly difficult endeavor.",
    "url": "https://www.thisismoney.co.uk/money/saving/article-8815405/Best-savings-accounts-people-stopped-chasing-better-rates.html",
    "urlToImage": "https://i.dailymail.co.uk/1s/2020/10/08/11/34144028-0-image-a-8_1602154405827.jpg",
    "publishedAt": "2020-10-10T07:03:10Z",
    "content": "When it comes to hunting for a good savings rate, it's safe to say that since the pandemic unfolded in March, it has been an increasingly difficult endeavor.  \r\nNot that it has been an easy task for … [+10658 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "FXStreet"
    },
    "author": "Dhwani Mehta",
    "title": "Bitcoin Price Analysis: BTC/USD eyes $12K amid a potential symmetrical triangle breakout",
    "description": "Bitcoin (BTC/USD) is on a track to book four straight days of gains this Saturday, amid the upbeat mood seen across the crypto space. The most favorit",
    "url": "https://www.fxstreet.com/cryptocurrencies/news/bitcoin-price-analysis-btc-usd-eyes-12k-amid-a-potential-symmetrical-triangle-breakout-202010100651",
    "urlToImage": "https://editorial.fxstreet.com/images/Markets/Currencies/Digital Currencies/Bitcoin/bitcoins-33646574_Large.jpg",
    "publishedAt": "2020-10-10T06:51:42Z",
    "content": "<ul><li>BTC /USD hits fresh five-week highs to test $11,500 levels. </li><li>A symmetrical triangle spotted on the daily chart. </li><li>A daily closing above $11,080 key for additional upside.</li><… [+1494 chars]"
    },
    {
    "source": {
    "id": "rt",
    "name": "RT"
    },
    "author": "RT",
    "title": "China ramps up digital currency pilot testing with transactions topping 1.1 billion yuan",
    "description": "The People’s Bank of China (PBOC) said that 3.13 million transactions have been processed using the nation’s sovereign digital currency as part of a series of ongoing pilot programs in major cities such as Shenzhen and Xiongan. Read Full Article at RT.com",
    "url": "https://www.rt.com/business/502831-digital-yuan-transactions-growth/",
    "urlToImage": "https://cdni.rt.com/files/2020.10/article/5f7ed05285f5407a71777ad7.jpg",
    "publishedAt": "2020-10-10T06:12:08Z",
    "content": "According to the bank’s deputy governor, Fan Yifei, the currency has been used for more than 1.1 billion yuan ($162 million) worth of transactions. Pilots will also be conducted at the Beijing Winter… [+1524 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Cointelegraph"
    },
    "author": "Cointelegraph By Ray Salmond",
    "title": "$12K Bitcoin price back on the table after BTC rallies above $11.4K",
    "description": "Bitcoin price rallied to $11,491 after bulls managed to flip the $11K level from resistance to support.",
    "url": "https://cointelegraph.com/news/12k-bitcoin-price-back-on-the-table-after-btc-rallies-above-114k",
    "urlToImage": "https://s3.cointelegraph.com/storage/uploads/view/f2888747ddbdf58e0973616e4d7df189.jpg",
    "publishedAt": "2020-10-10T05:58:00Z",
    "content": "On Friday Bitcoin (BTC) price finally managed to break above the symmetrical triangle where the price had been compressing for the last 30 days. After holding the $11,000 level into the daily close, … [+1999 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "newsBTC"
    },
    "author": "Nick Chong",
    "title": "3 Bitcoin On-Chain Trends Show a Macro Bull Market Is Brewing",
    "description": "Bitcoin has surged higher over the past 48 hours due to positive fundamental trends. The cryptocurrency, which traded as low as $10,400 just a week ago, now trades for $11,400. Less than a few hours ago, the coin was trading just shy of $11,500. BTC’s ongoing…",
    "url": "https://www.newsbtc.com/analysis/btc/3-bitcoin-on-chain-trends-show-a-macro-bull-market-is-brewing/",
    "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/07/Depositphotos_44958507_l-2015.jpg",
    "publishedAt": "2020-10-10T04:27:34Z",
    "content": "Bitcoin has surged higher over the past 48 hours due to positive fundamental trends. The cryptocurrency, which traded as low as $10,400 just a week ago, now trades for $11,400. Less than a few hours … [+2639 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Seeking Alpha"
    },
    "author": "Rothko Research",
    "title": "FXY: Little Room Left On The Downside",
    "description": "The yen has been gradually appreciating in the past few years, limiting the upside gain in equities. In the short run, there is potential for JPY strength due to the rising uncertainty associated with the US elections (and Brexit).",
    "url": "https://seekingalpha.com/article/4378436-fxy-little-room-left-on-downside",
    "urlToImage": "https://static.seekingalpha.com/uploads/2020/10/9/49318052-16022578711118548_origin.png",
    "publishedAt": "2020-10-10T04:26:36Z",
    "content": "About FXY\r\nThe Invesco CurrencyShares Japanese Yen Trust ETF (NYSEARCA:FXY) is an exchange-traded fund incorporated in the USA, designed to track the price of the yen against the US dollar. The fund … [+5341 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Lowendbox.com"
    },
    "author": "raindog308",
    "title": "AcroServers: Offering Service in (Nearly) Every City in the World (from €5/Mo, 1Gbps KVM)",
    "description": "Back when LowEndBox was started, it was run by a guy (LEAdmin) who made it his mission to seek out hosting companies offering cheap plans and advertise them to the world.  Twenty years later, LEB is still fulfilling that mission.  We’ve grown up a bit and now…",
    "url": "https://lowendbox.com/blog/acroservers-offering-service-in-nearly-every-city-in-the-world-from-e5-mo-1gbps-kvm/",
    "urlToImage": "https://lowendbox.com/wp-content/uploads/2020/09/acroservers.png",
    "publishedAt": "2020-10-10T04:00:52Z",
    "content": "Back when LowEndBox was started, it was run by a guy (LEAdmin) who made it his mission to seek out hosting companies offering cheap plans and advertise them to the world.  Twenty years later, LEB is … [+2586 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "newsBTC"
    },
    "author": "Nick Chong",
    "title": "Bitcoin Surges to $11,400: 2 Factors Influencing This Surge",
    "description": "Bitcoin is surging higher after weeks of consolidation. The cryptocurrency, currently trading for $11,430, is at its highest price since early September. In the past 24 hours, the cryptocurrency is up by approximately 5%, having traded around $10,900 on Thurs…",
    "url": "https://www.newsbtc.com/analysis/btc/bitcoin-surges-to-11400-2-factors-influencing-this-surge/",
    "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/10/awar-meman-Ujt8Ti-5OQ0-unsplash-scaled.jpg",
    "publishedAt": "2020-10-10T02:59:34Z",
    "content": "Bitcoin is surging higher after weeks of consolidation. The cryptocurrency, currently trading for $11,430, is at its highest price since early September. In the past 24 hours, the cryptocurrency is u… [+2657 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "newsBTC"
    },
    "author": "Cole Petersen",
    "title": "Renewed U.S. Stimulus Discussions Could Ignite an Explosive Bitcoin Rally",
    "description": "Bitcoin’s price has been fairly stagnant as of late, remaining stuck within its macro trading range between $10,200 and $11,200. It is now pushing towards the upper boundary of this range and may soon be able to rally past it. If this level is broken in a sus…",
    "url": "https://www.newsbtc.com/analysis/btc/renewed-u-s-stimulus-discussions-could-ignite-an-explosive-bitcoin-rally/",
    "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/10/kei-fgAQcdB8N40-unsplash-scaled.jpg",
    "publishedAt": "2020-10-10T02:00:43Z",
    "content": "Bitcoin’s price has been fairly stagnant as of late, remaining stuck within its macro trading range between $10,200 and $11,200. It is now pushing towards the upper boundary of this range and may soo… [+2561 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Bitcoinist"
    },
    "author": "Nick Chong",
    "title": "Analysts Think Bitcoin Is Rallying Due to Market Pricing in “Stimulus Buffet”",
    "description": "Bitcoin is up around $200 in the past 24 hours as it now trades at $11,100. This is the highest price the cryptocurrency has traded at in many days and weeks. The leading cryptocurrency is purportedly moving higher on expectations of further stimulus and a po…",
    "url": "https://bitcoinist.com/analysts-think-bitcoin-is-rallying-due-to-market-pricing-in-stimulus-buffet/",
    "urlToImage": "https://bitcoinist.com/wp-content/uploads/2020/09/sergio-camalich-N__zEpODyls-unsplash-1920x1280.jpg",
    "publishedAt": "2020-10-10T01:42:00Z",
    "content": "<ul><li>Bitcoin is up around $200 in the past 24 hours as it now trades at $11,100.</li><li>This is the highest price the cryptocurrency has traded at in many days and weeks.</li><li>The leading cryp… [+2195 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Independent.ie"
    },
    "author": "Louise Walsh",
    "title": "'I'm alive': 'Dragon's Den' star horrified by online scam",
    "description": "Entrepreneur Gavin Duffy was 'horrified' to find himself at the centre of an apparent click-bait scam which is announcing his death across social media.",
    "url": "https://www.independent.ie/irish-news/im-alive-dragons-den-star-horrified-by-online-scam-39607385.html",
    "urlToImage": "https://www.independent.ie/incoming/0cbb5/39606254.ece/AUTOCROP/w1240h700/gavin-duffy.jpg",
    "publishedAt": "2020-10-10T01:30:00Z",
    "content": "Entrepreneur Gavin Duffy was 'horrified' to find himself at the centre of an apparent click-bait scam which is announcing his death across social media.The former presidential candidate and Dragon's … [+2505 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "FXStreet"
    },
    "author": "Rajarshi Mitra",
    "title": "Bitcoin Price Prediction: BTC whales sell as analyst eyes “dead cat bounce”",
    "description": "Currently, the overall outlook surrounding Bitcoin seems extremely bullish. As we have previously reported, the buyers are aiming for the $12,000-leve",
    "url": "https://www.fxstreet.com/cryptocurrencies/news/bitcoin-price-prediction-btc-whales-sell-as-analyst-eyes-dead-cat-bounce-202010100125",
    "urlToImage": "https://editorial.fxstreet.com/images/Markets/Currencies/Digital Currencies/Bitcoin/bitcoin_4_Large.jpg",
    "publishedAt": "2020-10-10T01:25:51Z",
    "content": "<ul><li>BTC’s recent price action has been deemed a fakeout by some prominent analysts.</li><li>The 50-day SMA and 100-day SMA are critical levels that will determine the direction of future price mo… [+3974 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "newsBTC"
    },
    "author": "Nick Chong",
    "title": "Top DeFi Coins Boom 5-20% As Ethereum Roars Higher, Fundamentals Strong",
    "description": "Ethereum has undergone a strong surge in the past 24 hours as buyers have stepped back into the crypto market. In the past day alone, ETH has gained 5%, as it currently trades at $368. For context, Bitcoin is only up around 1.5%. The buying was seemingly trig…",
    "url": "https://www.newsbtc.com/analysis/defi-coins/top-defi-coins-boom-5-20-as-ethereum-roars-higher-fundamentals-strong/",
    "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/09/jinyun-xBuu23uxarU-unsplash-scaled.jpg",
    "publishedAt": "2020-10-10T01:07:25Z",
    "content": "Ethereum has undergone a strong surge in the past 24 hours as buyers have stepped back into the crypto market. In the past day alone, ETH has gained 5%, as it currently trades at $368. For context, B… [+1593 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "newsBTC"
    },
    "author": "Tony Spilotro",
    "title": "Crypto Calculated: How Ancient Math Predicts Bitcoin’s Next Top At $270K",
    "description": "As Bitcoin takes out $11,000 and potentially aims higher, renewed talk of the crypto asset’s next potential peak has returned to the market. Analysts do their best to do more than just speculate, backing up theories with fundamental statistics or technical si…",
    "url": "https://www.newsbtc.com/analysis/btc/crypto-calculated-how-ancient-math-predicts-bitcoins-next-top-at-270k/",
    "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/10/bitcoin-fibonacci-btcusd-Depositphotos_101409448_xl-2015-scaled.jpg",
    "publishedAt": "2020-10-10T01:00:41Z",
    "content": "As Bitcoin takes out $11,000 and potentially aims higher, renewed talk of the crypto asset’s next potential peak has returned to the market.\r\nAnalysts do their best to do more than just speculate, ba… [+2586 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Bob Mason",
    "title": "The Crypto Daily – Movers and Shakers – October 10th, 2020",
    "description": "It’s a bullish start to the day. A Bitcoin breakthrough to $11,200 levels would deliver support to the broader market following yesterday’s gains.",
    "url": "https://finance.yahoo.com/news/crypto-daily-movers-shakers-october-004851060.html",
    "urlToImage": "https://s.yimg.com/uu/api/res/1.2/2nJkAogMZvqXGK2_FU72VQ--~B/aD00MTA7dz02MTU7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/fx_empire_176/aa7f40da6a020f20ce341755604d2573",
    "publishedAt": "2020-10-10T00:48:51Z",
    "content": "Bitcoin, BTC to USD, rose by 1.17% on Friday. Following on from a 2.39% rally on Thursday, Bitcoin ended the day at $11,071.0\r\nIt was another bearish start to the day. Bitcoin fell to a mid-morning i… [+2582 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Activistpost.com"
    },
    "author": "Activist Post",
    "title": "The Circle Is Complete: Bank of Japan Joins Fed And ECB In Preparing Rollout Of Digital Currency",
    "description": "By Tyler Durden First it was the Fed, then the ECB, and now the BOJ: the world’s central banks are quietly preparing to unleash digital...\nThe Circle Is Complete: Bank of Japan Joins Fed And ECB In Preparing Rollout Of Digital Currency",
    "url": "https://www.activistpost.com/2020/10/the-circle-is-complete-bank-of-japan-joins-fed-and-ecb-in-preparing-rollout-of-digital-currency.html",
    "urlToImage": "https://www.activistpost.com/wp-content/uploads/2020/10/boj-digital.jpg",
    "publishedAt": "2020-10-10T00:39:34Z",
    "content": "By Tyler Durden\r\nFirst it was the Fed, then the ECB, and now the BOJ: the world’s central banks are quietly preparing to unleash digital currencies on an unsuspecting population in one final last-dit… [+12556 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Zerohedge.com"
    },
    "author": "Tyler Durden",
    "title": "The Circle Is Complete: BOJ Joins Fed And ECB In Preparing Rollout Of Digital Currency",
    "description": "The Circle Is Complete: BOJ Joins Fed And ECB In Preparing Rollout Of Digital Currency\n\n Tyler Durden\n \nFri, 10/09/2020 - 20:00\n\n First it was the Fed, then the ECB, and now the BOJ: the world's central banks are quietly preparing to unleash digital currencie…",
    "url": "https://www.zerohedge.com/markets/circle-complete-boj-joins-fed-and-ecb-preparing-rollout-digital-currency",
    "urlToImage": "https://zh-prod-1cc738ca-7d3b-4a72-b792-20bd8d8fa069.storage.googleapis.com/s3fs-public/styles/max_650x650/public/2020-10/digital%20dollar_0.jpg?itok=YwVO5nN_",
    "publishedAt": "2020-10-10T00:00:00Z",
    "content": "First it was the Fed, then the ECB, and now the BOJ: the world's central banks are quietly preparing to unleash digital currencies on an unsuspecting population in one final last-ditch attempt to spa… [+11958 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Bitcoinist"
    },
    "author": "Nick Chong",
    "title": "Ethereum Surges Towards $370, Denying Expectations of Further Losses",
    "description": "Ethereum fell as low as $315 in September as a strong selloff rattled the markets. Since those lows, ETH has bounced back in notable fashion. The coin currently trades at $369, its highest price in many days as buyers finally step back into the market after a…",
    "url": "https://bitcoinist.com/ethereum-surges-towards-370-denying-expectations-of-further-losses/",
    "urlToImage": "https://bitcoinist.com/wp-content/uploads/2020/08/Depositphotos_169393966_l-2015-1920x1282.jpg",
    "publishedAt": "2020-10-09T23:51:39Z",
    "content": "<ul><li>Ethereum fell as low as $315 in September as a strong selloff rattled the markets.</li><li>Since those lows, ETH has bounced back in notable fashion.</li><li>The coin currently trades at $369… [+2226 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Seeking Alpha"
    },
    "author": "Beth Kindig",
    "title": "Will Bitcoin Make A Good Investment? Economic Uncertainty",
    "description": "In this article, we discuss the Bitcoin as a long-term investment. We discuss the catalysts that can ultimately drive Bitcoin's adoption and subsequent price appreciation.",
    "url": "https://seekingalpha.com/article/4378429-will-bitcoin-make-good-investment-economic-uncertainty",
    "urlToImage": "https://static.seekingalpha.com/uploads/2019/7/12/45714056-15629225872444918_origin.jpg",
    "publishedAt": "2020-10-09T23:40:58Z",
    "content": "In our previous analysis, we discussed one primary reason that Bitcoin will make a good long-term investment as the price is likely to go up and stabilize once institutions gain SEC-regulated access.… [+11671 chars]"
    }
    ]*/
    news:News[] = []
    constructor(private newsService:NewsService,private dialog: MatDialog) {}
    ngOnInit(){
      this.newsService.getNews().subscribe(
        data=>this.news = data
      )
    }
    onCreate() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(AddNewsComponent,dialogConfig);
    }
}
