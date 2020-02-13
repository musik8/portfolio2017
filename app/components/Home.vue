
<template>
	<div class="home-container">
		<div class="intro-heading">
			<h1 :class="[{hoverHide: hoverMenu}, activeText]" class="textIntro">
				Hello, my name is Maxim Usik. </br>I am a website developer and graphic designer. 

			</h1>
		</div>
		<div   @mousemove="moveHome"  class="logo-home-container">
			<div class="logo-triangle">
				<div class="svg-triangle">	
					<svg version="1.1" id="Layer_1" class="triangle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 600 600" style="enable-background:new 0 0 600 600;" xml:space="preserve">
				
					<polygon class="st0" :style="{fill: activePallet.st0, stroke: activePallet.st0}" points="113.465759,146.050827 299.431946,470.062836 330.858398,415.870483 176.076065,146.190735 "/>
					<polygon class="st1" :style="{fill: activePallet.st1, stroke: activePallet.st1}" points="176.076065,146.190735 330.858398,415.870483 362.322388,361.613129 238.761536,146.330795 "/>
					<polygon class="st2" :style="{fill: activePallet.st2, stroke: activePallet.st2}" points="238.666626,146.330597 362.318634,361.619598 393.613647,307.654022 301.141144,146.470184 "/>
					<polygon class="st3" :style="{fill: activePallet.st3, stroke: activePallet.st3}" points="362.402405,146.607071 301.084106,146.470062 393.604523,307.6698 424.382263,254.595734 "/>
					<polygon class="st4" :style="{fill: activePallet.st4, stroke: activePallet.st4}"points="486.837006,146.885147 362.349609,146.606995 424.382263,254.595734 "/>
					</svg>
				</div>

			</div>
			
			<div class="logo-MU" :class="{hide: hideMU}">
				<div class="svg-MU">
					<svg version="1.1" id="Layer_1" class="MU" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 600 600" style="enable-background:new 0 0 600 600;" xml:space="preserve">
					<g>
						<g>
							<polygon class="st0" points="100.285,393.0084 149.8352,393.0084 149.8352,293.9041 199.3854,343.4543 248.9355,293.9041 
								248.9355,393.0084 298.4857,393.0084 298.4857,174.5511 298.4857,174.5511 199.3854,272.6683 100.285,174.5511 100.285,174.5511 
										"/>
							<path class="st0" d="M329.6787,174.5511h49.5502v133.5142c0,19.547,15.8459,35.3929,35.3929,35.3929h0.0001
								c19.547,0,35.3929-15.8459,35.3929-35.3929V174.5511h49.5502v133.5142c0,46.9128-38.0303,84.9431-84.9431,84.9431h-0.0002
								c-46.9128,0-84.9431-38.0303-84.9431-84.9431V174.5511z"/>
						</g>
					</g>
					</svg>
				</div>
			</div> 
			<div class="hover-state" :class="{show: hideMU}">
				<div class="description" :class="{active: Dabout}">
					<h3>Information about <br/> me and my skills.</h3>
				</div>
				<div class="description" :class="{active: Dproject}">
					<h3>Have a look at <br/> some of my work.</h3>
				</div>
				<div class="description" :class="{active: Dsandbox}">
					<h3>Not ready just yet.</h3>
				</div>
			</div>


		</div> 

		<div class="pages-nav">
			<div class="nav-item">
				<a class="textIntro" :class="activeText" @click="aboutClick" @mouseover="logoDance('about')" @mouseleave="offHover">
					<span>ABOUT</span>
				</a>
			</div>
			<div class="nav-item">
				<a class="textIntro" :class="activeText" @click="projectsClick" @mouseover="logoDance('project')" @mouseleave="offHover">
					<span>PROJECTS</span>
				</a>
			</div>
			<div class="nav-item">
				<a class="textIntro" :class="activeText" @mouseover="logoDance('sandbox')" @mouseleave="offHover">
					<span>SANDBOX</span>
				</a>
			</div>
		</div> 

	</div>
</template>

<script>
import Vue from 'vue';
import $ from 'jquery';
import _ from 'lodash';


var ww = $(window).width();


 
export default {
	

	data: function() {

  			
		return {
			
			activeText: {
				loadText: false,
			},
			hoverMenu: false,
			Dsandbox: false,
			Dabout: false,
			Dproject: false,
			colorPallets: {
				vanilla: {
					st0: "#8d1c1b",
					st1: "#c24442", 
					st2: "#e8d8c2",
					st3: "#a88c80",
					st4: "#735752",
				},
				project: {
					st0: "#f8ab66",
					st1: "#fed49e", 
					st2: "#2e316c",
					st3: "#2e3d8a",
					st4: "#fefaf7",
				},
				about: {
					st0: "#4d252e",
					st1: "#afb3b2", 
					st2: "#edcc91",
					st3: "#0c1e31",
					st4: "#ac8255",
				},
				sandbox: {
					st0: "#000",
					st1: "#000", 
					st2: "#000",
					st3: "#000",
					st4: "#000",
				},
			},
			activePallet: {
				st0: "#8d1c1b",
				st1: "#c24442", 
				st2: "#e8d8c2",
				st3: "#a88c80",
				st4: "#735752",
			},
			hideMU: false,
			functional: true,
			windowSize: ww,
			triangleStyle: {
				transform: "translate3d(0px, 0px, 0px)",
			},
			muStyle: {
				transform: "translate3d(0px, 0px, 0px)",

			},
			x: 5,


		}
		
	},
	created: function() {
		var self = this;
		setTimeout(function() {

			self.activeText.loadText = true;
		},200);


	},

	methods: {
		increase() {
			this.text++;
		},
		moveHome: _.throttle(function(e) {

			if(this.windowSize >= 1024 && this.functional == true) {
				var ww = $(window).width();
				var wh = $(window).height();
				var mult = 50;
				var x = ((e.clientX / ww) * 2 - 1) * mult;
				var y = ((e.clientY / wh) * 2 - 1) * mult;

				var tl = new TimelineMax();
				
				var $MU = $('.svg-MU');
				var $tri = $('.svg-triangle');
				tl.to($MU, 1, {
					force3D:true,
					y: y,
					x: x,
					ease: Power2.easeOut, 
					
				})
				.to($tri, 1.8, {
					force3D:true,
					y: y,
					x: x,
					ease: Power2.easeOut, 
				}, 0);
			

				// var newTransform = 'translate3d(' + (x * mult) + 'px, ' + (y * mult) + 'px, 0px)';
				// this.triangleStyle.transform = newTransform;

				// var newTransform = 'translate3d(' + (x * mult) + 'px, ' + (y * mult) + 'px, 0px)';
				// this.muStyle.transform = newTransform;

		
			
      			
    		}
    	}, 50),
    	projectsClick: function() {
			this.$router.push('/projects');
		},
		aboutClick: function() {
			this.$router.push('/about');
		},
		offHover: function() {
			this.hideMU = false; 
			this.functional = true;
			this.hoverMenu = false;
			this.Dsandbox = false;
			this.Dproject = false;
			this.Dabout = false;
			var self = this;
			$('body').removeClass('show-hover');
			setTimeout(function() {

				for(var i = 0; i <= 5; i++) {
					var color = "st" + i;
					var type = 'vanilla';
					self.activePallet[color] = self.colorPallets[type][color];
				}

			}, 300);
		},
		logoDance: function(type) {
			this.hideMU = true; 
			this.functional = false;
			this.hoverMenu = true;
			var text = 'D' + type;
			this[text] = true;
			for(var i = 0; i <= 5; i++) {
				var color = "st" + i;
				this.activePallet[color] = this.colorPallets[type][color];
			}
			// var newTransform = 'translate3d(0px, 0px, 0px)';
		
			// this.triangleStyle.transform = newTransform;
			// this.muStyle.transform = newTransform;

				var tl = new TimelineMax({delay: 0.4});
				
				
				var $tri = $('.svg-triangle');
				tl.to($tri, 1.2, {
					force3D:true,
					y: 0,
					x: 0,
					ease: Power2.easeOut, 
					
				});
			$('body').addClass('show-hover');
			console.log("CHANGE COLOR");
		},
		
    
	}
	
}

</script>

<style lang="sass" scoped>
	 @import "compass/css3";
	 @import "../sass/variables";

	.home-container {
		position: relative; 
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		background-color: #0f0d14;
	}
	.intro-heading {
		position: absolute; 
		z-index: 10;
		width: auto;
		top: 30%;
		overflow: hidden;
		width: (1500/1920)*100vw;
		@include transform(translate(0, -50%));

		h1 {
			text-transform: uppercase;
			color: #fff;
			padding-left: (160/1920)*100vw;
			z-index: 10;
			font-size: (40/1920)*100vw;
			line-height: 1.4em;

			&.hoverHide {
				// opacity: 0;
				@include transition-delay(200ms);
				@include transform(translate3d(0, -100%, 0)!important);
			}
		}
	}
	.logo-home-container {
		
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 5;

		.logo-triangle {

			width: 600px;
			height: 600px;
			position: absolute; 
			top: 50%;
			left: 50%;
			z-index: 5;
			@include transform(translate(-50%, -50%));

			.st0,.st1,.st2,.st3,.st4 { 
				stroke-width: 0.5;
				stroke-miterlimit: 10;
				@include transition(fill 500ms $generalEase, stroke 500ms $generalEase); 
			}
			.st0 { 
				fill: #F0B67F; 
				stroke: #F0B67F;
				@include transition-delay(50ms);
			}
			.st1{
				fill: #F15F57;
				stroke: #F15F57;
				@include transition-delay(150ms);
			}
			.st2 {
				fill: #D7D1B1;
				stroke: #D7D1B1;
				@include transition-delay(250ms);
			}
			.st3 {
				fill: #C8E5CC;
				stroke: #C8E5CC;
				@include transition-delay(350ms);
			}
			.st4 {
				fill: #EEF5DC; 
				stroke: #EEF5DC;
				@include transition-delay(450ms);
			}
			.triangle {
				@include transition(transform 1200ms cubic-bezier(0, 0, 0.4, 0.82));
			}
		}
		.logo-MU {
			position: absolute;
			width: 600px;
			height: 600px;
			z-index: 6;
			top: 50%;
			left: 50%;
			@include transition(opacity 800ms $generalEase);
			@include transform(translate(-50%, -50%));

			.MU {

				@include transition(transform 700ms cubic-bezier(0, 0, 0.4, 0.82));
				.st0 {
					@include transition(fill 500ms $generalEase, stroke 500ms $generalEase);
					fill: #fff;
				}
			}
			&.hide {
				.MU {
					.st0 {
					}
				}
				 opacity: 0;
			}

		}
		.hover-state {
			position: absolute;
			top: 160px;
			bottom: 160px;
			left: 320px; 
			right: 320px;
			background-color: #4b4b4b;
			z-index: 4;
			opacity: 0;
			@include transition(opacity 500ms $generalEase 200ms);

			&.show {
				opacity: 1;
			}

			.description {
				position: absolute;
				top: 50%;

				@include transform(translate(-160px, -50%));
				overflow: hidden;
				pointer-events: none;
				
				h3 {
					color: #fff;
					font-size: (22/1920)*100vw;
					// font-size: 16px; 
					@include transform(translate(0, -100%));
					line-height: 1.4em;
					@include transition(transform 500ms $generalEase 0ms);
				}

				&.active {
					h3 {
						@include transform(translate(0, 0%));
						@include transition(transform 500ms $generalEase 600ms);						
					}
				}

			}
		}
	}
	.pages-nav {
		position: absolute;
		bottom: 120px;
		left: (160/1920)*100vw;
		right: (160/1920)*100vw;
		z-index: 10;
		@include display-flex;
		@include justify-content(space-between);

		.nav-item {
			color: #fff;
			font-family: "nevis";
			letter-spacing: 0.13em;
			overflow: hidden; 
			font-size: 16px;
			@include transition(opacity 500ms $generalEase);

			&:hover {
				cursor: pointer;
				opacity: 0.6;
			}
		}

	}
	@media(max-width: $mobile) {
		.home-container {
			min-height: 450px;
		}
		.logo-home-container .logo-MU, .logo-home-container .logo-triangle {
			width: 400px;
			height: 400px;
		}

		.intro-heading {
			top: 35%;
			width: auto;

			h1 {
				font-size:(32/760)*100vw;
			}
		}
		.pages-nav {
			bottom: 60px;
			// @include flex-direction(column);
		}
		.pages-nav .nav-item {
			font-size: 12px;
			margin: 10px 0;
			// text-align: center;
		}
	}

</style>
