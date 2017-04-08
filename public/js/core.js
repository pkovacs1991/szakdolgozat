var app = angular.module("onlinePoker", ["ngRoute"]);


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/login", {
        templateUrl : "login.htm"
    })
    .when("/register", {
        templateUrl : "register.htm"
    })
    .when("/tables", {
        templateUrl : "tables.htm"
    })
    .when("/table/:id", {
        templateUrl : "table.htm"
    });
});