pomoD = angular.module("pomoD", []);

pomoD.controller('TimerController', ['$scope', '$interval',
function($scope, $interval) {
$scope.breakLength = 3;
$scope.breakSeconds = "0" + 0;
$scope.sessionLength = 1;
$scope.minutes = $scope.sessionLength;
$scope.seconds = "0" + 0;
$scope.pomoTimer = true;
$scope.break = false;

  $scope.timer = function() {
    stop = $interval(function() {
      if($scope.seconds == 0 && $scope.minutes == 0) {
        $scope.pomoTimer = false;
        $scope.break = true;
        $scope.stopTimer()
        $scope.breakTimer();
        console.log("Yesssir ", $scope.minutes, $scope.seconds);
      }
      if($scope.seconds > 0) {
        $scope.seconds -= 1;
        if($scope.seconds < 10) {
          $scope.seconds = "0" + $scope.seconds;
        }
      }
      else if($scope.seconds == 0 && $scope.minutes >= 1) {
        $scope.minutes -= 1;
        $scope.seconds = 59;
      }

    }, 100);
  };

  $scope.breakTimer = function() {
    btimer = $interval(function() {
      if($scope.breakSeconds == 0 && $scope.breakLength == 0) {
        $scope.pomoTimer = true;
        $scope.break = false;
        $scope.stopBreakTimer()
        console.log("Yesssir ", $scope.minutes, $scope.seconds);
      }
      if($scope.breakSeconds > 0) {
        $scope.breakSeconds -= 1;
        if($scope.breakSeconds < 10) {
          $scope.breakSeconds = "0" + $scope.breakSeconds;
        }
      }
      else if($scope.breakSeconds == 0 && $scope.breakLength >= 1) {
        console.log("line 48")
        $scope.breakLength -= 1;
        $scope.breakSeconds = 59;
      }

    }, 100);
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
    $scope.minutes = $scope.minutes;
    $scope.seconds = "0" + 0;
  }

  $scope.decrementBreak = function() {
    $scope.breakLength -= 1;
  }

  $scope.addToBreak = function() {
    $scope.breakLength += 1;
  }

  $scope.decrementSession = function() {
    $scope.minutes -= 1;
  }

  $scope.addToSession = function() {
    $scope.minutes += 1;
  }


}]);
