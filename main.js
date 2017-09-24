$(document).ready(function() {
  
    $("#searchTerm").keypress(function(e){
    if (e.keyCode === 13) {
      var searchTerm = $("#searchTerm").val();
      if (searchTerm) {
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
      $.ajax({
        url: url,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function(data, status, jqXHR) {
          $("#entryField").removeClass("entryField");
          $("#entries").html("");
          for(var i = 0; i < data[1].length; i++) {
            $("#entries").append("<div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div>");
          }
          if (data[1].length == 0) {
          $("#entries").append("<div class='well'><h2>Sorry! Your search had no results.</h2></div>");
          }
        }
      });
      }
    }
  });
  
  $("#submit").click(function(){
    var searchTerm = $("#searchTerm").val();
    if (searchTerm) {
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    $.ajax({
      url: url,
      type: "GET",
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      success: function(data, status, jqXHR) {
        $("#entryField").removeClass("entryField");
        $("#entries").html("");
        for(var i = 0; i < data[1].length; i++) {
          $("#entries").append("<div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div>");
        }
        if (data[1].length == 0) {
          $("#entries").append("<div class='well'><h2>Sorry! Your search had no results.</h2></div>");
        }
      }
    });
    }
  });
});