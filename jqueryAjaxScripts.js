$(document).ready(function(){
    $("a.homeButton").click(function(){
        $.ajax({
        	url: "home.html", 
        	async : true,
        	success: function(result){
            	$("#div1").html(result);
       	}});
    });
});
$(document).ready(function(){
    $("a.resumeButton").click(function(){
        $.ajax({
        	url: "resume.html", 
        	async : true,
        	success: function(result){
            	$("#div1").html(result);
       	}});
    });
});
$(document).ready(function(){
    $("a.githubButton").click(function(){
        $.ajax({
        	url: "github.html", 
        	async : true,
        	success: function(result){
            	$("#div1").html(result);
       	}});
    });
});
$(document).ready(function(){
    $("a.contactformButton").click(function(){
        $.ajax({
        	url: "contact.html", 
        	async : true,
        	success: function(result){
            	$("#div1").html(result);
       	}});
    });
});
$(document).ready(function(){
    $("a.angularButton").click(function(){
        $.ajax({
        	url: "angular.html", 
        	async : true,
        	success: function(result){
            	$("#div1").html(result);
       	}});
    });
});
$(document).ready(function(){
    $("a.signupButton").click(function(){
        $.ajax({
        	url: "signup.html", 
        	async : true,
        	success: function(result){
            	$("#div1").html(result);
       	}});
    });
});
$(document).ready(function(){
    $("a.loginButton").click(function(){
        $.ajax({
        	url: "login.html", 
        	async : true,
        	success: function(result){
            	$("#div1").html(result);
       	}});
    });
});