create database newsDB;
use newsDB;
CREATE TABLE news(
   sourceid    int NOT NULL PRIMARY KEY 
  ,sourcename  VARCHAR(19) NOT NULL
  ,author      VARCHAR(34) NOT NULL
  ,title       VARCHAR(96) NOT NULL
  ,description VARCHAR(260) NOT NULL
  ,url         VARCHAR(146) NOT NULL
  ,url_to_image  VARCHAR(179) NOT NULL
  ,published_at VARCHAR(20) NOT NULL
  ,content     VARCHAR(215) NOT NULL
);
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (2,'Cointelegraph','Cointelegraph By Mark Binns','Crypto banks are going to swallow fiat banks in 3 years — or even less','In three years, a younger generation of banking customers won’t do business with a traditional fiat bank unless it offers access to crypto.','https://cointelegraph.com/news/crypto-banks-are-going-to-swallow-fiat-banks-in-3-years-or-even-less','https://s3.eu-central-1.amazonaws.com/s3.cointelegraph.com/uploads/2020-10/aff60277-298e-4c8a-b686-b965288b19b3.jpg','2020-10-10T08:00:00Z','Within a few years, a younger generation of financial services customers are going to be able to walk into a bank and gain access to credit products, savings accounts and investments that can host bo… +5584 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (3,'This is Money','By Lee Boyce for Thisismoney.co.uk','Best savings accounts: Have people stopped chasing better rates?','When it comes to hunting a good savings rate, it''s safe to say that since the pandemic unfolded in March, it has been an increasingly difficult endeavor.','https://www.thisismoney.co.uk/money/saving/article-8815405/Best-savings-accounts-people-stopped-chasing-better-rates.html','https://i.dailymail.co.uk/1s/2020/10/08/11/34144028-0-image-a-8_1602154405827.jpg','2020-10-10T07:03:10Z','When it comes to hunting for a good savings rate, it''s safe to say that since the pandemic unfolded in March, it has been an increasingly difficult endeavor.  
Not that it has been an easy task for … +10658 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (4,'FXStreet','Dhwani Mehta','Bitcoin Price Analysis: BTC/USD eyes $12K amid a potential symmetrical triangle breakout','Bitcoin (BTC/USD) is on a track to book four straight days of gains this Saturday, amid the upbeat mood seen across the crypto space. The most favorit','https://www.fxstreet.com/cryptocurrencies/news/bitcoin-price-analysis-btc-usd-eyes-12k-amid-a-potential-symmetrical-triangle-breakout-202010100651','https://editorial.fxstreet.com/images/Markets/Currencies/Digital Currencies/Bitcoin/bitcoins-33646574_Large.jpg','2020-10-10T06:51:42Z','ulliBTC /USD hits fresh five-week highs to test $11,500 levels. /liliA symmetrical triangle spotted on the daily chart. /liliA daily closing above $11,080 key for additional upside./li… +1494 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (5,'Cointelegraph','Cointelegraph By Ray Salmond','$12K Bitcoin price back on the table after BTC rallies above $11.4K','Bitcoin price rallied to $11,491 after bulls managed to flip the $11K level from resistance to support.','https://cointelegraph.com/news/12k-bitcoin-price-back-on-the-table-after-btc-rallies-above-114k','https://s3.cointelegraph.com/storage/uploads/view/f2888747ddbdf58e0973616e4d7df189.jpg','2020-10-10T05:58:00Z','On Friday Bitcoin (BTC) price finally managed to break above the symmetrical triangle where the price had been compressing for the last 30 days. After holding the $11,000 level into the daily close, … +1999 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (6,'newsBTC','Nick Chong','3 Bitcoin On-Chain Trends Show a Macro Bull Market Is Brewing','Bitcoin has surged higher over the past 48 hours due to positive fundamental trends. The cryptocurrency, which traded as low as $10,400 just a week ago, now trades for $11,400. Less than a few hours ago, the coin was trading just shy of $11,500. BTC’s ongoing…','https://www.newsbtc.com/analysis/btc/3-bitcoin-on-chain-trends-show-a-macro-bull-market-is-brewing/','https://www.newsbtc.com/wp-content/uploads/2020/07/Depositphotos_44958507_l-2015.jpg','2020-10-10T04:27:34Z','Bitcoin has surged higher over the past 48 hours due to positive fundamental trends. The cryptocurrency, which traded as low as $10,400 just a week ago, now trades for $11,400. Less than a few hours … +2639 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (7,'Seeking Alpha','Rothko Research','FXY: Little Room Left On The Downside','The yen has been gradually appreciating in the past few years, limiting the upside gain in equities. In the short run, there is potential for JPY strength due to the rising uncertainty associated with the US elections (and Brexit).','https://seekingalpha.com/article/4378436-fxy-little-room-left-on-downside','https://static.seekingalpha.com/uploads/2020/10/9/49318052-16022578711118548_origin.png','2020-10-10T04:26:36Z','About FXY
The Invesco CurrencyShares Japanese Yen Trust ETF (NYSEARCA:FXY) is an exchange-traded fund incorporated in the USA, designed to track the price of the yen against the US dollar. The fund … +5341 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (8,'Lowendbox.com','raindog308','AcroServers: Offering Service in (Nearly) Every City in the World (from €5/Mo, 1Gbps KVM)','Back when LowEndBox was started, it was run by a guy (LEAdmin) who made it his mission to seek out hosting companies offering cheap plans and advertise them to the world.  Twenty years later, LEB is still fulfilling that mission.  We’ve grown up a bit and now…','https://lowendbox.com/blog/acroservers-offering-service-in-nearly-every-city-in-the-world-from-e5-mo-1gbps-kvm/','https://lowendbox.com/wp-content/uploads/2020/09/acroservers.png','2020-10-10T04:00:52Z','Back when LowEndBox was started, it was run by a guy (LEAdmin) who made it his mission to seek out hosting companies offering cheap plans and advertise them to the world.  Twenty years later, LEB is … +2586 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (9,'newsBTC','Nick Chong','Bitcoin Surges to $11,400: 2 Factors Influencing This Surge','Bitcoin is surging higher after weeks of consolidation. The cryptocurrency, currently trading for $11,430, is at its highest price since early September. In the past 24 hours, the cryptocurrency is up by approximately 5%, having traded around $10,900 on Thurs…','https://www.newsbtc.com/analysis/btc/bitcoin-surges-to-11400-2-factors-influencing-this-surge/','https://www.newsbtc.com/wp-content/uploads/2020/10/awar-meman-Ujt8Ti-5OQ0-unsplash-scaled.jpg','2020-10-10T02:59:34Z','Bitcoin is surging higher after weeks of consolidation. The cryptocurrency, currently trading for $11,430, is at its highest price since early September. In the past 24 hours, the cryptocurrency is u… +2657 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (10,'newsBTC','Cole Petersen','Renewed U.S. Stimulus Discussions Could Ignite an Explosive Bitcoin Rally','Bitcoin’s price has been fairly stagnant as of late, remaining stuck within its macro trading range between $10,200 and $11,200. It is now pushing towards the upper boundary of this range and may soon be able to rally past it. If this level is broken in a sus…','https://www.newsbtc.com/analysis/btc/renewed-u-s-stimulus-discussions-could-ignite-an-explosive-bitcoin-rally/','https://www.newsbtc.com/wp-content/uploads/2020/10/kei-fgAQcdB8N40-unsplash-scaled.jpg','2020-10-10T02:00:43Z','Bitcoin’s price has been fairly stagnant as of late, remaining stuck within its macro trading range between $10,200 and $11,200. It is now pushing towards the upper boundary of this range and may soo… +2561 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (1,'Bitcoinist','Nick Chong','Analysts Think Bitcoin Is Rallying Due to Market Pricing in “Stimulus Buffet”','Bitcoin is up around $200 in the past 24 hours as it now trades at $11,100. This is the highest price the cryptocurrency has traded at in many days and weeks. The leading cryptocurrency is purportedly moving higher on expectations of further stimulus and a po…','https://bitcoinist.com/analysts-think-bitcoin-is-rallying-due-to-market-pricing-in-stimulus-buffet/','https://bitcoinist.com/wp-content/uploads/2020/09/sergio-camalich-N__zEpODyls-unsplash-1920x1280.jpg','2020-10-10T01:42:00Z','ulliBitcoin is up around $200 in the past 24 hours as it now trades at $11,100./liliThis is the highest price the cryptocurrency has traded at in many days and weeks./liliThe leading cryp… +2195 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (12,'Independent.ie','Louise Walsh','''I''m alive'': ''Dragon''s Den'' star horrified by online scam','Entrepreneur Gavin Duffy was ''horrified'' to find himself at the centre of an apparent click-bait scam which is announcing his death across social media.','https://www.independent.ie/irish-news/im-alive-dragons-den-star-horrified-by-online-scam-39607385.html','https://www.independent.ie/incoming/0cbb5/39606254.ece/AUTOCROP/w1240h700/gavin-duffy.jpg','2020-10-10T01:30:00Z','Entrepreneur Gavin Duffy was ''horrified'' to find himself at the centre of an apparent click-bait scam which is announcing his death across social media.The former presidential candidate and Dragon''s … +2505 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (13,'FXStreet','Rajarshi Mitra','Bitcoin Price Prediction: BTC whales sell as analyst eyes “dead cat bounce”','Currently, the overall outlook surrounding Bitcoin seems extremely bullish. As we have previously reported, the buyers are aiming for the $12,000-leve','https://www.fxstreet.com/cryptocurrencies/news/bitcoin-price-prediction-btc-whales-sell-as-analyst-eyes-dead-cat-bounce-202010100125','https://editorial.fxstreet.com/images/Markets/Currencies/Digital Currencies/Bitcoin/bitcoin_4_Large.jpg','2020-10-10T01:25:51Z','ulliBTC’s recent price action has been deemed a fakeout by some prominent analysts./liliThe 50-day SMA and 100-day SMA are critical levels that will determine the direction of future price mo… +3974 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (14,'newsBTC','Nick Chong','Top DeFi Coins Boom 5-20% As Ethereum Roars Higher, Fundamentals Strong','Ethereum has undergone a strong surge in the past 24 hours as buyers have stepped back into the crypto market. In the past day alone, ETH has gained 5%, as it currently trades at $368. For context, Bitcoin is only up around 1.5%. The buying was seemingly trig…','https://www.newsbtc.com/analysis/defi-coins/top-defi-coins-boom-5-20-as-ethereum-roars-higher-fundamentals-strong/','https://www.newsbtc.com/wp-content/uploads/2020/09/jinyun-xBuu23uxarU-unsplash-scaled.jpg','2020-10-10T01:07:25Z','Ethereum has undergone a strong surge in the past 24 hours as buyers have stepped back into the crypto market. In the past day alone, ETH has gained 5%, as it currently trades at $368. For context, B… +1593 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (15,'newsBTC','Tony Spilotro','Crypto Calculated: How Ancient Math Predicts Bitcoin’s Next Top At $270K','As Bitcoin takes out $11,000 and potentially aims higher, renewed talk of the crypto asset’s next potential peak has returned to the market. Analysts do their best to do more than just speculate, backing up theories with fundamental statistics or technical si…','https://www.newsbtc.com/analysis/btc/crypto-calculated-how-ancient-math-predicts-bitcoins-next-top-at-270k/','https://www.newsbtc.com/wp-content/uploads/2020/10/bitcoin-fibonacci-btcusd-Depositphotos_101409448_xl-2015-scaled.jpg','2020-10-10T01:00:41Z','As Bitcoin takes out $11,000 and potentially aims higher, renewed talk of the crypto asset’s next potential peak has returned to the market.
Analysts do their best to do more than just speculate, ba… +2586 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (16,'Yahoo Entertainment','Bob Mason','The Crypto Daily – Movers and Shakers – October 10th, 2020','It’s a bullish start to the day. A Bitcoin breakthrough to $11,200 levels would deliver support to the broader market following yesterday’s gains.','https://finance.yahoo.com/news/crypto-daily-movers-shakers-october-004851060.html','https://s.yimg.com/uu/api/res/1.2/2nJkAogMZvqXGK2_FU72VQ--~B/aD00MTA7dz02MTU7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/fx_empire_176/aa7f40da6a020f20ce341755604d2573','2020-10-10T00:48:51Z','Bitcoin, BTC to USD, rose by 1.17% on Friday. Following on from a 2.39% rally on Thursday, Bitcoin ended the day at $11,071.0
It was another bearish start to the day. Bitcoin fell to a mid-morning i… +2582 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (17,'Activistpost.com','Activist Post','The Circle Is Complete: Bank of Japan Joins Fed And ECB In Preparing Rollout Of Digital Currency','By Tyler Durden First it was the Fed, then the ECB, and now the BOJ: the world’s central banks are quietly preparing to unleash digital...
The Circle Is Complete: Bank of Japan Joins Fed And ECB In Preparing Rollout Of Digital Currency','https://www.activistpost.com/2020/10/the-circle-is-complete-bank-of-japan-joins-fed-and-ecb-in-preparing-rollout-of-digital-currency.html','https://www.activistpost.com/wp-content/uploads/2020/10/boj-digital.jpg','2020-10-10T00:39:34Z','By Tyler Durden
First it was the Fed, then the ECB, and now the BOJ: the world’s central banks are quietly preparing to unleash digital currencies on an unsuspecting population in one final last-dit… +12556 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (18,'Zerohedge.com','Tyler Durden','The Circle Is Complete: BOJ Joins Fed And ECB In Preparing Rollout Of Digital Currency','The Circle Is Complete: BOJ Joins Fed And ECB In Preparing Rollout Of Digital Currency

 Tyler Durden
 
Fri, 10/09/2020 - 20:00

 First it was the Fed, then the ECB, and now the BOJ: the world''s central banks are quietly preparing to unleash digital currencie…','https://www.zerohedge.com/markets/circle-complete-boj-joins-fed-and-ecb-preparing-rollout-digital-currency','https://zh-prod-1cc738ca-7d3b-4a72-b792-20bd8d8fa069.storage.googleapis.com/s3fs-public/styles/max_650x650/public/2020-10/digital%20dollar_0.jpg?itok=YwVO5nN_','2020-10-10T00:00:00Z','First it was the Fed, then the ECB, and now the BOJ: the world''s central banks are quietly preparing to unleash digital currencies on an unsuspecting population in one final last-ditch attempt to spa… +11958 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (19,'Bitcoinist','Nick Chong','Ethereum Surges Towards $370, Denying Expectations of Further Losses','Ethereum fell as low as $315 in September as a strong selloff rattled the markets. Since those lows, ETH has bounced back in notable fashion. The coin currently trades at $369, its highest price in many days as buyers finally step back into the market after a…','https://bitcoinist.com/ethereum-surges-towards-370-denying-expectations-of-further-losses/','https://bitcoinist.com/wp-content/uploads/2020/08/Depositphotos_169393966_l-2015-1920x1282.jpg','2020-10-09T23:51:39Z','ulliEthereum fell as low as $315 in September as a strong selloff rattled the markets./liliSince those lows, ETH has bounced back in notable fashion./liliThe coin currently trades at $369… +2226 chars');
INSERT INTO news(sourceid,sourcename,author,title,description,url,url_to_image,published_at,content) VALUES (20,'Seeking Alpha','Beth Kindig','Will Bitcoin Make A Good Investment? Economic Uncertainty','In this article, we discuss the Bitcoin as a long-term investment. We discuss the catalysts that can ultimately drive Bitcoin''s adoption and subsequent price appreciation.','https://seekingalpha.com/article/4378429-will-bitcoin-make-good-investment-economic-uncertainty','https://static.seekingalpha.com/uploads/2019/7/12/45714056-15629225872444918_origin.jpg','2020-10-09T23:40:58Z','In our previous analysis, we discussed one primary reason that Bitcoin will make a good long-term investment as the price is likely to go up and stabilize once institutions gain SEC-regulated access.… +11671 chars');