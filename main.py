import discord
from discord.ext import commands
from config import settings
import json
import requests
from time import sleep
import emoji
import asyncio, os
from discord.ext import commands, tasks
from data_from_dappcom import get_liq


bot = commands.Bot(command_prefix=settings['prefix'])
# Так как мы указали префикс в settings, обращаемся к словарю с ключом prefix.

def make_embeds():
    embed = discord.Embed(color=0x1cc846)
    embed.set_author(name="Price Information",
                     icon_url="https://assets.coingecko.com/coins/images/12629/large/rubic.jpg?160129727")

    embed.add_field(name="1 ETH", value=str(get_liq()[1]) + ' RBC', inline=True)
    embed.add_field(name="RBC/USD", value='$' + str(get_liq()[0]), inline=True)
    embed_mar = discord.Embed(color=0x1cc846)
    embed_mar.set_author(name='Market Cap',
                         icon_url="https://assets.coingecko.com/coins/images/12629/large/rubic.jpg?160129727")
    embed_mar.add_field(name="Market Cap", value='$' + str(get_liq()[2]), inline=False)
    embed_mar.add_field(name="Fully Diluted Valuation", value='$' + str(get_liq()[3]), inline=False)
    embed_mar.add_field(name="Circulating Supply", value=get_liq()[4], inline=False)
    embed_mar.add_field(name="Total Supply", value=get_liq()[5], inline=False)
    embed_mar.add_field(name="Total volume", value='$' + str(get_liq()[6]), inline=False)
    return embed, embed_mar

@bot.command()
async def price(ctx):
    channel = bot.get_channel(ctx.channel.id)
    await ctx.send(embed=make_embeds()[0])
    message1 = await channel.history().find(lambda m: m.author.id == 773899777833435146)
    await ctx.send(embed=make_embeds()[1])
    message2 = await channel.history().find(lambda m: m.author.id == 773899777833435146)
    while True:
        newEmbed1 = make_embeds()[0]
        newEmbed2 = make_embeds()[1]
        await message1.edit(embed=newEmbed1, content='')
        await message2.edit(embed=newEmbed2, content='')
        await asyncio.sleep(10)
        await message1.edit(embed=newEmbed1, content='')
        await message2.edit(embed=newEmbed2, content='')
        await asyncio.sleep(10)


bot.run(settings['token']) # Обращаемся к словарю settings с ключом token, для получения токена
