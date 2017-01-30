app.factory("firstFactory", function($http) {

  var selectedSong = {};

  function getMusic() {
    return $http.get("app/mock/mockdb.json").then(data =>  data.data.music )
  }

  function getSelectedSong() {
    return selectedSong;
  }

  function setSelectedSong(song) {
    selectedSong = song;
  }


  return {
    getMusic,
    getSelectedSong,
    setSelectedSong
  }
});