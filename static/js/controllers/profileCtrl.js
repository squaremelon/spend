window.app.controller('profileCtrl', function($scope) {

  $scope.storeUser = function() {
    init()
    function init() {
        if (!store.enabled) {
            alert('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.')
            return
        }
        if ($scope.user !== '') {
          var storedUser = store.set('user', $scope.user);
          console.log("stored user object");
        }
    }
  }

  $scope.unstoreUser = function() {
    init()
    function init() {
        if (!store.enabled) {
            alert('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.')
            return
        }
        $scope.user = store.get('user', $scope.user);
        console.log($scope.user);
    }
  }

  $scope.unstoreUser();

})
