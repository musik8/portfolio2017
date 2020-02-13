<template>
	<section class="about">
		
		
			<div class="content-container">

				<div class="copy-container">
					<div class="text">
						<div class="textIntro" :class="activeText">
						<h3>ABOUT</h3>
						<p v-for="item in about">{{item.bio}}</p>
						</div>
					</div> 
					<div class="site-links">
						<div class="textIntro" :class="activeText">
						<a target="_blank" href="mailto:contact@maximusik.com">contact@maximusik.com</a>
						
						<a  @click="projectsClick">
							<span >PROJECTS</span>
						</a>
						</div>
					</div>
				</div>

				<div class="logo">

				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 600 600" style="enable-background:new 0 0 600 600;" xml:space="preserve">
				
				<polygon class="st0" points="113.4658,146.0508 299.4319,470.0628 330.8584,415.8705 176.0761,146.1907 "/>
				<polygon class="st1" points="176.0761,146.1907 330.8584,415.8705 362.3224,361.6131 238.7615,146.3308 "/>
				<polygon class="st2" points="238.6666,146.3306 362.3186,361.6196 393.6136,307.654 301.1411,146.4702 "/>
				<polygon class="st3" points="362.4024,146.6071 301.0841,146.4701 393.6045,307.6698 424.3823,254.5957 "/>
				<polygon class="st4" points="486.837,146.8851 362.3496,146.607 424.3823,254.5957 "/>
				<g style="display: none">
					<g>
						<polygon class="st5" points="100.285,402.6399 149.8352,402.6399 149.8352,303.5356 199.3854,353.0858 248.9355,303.5356 
							248.9355,402.6399 298.4857,402.6399 298.4857,184.1826 298.4857,184.1826 199.3854,282.2998 100.285,184.1826 100.285,184.1826 
									"/>
						<path class="st5" d="M329.6787,184.1826h49.5502v133.5142c0,19.547,15.8459,35.3929,35.3929,35.3929h0.0001
							c19.547,0,35.3929-15.8459,35.3929-35.3929V184.1826h49.5502v133.5142c0,46.9128-38.0303,84.9431-84.9431,84.9431h-0.0002
							c-46.9128,0-84.9431-38.0303-84.9431-84.9431V184.1826z"/>
					</g>
				</g>
				</svg>

				</div>
			</div>
	
		

	</section>
</template>

<script>

import Vue from 'vue';
import About from '../data/about.js';
import $ from 'jquery';



export default {
	
	created: function() {
		var self = this;
		setTimeout(function() {
			$('.menuLogo').addClass('black');
			self.activeText.loadText = true;
		}, 200);
		
	},
	data() {
		

		return {
			about: About,
			activeText: {
				loadText: false,
			},
			

		};
	},
	methods: {
		projectsClick: function() {
			this.$router.push('/projects');
		},
	
	},
};

</script>

<style lang="sass" scoped>

@import "compass/css3";
@import "../sass/variables";
.about {
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: absolute;
	overflow: hidden;
	background-color: #fff;
}

.content-container {
	color: #fff;
	// width: (960/1920)*100vw;
	// max-width: 480px;
	left: (320/1920)*100vw;
	right: (320/1920)*100vw;
	padding-top: 50px;
	top: 50%;
	@include transform(translate(0, -50%));
	position: absolute;
	@include display-flex;
	@include align-items(center);
	@include justify-content(space-between);

	
	.copy-container {
		 max-width: 680px;
		.text {
			overflow: hidden;
			h3 {
				color: #000;
				font-size: (16/1920)*100vw;
				padding-bottom: 10px;
			}


			p {
				// white-space: pre;

				width: 100%;
				color: #000;
				font-size: (16/1920)*100vw;
				line-height: 2.2em;
				letter-spacing: 0.06em;
				margin-bottom: 10px;
			
			}
		}
		.site-links {
			margin-top: 30px;
			font-family: "nevis";
			overflow: hidden; 
			padding-bottom: 2px;
			a {
				font-size: (16/1920)*100vw;
				 text-decoration: underline;
				color: #000;
				margin-bottom: 20px;
				@include transition(opacity 500ms $generalEase);
				// text-decoration: none;
			}
			a {
				display: block;
				&:hover {
					opacity: 0.6;
					cursor: pointer;
				}
			}
		}
	}
	.logo  {
 // display: none;
	width: 450px;
	height: 450px;
	padding-bottom: 40px;

	.st0,.st1,.st2,.st3,.st4 { 
			stroke-width: 0.5;
			stroke-miterlimit: 10;
		}
	
		.st5 {
			fill: #868686;
		}
		.st0 {
			
			fill:#8d1c1b;
			stroke: #8d1c1b; 	
				
			}
			.st1 {fill:#c24442; stroke: #c24442; }
			.st2 {fill:#e8d8c2; stroke: #e8d8c2; }
			.st3 {fill:#a88c80; stroke: #a88c80; }
			.st4 {fill:#735752; stroke: #735752; }
}
}

@media(max-width: $ipad) {
	.content-container {
		left: (80/720)*100vw;
		right: (80/720)*100vw;
		// top: 80px;
		width: auto;
		@include flex-direction(column);
		@include box-sizing(border-box);
		// padding: (80/720)*100vw;
		// padding-left: (160/720)*100vw;
		// @include transform(translate(0,0));

	}
	.about {
		overflow-y: auto;
	}
	.content-container .logo {
		width: 200px;
		height: 200px;
	}

	.content-container .copy-container .text p, .content-container .copy-container .text h3	 {
		font-size: 16px;

	}
	.content-container .copy-container .site-links a {
		font-size: 16px;
	}
	.content-container .site-links a {
		font-size: 16px;
	}
}
@media(max-width: $mobile) {
	.content-container {
		left: (80/720)*100vw;
		right: (80/720)*100vw;
		top: 160px;
		width: auto;
		// @include flex-direction(column);
		// @include box-sizing(border-box);
		// padding: (80/720)*100vw;
		// padding-left: (160/720)*100vw;
		@include transform(translate(0,0));

	}

}
</style>