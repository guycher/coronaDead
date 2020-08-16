import scrapy


class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'https://www.ynet.co.il/home/0,7340,L-31372,00.html',
    ]

    def parse(self, response):
        for quote in response.css('div.art_headlines_item'):
            yield {
                'text': quote.css('a.art_headlines_sub_title::text').get(),

            }

       # next_page = response.css('li.next a::attr(href)').get()
        #if next_page is not None:
         #   yield response.follow(next_page, callback=self.parse)