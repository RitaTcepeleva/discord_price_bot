# import the module
import tweepy

# assign the values accordingly
consumer_key = ""
consumer_secret = ""
access_token = ""
access_token_secret = ""

# authorization of consumer key and consumer secret
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)

# set access to user's access key and access secret
auth.set_access_token(access_token, access_token_secret)

# calling the api
api = tweepy.API(auth)

# the screen_name of the targeted user
screen_name = "geeksforgeeks"

# getting all the followers
c = tweepy.Cursor(api.followers, screen_name)

# counting the number of followers
count = 0
for follower in c.items():
    count += 1
print(screen_name + " has " + str(count) + " followers.")
