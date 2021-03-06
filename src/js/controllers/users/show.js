angular
  .module("goodVibes")
  .controller("usersShowCtrl", usersShowCtrl);

usersShowCtrl.$inject = ["User", "Deed", "$stateParams", "$state"];
function usersShowCtrl(User, Deed, $stateParams, $state){
  const vm   = this;


  User.get($stateParams, data => {
    vm.user = data.user;
  });



  vm.userDelete = () => {
    User
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("usersShowCtrl");
      });
  };

  Deed.query_for_user($stateParams)
    .$promise
    .then(data => {
      vm.deeds = data.deeds;
    })
    .catch(console.log);
}
