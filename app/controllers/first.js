app.controller("FirstCtrl", function($scope, $location, firstFactory) {
  console.log("FirstCtrl")

  firstFactory.getMusic().then((data) => {
    $scope.songs = data;
    console.log($scope.songs)
  })

  function findSong(song) {
    for(let i = 0; i < $scope.songs.length; i++) {
      if (song.title === $scope.songs[i].title) {
        return i;
      }
    }
  }
  
  $scope.setSelected = function (song) {
    let i = findSong(song);
    firstFactory.setSelectedSong($scope.songs[i])
  }
  
  
  $scope.remove = function (song) {
    let i = findSong(song);
    $scope.songs.splice(i, 1);
  }


});
