// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.effect-shake
//= require foundation
//= require turbolinks
//= require raphel
//= require_tree .

$(function(){ $(document).foundation(); });


$(document).ready(function(){

	skillZ.init()
	socials.init()

	$('#social_fb svg rect').on('mouseover', function(){
		$('#social_fb svg').effect("shake", {times:4,distance:5}, 300);
	});
	$('#social_tw svg rect').on('mouseover', function(){
			$('#social_tw svg').effect("shake", {times:4,distance:5}, 300);
		});
	$('#social_git svg rect').on('mouseover', function(){
			$('#social_git svg').effect("shake", {times:4,distance:5}, 300);
		});
	$('#social_sk svg rect').on('mouseover', function(){
			$('#social_sk svg').effect("shake", {times:4,distance:5}, 300);
	});

}); // end document.ready

	var skillZ = {
		init: function(){
			this.diagram();
		},
		diagram: function(){
			var p = Raphael('diagram',1000,300),
			    c = p.circle(100,130,35).attr("fill", "#3fa9ff"),
				panel1 = p.rect(150, 79, 0, 0),
    			panel2 = p.rect(270, 131, 0, 0),
    			panel3 = p.rect(390, 80, 0, 0),
    			panel4 = p.rect(510, 131, 0, 0),
    			panel5 = p.rect(630, 79, 0, 0);
			c.click(function(){
				    line = p.path("M 100 130").attr({stroke: "#3fa9ff","arrow-start":'clasic-medium-long'}).animate({path: "M 100 130l700 0 "},1000);
				    this.cx = this.cx || 800;
    				this.animate({cx: this.cx}, 1000, "linear");
    				var skillShow = Raphael.animation({fill: "#3fa9ff",stroke: "#3fa9ff",height: 100, width: 110}, 1000, 'bounce'),
    					skillHide = Raphael.animation({height: 0, width: 0}),
    					lineShow = Raphael.animation({path: "M 100 130l700 0 "},1000);
    				if(this.cx == 800){
    					this.cx = 100
    					line.animate(lineShow);
    					panel1.animate(skillShow.delay(200));
    					panel2.animate(skillShow.delay(400));
    					panel3.animate(skillShow.delay(600));
    					panel4.animate(skillShow.delay(800));
    					panel5.animate(skillShow.delay(1000));
    				}else{
    					this.cx = 800;
    					line = line.animate({opacity: 0},1000, "linear");
    					panel5.animate(skillHide.delay(150));
    					panel4.animate(skillHide.delay(350));
    					panel3.animate(skillHide.delay(550));
    					panel2.animate(skillHide.delay(750));
    					panel1.animate(skillHide.delay(950));
    				};

			});
			c.node.onmouseover = function(){
				this.style.cursor = "pointer";
			};
			// c.node.onmouseout = function(){
			// 	c.animate({transform: "s1.0"},400,"linear");
			// }

		}
	}

	var socials = {

		init: function(){
			// this.shapes();
			this.icons();
		},

		// shapes: function(){
		// 	var w = 100,
		// 		h = 145;
		// 	var p1 = Raphael('social_fb',w + '%', h),
		// 		p2 = Raphael('social_tw',w + '%', h),
		// 		p3 = Raphael('social_git',w + '%' ,h),
		// 		p4 = Raphael('social_sk',w + '%', h);
		// 	var shape1 = p1.path("M 0 70.25 47.25 70.25 95 70.25");
		// },

		icons: function(){
			var w = 125, 
				h = 145;

			var p1 = Raphael('social_fb',w , h),
				p2 = Raphael('social_tw',w , h),
				p3 = Raphael('social_git',w ,h),
				p4 = Raphael('social_sk',w , h);

			var	fb_icon = p3.path("M82.026,14H17.974C15.779,14,14,15.779,14,17.974v64.053C14,84.221,15.779,86,17.974,86h34.483V58.118h-9.383V47.252h9.383 v-8.014c0-9.3,5.68-14.363,13.976-14.363c3.974,0,7.389,0.295,8.385,0.428v9.719l-5.754,0.003c-4.512,0-5.385,2.144-5.385,5.29 v6.938h10.76l-1.401,10.866h-9.359V86h18.348C84.221,86,86,84.221,86,82.026V17.974C86,15.779,84.221,14,82.026,14z");
				fb_icon.transform("T13 18s0.5").attr({fill: "#000"});
			var tw_icon = p1.path("M88.5,26.12c-2.833,1.256-5.877,2.105-9.073,2.486c3.261-1.955,5.767-5.051,6.945-8.738 c-3.052,1.81-6.434,3.126-10.031,3.832c-2.881-3.068-6.987-4.988-11.531-4.988c-8.724,0-15.798,7.072-15.798,15.798 c0,1.237,0.14,2.444,0.41,3.601c-13.13-0.659-24.77-6.949-32.562-16.508c-1.36,2.334-2.139,5.049-2.139,7.943 c0,5.481,2.789,10.315,7.028,13.149c-2.589-0.083-5.025-0.794-7.155-1.976c-0.002,0.066-0.002,0.131-0.002,0.199 c0,7.652,5.445,14.037,12.671,15.49c-1.325,0.359-2.72,0.553-4.161,0.553c-1.019,0-2.008-0.098-2.973-0.283 c2.01,6.275,7.844,10.844,14.757,10.972c-5.407,4.236-12.218,6.763-19.62,6.763c-1.275,0-2.532-0.074-3.769-0.221 c6.991,4.482,15.295,7.096,24.216,7.096c29.058,0,44.948-24.071,44.948-44.945c0-0.684-0.016-1.367-0.046-2.046 C83.704,32.071,86.383,29.288,88.5,26.12z");
				tw_icon.transform("T13 18s0.5").attr({fill: "#000"});
			var git_icon = p4.path("M49.998,11.963C28.461,11.963,11,29.425,11,50.965c0,17.231,11.172,31.849,26.671,37.003c1.952,0.361,2.662-0.84,2.662-1.877c0-0.924-0.034-3.375-0.051-6.633 c-10.849,2.359-13.138-5.229-13.138-5.229c-1.774-4.505-4.331-5.703-4.331-5.703c-3.541-2.418,0.269-2.371,0.269-2.371 c3.914,0.277,5.974,4.018,5.974,4.018c3.478,5.96,9.129,4.235,11.35,3.243c0.353-2.525,1.363-4.24,2.476-5.217 c-8.659-0.984-17.763-4.33-17.763-19.274c0-4.259,1.519-7.741,4.013-10.468c-0.399-0.982-1.74-4.947,0.383-10.319 c0,0,3.274-1.048,10.726,4.001c3.109-0.869,6.446-1.303,9.763-1.316c3.312,0.014,6.65,0.447,9.763,1.316 c7.447-5.049,10.716-4.001,10.716-4.001c2.128,5.372,0.788,9.337,0.388,10.319c2.5,2.727,4.008,6.209,4.008,10.468 c0,14.979-9.117,18.279-17.805,19.241c1.398,1.205,2.646,3.59,2.646,7.229c0,5.211-0.047,9.416-0.047,10.695 c0,1.045,0.701,2.26,2.681,1.873C77.836,82.798,89,68.191,89,50.965C89,29.425,71.539,11.963,49.998,11.963z")
				git_icon.transform("T13 18s0.5").attr({fill: "#000"});
			var sk_icon = p2.path("M86.284,58.294c0.555-2.541,0.851-5.176,0.851-7.883c0-20.283-16.442-36.727-36.727-36.727 c-2.14,0-4.236,0.186-6.279,0.539c-3.282-2.069-7.163-3.27-11.33-3.27c-11.761,0-21.299,9.534-21.299,21.3 c0,3.93,1.069,7.609,2.929,10.768c-0.487,2.391-0.744,4.861-0.744,7.391c0,20.282,16.44,36.725,36.723,36.725 c2.299,0,4.545-0.215,6.729-0.615c2.998,1.608,6.423,2.525,10.065,2.525c11.763,0,21.299-9.531,21.299-21.297 C88.5,64.349,87.7,61.14,86.284,58.294z M69.247,67.964c-1.701,2.401-4.212,4.307-7.462,5.658 c-3.223,1.342-7.081,2.021-11.479,2.021c-5.272,0-9.695-0.932-13.147-2.762c-2.467-1.336-4.502-3.138-6.046-5.366 c-1.561-2.249-2.354-4.483-2.354-6.636c0-1.343,0.518-2.51,1.534-3.465c1.006-0.947,2.294-1.429,3.833-1.429 c1.261,0,2.351,0.38,3.234,1.126c0.845,0.718,1.571,1.776,2.151,3.148c0.652,1.488,1.363,2.748,2.112,3.74 c0.718,0.949,1.757,1.754,3.081,2.379c1.329,0.631,3.125,0.952,5.333,0.952c3.036,0,5.527-0.649,7.396-1.93 c1.831-1.249,2.72-2.747,2.72-4.583c0-1.449-0.466-2.59-1.421-3.482c-0.998-0.934-2.315-1.662-3.916-2.16 c-1.669-0.521-3.938-1.082-6.74-1.67c-3.81-0.816-7.047-1.784-9.625-2.88c-2.633-1.12-4.757-2.674-6.308-4.617 c-1.576-1.976-2.376-4.452-2.376-7.362c0-2.774,0.838-5.273,2.494-7.432c1.643-2.143,4.042-3.807,7.127-4.949 c3.05-1.129,6.676-1.697,10.776-1.697c3.28,0,6.164,0.379,8.57,1.125c2.421,0.758,4.461,1.771,6.066,3.027 c1.612,1.262,2.816,2.611,3.567,4.012c0.765,1.416,1.152,2.827,1.152,4.191c0,1.312-0.507,2.502-1.508,3.543 c-1.006,1.045-2.273,1.574-3.771,1.574c-1.36,0-2.425-0.33-3.163-0.983c-0.688-0.608-1.402-1.556-2.191-2.919 c-0.917-1.738-2.023-3.11-3.295-4.078c-1.235-0.938-3.299-1.414-6.131-1.414c-2.636,0-4.777,0.527-6.364,1.57 c-1.533,1.004-2.276,2.154-2.276,3.521c0,0.837,0.239,1.535,0.731,2.136c0.525,0.64,1.258,1.195,2.191,1.664 c0.965,0.484,1.958,0.871,2.954,1.145c1.024,0.285,2.733,0.705,5.084,1.246c2.969,0.641,5.702,1.354,8.116,2.127 c2.445,0.783,4.56,1.749,6.283,2.871c1.76,1.143,3.153,2.616,4.144,4.372c0.989,1.765,1.49,3.938,1.49,6.467 C71.813,62.791,70.95,65.549,69.247,67.964z");
				sk_icon.transform("T13 18s0.5").attr({fill: "#000"});

			var shape1 = p3.rect(20,30,85, 85);
				shape1.transform("r45").attr({fill: "#656464"}).toBack();
			var shape2 = p1.rect(20,30,85, 85);
				shape2.transform("r45").attr({fill: "#656464"}).toBack();
			var shape3 = p4.rect(20,30,85, 85);
				shape3.transform("r45").attr({fill: "#656464"}).toBack();
			var shape4 = p2.rect(20,30,85, 85);
				shape4.transform("r45").attr({fill: "#656464"}).toBack();

			var as1 = Raphael.animation({fill: "#2e4388"},200, 'bounce'),
				as11 = Raphael.animation({fill: "#656464"},200, 'bounce'),
				as2 = Raphael.animation({fill: "#41c0fe"},200, 'bounce'),
				as3 = Raphael.animation({fill: "#000"},200, 'bounce'),
				as4 = Raphael.animation({fill: "#399dec"},200, 'bounce');
			var af1 = Raphael.animation({fill:"#13142e"},200, 'bounce'),
				ai11 = Raphael.animation({fill:"#000"},200, 'bounce'),
				ask = Raphael.animation({fill:"#fff"},200, 'bounce');
			shape1.node.onmouseover = function(){
				shape1.animate(as1.delay(100));
				fb_icon.animate(ask.delay(100));
			}
			shape1.node.onmouseout = function(){
				shape1.animate(as11.delay(90));
				fb_icon.animate(ai11.delay(90));
			}
			shape2.node.onmouseover = function(){
				shape2.animate(as2.delay(100));
				tw_icon.animate(ask.delay(100));
			}
			shape2.node.onmouseout = function(){
				shape2.animate(as11.delay(90));
				tw_icon.animate(ai11.delay(90));
			}
			shape3.node.onmouseover = function(){
				shape3.animate(as3.delay(100));
				git_icon.animate(ask.delay(100));
			}
			shape3.node.onmouseout = function(){
				shape3.animate(as11.delay(90));
				git_icon.animate(ai11.delay(90));
			}
			shape4.node.onmouseover = function(){
				shape4.animate(as4.delay(100));
				sk_icon.animate(ask.delay(100));
			}
			shape4.node.onmouseout = function(){
				shape4.animate(as11.delay(90));
				sk_icon.animate(ai11.delay(90));
			}
			fb_icon.node.onmouseover = function(){
				shape1.animate(as1.delay(100));
				fb_icon.animate(ask.delay(100));
			}
			fb_icon.node.onmouseout = function(){
				shape1.animate(as11.delay(90));
				fb_icon.animate(ai11.delay(90));
			}
			tw_icon.node.onmouseover = function(){
				shape2.animate(as2.delay(100));
				tw_icon.animate(ask.delay(100));
			}
			tw_icon.node.onmouseout = function(){
				shape2.animate(as11.delay(90));
				tw_icon.animate(ai11.delay(90));
			}
			git_icon.node.onmouseover = function(){
				shape3.animate(as3.delay(100));
				git_icon.animate(ask.delay(100));
			}
			git_icon.node.onmouseout = function(){
				shape3.animate(as11.delay(90));
				git_icon.animate(ai11.delay(90));
			}
			sk_icon.node.onmouseover = function(){
				shape4.animate(as4.delay(100));
				sk_icon.animate(ask.delay(100));
			}
			sk_icon.node.onmouseout = function(){
				shape4.animate(as11.delay(90));
				sk_icon.animate(ai11.delay(90));
			}
		}
		

	}