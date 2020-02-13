
<template>
	<div class="header-container" :class="{'active-menu': ActiveMenu}">
		
		<div class="preloader-container">
			<div class="loader">

				<svg version="1.1" class="preloader-triangle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 600 600" style="enable-background:new 0 0 600 600;" xml:space="preserve">
				
				<polygon class="st0" points="114.398,145.664 300.365,469.676 331.791,415.483 177.009,145.804 "/>
			
					<polygon class="st1" points="177.009,145.804 331.791,415.483 363.255,361.226 239.694,145.944 	"/>
				
				<polygon class="st2" points="239.599,145.944 363.251,361.233 394.546,307.267 302.074,146.083 "/>
				<polygon class="st3" points="363.335,146.22 302.017,146.083 394.537,307.283 425.315,254.209 "/>
				<polygon class="st4" points="487.77,146.498 363.282,146.22 425.315,254.209 "/>
				<path class="st5" d="M114.398,145.664l373.371,0.834L300.365,469.676L114.398,145.664z"/>

				</svg>

			</div>
		</div> 
		<div class="frame-container">
			<div class="border"></div>
			<div class="page-swipe"></div>
		</div>
		<div class="menu-icon" @click="toggleMenu">

			
			<svg version="1.1" class="menuLogo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 600 600" style="enable-background:new 0 0 600 600;" xml:space="preserve">
			
			<path id="background" class="st0" d="M487.77,146.498L300.365,469.676L114.398,145.664L487.77,146.498z"/>
			<path class="st1" d="M177.009,145.804l154.782,269.68l-31.426,54.192L114.398,145.664L177.009,145.804z"/>
			<g>
				<polygon class="st2" points="177.009,145.804 331.791,415.483 363.255,361.226 239.694,145.944 	"/>
			</g>
			<polygon class="st3" points="239.599,145.944 363.251,361.233 394.546,307.267 302.074,146.083 "/>
			<polygon class="st4" points="363.335,146.22 302.017,146.083 394.537,307.283 425.315,254.209 "/>
			<polygon class="st5" points="487.77,146.498 363.282,146.22 425.315,254.209 "/>
			<path class="st6" d="M487.77,146.498L300.365,469.676L114.398,145.664L487.77,146.498z"/>
			</svg>




		</div>
		<div class="menu-container" >
			<div class="menu">

				<svg @click="toggleMenu" version="1.1" class="close-x" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
				<polygon points="87.82,17.109 82.891,12.18 50,45.07 17.109,12.18 12.18,17.109 45.07,50 12.18,82.891 17.109,87.82 50,54.93 
					82.891,87.82 87.82,82.891 54.93,50 "/>
				</svg>

				<div class="contact">
					<h3><span class="textIntro" :class="activeText">CONTACT</span></h3>
					<p ><span class="textIntro" :class="activeText">contact@maximusik.com</span></p>
				</div>
				<div class="menu-option">
					<div class="nav-item">
						<a class="textIntro" :class="activeText"  @click="homeClick">
							<span>Home</span>
						</a>
					</div>
					<div class="nav-item">
						<a class="textIntro" :class="activeText" @click="aboutClick">
							<span>ABOUT</span>
						</a>
					</div>
					<div class="nav-item">
						<a class="textIntro" :class="activeText" @click="projectsClick">
							<span>PROJECTS</span>
						</a>
					</div>
					<div class="nav-item">
						<a class="textIntro" :class="activeText" >
							<span>SANDBOX</span>
						</a>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>



import $ from 'jquery';
import { TimelineMax } from 'gsap';

// import Vue from 'vue';
// console.log("this still wokrs rightr");
// setTimeout(function() {
// 	var thisworking = $('.container');
// }, 500);

export default {
	

	data: function() {

		return {
			text: 12,
			ActiveMenu: false,
			activeText: {
				loadText: false,
			},
		};
	},
	mounted: function() { 	
		
		var intro = new TimelineMax({delay: 0.8, });
		var $siteBody = ('body');
		var $arrayOfobj = []
		var $preloaderContainer = $('.preloader-container');
		var $container = $('.preloader-triangle');
		var $outline = $('.preloader-triangle .st5');
		for(var i = 0; i <= 4; i++ ) {
			$arrayOfobj.push($('.preloader-triangle .st' + i));
		}
		
		intro.staggerTo($arrayOfobj, 0.1, {
			fill: "#000",
			stroke: "#000",
		}, 0.15)
		.staggerTo($arrayOfobj, 0.1, {
			className: "+=color",
			clearProps:"all",
		}, 0.15, "0.8")
		.to($outline, 0.5, {
			autoAlpha: 0,
		}, "1")
		.to($preloaderContainer, 0.5, {
			y: "-100%",
			ease: Power3.easeInOut,
		}, "2.2")
		.to($preloaderContainer, 0.2, {
			autoAlpha: 0,
		}, "2.6")
		.to($siteBody, 0.2, {
			className: '+=siteLoaded',
		}, "2.6");

		

	},
	methods: {
		toggleMenu: function() {
			this.ActiveMenu = !this.ActiveMenu;
			console.log("test");
			var self = this;
			setTimeout(function() {

				self.activeText.loadText = !self.activeText.loadText;
			},200);
		},
		projectsClick: function() {
			this.toggleMenu();
			this.$router.push('/projects');
		},
		homeClick: function() {
			this.toggleMenu();
			this.$router.push('/');
		},
		aboutClick: function() {
			this.toggleMenu();
			this.$router.push('/about');
		},
	}

}

</script>

<style lang="sass" scoped>
	 @import "compass/css3";
	 @import "../sass/variables";

.preloader-container {

	// display: none;


	position: fixed;
	z-index: 300;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	pointer-events: auto;
	background-color: #fff;

	.loader {
		width: 200px;
		height: 200px;
		position: absolute; 
		top: 50%;
		left: 50%;
		@include transform(translate(-50%, -50%));

		svg {
			.st0, .st1, .st2, .st3, .st4 {
				@include transition(fill 400ms ease-in-out, stroke 400ms ease-in-out);
				// opacity: 0;
				stroke-miterlimit:20;
				stroke-width: 2;
				stroke: #fff;
			}
			
			.st0 {
				fill:#fff;
				&.color { 
						fill:#8d1c1b;
						stroke: #8d1c1b; 	
				}
			}
			.st1 {fill:#fff; &.color {fill:#c24442; stroke: #c24442; }}
			.st2 {fill:#fff; &.color {fill:#e8d8c2; stroke: #e8d8c2;  }}
			.st3 {fill:#fff; &.color {fill:#a88c80; stroke: #a88c80;  }}
			.st4 {fill:#fff; &.color {fill:#735752; stroke: #735752; }}
			.st5 { 

				fill: none;
				stroke:#030202;
				stroke-miterlimit: 20;
				stroke-width: 0;
				stroke-dashoffset: 1130;
				stroke-dasharray: 1135;
				@include transition(stroke-dashoffset 1000ms ease-out , stroke-width 600ms ease-out 50ms);

				.preload & {
					stroke-dashoffset: 0;
					stroke-width: 3;
				}
			}
			
		}
	}
}
.header-container {
	position: fixed;
	top: 0;
	left: 0;
	right: 0; 
	bottom: 0;
	z-index: 100;
	pointer-events: none;
	

	.frame-container {
		width: 100%;
		height: 100%;
		// padding: 20px;
		border: 20px solid #fff;
		// overflow: hidden;
		position: fixed;
		pointer-events: none; 
		overflow: hidden;
		@include box-sizing(border-box);
		@include transition(border 200ms $generalEase 200ms );

		.border {
			position: relative;
			width: 100%;
			height: 100%;
			left: -1px;
			border: 1px solid #fff;
			// left: 50%;
			// top: 50%;
			// left: -10px;
			// top: -10px;
			// @include transform(translate(-50%, -50%));
		}
		.show-project & {
			border: 0px solid #fff;
		}
		.show-hover & {
			@include transition(border 200ms $generalEase 600ms);
			border: 0px solid #fff;
		}
		
		.page-swipe {
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			z-index: 100;
			background-color: #fff;
			position: fixed;
			opacity: 1;
			 @include transform(translate3d(-100%, 0, 0));
			// @include transition(transform 0ms $generalEase);

			// &.swipe {
			// 	opacity: 1;
			// 	@include transition(transform 2000ms $generalEase);
			// 	@include transform(translate3d(120%, 0, 0) rotate3d(0, 0, 1, 45deg));				
			// }

		}
	} 

	.menu-icon {
		position: absolute;
		left: 50%;
		pointer-events: auto;
		width: 80px;
		height: 80px;
		top: 40px;
		z-index: 101;
		@include transform(translateX(-50%));
		
		svg  {
			.st1,.st2,.st3,.st4,.st5,  { 
				stroke-width: 0.5;
				stroke-miterlimit: 5;
			}
			.st0{fill:#ebebeb; @include transition(fill 200ms ease-in-out 0, stroke 200ms ease-in-out 0);}
			.st6{display:none;fill:none;stroke:#030202;stroke-miterlimit:10;}
			
		
.st1{fill:#E6E7E8; stroke: #E6E7E8; @include transition(fill 200ms ease-in-out 0, stroke 200ms ease-in-out 0)}
.st2{fill:#D1D3D4; stroke: #D1D3D4; @include transition(fill 200ms ease-in-out 10ms, stroke 200ms ease-in-out 10ms)}
.st3{fill:#BCBEC0; stroke: #BCBEC0; @include transition(fill 200ms ease-in-out 50ms, stroke 200ms ease-in-out 50ms)}
.st4{fill:#939598; stroke: #939598; @include transition(fill 200ms ease-in-out 100ms, stroke 200ms ease-in-out 100ms)}
.st5{fill:#808285; stroke: #808285; @include transition(fill 200ms ease-in-out 150ms, stroke 200ms ease-in-out 150ms)}

			&.black {	
				.st0{fill:#000;}
				.st1{fill:#000000; stroke: #000000;}
				.st2{fill:#191818; stroke: #191818;}
				.st3{fill:#333333; stroke: #333333;}
				.st4{fill:#4D4E4E; stroke: #4D4E4E;}
				.st5{fill:#676767; stroke: #676767;}
			}
		
			&:hover {
				cursor: pointer;

					.st0,.st1,.st2,.st3,.st4,.st5, {
						fill:#fff; 
						stroke: #fff;
					}
					
				&.black {
				
					.st0,.st1,.st2,.st3,.st4,.st5, {
						fill:#000; 
						stroke: #000;
					}
					
				}
			}
			
		}
	}
	.menu-container {
		width: 100%;
		height: 100%;
		padding: 120px;
		z-index: 100;
		@include box-sizing(border-box);
		position: absolute;
		pointer-events: none;
		opacity: 0;
		@include transition(opacity 400ms ease-in-out 400ms);

		.menu {
			position: relative;
			background-color: #fff;
			width: 0%;
			height: 0%;
			top: 50%;
			left: 50%;
			border: 1px solid #000;
			@include transform(translate(-50%, -50%));
			@include transition(height 400ms ease-in-out 500ms, width 500ms ease-in-out 500ms);
		}
		.close-x {
			position: absolute;
			width: 40px;
			height: 40px; 
			right: 40px;
			top: 40px;
			@include transition(transform 300ms $generalEase);

			&:hover {
				@include transform(rotate3d(0,0,1,90deg));
				cursor: pointer;
			}
		}
		.contact {
			position: absolute;
			left: 40px;
			top: 50%;
			@include transform(translateY(-50%));
			line-height: 1.5em;

			p, h3 {
				overflow: hidden; 
				font-size: (16/1920)*100vw;
				font-family: "nevis";
			}

		}
		.menu-option {
			position: absolute;
			top: 50%;
			left: 50%;
			@include transform(translate(-50%, -50%));

			.nav-item {
				overflow: hidden;
				font-family: "nevis";
				font-size: (25/1920)*100vw;
				text-transform: uppercase; 
				line-height: 1.5em;
				text-decoration: underline;
				@include transition(opacity 400ms $generalEase);
				&:hover {
					opacity: 0.6;
					cursor: pointer; 
				}
			}
		}
	}
	&.active-menu {
		.menu-container {
			opacity: 1;
			pointer-events: auto; 
			@include transition(opacity 100ms ease-in-out);
			.menu {
				@include transition(height 400ms ease-in-out, width 400ms ease-in-out);
				height: 100%;
				width: 100%;
			}
		}
	}
}

@media (max-width: $laptop) {
	.header-container .menu-container .menu-option .nav-item {
		font-size:(26/1450)*100vw;
	}
}
@media (max-width: $mobile) {
	.header-container .menu-container .menu-option .nav-item {
		font-size:(34/720)*100vw;
	}
	.header-container .menu-container .contact {
		bottom: 40px;
		top: auto; 
		left: 50%;
		@include transform(translate(-50%, 0px));
		p {
			font-size:(16/480)*100vw;
		}
	}
	.header-container .menu-container {
		padding: 40px;
	}
	.header-container .menu-container .contact h3 {
		display: none;
	}
}


@media (max-width: $nano) {
	.header-container .menu-icon {
		top: 0px;
	}
	.header-container .menu-container .menu-option .nav-item {
		font-size:(34/480)*100vw;
	}
	.header-container .frame-container {
		border: 2px solid #fff;
	}
		
}


</style>
