
(function (angular){


    var WebAppMaker = angular.module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController)


    function WidgetEditController($routeParams, WidgetService, $location) {
        var vm = this;
        vm.pageId = parseInt($routeParams.pid);
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm.widgetId = parseInt($routeParams.wgid);
        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;


        function init() {
            WidgetService
                .findWidgetById(vm.widgetId)
                .success(function(widget){
                    if(widget != '0') {
                        vm.widget = widget;
                    }
                })
                .error(function(){

                });
        }
        init();


        function updateWidget(website) {
            WebsiteService.updateWebsite(website);
            $location.url("/user/" + vm.userId + "/website/"+ vm.websiteId + "/page/" + vm.pageId + "/widget");
        }

        function deleteWidget(wgid) {
            WidgetService.deleteWidget(vm.widgetId);
            $location.url("/user/" + vm.userId + "/website/"+ vm.websiteId + "/page/" + vm.pageId + "/widget");
        }


    }
})(window.angular);
