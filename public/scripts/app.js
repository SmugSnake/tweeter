$( document ).ready(function() {

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
    "user": {
        "name": "Newton",
        "avatars": {
            "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
            "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
            "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
    },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
}

function createTweetElement(tweet) {
    let $tweet = $('<article>').addClass('full tweet');
    var image = $('<img>').attr('src', tweet.user.avatars.small)
    var handle = $('<span>').text(tweet.user.handle).addClass('creator');
    var name = $('<h2>').text(tweet.user.name);
    var $header = $('<header>')
    var createdDate = $('<span>').text(tweet.created_at).addClass('date created');
    var $footer = $('<footer>');
    var $content = $('<p>').text(tweet.content.text);
    $header.append(image, handle, name);
    $footer.append(createdDate);
    $tweet.append($header, $footer, $content);
    
    return $tweet;

}

var $tweet = createTweetElement(tweetData);
console.log($tweet);
$('section.tweet').append($tweet);

function renderTweets(tweets) {
    tweets.forEach(function(element) {
        
    }
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
  }


});