app.controller("SecondCtrl", function($scope, firstFactory) {
  console.log("SecondCtrl")

   $scope.selectedSong = firstFactory.getSelectedSong()

})