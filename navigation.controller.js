function NavigationController($scope) {

    var vm = this;

    $scope.$on('$stateChangeSuccess', function(event, toState) {
        vm.currentTab = toState.data.selectedTab;
    });

}
