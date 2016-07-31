/**
 * Created by moslem on 7/31/16.
 */
describe('main control', function () {

  beforeEach(module('MainController'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('variable', function () {
    it('mainVar must be MAIN VARIABLE', function () {
      var $scope = {};
      var controller = $controller('MainCtrl', { $scope: $scope });
      
      expect($scope.mainVar).toBe('MAIN VARIABLE');
    });
  });

});
