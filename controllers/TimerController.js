pomoD = angular.module("pomoD", []);

pomoD.controller('TimerController', ['$scope', '$interval',
function($scope, $interval) {
$scope.breakLength = 2;
$scope.breakSeconds = "0" + 0;
$scope.remainingBreakLength = $scope.breakLength;
$scope.sessionLength = 10;
$scope.remainingSessionLength = $scope.sessionLength;
$scope.seconds = "0" + 0;
$scope.pomoTimer = true;
$scope.break = false;

  $scope.timer = function() {
    stop = $interval(function() {
      if($scope.seconds == 0 && $scope.remainingSessionLength == 0) {
        $scope.pomoTimer = false;
        $scope.break = true;
        $scope.stopTimer()
        $scope.breakTimer();
      }
      if($scope.seconds > 0) {
        $scope.seconds -= 1;
        if($scope.seconds < 10) {
          $scope.seconds = "0" + $scope.seconds;
        }
      }
      else if($scope.seconds == 0 && $scope.remainingSessionLength >= 1) {
        $scope.remainingSessionLength -= 1;
        $scope.seconds = 59;
      }

    }, 10);
  };

  $scope.breakTimer = function() {
    btimer = $interval(function() {
      if($scope.breakSeconds == 0 && $scope.remainingBreakLength == 0) {
        $scope.pomoTimer = true;
        $scope.break = false;
        $scope.stopBreakTimer()
        $scope.resetTimer();
      }
      if($scope.breakSeconds > 0) {
        $scope.breakSeconds -= 1;
        if($scope.breakSeconds < 10) {
          $scope.breakSeconds = "0" + $scope.breakSeconds;
        }
      }
      else if($scope.breakSeconds == 0 && $scope.remainingBreakLength >= 1) {
        $scope.remainingBreakLength -= 1;
        $scope.breakSeconds = 59;
      }

    }, 10);
  };

  $scope.stopTimer = function() {
    if (angular.isDefined(stop)) {
      $interval.cancel(stop);
      stop = undefined;
    }
  };

  $scope.stopBreakTimer = function() {
    if (angular.isDefined(btimer)) {
      $interval.cancel(btimer);
      btimer = undefined;
    }
  };
  $scope.resetTimer = function() {
    $scope.remainingBreakLength = $scope.breakLength;
    $scope.remainingSessionLength = $scope.sessionLength;
    $scope.seconds = "0" + 0;
  }

  $scope.decrementBreak = function(time) {
    $scope.breakLength -= time;
    $scope.remainingBreakLength = $scope.breakLength;
    $scope.breakLength = $scope.remainingBreakLength;
    console.log($scope.remainingBreakLength);
  }

  $scope.addToBreak = function(time) {
    $scope.breakLength += time;
    $scope.remainingBreakLength = $scope.breakLength;
    $scope.breakLength = $scope.remainingBreakLength;
    console.log($scope.remainingBreakLength);
  }

  $scope.decrementSession = function() {
    $scope.sessionLength -= 1;
    $scope.remainingSessionLength = $scope.sessionLength;
    $scope.sessionLength = $scope.remainingSessionLength;
  }

  $scope.addToSession = function() {
    $scope.sessionLength += 1;
    $scope.remainingSessionLength = $scope.sessionLength;
    $scope.sessionLength = $scope.remainingSessionLength;

  }


}]);
