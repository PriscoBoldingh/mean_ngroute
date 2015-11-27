/**
 * Created by prisco on 24/11/15.
 */
angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

//angular.module('routerApp', ['routerRoutes'])

//angular.module('routerApp',[])

    .controller('mainController', function() {
        var vm = this;
        vm.bigMessage = 'a smooth sea never made a skilled sailor.';
    })

    .controller('homeController', function() {
        var vm = this;
        vm.message = 'This is the home page!';
    })

    .controller('aboutController', function() {
        var vm = this;
        vm.message = 'Look! I am an about page.';
    })

    .controller('contactController', function() {
        var vm = this;
        vm.message = 'Contact us! JK. This is just a demo.';
    });

