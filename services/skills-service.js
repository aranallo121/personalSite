var app= angular.module("MainApp");

app.service("SkillsService", function(){
    
    this.skills=[
        {skill:"HTML 5 / CSS", proficiency:"3" },
        {skill:"Javascript", proficiency:"3" },
        {skill:"AngularJS", proficiency:"3" },
        {skill:"Agile / Scrum", proficiency:"5" },
        {skill:"Project Management", proficiency:"4" },
        {skill:"Technical Training", proficiency:"5" },
        {skill:"Product Management", proficiency:"3" },
        {skill:"Process Engineering", proficiency:"4" }
    ];
    
    this.otherTools = ["Node", "Git / Github", "MongoDB", "Express", "jquery", "Jasmine", "Bootstrap", "UX/UI" ];
    
    
    
})