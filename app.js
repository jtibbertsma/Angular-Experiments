var app = angular.module("experiments", []);

app.factory('myClock', ['$interval',
  function clockFactory($interval) {
    var Clock = function () {
      this.time = 0;
      this.interval = null;
    };

    Clock.prototype.running = function () {
      return this.interval !== null;
    };

    Clock.prototype.start = function () {
      this.interval = $interval(function () {
        this.time += 1;
      }.bind(this), 1000);
    };

    Clock.prototype.stop = function () {
      $interval.cancel(this.interval);
      this.interval = null;
    };

    Clock.prototype.format = function () {
      var minutes = Math.floor(this.time / 60);
      var seconds = this.time % 60;

      return "" + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    };

    return new Clock();
  }
]);

app.controller('clockController', ['$scope', 'myClock',
  function clockControllerConstructor($scope, myClock) {
    $scope.formattedTime = "0:00";
    $scope.buttonMessage = "Start";

    $scope.clickButton = function () {
      if (myClock.running()) {
        myClock.stop();

        $scope.formattedTime = myClock.format();
        $scope.buttonMessage = "Start";
      } else {
        myClock.start();

        $scope.formattedTime = myClock.format();
        $scope.buttonMessage = "Stop";
      }
    }; 
  }
]);