
import $ from 'jquery';
import { TweenMax } from 'gsap';

import Vue from 'vue';
import VueRouter from 'vue-router';

import HeaderUI from '../components/HeaderUI.vue';
import Home from '../components/Home.vue';
import Projects from '../components/Projects.vue';
import About from '../components/About.vue';

require('../sass/main.scss');
// window._ = require('lodash');
Vue.use(VueRouter);
Vue.component('headerui', HeaderUI);

 
const routes = [
	{ path: '/', component: Home },
	{ path: '/projects', component: Projects, name: 'Projects' },
	{ path: '/about', component: About, name: 'About' },
	
];

const router = new VueRouter({ routes });

const vue = new Vue({
	el: '#app-wrapper',
	router: router,
	watch: {
		$route: function() {
				console.log("change page");
				$('body').removeClass('show-project').removeClass('show-hover');
				$('.menuLogo').removeClass('black');
				index.active = 0;
				index.next = 1;
				index.prev = -1;
				index.functional = true ;
				index.arrayImages = null;
				index.upArrow = false,
				index.downArrow = true,
				this.pageSwipe();
	
			},
	},

	
	methods: {
		pageSwipe: function() {
			var color = ['#2e316c', '#fed49e', '#2e316c', '#ef5e5a', '#f0b482', '#ef5e5a', '#c7e4cc'];
			var color = color[Math.floor(Math.random() * color.length)];
			var $swipe = $('.page-swipe');
			var pageSwipe = new TimelineMax(); 
			pageSwipe.to($swipe, 0.4, {x: "0%", }) 
			.to($swipe, 0, {backgroundColor: color,}, '0')
			.to($swipe, 0.4, {x:"100%", delay: 0.1, ease: Power3.easeInOut})
			.to($swipe, 0, {clearProps: "all"});
		},
	},

  
});
	

$( document ).ready(function() {
	
	$('body').addClass("preload");

});
$(window).on('load', () => {

	 console.log("Loaded...");

});


