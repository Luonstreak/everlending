$(document).ready(function() {

	// ODDOMETER
	setTimeout(() => {
		odometer.innerHTML = 4896000000;
	}, 1000);


	// SMOOTH SCROLL
	var currentTab;

	function scrollToElement(element) {
    $("html,body").animate({ scrollTop: $(element).offset().top - 10 }, 500);
  };

  $(".dropdown-menu a").on("click", function(e) {
    var target = $(this).attr("href");
    e.preventDefault();
    if (currentTab === target) return;
    else {
      currentTab = target;
      scrollToElement(target);
    }
  });

  $("#jumbo a").on("click", function(e) {
    var target = $(this).attr("href");
    e.preventDefault();
    if (currentTab === target) return;
    else {
      currentTab = target;
      scrollToElement(target);
    }
	});

	// LIVE WORD UPDATE
	var words = ["HOME", "LIFE", "EVENINGS", "MEMORIES", "COMMUNITY"],
    el = document.getElementById("magic"),
    word_counter = 0,
		character_counter = 0;
		
  function updateText() {
    if (words[word_counter][character_counter] == " ") {
      el.innerHTML = el.innerHTML + "&nbsp";
      character_counter++;
    } else {
      el.innerHTML += words[word_counter][character_counter++];
    }
    if (character_counter == words[word_counter].length + 1) {
      word_counter++; //choose a different word
      character_counter = 0; //start over with the first character of the word
      el.innerHTML = ""; //set the html to be blank
      //if we're displaying the last word, go back to the first word
      if (word_counter == words.length) word_counter = 0;
    }
  }

  if ($(window).width() >= 768 && el) {
    setInterval(updateText, 300);
  } else if (el) {
    el.innerHTML = "HOME";
  }
});