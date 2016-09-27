var app = angular.module("MainApp",["ui.router"]);

app.controller("MainController", ["$scope", "SkillsService", function($scope, SkillsService){
    $scope.skills = SkillsService.skills;
    $scope.otherTools = SkillsService.otherTools;
    
}]) // close the controller

app.config(function($stateProvider){
    var experienceState = {
        name: "experience",
        url: "/experience",
        templateUrl: "./templates/experience.html"
    }
    
    var aboutState = {
        name: "about",
        url: "/about",
        templateUrl: "./templates/about.html"
    }
    
    var educationState = {
        name: "education",
        url: "/education",
        templateUrl: "./templates/education.html"
    }
    
    var skillState = {
        name: "skills",
        url: "/skills",
        templateUrl: "./templates/skills.html"
    }
    
    $stateProvider.state(aboutState);
    $stateProvider.state(experienceState);
    $stateProvider.state(educationState);
    $stateProvider.state(skillState);
    
})//close config