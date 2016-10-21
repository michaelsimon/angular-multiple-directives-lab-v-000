function ContactController() {
    var vm = this;
    vm.contacts = [{
        name: 'Bob',
        phone: '0123458690'
    },{
        name: 'Tim',
        phone: '3934203242'
    },{
        name: 'Ross',
        phone: '0684059433'
    }];

    vm.removeContact = function (index) {
        vm.contacts.splice(index, 1);
    }
    
    vm.submit = function() {
      if (vm.name && vm.phoneNumber) {
        vm.contacts.push({name: vm.name, phone: vm.phoneNumber});
      }
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);
