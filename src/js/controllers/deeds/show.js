angular
  .module("goodVibes")
  .controller("DeedShowCtrl", DeedShowCtrl);

DeedShowCtrl.$inject = ["Deed", "$stateParams", "$state"];
function DeedShowCtrl(Deed, $stateParams, $state){
  const vm = this;

  Deed.get($stateParams, data => {
    vm.deed = data.deed;
  });

  vm.deedDelete = () => {
    Deed
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("deedIndex");
      });
  };
}
