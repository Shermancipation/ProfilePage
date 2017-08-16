$(document).ready(function(){

  $('#languagesHead').hover(function(){
    $('#languagesDiv').toggle("slow");
  });
  $('#frameworksHead').hover(function(){
    $('#frameworksDiv').toggle("slow");
  });
  $('#databasesHead').hover(function(){
    $('#databasesDiv').toggle("slow");
  });
  $('#othersHead').hover(function(){
    $('#othersDiv').toggle("slow");
  });
  // 
  // $('#profilePic').click(function(){
  //   var quotes = ["All we have to decide is what to do with the time that is given to us.", "Some people can’t believe in themselves until someone else believes in them first.", "Just keep swimming. Just keep swimming. Just keep swimming, swimming, swimming. What do we do? We swim, swim.", "Someone I once knew wrote that we walk away from our dreams afraid that we may fail or worse yet, afraid we may succeed.", "The flower that blooms in adversity is the most rare and beautiful of all.", "Oh yes, the past can hurt. But you can either run from it, or learn from it."]
  //   var randQuote = Math.floor((Math.random() * 6));
  //   $('#quotesDiv').empty();
  //   $('#quotesDiv').html(quotes[randQuote]).fadeIn(1000);
  // });

  $('.projectsDiv').hover(function(){
    $('#userDashInfo').toggle("slow");
  });

});
