var app = angular.module("experiments", []);

app.directive('clickMe', [
  function clickMeDirective($compile) {
    return {
      link: function (scope, element, attrs) {
        var top = 0, left = 0, parent = element.parent(),
            maxTop = parent[0].scrollHeight - 30, maxLeft = parent[0].scrollWidth - 100;

        attrs.$addClass('click-me');
        element.on('mousedown', mousedown);
        element.on('mouseenter', mouseenter);

        function mousedown() {
          alert("you clicked it");
        }

        function mouseenter() {
          left = select(maxLeft);
          top = select(maxTop);
          set();
        }

        function set() {
          element.css({
            top: '' + top + 'px',
            left: '' + left + 'px'
          });
        }

        function select(max) {
          return Math.floor(Math.random() * max);
        }
      }
    };
  }
]);