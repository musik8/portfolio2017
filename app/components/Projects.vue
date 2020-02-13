
<template>
	<div class="projects-page">
		<div class="projects-container " @mousemove="moveDisplay">
			<div class="project-nav">
				<div class="up" :class="{active: index.upArrow}" @click="sliderPosition(-1)">
					
						<svg version="1.1"  class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
						<polygon class="st1" points="85.997,43.747 54.8,12.549 54.8,12.543 45.2,12.543 45.2,12.547 45.196,12.543 13.995,43.745 20.783,50.533 
							45.2,26.116 45.2,90.486 54.8,90.486 54.8,26.126 79.209,50.535 "/>
						</svg>

				</div>
				<div class="down" :class="{active: index.downArrow}" @click="sliderPosition(1)">
						
						<svg version="1.1" class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
						<polygon class="st1" points="13.995,59.282 45.192,90.479 45.192,90.486 54.792,90.486 54.792,90.482 54.796,90.486 85.997,59.284 
							79.209,52.496 54.792,76.913 54.792,12.543 45.192,12.543 45.192,76.903 20.783,52.493 "/>
						</svg> 

				</div>
				<ul>
					<li class="select-project" v-for="(project, index) in projects" @click="jumpTo(index)" :class="{active: checkProject(index)}" >

						<span class="hidden" :style="{color : project.displayColor}">{{project.title}}</span>
						<span class="base">{{project.title}}</span>
					</li>
				</ul>
			</div>

			<div class="close-project" @click="closeProject">
				
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
				<polygon points="87.82,17.109 82.891,12.18 50,45.07 17.109,12.18 12.18,17.109 45.07,50 12.18,82.891 17.109,87.82 50,54.93 
					82.891,87.82 87.82,82.891 54.93,50 "/>
				</svg>

			</div>
			<div class="projects-wheel-container" >
				<div  @scroll="sequencing" class="project-slide" ref="ProjectSlides" v-for="(project, index) in projects" :id="'slide-' + index" :class="{'active': firstProject(index)}" :style="hideStyle(index)">
						

					<div class="details-container">
						<div class="text-container">
							<h2 @click="openProject"  
							:style="[{color: project.displayColor}]">{{project.title}}</h2>
						</div> 
						<div class="text-container">
							<h3>Affiliation: {{project.position}}</h3>
						</div>
					</div>

					<div class="display-container" :id="'display-' + index">

						<div class="display-image" @click="openProject" :style="{backgroundImage: 'url(' + project.display + ')'} ">
						
							<div class="info">
								<h3>MORE INFO</h3>
							</div> 
						</div>
						<div class="display-background"  :style="[{'background-color': project.displayColor}]"  v-for="n in 3" >
						</div>
					</div>
					<Project class="project-detail" v-bind:project="project" ref="projectTemp"></Project>
						


				</div>



			</div>

		</div>
	</div>
</template>

<script>
import Projects from '../data/projects.js';
import $ from 'jquery';
import Vue from 'vue';
import Project from './Project.vue';
import { TimelineMax } from 'gsap';
import { TweenMax } from 'gsap';
import _ from 'lodash';

var ww = $(window).width();


window.index = {
	active: 0,
	next: 1,
	prev: -1,
	total: 10,
	functional: true,
	upArrow: false,
	downArrow: true,
	arrayImages: null,
};

var slider = {
	moveSlider: function(dir, jump) { 
		var $activeSlide = $('#slide-' + index.active);
		var $arrayOfSlides = [];
		
	
		index.functional = false;

		if(dir === 1) {	
			var $nextSlide = $('#slide-' + index.next);
			var actSlideDir = "-100%";
		
		} else if(dir === -1) {
			var $nextSlide = $('#slide-' + index.prev);
			var actSlideDir = "100%";

		}
		
		if(jump != null) {
			$nextSlide = $('#slide-' + jump);
			console.log(jump);
			// jump - index.active);
			
			if(dir === 1) {
				for(var i = index.active; i <= jump - 1; i++) {
					$arrayOfSlides.push($('#slide-' + i));
				}
			} else {
				for(var i = index.active; i >= jump + 1; i--) {
					$arrayOfSlides.push($('#slide-' + i));
				}
			}
		}

		
		if(jump != null) {
			var tl = new TimelineMax({delay:0.1, repeat:0 });
			tl.staggerTo($arrayOfSlides, 0.4, {
				force3D:true,
				y: actSlideDir,
				ease: Power3.easeInOut,
				className:'-=active',
			}, 0.2)
			.to($nextSlide, 0.5, {
				force3D:true,
				ease: Power4.easeInOut,
				y: "0%",
			})
			.to($nextSlide, 0.1, {
				className:'+=active',
				onUpdate: function() {index.functional = true;},
			})
			.staggerTo(index.arrayImages, 0.2, {
					clearProps: "transform",
			});



			index.active = jump;
			index.next = jump + 1;
			index.prev = jump - 1;


		} else {	
			var tl = new TimelineMax({delay:0.1, repeat:0 });
			tl.to($activeSlide, 0.5, {
				force3D:true,
				y: actSlideDir,
				className:'-=active',
				ease: Power4.easeInOut,
			})
			.to($nextSlide, 0.5, {
				force3D:true,
				y: "0%",
				ease: Power4.easeInOut,

			}, "-=0.4")
			.to($nextSlide, 0.1, {
				className:'+=active',
				onUpdate: function() {index.functional = true;},
			})
			.staggerTo(index.arrayImages, 0.2, {
				clearProps: "transform",
			});

			var container = '#display-' + index.active;

			index.active = index.active + dir;
			index.next = index.next + dir;
			index.prev = index.prev + dir;

		}


		var container = '#display-' + index.active;
		var $arrayOfSlides = $(container).children();
		index.arrayImages = $arrayOfSlides; 

		
		

		console.log("ACTIVE:" + index.active + "   NEXT:" + index.next + "  PREV:" + index.prev);
		if(index.prev == -1) {
			index.upArrow = false;
		} else {
			index.upArrow = true;
		}
		if(index.next == $(".project-slide").length) {
			index.downArrow = false;
		} else {
			index.downArrow = true;
		}
	},


};

$( document ).ready(function() {
    
});

// info = $(this.$refs['service'][index]).find('.info');
// Vue.nextTick(function () {
//   console.log("VUE TICK");
// })
export default {
	components: {
		Project
	},
	template: '.project-details',
	// props: ['projects'],


	data: function() {

		return {
			activeText: {
				loadText: false,
			},

			projects: Projects, 
			isActive: 0,
			open: true,
			displayShift: {},
			windowSize : ww,
			open: false,
			index,
			
		};
	},
	watch: {
		
	},
	created: function () {
		setTimeout(function() {
			$('#slide-0').addClass('active');
			console.log("Projects Loaded");
			
		}, 500);

	},
	methods: {
		checkProject: function(indx) {
			if(this.index.active == indx) {
				return true;
			} else {
				return false;
			}
		},

		loadpage: function() {

		 	this.$nextTick(function () {
		        // console.log("Page Loaded");
		     })
		 },
		openProject: function() {

			if(index.functional == false) {
				return false;
				console.log("Project Already Displayed");
			}

			var selected = index.active;
			this.$refs.projectTemp[selected].OpenProject();

			// console.log(this.$refs.projectTemp[selected]);
			var $menuLogo = $(".menuLogo");
			var $activeSlide = $(".project-slide.active");
			var container = '#display-' + index.active;
			var $arrayOfSlides = $(container).children();
 			var $body = $('body');

			index.functional = false;
			var t1 = new TimelineMax({delay: 0.1});
			t1.staggerTo($arrayOfSlides, 0.3, {
				x: 0,
				y: 0,
				ease: Power3.easeOut,
			}, 0.2)
			.to([$activeSlide, $body], 0.1, {
				className: '+=show-project',
			})
			.to($menuLogo, 0, {
				className: '+=black',
			}, "+=0.9");
			


		},
		closeProject: function() {
			var selected = index.active;
			this.$refs.projectTemp[selected].closeProject();
		
			// var $menuLogo = $(".menuLogo");
			// var $activeSlide = $(".project-slide.active");
			// var container = '#display-' + index.active;
			// var $arrayOfSlides = $(container).children();
 		// 	var $body = $('body');

			// var t1 = new TimelineMax();
			// t1.to([$activeSlide, $body], 0.1, {
			// 	className: '-=show-project',
			// })
			// .to($menuLogo, 0, {
			// 	className: '-=black',
			// });
			
			// index.functional = true;
			

			
		},
		firstProject: function(indx) {
			if(indx === 0) {
				

					// return true;
			
			}
		},
		hideStyle: function(indx) {

			if(indx > 0) {
				return {transform: "translate3d(0, 100%, 0)"};
			}
		},
		sliderPosition: function(dir) {
			slider.moveSlider(dir);
		},
		jumpTo: function(indx) {
			if(index.active == indx) {
				return; 
			}
			if(index.active < indx) {
				slider.moveSlider(1, indx)

			} else {
				slider.moveSlider(-1, indx)
				
			}

		},

		moveDisplay: _.throttle(function(e) {

			if(this.index.arrayImages == null) {
				var container = '#display-' + index.active;
				var $arrayOfSlides = $(container).children();
				this.index.arrayImages = $arrayOfSlides; 
				console.log("set image transform");						
			}

			if(this.windowSize >= 1024 && index.functional == true) {
				var ww = $(window).width();
				var wh = $(window).height();
				var mult = 50;
				var x = (((e.clientX / ww) * 2 - 1) * mult) + "px";
				var y = (((e.clientY / wh) * 2 - 1) * mult) + "px";


				

				var tl = new TimelineMax({delay:0.1, repeat:0 });
				
				
				tl.staggerTo(this.index.arrayImages, 0.4, {
					force3D:true,
					y: y,
					x: x,
					ease: Power3.easeOut, 
					
				}, 0.1);
			

				
    		}
    	}, 50),
    	sequencing: function(e) {
			var selected = index.active;
			this.$refs.projectTemp[selected].sequencing(e);

			
		},
	},


}

</script>

<style lang="sass" scoped>
	 @import "compass/css3";
	 @import "../sass/variables";
	 h2 {
	 	font-family: "nevis";
	 	font-size: 40px;
	 }
	 .projects-page {
	 	
	 }
	 .projects-container {
	 	position: absolute; 
	 	top: 0;
	 	left: 0;
	 	right: 0;
	 	bottom: 0; 
	 	overflow: hidden;
	 	min-height: 700px;
	 	background-color: $backgroundColor; 

	 	.close-project {
	 		width: 40px;
	 		height: 40px;
	 		position: fixed;
	 		top: 40px;
	 		right: 40px;
	 		z-index: 50;
	 		@include transform(rotate3d(0,0,1, -360deg));
	 		@include transition(transform 300ms $generalEase 100ms, opacity 100ms $generalEase 100ms);
	 		opacity: 0;
	 		pointer-events: none;

	 		svg {
	 			width: 100%;
	 			height: 100%;
	 		}
	 		.show-project & {
	 			opacity: 1;
	 			pointer-events: auto; 
	 			@include transform(rotate3d(0,0,1, 0deg));

		 		&:hover {
		 			cursor: pointer;
		 			@include transform(rotate3d(0,0,1, 90deg));

		 		}
	 		}

	 	}

	 	.project-nav {
	 		position: fixed; 
	 		z-index: 20;
	 		color: #fff;

	 		.up, .down {
	 			position: fixed;
	 			left: 0;
	 			right: 0;
	 			height: 100px;
	 			pointer-events: none;
	 			opacity: 0;
	 			@include transition(opacity 500ms ease-in-out);

	 			&:hover {
	 				cursor: pointer;

	 				.arrow {
	 					.st1 {
	 						fill: #fff;
	 						@include transition(fill 800ms cubic-bezier(0,1.48,.99,-0.55));
	 					}
	 				}
	 			}
	 			.arrow {
	 				width: 40px;
	 				height: 40px;
	 				position: absolute;
	 				right: 50px;
	 				@include transition(transform 800ms ease-in-out);

	 				.st1 {
	 					@include transition(fill 800ms ease-in-out);
	 					fill: #828282;
	 				}
	 			}
	 			&.active {
	 				opacity: 1; 
	 				pointer-events: auto;
	 			}
	 		}
	 		.up {
	 			top: 0;

	 			.arrow {
	 				top: 50px;
	 			}
	 			&:hover {
	 				.arrow {
	 					@include transition(transform 800ms cubic-bezier(0,1.48,.99,-0.55));
	 					@include transform(translate3d(0, -15px, 0));
	 				}
	 			}
	 		}
	 		.down {
	 			bottom: 0;
	 			.arrow {
	 				bottom: 50px;
	 			}
	 			&:hover {
	 				.arrow {
	 					@include transition(transform 800ms cubic-bezier(0,1.48,.99,-0.55));
	 					@include transform(translate3d(0, 15px, 0));
	 					
	 				}
	 			}
	 		}
	 		
	 		ul {

	 			@include display-flex;
	 			@include justify-content(center);
	 			@include flex-direction(column);
	 			position: fixed;
	 			top: 0;
	 			bottom: 0;
	 			left: 80px;

		 		.select-project {
		 			text-transform: uppercase; 
		 			letter-spacing: 0.2em;
		 			margin: 30px 0 30px 0;
		 			@include transition(opacity 400ms $generalEase);
		 			display: block;
		 			overflow: hidden;
		 			position: relative;

		 			&:hover {
		 				cursor: pointer;
		 				opacity: 0.6;
		 			}
		 			span {
	 					font-size: 12px;
	 					font-family: "nevis";
	 					display: block;
	 					// position: absolute; 
	 				}
	 				.base {
	 					@include transition(transform 200ms $generalEase 200ms);
	 				}
	 				.hidden {
	 					@include transform(translate3d(0, -100%, 0));
	 					@include transition(transform 200ms $generalEase);
	 					position: absolute;
	 				}
	 				&.active {
	 					.base {
	 						@include transform(translate3d(0, -100%, 0));
	 						@include transition(transform 300ms $generalEase 0ms);
	 					}
	 					.hidden {
	 						@include transition(transform 300ms $generalEase 300ms);
	 						@include transform(translate3d(0, 0%, 0));
	 					}
	 				}
		 		}
	 		}
	 		.show-project & {
	 			opacity: 0;
	 			pointer-events: none; 

	 			.up, .down {
	 				pointer-events: none;
	 			}
	 		}
	 	}

	 	.projects-wheel-container {
	 		position: relative;
	 		width: 100%;
	 		height: 100%;

	 		.project-slide {
	 			position: absolute; 
	 			width: 100%;
	 			height: 100%;
	 			pointer-events: none;
	 			@include box-sizing(border-box);
	 			@include transition(opacity 500ms $generalEase, background-color 400ms $generalEase 500ms);
	 			// opacity: 0;
	 			// top: 100%;
	 			// @include transform(translate(0, 100%));
	 			h1,h2,h3,p {
	 				// @include transition(color 500ms $generalEase 500ms);
	 			}
	 			.siteLoaded & {
		 			&.active {
		 				opacity: 1; 
		 				pointer-events: auto;
		 				// @include transform(translate(0, 0));

	 					.details-container {
	 						h2, h3 {
	 							@include transform(translate3d(0, 0%, 0));	
	 						}

	 					}
		 				.display-container {
		 					.display-background {
			 				
			 					top: 1px;
			 					left: 1px;
			 					right: 1px;
			 					bottom: 1px;
		 					}
		 				}
		 			}
	 			}
 				&.show-project {
	 				overflow-y: scroll;
 					background-color: #fff;

 					h1,h2,h3,p {
 						// @include transition(color 400ms $generalEase 500ms);
 						color: #000;
 					}
 					.details-container {
 						top: auto; 
 						bottom: 240px;
 						height: 560px;
 						right: (160/1920)*100vw;
 						// @include transition(right 300ms ease-in-out);
 					} 
 					.display-container {
 						left: (160/1920)*100vw;
 						width: (960/1920)*100vw;
 						height: 560px;
 						top: auto;
 						bottom: 240px;
 						// @include transition(height 300ms ease-in-out, width 300ms ease-in-out, left 300ms ease-in-out);
 						.display-image {
		 					.info {
		 						pointer-events: none;
		 						opacity: 0;
		 						
		 					}
	 						&:hover {
		 						cursor: auto;
		 					}
 						}
 					}
 				}
	 			
	 			.details-container {
	 				position: absolute; 
	 				right: (80/1920)*100vw;
	 				bottom: 220px;
	 				height: 480px; 
	 				color: #fff;
	 				z-index: 11;
	 				overflow: hidden;
	 				width: (480/1920)*100vw;
	 				@include transition(right 300ms $generalEase, bottom 300ms $generalEase, top, 300ms $generalEase);
	 				.text-container {
	 					overflow: hidden;
	 				}

	 				h2 {
	 					display: block;
	 					padding-bottom: 5px; 
						@include transform(translate3d(0, -100%, 0));
						@include transition(transform $Tspeed $generalEase 0ms, opacity 300ms $generalEase );
						
	 					&:hover {
	 						opacity: 0.6;
	 						cursor: pointer;
	 					}
	 				}
	 				h3 {
	 					font-size: (16/1920)*100vw;
	 					line-height: 1.7em;
	 					@include transform(translate3d(0, -100%, 0));
						@include transition(transform $Tspeed $generalEase 300ms, color 400ms $generalEase 500ms );
	 				}

	 				&:hover {

	 				}
	 			}
	 			.display-container {
	 				@include transition(height 300ms $generalEase, width 300ms $generalEase, left 300ms $generalEase, bottom 300ms $generalEase, top, 300ms $generalEase);
	 				position: absolute; 
	 				bottom: 220px;
	 				left: (480/1920)*100vw;
	 				width: (800/1920)*100vw;
	 				height: 480px;

	 				.display-image {
	 					width: 100%;
	 					height: 100%;
	 					// margin: 2.5% 5% 2.5% 5%;
	 				
	 					@include box-sizing(border-box);
	 					position: absolute;
	 					z-index: 10;
	 					opacity: 1;
	 					background-size: cover;
	 					
   						background-position: center; 
   						
						.info {
						
		 					position: absolute;
		 					z-index: 11;
		 					color: #fff;
		 					top: -10px;
		 					left: -40px;
		 					overflow: hidden;

		 					h3 {
		 						@include transform(translate3d(0, -100%, 0));
		 						@include transition(transform 300ms $generalEase 1000ms);
		 						font-size: 18px;
		 					}
		 				
		 				}
		 				&:hover {

		 					cursor: pointer;
		 					.info {
		 						h3 {
		 							@include transform(translate3d(0, 0%, 0));
		 							@include transition(transform 200ms $generalEase 00ms);
		 						}
		 					}
		 				}
					}
	 				.display-background {
	 					position: absolute;
	 					top: -10px;
	 					left: -10px;
	 					right: -10px;
	 					bottom: -10px;
	 					z-index: 3;

	 					@include transition(top 400ms $generalEase, bottom 400ms $generalEase, left 400ms $generalEase, right 400ms $generalEase );
	 					// @include transform(translate3d(30px, 10px, 0));
	 					&:nth-of-type(1) {
	 						opacity: 0.9;
	 							z-index: 1;
	 					}

	 					&:nth-of-type(2) {
	 						opacity: 1;
	 							z-index: 4;
	 					}
	 					&:nth-of-type(3) {
	 						opacity: 0.7;
	 						z-index: 3;
	 					
	 					}
	 					&:nth-of-type(4) {
	 						opacity: 0.4;
	 						z-index: 2;
	 					
	 					}

	 				}
	 			}
	 		}
	 	}
	 }

	@media (max-width: $laptop) {
		.projects-container {
			min-height: 500px;
		}
		.projects-container .projects-wheel-container .project-slide .display-container {
			height: 320px;
			bottom: 220px;
		}
		.projects-container .projects-wheel-container .project-slide .details-container {
			height: 320px;
			bottom: 220px;
		}
		.projects-container .projects-wheel-container .project-slide.show-project .display-container {
			height: 420px;
			bottom: 160px;
		}
		.projects-container .projects-wheel-container .project-slide.show-project .details-container {
			height: 420px;
			bottom: 160px;
		}

	}
	@media (max-width: $ipad) {
		.projects-container .projects-wheel-container .project-slide .display-container .display-image .info {
			display: none;
		}
		.projects-container .close-project {
			right: 25px; 
			top: 25px;
		}
		.projects-container .projects-wheel-container .project-slide .display-container {
			width: auto;
			height: auto;
			left: $ipadMargin;
			right: $ipadMargin;
			top: 220px;
			bottom: 160px;
			
		}
		.projects-container .projects-wheel-container .project-slide .details-container {
			height: 80px;
			width: auto;
			left: $ipadMargin;
			top: 140px;
		}
		.projects-container .projects-wheel-container .project-slide .details-container h2 {
			font-size:(36/1024)*100vw;
		}
		.projects-container .projects-wheel-container .project-slide .details-container h3 {
			font-size:(22/1024)*100vw;
		}
		.projects-container .projects-wheel-container .project-slide.show-project .display-container {
			// height: 420px;
		}
		.projects-container .projects-wheel-container .project-slide.show-project .display-container {
			width: auto;
			height: auto;
			left: $ipadMargin;
			right: $ipadMargin;
			top: 220px;
			bottom: 160px;
		}
		.projects-container .projects-wheel-container .project-slide.show-project .details-container {
			height: 80px;
			width: auto;
			left: $ipadMargin;
			top: 140px;
		}
		.projects-container .project-nav ul {
			display: none; 
		}

	}
	@media (max-width: $nano) {
		.projects-container {
			min-height: 300px;
		}
		.projects-container .project-nav .up .arrow {
			top: 25px;
		}
		.projects-container .project-nav .down .arrow {
		 	bottom: 25px;
		}
		.projects-container .project-nav .up .arrow, .projects-container .project-nav .down .arrow {
			right: 25px;
		}
		.projects-container .projects-wheel-container .project-slide .details-container h2 {
			font-size:(36/480)*100vw;
		}
		.projects-container .projects-wheel-container .project-slide .details-container h3 {
			font-size:(16/480)*100vw;
			line-height: 1.6em;
		}
	}

</style>
