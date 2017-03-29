// index.js

function getCharacter(id) {
  $.ajax({
    url: "http://swapi.co/api/people/" + id,
    method: "GET",
    success: function (response) {
      // console.log(response);
      getCharacterName(response);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function getCharacterName(objeto){
  const character= objeto;
  // console.log(character.name);
  $("#charInfo").text(character.name);
}


$("#charButton").on('click', function(){
  value = Math.floor((Math.random() * 100) + 1);
  getCharacter(value);
});
