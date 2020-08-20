import scrapy


class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'https://www.israelhayom.co.il/allarticles',
    ]

    def parse(self, response):
        for quote in response.css('div.clearfix'):
            yield {
                'text': quote.css('p.ih-all-articles-article-title::text').get(),

            }

       # next_page = response.css('li.next a::attr(href)').get()
        #if next_page is not None:
         #   yield response.follow(next_page, callback=self.parse)
