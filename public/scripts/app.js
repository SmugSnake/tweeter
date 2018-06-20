$(document).ready(function () {

  /*
   * Client-side JS logic goes here
   * jQuery is already loaded
   * Reminder: Use (and do all your DOM work in) jQuery's document ready function
   */

  const data = [{
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
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function createTweetElement(tweet) {
    let $tweet = $('<article>').addClass('full tweet');
    var image = $('<img>').attr('src', tweet.user.avatars.small)
    var handle = $('<span>').text(tweet.user.handle).addClass('creator');
    var $name = $('<h2>').text(tweet.user.name);
    var $header = $('<header>')
    var createdDate = $('<span>').text(tweet.created_at).addClass('date created');
    var $iconSpan = $('<span>').addClass('icons');
    var icon1 = $('<i>').addClass('fab fa-font-awesome-flag');
    var icon2 = $('<i>').addClass('fas fa-retweet');
    var icon3 = $('<i>').addClass('fas fa-heart');
    var $footer = $('<footer>');
    var $content = $('<p>').text(tweet.content.text);
    $name.append(image, handle);
    $header.append($name);
    $iconSpan.append(icon1, icon2, icon3);
    $footer.append(createdDate, $iconSpan);
    $tweet.append($header, $content, $footer);


    return $tweet;

  }

  function renderTweets(tweets) {
    tweets.forEach(function (element) {
      var $tweet = createTweetElement(element);
      $('section.tweet').prepend($tweet);
    });
  }
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

  function loadTweets() {
    $.ajax({
      Method: 'GET',
      url: '/tweets/',
      success: function(data) {
        renderTweets(data);
      }
    })
  };

$('form').on('submit', function (tweet) {
tweet.preventDefault();
console.log(tweet)
var data = $('form').serialize();
var message = $('form textarea').val();

if (message.length > 140) {
  alert("Message is too long. Remember, brevity is the soul of wit");
  return;
} else if (message.length <= 0) {
  alert("Please write some text")
  return;
} else {
$.ajax('/tweets/', {
  method: 'POST',
  data: data
}).done(function (res) {
  loadTweets(res);
  $('form textarea').val('')
})
};
});

$('#nav-bar button').click (function() {
  $("section.new-tweet").slideToggle("slow", function() {
    $("section.new-tweet textarea").focus();
  });
});



});

