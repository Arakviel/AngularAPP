angular.module('app', ['ngRoute', 'controller'])
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/task_1.html',
		controller: 'Tasks_Ctrl'
	})
	.when('/task1', {
		templateUrl: 'templates/task_1.html',
		controller: 'Tasks_Ctrl'
	})
	.when('/task2', {
		templateUrl: 'templates/task_2.html',
		controller: 'Tasks_Ctrl'
	})
	.when('/task3', {
		templateUrl: 'templates/task_3.html',
		controller: 'Tasks_Ctrl'
	})
	.when('/task4', {
		templateUrl: 'templates/task_4.html',
		controller: 'Tasks_Ctrl'
	})
	.when('/task5', {
		templateUrl: 'templates/task_5.html',
		controller: 'Tasks_Ctrl'
	})
	.when('/task6', {
		templateUrl: 'templates/task_6.html',
		controller: 'Tasks_Ctrl'
	})
	.otherwise({
		templateUrl: 'templates/404.html'
	})
})
.service('myService',function(){
	this.contact_list= [
	{"id":1 ,"name":"Cecilia Chapman ","work":"Director"        ,"address":"711-2880 Nulla St. Mankato Mississippi 96522"        , "phone":"(257) 563-7401"},
	{"id":2 ,"name":"Iris Watson"     ,"work":"Office Manager"  ,"address":"P.O. Box 283 8562 Fusce Rd. Frederick Nebraska 20620", "phone":"(372) 587-2335"},
	{"id":3 ,"name":"Celeste Slater"  ,"work":"Business Manager","address":"606-3727 Ullamcorper. Street Roseville NH 11523"     , "phone":"(786) 713-8616"},
	{"id":4 ,"name":"Theodore Lowe"   ,"work":"Programmer"      ,"address":"Ap #867-859 Sit Rd. Azusa New York 39531"            , "phone":"(793) 151-6230"},
	{"id":5 ,"name":"Calista Wise"    ,"work":"Programmer"      ,"address":"7292 Dictum Av. San Antonio MI 47096"                , "phone":"(492) 709-6392"},
	{"id":6 ,"name":"Kyla Olsen"      ,"work":"Programmer"      ,"address":"Ap #651-8679 Sodales Av. Tamuning PA 10855"          , "phone":"(654) 393-5734"},
	{"id":7 ,"name":"Forrest Ray"     ,"work":"Business Manager","address":"191-103 Integer Rd. Corona New Mexico 08219"         , "phone":"(404) 960-3807"},
	{"id":8 ,"name":"Hiroko Potter"   ,"work":"Director"        ,"address":"P.O. Box 887 2508 Dolor. Av. Muskegon KY 12482"      , "phone":"(314) 244-6306"},
	{"id":9 ,"name":"Nyssa Vazquez"   ,"work":"General Manager" ,"address":"511-5762 At Rd. Chelsea MI 67708"                    , "phone":"(947) 278-5929"},
	{"id":10,"name":"Lawrence Moreno" ,"work":"Office Manager"  ,"address":"935-9940 Tortor. Street Santa Rosa MN 98804"         , "phone":"(684) 579-1879"}
	];
})