from bs4 import BeautifulSoup
import requests
import json
import emoji
from pycoingecko import CoinGeckoAPI

cg = CoinGeckoAPI()

def get_liq():
    #PRICE INFO
    rbc_usd = cg.get_price(ids='rubic', vs_currencies='usd')['rubic']['usd']
    one_eth = 1 / cg.get_price(ids='rubic', vs_currencies='eth')['rubic']['eth']
    #MARKET INFO
    market_cap = cg.get_coins_markets(ids='rubic', vs_currency='usd')[0]['market_cap']
    fully_market_cap = cg.get_coins_markets(ids='rubic', vs_currency='usd')[0]['fully_diluted_valuation']
    circ_sup = cg.get_coins_markets(ids='rubic', vs_currency='usd')[0]['circulating_supply']
    total_sup = cg.get_coins_markets(ids='rubic', vs_currency='usd')[0]['total_supply']
    total_volume = cg.get_coins_markets(ids='rubic', vs_currency='usd')[0]['total_volume']
    return rbc_usd, one_eth, market_cap, fully_market_cap, circ_sup, total_sup, total_volume

#get_liq()
