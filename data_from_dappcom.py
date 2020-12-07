from bs4 import BeautifulSoup
import requests
import json
import emoji
from pycoingecko import CoinGeckoAPI

cg = CoinGeckoAPI()

def get_info(disco_mem):
    web_req = requests.get('https://www.dapp.com/app/rubic')
    content = BeautifulSoup(web_req.text, 'html.parser')
    assets = content.find_all('div', class_='sub-stats-item')
    users_24 = assets[1].contents[8].text
    total_uni_us = assets[1].contents[6].text
    assets = content.find_all('div', class_='balance')
    tvl = assets[0].contents[2].text.replace('\n                        ', ' ')
    assets = content.find_all('div', class_='contract')
    contracts = assets[0].contents[2].text+': '+assets[0].contents[0].text.replace('\xa0', '')
    ############
    token = cg.get_coin_by_id(id='rubic', community_data='true')
    twitters = str(token['community_data']['twitter_followers'])
    telegram_followers = str(token['community_data']['telegram_channel_user_count'])
    result = users_24+'\n'+total_uni_us+'\n'+tvl+'\n'+contracts+'\nTwitter followers: '+twitters+'\nTelegram followers: '+telegram_followers+'\nDiscord members: '+disco_mem
    return result

#print(get_info())

def get_price():
    response = requests.get('https://api.etherscan.io/api?module=gastracker&action=gasoracle')  # Get-запрос
    json_data = json.loads(response.text)  # Извлекаем JSON
    propose_gas_price = str('Gas (' + json_data['result']['ProposeGasPrice'] + ' Gwei)')
    status_price = emoji.emojize(':high_voltage:'+json_data['result']['FastGasPrice']+' | :turtle:'+json_data['result']['SafeGasPrice'])
    return propose_gas_price, status_price

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
