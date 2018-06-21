$(document).ready(function () {

  loadTweets()
  /*
   * Client-side JS logic goes here
   * jQuery is already loaded
   * Reminder: Use (and do all your DOM work in) jQuery's document ready function
   */


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

  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  function renderTweets(tweets) {
    $('section.tweet').empty();
    tweets.forEach(function (element) {
      var $tweet = createTweetElement(element);
      $('section.tweet').prepend($tweet);
    });
  }

  function loadTweets() {
    $.ajax({
      Method: 'GET',
      url: '/tweets/',
      success: function (data) {
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
      alert("Message is too long. Remember, brevity is the soul of wit!");
      return;
    } else if (message.length <= 0) {
      alert("Please write some text.")
      return;
    } else {
      $.ajax('/tweets/', {
        method: 'POST',
        data: data
      }).done(function () {
        loadTweets(data);
        $('form textarea').val('')
      })
    };
  });

  $('#nav-bar button').click(function () {
    $("section.new-tweet").slideToggle("slow", function () {
      $("section.new-tweet textarea").focus();
    });
  });

});