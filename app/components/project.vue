<template>
	<section class="project">
	
		


		<div v-if="open" class="template-container" ref="template">

			<div class="two-up scroll-animate" v-for="item in project.projectDetail">
				<div class="left-side  ">
					<div class="image " v-if="item.type == 'image'" :style="{backgroundImage: 'url(' + item.image + ')'}">
					</div>
					<div class="body-copy" v-if="item.type == 'text'">
						<h3>{{item.heading}} </h3>
						<p>{{item.text}}</p> 
					</div>
				</div>
				<div class="right-side">
					<p class="details ">{{item.detail}}</p>
				</div>
			</div>
			<div class="two-up">
				<div class="left-side">
					<div class="body-copy">

						<a v-if="project.link != null" class="link" :href="project.link" target="_blank">Have a Look: {{project.title}} </a>
					</div>
				</div>
				<div class="right-side">
						<p class="return" @click="closeProject">RETURN</p>

				</div>
			</div>
		</div>
	</section>
</template>

<script>

import Vue from 'vue';
import Projects from '../data/projects.js';
import $ from 'jquery';

import Project from './Project.vue';

  


export default {
	props: [ 'project' ],
	

	methods: {
		
		closeProject: function(id) {
			if ( this.open ) {
				var selected = index.active;
				var $template = $('.template-container')
				var $menuLogo = $(".menuLogo");
				var $activeSlide = $(".project-slide.active");
				var container = '#display-' + index.active;
				var $arrayOfSlides = $(container).children();
	 			var $body = $('body');
				var self = this;

				var t1 = new TimelineMax();
				t1.to($template, 0.4, {
					height: 0,
				})
				.to([$activeSlide, $body], 0.1, {
					className: '-=show-project',
				})
				.to($menuLogo, 0, {
					className: '-=black',
					onComplete: function(){self.open = false;},
				});
				
				index.functional = true;
			    // TweenLite.to($template, 0.2,{height: 0, },})
			    
				
			}


		},
		OpenProject: function() {
			this.open = true;
			// this.$refs.template;

			Vue.nextTick(() => {
					var $template = $('.template-container')
				
				    console.log(this.$refs.template);
				    TweenLite.set($template, {height:"auto"});
				    TweenLite.from($template, 0.2, {height:0});
			
			});
			function mounted() {
				console.log("mounted");
			}
			
		},
		

		sequencing: function() {
				
	      var top = $(window).scrollTop();
	      var bottom = top + $(window).height();
	      // top = top + 600;
	  
	      $('.scroll-animate').each(function() {
	          var e = $(this);
	          var offset = e.offset().top;
	          var offsetBottom = offset + e.height();

	          var delay = 200;
	          
	          if(offset >= top && offset < bottom) {
	             setTimeout(function() {
	              e.addClass('vis');
	            }, delay);
	          } else
	          if(offset < top && offsetBottom > bottom) {
	             setTimeout(function() {
	              e.addClass('vis');
	              }, delay);
	          } else 
	          if(offsetBottom > top && offsetBottom < bottom) {
	             setTimeout(function() {
	              e.addClass('vis');
	              }, delay);
	          }
	      });
		}
	},
	data() {
		var open = false;

		return {
			open
		};
	}
};

</script>

<style lang="sass" scoped>

@import "compass/css3";
@import "../sass/variables";
.project {
	position: absolute;
	top: 100%;
	width: 100%;

	
	.template-container {
		width: 100%;
		overflow: hidden;
		height: 0; 
		// @include transition(transform 300ms ease-in-out);

		.show-project & {
			// height: auto;
			// top: -80px;
			@include transform(translate3d(0, -80px, 0));

			.two-up {
					&:nth-child(1) {
						.left-side, .right-side {
							.body-copy, .details {
								@include transition-delay(400ms);
								@include transform(translate3d(0,0,0));	
							}
						}
					} 
			}
		}

		.two-up {
			padding-left: (160/1920)*100vw;
			padding-right: (160/1920)*100vw;
			margin-top: 160px;
			margin-bottom: 160px;	
			// had padding before, don't know why I changed it? 
			overflow: hidden;
			@include display-flex;
			@include justify-content(space-between);


			&:nth-child(1) {
				margin-top: 0;
			}
			.right-side {
				padding-left:(80/1920)*100vw;
				width: (480/1920)*100vw;
				overflow: hidden;
			}
			.left-side {
				overflow: hidden; 
				padding-right:(80/1920)*100vw;
				width: (960/1920)*100vw; 
			}

			.details {
				
				line-height: 1.9em;
				font-size: (14/1920)*100vw;
				letter-spacing: 0.06em;

			}
			.image {
				height: 560px;
				width: 100%;
				background-size: cover;
				background-position: center; 

			} 
			.body-copy, .link, .return, .details, h3 {
				font-size: (16/1920)*100vw;
				line-height: 2.2em;
				letter-spacing: 0.06em;
			}
			h3 {
				line-height: 1.6em;
			}
			.body-copy {
				width: 100%; 

			}
			.link, .return {
				font-family: "nevis";
				text-transform: uppercase;
				color: #000;
				@include transition(opacity 300ms $generalEase);
				
				&:hover {
					opacity: 0.6;
					cursor: pointer;
				}
			}
		
		}
	}
}

@media(max-width: $laptop) {
	.project { 
		
		.template-container {
			
			.two-up {
				padding-left: (160/1920)*100vw;
				padding-right: (160/1920)*100vw;
				margin-top: 80px;
				margin-bottom: 80px;	
				
				&:nth-child(1) {
					margin-top: 0;
				}
				.right-side {
					padding-left:(80/1920)*100vw;
					width: (480/1920)*100vw;
				}
				.left-side {
					padding-right:(80/1920)*100vw;
					width: (960/1920)*100vw; 
				}


				.image {
					height: 420px;
					width: 100%;
					background-size: cover;
					background-position: center; 

				} 
				.body-copy, .link, .return, .details, h3 {
					width: 100%; 
					font-size: (18/1920)*100vw;
					line-height: 1.9em;
					letter-spacing: 0.06em;
				}
				h3 {
					line-height: 1.6em;
				}

			}
		}
	}

}

@media(max-width: $ipad) {
	.project {
		
		.template-container {
			
			.two-up {
				padding-left: 0;
				padding-right: 0;
				// padding-top: 80px;
				// margin-bottom: 80px;
				@include flex-wrap(wrap);
				 // flex-wrap: nowrap | wrap | wrap-reverse;	
				
				&:nth-child(1) {
					margin-top: 0;
				}
				
				.left-side, .right-side {
					padding-right: $ipadMargin;
					padding-left: $ipadMargin;
					width: 100%; 
					padding-top: 5px;
					padding-bottom: 5px;
				}


				.image {
					height: 420px;
					width: 100%;
					background-size: cover;
					background-position: center; 

				} 
				.body-copy, .link, .return, .details, h3 {
					width: 100%; 
					font-size: 18px;
					line-height: 2.1em;
					letter-spacing: 0.06em;
				}
				h3 {
					line-height: 1.6em;
				}	

			}
		}
	}
}
@media(max-width: $nano) {
	.project .template-container .two-up .image {
		height: 220px;
	}
		.project {
		
		.template-container {
			
			.two-up {
				padding-left: 0;
				padding-right: 0;
				// padding-top: 80px;
				// margin-bottom: 80px;
				@include flex-wrap(wrap);
				 // flex-wrap: nowrap | wrap | wrap-reverse;	
				
				&:nth-child(1) {
					margin-top: 0;
				}
				
				.left-side, .right-side {
					// padding-right: $ipadMargin;
					// padding-left: $ipadMargin;
					// width: 100%; 
					// padding-top: 5px;
					// padding-bottom: 5px;
				}


				.image {
					// height: 420px;
					// width: 100%;
					// background-size: cover;
					// background-position: center; 

				} 
				.body-copy, .link, .return, .details {
					width: 100%; 
					font-size: 16px;
					line-height: 2.2em;
					letter-spacing: 0.06em;
				}
				h3 {
					line-height: 1.6em;
				}	

			}
		}
	}
}
@media(min-width: $ipad) {
	.scroll-animate {

		&.image-animate {
			@include transform(translate3d(0, -102%, 0));
			@include transition(transform 800ms $generalEase 200ms);

			&.vis {
				@include transform(translate3d(0, 0%, 0));
				
			}
		}

		&.text-animate {
			@include transform(translate3d(0, -102%, 0));
			@include transition(transform 1200ms $generalEase 0ms);

			&.vis {
				@include transform(translate3d(0, 0%, 0));
				
			}

			&:nth-child(1) {
				// @include transform(translate3d(0, 0%, 0));
				// @include transition(transform 1200ms $generalEase 3000ms);
			}
		}

		.left-side, .right-side {
			.image {
				@include transform(translate3d(0, -100%, 0));
				@include transition(transform 1000ms cubic-bezier(0.76,-0.01, 0.2, 1.01) 100ms);
			}
			.body-copy {
				@include transform(translate3d(0, -100%, 0));
				@include transition(transform 800ms cubic-bezier(0.76,-0.01, 0.2, 1.01) 0ms);
			}
			.details {
				@include transform(translate3d(0, -100%, 0));
				@include transition(transform 800ms cubic-bezier(0.76,-0.01, 0.2, 1.01) 0ms);
			}
		}
		&.vis {
			.left-side, .right-side {
				.image {
					@include transform(translate3d(0, 0%, 0));
					// @include transition(transform 1200ms $generalEase 0ms);
				}
				.body-copy {
					@include transform(translate3d(0, 0%, 0));
					// @include transition(transform 1200ms $generalEase 0ms);
				}
				.details {
					@include transform(translate3d(0, 0%, 0));
					// @include transition(transform 1200ms $generalEase 0ms);
				}
			}
		}
		
	}
}

</style>