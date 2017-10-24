(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 675,
	height: 120,
	fps: 12,
	color: "#373330",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF5E1").s().p("AgUBaIgDgBIgBgCIAAiuIABgCIADgBIAUAAIAKACIAIAFIAFAHIACAJIAABDQgBALgGAFQgHAGgLAAIgGAAIAAA9IgCAFIgGACgAgGAHIAGAAIAGgCIACgFIAAhDIgCgGQgCgCgEAAIgGAAg");
	this.shape.setTransform(488.8,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF5E1").s().p("AgJBbIgIgEIgFgIQgBgDgBgGIAAiLQABgLAGgFQAHgHAKAAIAKACQAFACADADIAEAGIADAKIAACLQgBAKgGAHQgHAFgLABgAgFhLQgBADAAADIAACLQAAAEABACIAFACIAFgCIACgGIAAiLIgCgGIgFgCg");
	this.shape_1.setTransform(477.4,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF5E1").s().p("AAPBaQgEAAgCgCIgCgFIAAhOIgNAAIAABOIgCAFIgGACIgHAAIgCgBIgBgCIAAiuIABgCIACgBIAHAAIAGACIACAFIAABLIANAAIAAhLIACgFQACgCAEAAIAHAAIACABIABACIAACuIgBACIgCABg");
	this.shape_2.setTransform(465.9,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF5E1").s().p("AgRBXQgHgHABgKIAAgnIAAgCIACgCIAIAAIAFADIACAFIAAAjIACAGIAEACIAFgCIACgGIgCgdIgUg8IgGgVQgCgOAAgPIACgKIAEgGIAIgFIAJgCQALAAAHAHQAGAFAAALIAAAoIAAABIgCABIgHAAIgGgCIgCgGIAAgiIgCgGIgFgCIgEACIgCAGQAAAMACAJIADASIAVA5IAEArIgBAJIgGAIIgHAEIgKACQgKgBgHgFg");
	this.shape_3.setTransform(454.4,13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF5E1").s().p("AgDBaIgDgBIgBgDIAAihIgIAAQgDAAgCgCQgCgCAAgDIAAgFIABgCIACgBIAnAAIACABIABACIAAAFIgCAFIgFACIgIAAIAAChIgBADIgDABg");
	this.shape_4.setTransform(433.9,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF5E1").s().p("AgQBaIgCgBIgBgCIAAiuIABgCIACgBIAhAAIACABIABACIAAAFIgCAFIgFACIgOAAIAABGIAQAAIABABIABACIAAACIgCAFQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgMAAIAABMIgCAFIgGACg");
	this.shape_5.setTransform(423.8,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF5E1").s().p("AgCBaIgEgBIgBgDIAAipQAAgDACgCIAFgCIAGAAIACABIAAACIAACtIgBADIgDABg");
	this.shape_6.setTransform(414.4,13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF5E1").s().p("AAPBaIgGgCQgCgCAAgDIAAg8IgCgGIgFgCIgGAAIAABEIgCAFIgGACIgHAAIgCgBIAAgCIAAiuIAAgCIACgBIAVAAIAKACIAIAFIAFAHIABAJIAAA+IgCAHIgGAFIAGAHIACAJIAABAIAAACIgCABgAgGAAIAGAAIAFAAIACgFIAAg+IgCgGIgFgCIgGAAg");
	this.shape_7.setTransform(404.5,13.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF5E1").s().p("AAPBaIgGgCIgCgFIAAhOIgNAAIAABOIgCAFIgFACIgIAAIgCgBIgBgCIAAiuIABgCIACgBIAIAAIAFACIACAFIAABLIANAAIAAhLIACgFIAGgCIAHAAIACABIAAACIAACuIAAACIgCABg");
	this.shape_8.setTransform(393.1,13.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF5E1").s().p("AgDBaIgDgBIgBgDIAAihIgIAAIgFgCIgCgFIAAgFIABgCIACgBIAnAAIACABIABACIAAAFIgCAFIgFACIgIAAIAAChIgBADIgDABg");
	this.shape_9.setTransform(382.1,13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF5E1").s().p("AgZCIIgCgBIgBgDIAAkHIABgDIACgBIAyAAIADABIABADIAAAHIgCAIQgDADgEAAIgWAAIAABpIAYAAIADABIABADIAAAFIgDAIQgCADgFAAIgSAAIAABmIAWAAQAEAAADAEIACAIIAAAGIgBADIgDABg");
	this.shape_10.setTransform(100.5,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF5E1").s().p("AgZCIIgDgBIAAgDIAAkHIAAgDIADgBIAyAAIADABIACADIAAAHIgDAIQgDADgFAAIgVAAIAABpIAYAAIADABIAAADIAAAFIgCAIQgDADgEAAIgSAAIAABxIgDAIQgDADgFAAg");
	this.shape_11.setTransform(85.3,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF5E1").s().p("AgFCIQgDAAgBgCIgCgFIAAj+QAAgEACgDQAEgDAFAAIAIAAIADABIACADIAAEEIgDAFQgCACgCAAg");
	this.shape_12.setTransform(71.2,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF5E1").s().p("AgZCIIgCgBIgBgDIAAkHIABgDIACgBIALAAQAEAAAEADIAEAHIAADvIAVAAQAGAAABAEIADAIIAAAGIgBADIgDABg");
	this.shape_13.setTransform(57.7,13.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF5E1").s().p("AggCIIgDgBIgBgDIAAkHIABgDIADgBIAgAAQARAAAKAJQAKAJAAAPIAADMQAAAQgKAJQgJAJgSAAgAgKByIAKAAIAIgDIACgJIAAjMIgCgIQgCgDgGAAIgKAAg");
	this.shape_14.setTransform(41.2,13.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF5E1").s().p("AAXCIIgIgDQgDgCAAgEIgDgmIgRAAIgCAmIgEAGIgIADIgKAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBAAIgBgEIAYkGIABgDIACgBIAVAAIACABIABADIAYEGIgBAEIgEABgAgHBDIAPAAIgIiQg");
	this.shape_15.setTransform(24.3,13.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF5E1").s().p("AAnCIIgJgDQgDgDAAgFIAHi+IgUDAIgFAGIgJADIAAAAIgIgDIgEgGIgUjAIAGC+IgDAIIgIADIgMAAIgDgBIgBgDIAAkHIABgDIADgBIAOAAIAGABIAFAFIAFAMIADAWIAQCiIAUi3IAFgNIAEgFIAGgBIAPAAIADABIABADIAAEHIgBADIgDABg");
	this.shape_16.setTransform(5.4,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,491.3,27.3);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF8402").ss(0.5).p("AAAhMIAACZ");
	this.shape.setTransform(20.5,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF8402").ss(0.5).p("AAChXIgDCv");
	this.shape_1.setTransform(19.6,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF8402").ss(0.5).p("AAFhcIgJC5");
	this.shape_2.setTransform(18.5,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF8402").ss(0.5).p("AAIheIgPC+");
	this.shape_3.setTransform(17.6,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF8402").ss(0.5).p("AAAhSIABCl");
	this.shape_4.setTransform(21.5,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF8402").ss(0.5).p("AgEhHIAKCP");
	this.shape_5.setTransform(22.7,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF8402").ss(0.5).p("AgKhRIAVCj");
	this.shape_6.setTransform(23.9,23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF8402").ss(0.5).p("AgQhZIAhCz");
	this.shape_7.setTransform(25.4,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF8402").ss(0.5).p("AgRhOIAjCd");
	this.shape_8.setTransform(26.2,22.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF8402").ss(0.5).p("AgQg/IAhB/");
	this.shape_9.setTransform(26.7,21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF8402").ss(0.5).p("AAKhJIgTCU");
	this.shape_10.setTransform(16.9,22.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF8402").ss(0.5).p("AAShSIgkCl");
	this.shape_11.setTransform(16.1,23);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF8402").ss(0.5).p("AAThEIglCJ");
	this.shape_12.setTransform(15.5,21.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF8402").ss(0.5).p("Ah8CFIBRkGIBVAAIBTEG");
	this.shape_13.setTransform(21.3,27.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF8402").ss(0.5).p("AABAAIBEAEQAdAFAFAHIABADIABgBIABAAIAOgSIACgCQAAgIgkgGIhWgGIhVAGQgkAGAAAIIADADIASASIAAAAQABgIAegHg");
	this.shape_14.setTransform(21.2,10.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF8402").ss(0.5).p("AAAgLIgtAEQgUAEAAADQAAAFAUAEIAtADIAvgDQATgEAAgFQAAgDgTgEg");
	this.shape_15.setTransform(21.4,13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF8402").ss(0.5).p("AgtALQgUgEAAgFQAAgDAUgEIAtgEIAvAEQATAEAAADQAAAFgTAEIgvADgAhHAOIBHAGIBIgGQAegGABgIIAAAAIgCgCQgGgIgdgFIhCgFIhHAGQgdAGgBAIIgBAAQAAAIAfAGg");
	this.shape_16.setTransform(21.4,12.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF8402").ss(0.5).p("AizAZQAdAKAyAGIgRgSIgDgFQAAgIAjgGIBVgEIBWAEQAkAGAAAIIgPAXQAvgGAcgLQAdgKAAgNQAAgLgigLQgggLg2gGIhbgEIhbAEQg2AGggALQghALAAALQAAANAfALg");
	this.shape_17.setTransform(21.1,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF8402").ss(0.5).p("AA1gUIgqgDIgXgCIhJAGQgeAGAAAJIAAAAQABgJAegGIBIgGIAXACAA1gUQAcAFAHAIQgGgIgdgFg");
	this.shape_18.setTransform(22.7,13.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF8402").ss(0.5).p("ABcAWQgKgUgZgLQgZgNggAAQgeAAgZANQgZALgKAUIBbgEg");
	this.shape_19.setTransform(20.8,2.3,1,1,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,44.3,43.1);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape.setTransform(630.3,79.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_1.setTransform(630.3,76);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_2.setTransform(630.3,72.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_3.setTransform(630.3,69.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_4.setTransform(630.3,65.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_5.setTransform(630.3,62.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_6.setTransform(630.3,58.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_7.setTransform(630.3,55.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_8.setTransform(456.3,79.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_9.setTransform(456.3,76);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_10.setTransform(456.3,72.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_11.setTransform(456.3,69.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_12.setTransform(456.3,65.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_13.setTransform(456.3,62.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_14.setTransform(456.3,58.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_15.setTransform(456.3,55.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_16.setTransform(241.8,79.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_17.setTransform(241.8,76);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_18.setTransform(241.8,72.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_19.setTransform(241.8,69.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_20.setTransform(241.8,65.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_21.setTransform(241.8,62.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_22.setTransform(241.8,58.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_23.setTransform(241.8,55.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_24.setTransform(79.8,79.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_25.setTransform(79.8,76);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_26.setTransform(79.8,72.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_27.setTransform(79.8,69.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_28.setTransform(79.8,65.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_29.setTransform(79.8,62.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_30.setTransform(79.8,58.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFAD01").p("AkFAAIILAA");
	this.shape_31.setTransform(79.8,55.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF8402").p("AKcATIiMgmIiHAmIiZgmIirAmIicgmIidAmIiigmIiiAmIhjgm");
	this.shape_32.setTransform(489.6,94.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF8402").p("AKcATIiMgmIiHAmIiZgmIirAmIicgmIidAmIiigmIiiAmIhjgm");
	this.shape_33.setTransform(489.6,96.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF8402").p("AKcATIiMgmIiHAmIiZgmIirAmIicgmIidAmIiigmIiiAmIhjgm");
	this.shape_34.setTransform(489.6,98.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF8402").p("AKcAUIiMgnIiHAnIiZgnIirAnIicgnIidAnIiignIiiAnIhjgn");
	this.shape_35.setTransform(489.6,100.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF8402").p("AKcAUIiMgnIiHAnIiZgnIirAnIicgnIidAnIiignIiiAnIhjgn");
	this.shape_36.setTransform(489.6,102.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF8402").p("AKcATIiMgmIiHAmIiZgmIirAmIicgmIidAmIiigmIiiAmIhjgm");
	this.shape_37.setTransform(489.6,104.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF8402").p("AKcATIiMgmIiHAmIiZgmIirAmIicgmIidAmIiigmIiiAmIhjgm");
	this.shape_38.setTransform(489.6,106.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF8402").p("AKcATIiMgmIiHAmIiZgmIirAmIicgmIidAmIiigmIiiAmIhjgm");
	this.shape_39.setTransform(489.6,108.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF8402").p("AKcATIiMgmIiHAmIiZgmIirAmIicgmIidAmIiigmIiiAmIhjgm");
	this.shape_40.setTransform(489.6,110.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF8402").p("AKcAUIiMgnIiHAnIiZgnIirAnIicgnIidAnIiignIiiAnIhjgn");
	this.shape_41.setTransform(489.6,112.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_42.setTransform(623.3,94.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_43.setTransform(623.3,96.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_44.setTransform(623.3,98.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF8402").p("AqcAUICNgnICHAnICZgnICrAnICbgnICdAnICjgnIChAnIBkgn");
	this.shape_45.setTransform(623.4,100.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF8402").p("AqcAUICNgnICHAnICZgnICrAnICbgnICdAnICjgnIChAnIBkgn");
	this.shape_46.setTransform(623.4,102.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_47.setTransform(623.3,104.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_48.setTransform(623.3,106.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_49.setTransform(623.3,108.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_50.setTransform(623.3,110.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF8402").p("AqcAUICNgnICHAnICZgnICrAnICbgnICdAnICjgnIChAnIBkgn");
	this.shape_51.setTransform(623.4,112.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF8402").p("AKcAUIiMgnIiHAnIiZgnIirAnIicgnIidAnIiignIiiAnIhjgn");
	this.shape_52.setTransform(489.6,15.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF8402").p("AKcAUIiMgnIiHAnIiZgnIirAnIicgnIidAnIiignIiiAnIhjgn");
	this.shape_53.setTransform(489.6,17.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF8402").p("AKcATIiMgmIiHAmIiZgmIirAmIicgmIidAmIiigmIiiAmIhjgm");
	this.shape_54.setTransform(489.6,19.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF8402").p("AKcATIiMgmIiHAmIiZgmIirAmIicgmIidAmIiigmIiiAmIhjgm");
	this.shape_55.setTransform(489.6,21.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF8402").p("AKcATIiMgmIiHAmIiZgmIirAmIicgmIidAmIiigmIiiAmIhjgm");
	this.shape_56.setTransform(489.6,23.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF8402").p("AKcATIiMgmIiHAmIiZgmIirAmIicgmIidAmIiigmIiiAmIhjgm");
	this.shape_57.setTransform(489.6,25.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF8402").p("AKcAUIiMgnIiHAnIiZgnIirAnIicgnIidAnIiignIiiAnIhjgn");
	this.shape_58.setTransform(489.6,27.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF8402").p("AKcAUIiMgnIiHAnIiZgnIirAnIicgnIidAnIiignIiiAnIhjgn");
	this.shape_59.setTransform(489.6,29.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF8402").p("AKcATIiMgmIiHAmIiZgmIirAmIicgmIidAmIiigmIiiAmIhjgm");
	this.shape_60.setTransform(489.6,31.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF8402").p("AKcATIiMgmIiHAmIiZgmIirAmIicgmIidAmIiigmIiiAmIhjgm");
	this.shape_61.setTransform(489.6,33.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF8402").p("AqcAUICNgnICHAnICZgnICrAnICbgnICdAnICjgnIChAnIBkgn");
	this.shape_62.setTransform(623.4,15.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF8402").p("AqcAUICNgnICHAnICZgnICrAnICbgnICdAnICjgnIChAnIBkgn");
	this.shape_63.setTransform(623.4,17.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_64.setTransform(623.3,19.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_65.setTransform(623.3,21.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_66.setTransform(623.3,23.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_67.setTransform(623.3,25.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF8402").p("AqcAUICNgnICHAnICZgnICrAnICbgnICdAnICjgnIChAnIBkgn");
	this.shape_68.setTransform(623.4,27.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF8402").p("AqcAUICNgnICHAnICZgnICrAnICbgnICdAnICjgnIChAnIBkgn");
	this.shape_69.setTransform(623.4,29.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_70.setTransform(623.3,31.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_71.setTransform(623.3,33.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FF8402").p("AKdATIiNgmIiHAmIiZgmIirAmIibgmIidAmIijgmIiiAmIhjgm");
	this.shape_72.setTransform(81.8,94.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FF8402").p("AKdATIiNgmIiHAmIiZgmIirAmIibgmIidAmIijgmIiiAmIhjgm");
	this.shape_73.setTransform(81.8,96.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF8402").p("AKdATIiNgmIiHAmIiZgmIirAmIibgmIidAmIijgmIiiAmIhjgm");
	this.shape_74.setTransform(81.8,98.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FF8402").p("AKdAUIiNgnIiHAnIiZgnIirAnIibgnIidAnIijgnIiiAnIhjgn");
	this.shape_75.setTransform(81.8,100.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FF8402").p("AKdAUIiNgnIiHAnIiZgnIirAnIibgnIidAnIijgnIiiAnIhjgn");
	this.shape_76.setTransform(81.8,102.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FF8402").p("AKdATIiNgmIiHAmIiZgmIirAmIibgmIidAmIijgmIiiAmIhjgm");
	this.shape_77.setTransform(81.8,104.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FF8402").p("AKdATIiNgmIiHAmIiZgmIirAmIibgmIidAmIijgmIiiAmIhjgm");
	this.shape_78.setTransform(81.8,106.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FF8402").p("AKdATIiNgmIiHAmIiZgmIirAmIibgmIidAmIijgmIiiAmIhjgm");
	this.shape_79.setTransform(81.8,108.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FF8402").p("AKdATIiNgmIiHAmIiZgmIirAmIibgmIidAmIijgmIiiAmIhjgm");
	this.shape_80.setTransform(81.8,110.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FF8402").p("AKdAUIiNgnIiHAnIiZgnIirAnIibgnIidAnIijgnIiiAnIhjgn");
	this.shape_81.setTransform(81.8,112.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_82.setTransform(215.6,94.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_83.setTransform(215.6,96.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_84.setTransform(215.6,98.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FF8402").p("AqbAUICMgnICHAnICZgnICrAnICbgnICeAnICignICiAnIBjgn");
	this.shape_85.setTransform(215.6,100.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FF8402").p("AqbAUICMgnICHAnICZgnICrAnICbgnICeAnICignICiAnIBjgn");
	this.shape_86.setTransform(215.6,102.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_87.setTransform(215.6,104.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_88.setTransform(215.6,106.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_89.setTransform(215.6,108.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_90.setTransform(215.6,110.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FF8402").p("AqbAUICMgnICHAnICZgnICrAnICbgnICeAnICignICiAnIBjgn");
	this.shape_91.setTransform(215.6,112.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FF8402").p("AKdAUIiNgnIiHAnIiZgnIirAnIibgnIidAnIijgnIiiAnIhjgn");
	this.shape_92.setTransform(81.8,15.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FF8402").p("AKdAUIiNgnIiHAnIiZgnIirAnIibgnIidAnIijgnIiiAnIhjgn");
	this.shape_93.setTransform(81.8,17.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FF8402").p("AKdATIiNgmIiHAmIiZgmIirAmIibgmIidAmIijgmIiiAmIhjgm");
	this.shape_94.setTransform(81.8,19.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FF8402").p("AKdATIiNgmIiHAmIiZgmIirAmIibgmIidAmIijgmIiiAmIhjgm");
	this.shape_95.setTransform(81.8,21.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FF8402").p("AKdATIiNgmIiHAmIiZgmIirAmIibgmIidAmIijgmIiiAmIhjgm");
	this.shape_96.setTransform(81.8,23.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FF8402").p("AKdATIiNgmIiHAmIiZgmIirAmIibgmIidAmIijgmIiiAmIhjgm");
	this.shape_97.setTransform(81.8,25.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FF8402").p("AKdAUIiNgnIiHAnIiZgnIirAnIibgnIidAnIijgnIiiAnIhjgn");
	this.shape_98.setTransform(81.8,27.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FF8402").p("AKdAUIiNgnIiHAnIiZgnIirAnIibgnIidAnIijgnIiiAnIhjgn");
	this.shape_99.setTransform(81.8,29.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FF8402").p("AKdATIiNgmIiHAmIiZgmIirAmIibgmIidAmIijgmIiiAmIhjgm");
	this.shape_100.setTransform(81.8,31.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FF8402").p("AKdATIiNgmIiHAmIiZgmIirAmIibgmIidAmIijgmIiiAmIhjgm");
	this.shape_101.setTransform(81.8,33.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FF8402").p("AqbAUICMgnICHAnICZgnICrAnICbgnICeAnICignICiAnIBjgn");
	this.shape_102.setTransform(215.6,15.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FF8402").p("AqbAUICMgnICHAnICZgnICrAnICbgnICeAnICignICiAnIBjgn");
	this.shape_103.setTransform(215.6,17.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_104.setTransform(215.6,19.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_105.setTransform(215.6,21.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_106.setTransform(215.6,23.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_107.setTransform(215.6,25.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FF8402").p("AqbAUICMgnICHAnICZgnICrAnICbgnICeAnICignICiAnIBjgn");
	this.shape_108.setTransform(215.6,27.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FF8402").p("AqbAUICMgnICHAnICZgnICrAnICbgnICeAnICignICiAnIBjgn");
	this.shape_109.setTransform(215.6,29.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_110.setTransform(215.6,31.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_111.setTransform(215.6,33.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFAD01").p("Ah3ASQAuglAPABQAGABAWATQAUAUAIgEIAbgTQAWgRAIAAQAQAAAxAk");
	this.shape_112.setTransform(673.6,72.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFAD01").p("Ah3ASQAuglAPABQAHABAVATQAUATAIgDIAbgTQAWgRAIAAQAQAAAxAk");
	this.shape_113.setTransform(673.7,70.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFAD01").p("Ah3ASQAuglAPABQAHABAVATQAUAUAIgEIAbgTQAWgRAIAAQAQAAAxAk");
	this.shape_114.setTransform(673.7,67.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFAD01").p("Ah3ASQAuglAPABQAHABAVATQAUAUAIgEIAbgTQAWgRAIAAQAQAAAxAk");
	this.shape_115.setTransform(673.8,64.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFAD01").p("Ah3ASQAuglAPABQAHABAVATQAUAUAIgEQADgCAYgRQAWgRAIAAQAQAAAxAk");
	this.shape_116.setTransform(673.8,62.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFAD01").p("Ah3ATQAugmAPABQAHABAVATQAUAUAIgDIAbgUQAWgRAIAAQAQAAAxAl");
	this.shape_117.setTransform(673.9,59.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFAD01").p("AB4hpIAADUIjvAAIAAjUg");
	this.shape_118.setTransform(673.9,66.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFAD01").p("AiJASQA1glARABQAHABAZATQAXAUAJgEIAggTQAYgRAJAAQAMAAAhASIAfAS");
	this.shape_119.setTransform(34.9,74.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFAD01").p("AiJASQA1glARABQAHABAZATQAXAUAJgEIAggTQAYgRAJAAQAMAAAhASIAfAS");
	this.shape_120.setTransform(34.9,72.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFAD01").p("AiJASQA1glARABQAHABAZATQAXAUAJgEQAFgCAbgRQAYgRAJAAQAMAAAhASIAfAS");
	this.shape_121.setTransform(35,69.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFAD01").p("AiJASQA1glARABQAIAAAYAUQAYATAIgDIAggTQAYgRAKAAQAMAAAgASIAfAS");
	this.shape_122.setTransform(35,66.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FFAD01").p("AiIASQA0glASABQAHABAZATQAXAUAIgEIAggTQAYgRAKAAQAMAAAgASIAfAS");
	this.shape_123.setTransform(35.1,64.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFAD01").p("AiJASQA1glARABQAHABAZATQAXAUAJgEIAggTQAYgRAJAAQAMAAAhASIAfAS");
	this.shape_124.setTransform(35.2,61.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FFAD01").p("ACJhpIAADTIkRAAIAAjTg");
	this.shape_125.setTransform(35.1,68.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,12.6,677.3,103.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFAD01").ss(0.3).p("AheAAIC9AA");
	this.shape.setTransform(9.6,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFAD01").ss(0.3).p("AheAAIC9AA");
	this.shape_1.setTransform(9.6,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFAD01").ss(0.3).p("AheAAIC9AA");
	this.shape_2.setTransform(9.6,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFAD01").ss(0.3).p("AheAAIC9AA");
	this.shape_3.setTransform(9.6,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFAD01").ss(0.3).p("AheAAIC9AA");
	this.shape_4.setTransform(9.6,7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFAD01").ss(0.3).p("AheAAIC9AA");
	this.shape_5.setTransform(9.6,6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFAD01").ss(0.3).p("AheAAIC9AA");
	this.shape_6.setTransform(9.6,4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFAD01").ss(0.3).p("AheAAIC9AA");
	this.shape_7.setTransform(9.6,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFAD01").ss(0.3).p("AheAAIC9AA");
	this.shape_8.setTransform(9.6,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFAD01").ss(0.3).p("ABLAAQAAAfgWAWQgWAWgfAAQgdAAgXgWQgWgWAAgfQAAgdAWgXQAXgWAdAAQAfAAAWAWQAWAXAAAdg");
	this.shape_9.setTransform(9.8,7.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373330").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	this.shape_10.setTransform(9.8,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.9,21.2,17.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFAD01").p("AheAAIC9AA");
	this.shape.setTransform(9.6,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFAD01").p("AheAAIC9AA");
	this.shape_1.setTransform(9.6,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFAD01").p("AheAAIC9AA");
	this.shape_2.setTransform(9.6,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFAD01").p("AheAAIC9AA");
	this.shape_3.setTransform(9.6,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFAD01").p("AheAAIC9AA");
	this.shape_4.setTransform(9.6,8.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFAD01").p("AheAAIC9AA");
	this.shape_5.setTransform(9.6,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFAD01").p("AheAAIC9AA");
	this.shape_6.setTransform(9.6,5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFAD01").p("AheAAIC9AA");
	this.shape_7.setTransform(9.6,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFAD01").p("AheAAIC9AA");
	this.shape_8.setTransform(9.6,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFAD01").p("ABLAAQAAAegWAXQgWAWgfAAQgeAAgWgWQgWgXAAgeQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeg");
	this.shape_9.setTransform(9.8,8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373330").s().p("Ag0A1QgWgXAAgeQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgeAAgWgWg");
	this.shape_10.setTransform(9.8,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.5,21.2,17.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFAD01").ss(2).p("AB0B6IjjAAQAbhLAAhRQAAg0gHgjIDPAAg");
	this.shape.setTransform(411.5,66.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFAD01").ss(2).p("ABch5IjPAAIAAD0IDjAAQgbhNAAhPQAAg1AHgjg");
	this.shape_1.setTransform(286.4,66.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFAD01").ss(2).p("AjpjpQBihhCHAAQCJAABhBhQBhBhAACIQAACJhhBhQhhBhiJAAQiHAAhihhQhhhhAAiJQAAiIBhhhg");
	this.shape_2.setTransform(351,62);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFAD01").ss(2).p("AlVlWQCOiODHAAQDJAACOCOQCNCOAADIQAADIiNCPQiOCOjJAAQjHAAiOiOQiOiPAAjIQAAjICOiOg");
	this.shape_3.setTransform(349.8,62.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF8402").ss(2).p("AXEAAMguHAAA");
	this.shape_4.setTransform(153.7,84);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF8402").ss(2).p("A3PAAMAufAAA");
	this.shape_5.setTransform(148.9,50.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF8402").ss(2).p("A3pAAMAvTAAA");
	this.shape_6.setTransform(551.8,50.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF8402").ss(2).p("AXoAAMgvPAAA");
	this.shape_7.setTransform(549.3,84);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF8402").ss(2).p("ApZD6QAsjVCoiJQCriNDbAAQDYAACrCQQCmCJAwDS");
	this.shape_8.setTransform(349.7,24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF8402").ss(2).p("AI2jHQg/CwidBrQidBti9AAQi6AAihhzQidhug8in");
	this.shape_9.setTransform(350.1,104);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF8402").ss(2).p("AoLDaQAmi6CSh3QCVh6C/AAQC+AACTB3QCRBzApC0");
	this.shape_10.setTransform(349.7,29.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF8402").ss(2).p("AHtimQg/CTiEBYQiHBcijAAQiiAAiHhaQiDhVhAiP");
	this.shape_11.setTransform(350,99.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,705.3,125.4);


(lib.Symbol137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgWAAgfQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.1,15.1,15.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpA3QgVgWgBgfQABgdAVgWQAXgWAdAAQAfAAAWAWQAWAWAAAdQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(8.7,7.8);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.5,15.1,15.1);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8("synched",0);
	this.instance.setTransform(240.9,-34,4.55,4.55);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Symbol7("synched",0);
	this.instance_1.setTransform(-14.7,-2.4);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(12,11,681,107);

	this.instance_2 = new lib.Symbol5("synched",0);
	this.instance_2.setTransform(260.3,56.4);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_2.cache(0,-2,19,19);

	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.setTransform(388.1,55.9);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_3.cache(0,-1,19,19);

	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(-14.7,-2.4);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_4.cache(-3,-3,709,129);

	this.instance_5 = new lib.Symbol10("synched",0);
	this.instance_5.setTransform(260.3,56.4);
	this.instance_5.filters = [new cjs.ColorFilter(0.01953125, 0.01953125, 0.01953125, 1, 0, 0, 0, 0)];
	this.instance_5.cache(0,-2,19,19);

	this.instance_6 = new lib.Symbol9("synched",0);
	this.instance_6.setTransform(388.1,55.9);
	this.instance_6.filters = [new cjs.ColorFilter(0.01953125, 0.01953125, 0.01953125, 1, 0, 0, 0, 0)];
	this.instance_6.cache(0,-1,19,19);

	this.instance_7 = new lib.Symbol12("synched",0);
	this.instance_7.setTransform(260.3,56.4);
	this.instance_7.filters = [new cjs.ColorFilter(0.03125, 0.03125, 0.03125, 1, 0, 0, 0, 0)];
	this.instance_7.cache(0,-2,19,19);

	this.instance_8 = new lib.Symbol11("synched",0);
	this.instance_8.setTransform(388.1,55.9);
	this.instance_8.filters = [new cjs.ColorFilter(0.03125, 0.03125, 0.03125, 1, 0, 0, 0, 0)];
	this.instance_8.cache(0,-1,19,19);

	this.instance_9 = new lib.Symbol14("synched",0);
	this.instance_9.setTransform(260.3,56.4);
	this.instance_9.filters = [new cjs.ColorFilter(0.05078125, 0.05078125, 0.05078125, 1, 0, 0, 0, 0)];
	this.instance_9.cache(0,-2,19,19);

	this.instance_10 = new lib.Symbol13("synched",0);
	this.instance_10.setTransform(388.1,55.9);
	this.instance_10.filters = [new cjs.ColorFilter(0.05078125, 0.05078125, 0.05078125, 1, 0, 0, 0, 0)];
	this.instance_10.cache(0,-1,19,19);

	this.instance_11 = new lib.Symbol16("synched",0);
	this.instance_11.setTransform(260.3,56.4);
	this.instance_11.filters = [new cjs.ColorFilter(0.05859375, 0.05859375, 0.05859375, 1, 0, 0, 0, 0)];
	this.instance_11.cache(0,-2,19,19);

	this.instance_12 = new lib.Symbol15("synched",0);
	this.instance_12.setTransform(388.1,55.9);
	this.instance_12.filters = [new cjs.ColorFilter(0.05859375, 0.05859375, 0.05859375, 1, 0, 0, 0, 0)];
	this.instance_12.cache(0,-1,19,19);

	this.instance_13 = new lib.Symbol18("synched",0);
	this.instance_13.setTransform(260.3,56.4);
	this.instance_13.filters = [new cjs.ColorFilter(0.078125, 0.078125, 0.078125, 1, 0, 0, 0, 0)];
	this.instance_13.cache(0,-2,19,19);

	this.instance_14 = new lib.Symbol17("synched",0);
	this.instance_14.setTransform(388.1,55.9);
	this.instance_14.filters = [new cjs.ColorFilter(0.078125, 0.078125, 0.078125, 1, 0, 0, 0, 0)];
	this.instance_14.cache(0,-1,19,19);

	this.instance_15 = new lib.Symbol20("synched",0);
	this.instance_15.setTransform(260.3,56.4);
	this.instance_15.filters = [new cjs.ColorFilter(0.08984375, 0.08984375, 0.08984375, 1, 0, 0, 0, 0)];
	this.instance_15.cache(0,-2,19,19);

	this.instance_16 = new lib.Symbol19("synched",0);
	this.instance_16.setTransform(388.1,55.9);
	this.instance_16.filters = [new cjs.ColorFilter(0.08984375, 0.08984375, 0.08984375, 1, 0, 0, 0, 0)];
	this.instance_16.cache(0,-1,19,19);

	this.instance_17 = new lib.Symbol22("synched",0);
	this.instance_17.setTransform(260.3,56.4);
	this.instance_17.filters = [new cjs.ColorFilter(0.109375, 0.109375, 0.109375, 1, 0, 0, 0, 0)];
	this.instance_17.cache(0,-2,19,19);

	this.instance_18 = new lib.Symbol21("synched",0);
	this.instance_18.setTransform(388.1,55.9);
	this.instance_18.filters = [new cjs.ColorFilter(0.109375, 0.109375, 0.109375, 1, 0, 0, 0, 0)];
	this.instance_18.cache(0,-1,19,19);

	this.instance_19 = new lib.Symbol24("synched",0);
	this.instance_19.setTransform(260.3,56.4);
	this.instance_19.filters = [new cjs.ColorFilter(0.12890625, 0.12890625, 0.12890625, 1, 0, 0, 0, 0)];
	this.instance_19.cache(0,-2,19,19);

	this.instance_20 = new lib.Symbol23("synched",0);
	this.instance_20.setTransform(388.1,55.9);
	this.instance_20.filters = [new cjs.ColorFilter(0.12890625, 0.12890625, 0.12890625, 1, 0, 0, 0, 0)];
	this.instance_20.cache(0,-1,19,19);

	this.instance_21 = new lib.Symbol26("synched",0);
	this.instance_21.setTransform(260.3,56.4);
	this.instance_21.filters = [new cjs.ColorFilter(0.140625, 0.140625, 0.140625, 1, 0, 0, 0, 0)];
	this.instance_21.cache(0,-2,19,19);

	this.instance_22 = new lib.Symbol25("synched",0);
	this.instance_22.setTransform(388.1,55.9);
	this.instance_22.filters = [new cjs.ColorFilter(0.140625, 0.140625, 0.140625, 1, 0, 0, 0, 0)];
	this.instance_22.cache(0,-1,19,19);

	this.instance_23 = new lib.Symbol29("synched",0);
	this.instance_23.setTransform(93.6,51.7);
	this.instance_23.alpha = 0;

	this.instance_24 = new lib.Symbol28("synched",0);
	this.instance_24.setTransform(260.3,56.4);
	this.instance_24.filters = [new cjs.ColorFilter(0.16015625, 0.16015625, 0.16015625, 1, 0, 0, 0, 0)];
	this.instance_24.cache(0,-2,19,19);

	this.instance_25 = new lib.Symbol27("synched",0);
	this.instance_25.setTransform(388.1,55.9);
	this.instance_25.filters = [new cjs.ColorFilter(0.16015625, 0.16015625, 0.16015625, 1, 0, 0, 0, 0)];
	this.instance_25.cache(0,-1,19,19);

	this.instance_26 = new lib.Symbol31("synched",0);
	this.instance_26.setTransform(260.3,56.4);
	this.instance_26.filters = [new cjs.ColorFilter(0.171875, 0.171875, 0.171875, 1, 0, 0, 0, 0)];
	this.instance_26.cache(0,-2,19,19);

	this.instance_27 = new lib.Symbol30("synched",0);
	this.instance_27.setTransform(388.1,55.9);
	this.instance_27.filters = [new cjs.ColorFilter(0.171875, 0.171875, 0.171875, 1, 0, 0, 0, 0)];
	this.instance_27.cache(0,-1,19,19);

	this.instance_28 = new lib.Symbol33("synched",0);
	this.instance_28.setTransform(260.3,56.4);
	this.instance_28.filters = [new cjs.ColorFilter(0.19140625, 0.19140625, 0.19140625, 1, 0, 0, 0, 0)];
	this.instance_28.cache(0,-2,19,19);

	this.instance_29 = new lib.Symbol32("synched",0);
	this.instance_29.setTransform(388.1,55.9);
	this.instance_29.filters = [new cjs.ColorFilter(0.19140625, 0.19140625, 0.19140625, 1, 0, 0, 0, 0)];
	this.instance_29.cache(0,-1,19,19);

	this.instance_30 = new lib.Symbol35("synched",0);
	this.instance_30.setTransform(260.3,56.4);
	this.instance_30.filters = [new cjs.ColorFilter(0.19921875, 0.19921875, 0.19921875, 1, 0, 0, 0, 0)];
	this.instance_30.cache(0,-2,19,19);

	this.instance_31 = new lib.Symbol34("synched",0);
	this.instance_31.setTransform(388.1,55.9);
	this.instance_31.filters = [new cjs.ColorFilter(0.19921875, 0.19921875, 0.19921875, 1, 0, 0, 0, 0)];
	this.instance_31.cache(0,-1,19,19);

	this.instance_32 = new lib.Symbol37("synched",0);
	this.instance_32.setTransform(260.3,56.4);
	this.instance_32.filters = [new cjs.ColorFilter(0.21875, 0.21875, 0.21875, 1, 0, 0, 0, 0)];
	this.instance_32.cache(0,-2,19,19);

	this.instance_33 = new lib.Symbol36("synched",0);
	this.instance_33.setTransform(388.1,55.9);
	this.instance_33.filters = [new cjs.ColorFilter(0.21875, 0.21875, 0.21875, 1, 0, 0, 0, 0)];
	this.instance_33.cache(0,-1,19,19);

	this.instance_34 = new lib.Symbol39("synched",0);
	this.instance_34.setTransform(260.3,56.4);
	this.instance_34.filters = [new cjs.ColorFilter(0.23046875, 0.23046875, 0.23046875, 1, 0, 0, 0, 0)];
	this.instance_34.cache(0,-2,19,19);

	this.instance_35 = new lib.Symbol38("synched",0);
	this.instance_35.setTransform(388.1,55.9);
	this.instance_35.filters = [new cjs.ColorFilter(0.23046875, 0.23046875, 0.23046875, 1, 0, 0, 0, 0)];
	this.instance_35.cache(0,-1,19,19);

	this.instance_36 = new lib.Symbol41("synched",0);
	this.instance_36.setTransform(260.3,56.4);
	this.instance_36.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 0, 0, 0, 0)];
	this.instance_36.cache(0,-2,19,19);

	this.instance_37 = new lib.Symbol40("synched",0);
	this.instance_37.setTransform(388.1,55.9);
	this.instance_37.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 0, 0, 0, 0)];
	this.instance_37.cache(0,-1,19,19);

	this.instance_38 = new lib.Symbol43("synched",0);
	this.instance_38.setTransform(260.3,56.4);
	this.instance_38.filters = [new cjs.ColorFilter(0.26953125, 0.26953125, 0.26953125, 1, 0, 0, 0, 0)];
	this.instance_38.cache(0,-2,19,19);

	this.instance_39 = new lib.Symbol42("synched",0);
	this.instance_39.setTransform(388.1,55.9);
	this.instance_39.filters = [new cjs.ColorFilter(0.26953125, 0.26953125, 0.26953125, 1, 0, 0, 0, 0)];
	this.instance_39.cache(0,-1,19,19);

	this.instance_40 = new lib.Symbol45("synched",0);
	this.instance_40.setTransform(260.3,56.4);
	this.instance_40.filters = [new cjs.ColorFilter(0.28125, 0.28125, 0.28125, 1, 0, 0, 0, 0)];
	this.instance_40.cache(0,-2,19,19);

	this.instance_41 = new lib.Symbol44("synched",0);
	this.instance_41.setTransform(388.1,55.9);
	this.instance_41.filters = [new cjs.ColorFilter(0.28125, 0.28125, 0.28125, 1, 0, 0, 0, 0)];
	this.instance_41.cache(0,-1,19,19);

	this.instance_42 = new lib.Symbol47("synched",0);
	this.instance_42.setTransform(260.3,56.4);
	this.instance_42.filters = [new cjs.ColorFilter(0.30078125, 0.30078125, 0.30078125, 1, 0, 0, 0, 0)];
	this.instance_42.cache(0,-2,19,19);

	this.instance_43 = new lib.Symbol46("synched",0);
	this.instance_43.setTransform(388.1,55.9);
	this.instance_43.filters = [new cjs.ColorFilter(0.30078125, 0.30078125, 0.30078125, 1, 0, 0, 0, 0)];
	this.instance_43.cache(0,-1,19,19);

	this.instance_44 = new lib.Symbol49("synched",0);
	this.instance_44.setTransform(260.3,56.4);
	this.instance_44.filters = [new cjs.ColorFilter(0.30859375, 0.30859375, 0.30859375, 1, 0, 0, 0, 0)];
	this.instance_44.cache(0,-2,19,19);

	this.instance_45 = new lib.Symbol48("synched",0);
	this.instance_45.setTransform(388.1,55.9);
	this.instance_45.filters = [new cjs.ColorFilter(0.30859375, 0.30859375, 0.30859375, 1, 0, 0, 0, 0)];
	this.instance_45.cache(0,-1,19,19);

	this.instance_46 = new lib.Symbol51("synched",0);
	this.instance_46.setTransform(260.3,56.4);
	this.instance_46.filters = [new cjs.ColorFilter(0.328125, 0.328125, 0.328125, 1, 0, 0, 0, 0)];
	this.instance_46.cache(0,-2,19,19);

	this.instance_47 = new lib.Symbol50("synched",0);
	this.instance_47.setTransform(388.1,55.9);
	this.instance_47.filters = [new cjs.ColorFilter(0.328125, 0.328125, 0.328125, 1, 0, 0, 0, 0)];
	this.instance_47.cache(0,-1,19,19);

	this.instance_48 = new lib.Symbol53("synched",0);
	this.instance_48.setTransform(260.3,56.4);
	this.instance_48.filters = [new cjs.ColorFilter(0.33984375, 0.33984375, 0.33984375, 1, 0, 0, 0, 0)];
	this.instance_48.cache(0,-2,19,19);

	this.instance_49 = new lib.Symbol52("synched",0);
	this.instance_49.setTransform(388.1,55.9);
	this.instance_49.filters = [new cjs.ColorFilter(0.33984375, 0.33984375, 0.33984375, 1, 0, 0, 0, 0)];
	this.instance_49.cache(0,-1,19,19);

	this.instance_50 = new lib.Symbol55("synched",0);
	this.instance_50.setTransform(260.3,56.4);
	this.instance_50.filters = [new cjs.ColorFilter(0.359375, 0.359375, 0.359375, 1, 0, 0, 0, 0)];
	this.instance_50.cache(0,-2,19,19);

	this.instance_51 = new lib.Symbol54("synched",0);
	this.instance_51.setTransform(388.1,55.9);
	this.instance_51.filters = [new cjs.ColorFilter(0.359375, 0.359375, 0.359375, 1, 0, 0, 0, 0)];
	this.instance_51.cache(0,-1,19,19);

	this.instance_52 = new lib.Symbol57("synched",0);
	this.instance_52.setTransform(260.3,56.4);
	this.instance_52.filters = [new cjs.ColorFilter(0.37890625, 0.37890625, 0.37890625, 1, 0, 0, 0, 0)];
	this.instance_52.cache(0,-2,19,19);

	this.instance_53 = new lib.Symbol56("synched",0);
	this.instance_53.setTransform(388.1,55.9);
	this.instance_53.filters = [new cjs.ColorFilter(0.37890625, 0.37890625, 0.37890625, 1, 0, 0, 0, 0)];
	this.instance_53.cache(0,-1,19,19);

	this.instance_54 = new lib.Symbol59("synched",0);
	this.instance_54.setTransform(260.3,56.4);
	this.instance_54.filters = [new cjs.ColorFilter(0.390625, 0.390625, 0.390625, 1, 0, 0, 0, 0)];
	this.instance_54.cache(0,-2,19,19);

	this.instance_55 = new lib.Symbol58("synched",0);
	this.instance_55.setTransform(388.1,55.9);
	this.instance_55.filters = [new cjs.ColorFilter(0.390625, 0.390625, 0.390625, 1, 0, 0, 0, 0)];
	this.instance_55.cache(0,-1,19,19);

	this.instance_56 = new lib.Symbol61("synched",0);
	this.instance_56.setTransform(260.3,56.4);
	this.instance_56.filters = [new cjs.ColorFilter(0.41015625, 0.41015625, 0.41015625, 1, 0, 0, 0, 0)];
	this.instance_56.cache(0,-2,19,19);

	this.instance_57 = new lib.Symbol60("synched",0);
	this.instance_57.setTransform(388.1,55.9);
	this.instance_57.filters = [new cjs.ColorFilter(0.41015625, 0.41015625, 0.41015625, 1, 0, 0, 0, 0)];
	this.instance_57.cache(0,-1,19,19);

	this.instance_58 = new lib.Symbol63("synched",0);
	this.instance_58.setTransform(260.3,56.4);
	this.instance_58.filters = [new cjs.ColorFilter(0.421875, 0.421875, 0.421875, 1, 0, 0, 0, 0)];
	this.instance_58.cache(0,-2,19,19);

	this.instance_59 = new lib.Symbol62("synched",0);
	this.instance_59.setTransform(388.1,55.9);
	this.instance_59.filters = [new cjs.ColorFilter(0.421875, 0.421875, 0.421875, 1, 0, 0, 0, 0)];
	this.instance_59.cache(0,-1,19,19);

	this.instance_60 = new lib.Symbol65("synched",0);
	this.instance_60.setTransform(260.3,56.4);
	this.instance_60.filters = [new cjs.ColorFilter(0.44140625, 0.44140625, 0.44140625, 1, 0, 0, 0, 0)];
	this.instance_60.cache(0,-2,19,19);

	this.instance_61 = new lib.Symbol64("synched",0);
	this.instance_61.setTransform(388.1,55.9);
	this.instance_61.filters = [new cjs.ColorFilter(0.44140625, 0.44140625, 0.44140625, 1, 0, 0, 0, 0)];
	this.instance_61.cache(0,-1,19,19);

	this.instance_62 = new lib.Symbol67("synched",0);
	this.instance_62.setTransform(260.3,56.4);
	this.instance_62.filters = [new cjs.ColorFilter(0.44921875, 0.44921875, 0.44921875, 1, 0, 0, 0, 0)];
	this.instance_62.cache(0,-2,19,19);

	this.instance_63 = new lib.Symbol66("synched",0);
	this.instance_63.setTransform(388.1,55.9);
	this.instance_63.filters = [new cjs.ColorFilter(0.44921875, 0.44921875, 0.44921875, 1, 0, 0, 0, 0)];
	this.instance_63.cache(0,-1,19,19);

	this.instance_64 = new lib.Symbol69("synched",0);
	this.instance_64.setTransform(260.3,56.4);
	this.instance_64.filters = [new cjs.ColorFilter(0.46875, 0.46875, 0.46875, 1, 0, 0, 0, 0)];
	this.instance_64.cache(0,-2,19,19);

	this.instance_65 = new lib.Symbol68("synched",0);
	this.instance_65.setTransform(388.1,55.9);
	this.instance_65.filters = [new cjs.ColorFilter(0.46875, 0.46875, 0.46875, 1, 0, 0, 0, 0)];
	this.instance_65.cache(0,-1,19,19);

	this.instance_66 = new lib.Symbol71("synched",0);
	this.instance_66.setTransform(260.3,56.4);
	this.instance_66.filters = [new cjs.ColorFilter(0.48046875, 0.48046875, 0.48046875, 1, 0, 0, 0, 0)];
	this.instance_66.cache(0,-2,19,19);

	this.instance_67 = new lib.Symbol70("synched",0);
	this.instance_67.setTransform(388.1,55.9);
	this.instance_67.filters = [new cjs.ColorFilter(0.48046875, 0.48046875, 0.48046875, 1, 0, 0, 0, 0)];
	this.instance_67.cache(0,-1,19,19);

	this.instance_68 = new lib.Symbol73("synched",0);
	this.instance_68.setTransform(260.3,56.4);
	this.instance_68.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 0, 0, 0)];
	this.instance_68.cache(0,-2,19,19);

	this.instance_69 = new lib.Symbol72("synched",0);
	this.instance_69.setTransform(388.1,55.9);
	this.instance_69.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 0, 0, 0)];
	this.instance_69.cache(0,-1,19,19);

	this.instance_70 = new lib.Symbol75("synched",0);
	this.instance_70.setTransform(260.3,56.4);
	this.instance_70.filters = [new cjs.ColorFilter(0.51953125, 0.51953125, 0.51953125, 1, 0, 0, 0, 0)];
	this.instance_70.cache(0,-2,19,19);

	this.instance_71 = new lib.Symbol74("synched",0);
	this.instance_71.setTransform(388.1,55.9);
	this.instance_71.filters = [new cjs.ColorFilter(0.51953125, 0.51953125, 0.51953125, 1, 0, 0, 0, 0)];
	this.instance_71.cache(0,-1,19,19);

	this.instance_72 = new lib.Symbol77("synched",0);
	this.instance_72.setTransform(260.3,56.4);
	this.instance_72.filters = [new cjs.ColorFilter(0.53125, 0.53125, 0.53125, 1, 0, 0, 0, 0)];
	this.instance_72.cache(0,-2,19,19);

	this.instance_73 = new lib.Symbol76("synched",0);
	this.instance_73.setTransform(388.1,55.9);
	this.instance_73.filters = [new cjs.ColorFilter(0.53125, 0.53125, 0.53125, 1, 0, 0, 0, 0)];
	this.instance_73.cache(0,-1,19,19);

	this.instance_74 = new lib.Symbol79("synched",0);
	this.instance_74.setTransform(260.3,56.4);
	this.instance_74.filters = [new cjs.ColorFilter(0.55078125, 0.55078125, 0.55078125, 1, 0, 0, 0, 0)];
	this.instance_74.cache(0,-2,19,19);

	this.instance_75 = new lib.Symbol78("synched",0);
	this.instance_75.setTransform(388.1,55.9);
	this.instance_75.filters = [new cjs.ColorFilter(0.55078125, 0.55078125, 0.55078125, 1, 0, 0, 0, 0)];
	this.instance_75.cache(0,-1,19,19);

	this.instance_76 = new lib.Symbol81("synched",0);
	this.instance_76.setTransform(260.3,56.4);
	this.instance_76.filters = [new cjs.ColorFilter(0.55859375, 0.55859375, 0.55859375, 1, 0, 0, 0, 0)];
	this.instance_76.cache(0,-2,19,19);

	this.instance_77 = new lib.Symbol80("synched",0);
	this.instance_77.setTransform(388.1,55.9);
	this.instance_77.filters = [new cjs.ColorFilter(0.55859375, 0.55859375, 0.55859375, 1, 0, 0, 0, 0)];
	this.instance_77.cache(0,-1,19,19);

	this.instance_78 = new lib.Symbol83("synched",0);
	this.instance_78.setTransform(260.3,56.4);
	this.instance_78.filters = [new cjs.ColorFilter(0.578125, 0.578125, 0.578125, 1, 0, 0, 0, 0)];
	this.instance_78.cache(0,-2,19,19);

	this.instance_79 = new lib.Symbol82("synched",0);
	this.instance_79.setTransform(388.1,55.9);
	this.instance_79.filters = [new cjs.ColorFilter(0.578125, 0.578125, 0.578125, 1, 0, 0, 0, 0)];
	this.instance_79.cache(0,-1,19,19);

	this.instance_80 = new lib.Symbol85("synched",0);
	this.instance_80.setTransform(260.3,56.4);
	this.instance_80.filters = [new cjs.ColorFilter(0.58984375, 0.58984375, 0.58984375, 1, 0, 0, 0, 0)];
	this.instance_80.cache(0,-2,19,19);

	this.instance_81 = new lib.Symbol84("synched",0);
	this.instance_81.setTransform(388.1,55.9);
	this.instance_81.filters = [new cjs.ColorFilter(0.58984375, 0.58984375, 0.58984375, 1, 0, 0, 0, 0)];
	this.instance_81.cache(0,-1,19,19);

	this.instance_82 = new lib.Symbol87("synched",0);
	this.instance_82.setTransform(260.3,56.4);
	this.instance_82.filters = [new cjs.ColorFilter(0.609375, 0.609375, 0.609375, 1, 0, 0, 0, 0)];
	this.instance_82.cache(0,-2,19,19);

	this.instance_83 = new lib.Symbol86("synched",0);
	this.instance_83.setTransform(388.1,55.9);
	this.instance_83.filters = [new cjs.ColorFilter(0.609375, 0.609375, 0.609375, 1, 0, 0, 0, 0)];
	this.instance_83.cache(0,-1,19,19);

	this.instance_84 = new lib.Symbol89("synched",0);
	this.instance_84.setTransform(260.3,56.4);
	this.instance_84.filters = [new cjs.ColorFilter(0.62890625, 0.62890625, 0.62890625, 1, 0, 0, 0, 0)];
	this.instance_84.cache(0,-2,19,19);

	this.instance_85 = new lib.Symbol88("synched",0);
	this.instance_85.setTransform(388.1,55.9);
	this.instance_85.filters = [new cjs.ColorFilter(0.62890625, 0.62890625, 0.62890625, 1, 0, 0, 0, 0)];
	this.instance_85.cache(0,-1,19,19);

	this.instance_86 = new lib.Symbol91("synched",0);
	this.instance_86.setTransform(260.3,56.4);
	this.instance_86.filters = [new cjs.ColorFilter(0.640625, 0.640625, 0.640625, 1, 0, 0, 0, 0)];
	this.instance_86.cache(0,-2,19,19);

	this.instance_87 = new lib.Symbol90("synched",0);
	this.instance_87.setTransform(388.1,55.9);
	this.instance_87.filters = [new cjs.ColorFilter(0.640625, 0.640625, 0.640625, 1, 0, 0, 0, 0)];
	this.instance_87.cache(0,-1,19,19);

	this.instance_88 = new lib.Symbol93("synched",0);
	this.instance_88.setTransform(260.3,56.4);
	this.instance_88.filters = [new cjs.ColorFilter(0.66015625, 0.66015625, 0.66015625, 1, 0, 0, 0, 0)];
	this.instance_88.cache(0,-2,19,19);

	this.instance_89 = new lib.Symbol92("synched",0);
	this.instance_89.setTransform(388.1,55.9);
	this.instance_89.filters = [new cjs.ColorFilter(0.66015625, 0.66015625, 0.66015625, 1, 0, 0, 0, 0)];
	this.instance_89.cache(0,-1,19,19);

	this.instance_90 = new lib.Symbol95("synched",0);
	this.instance_90.setTransform(260.3,56.4);
	this.instance_90.filters = [new cjs.ColorFilter(0.671875, 0.671875, 0.671875, 1, 0, 0, 0, 0)];
	this.instance_90.cache(0,-2,19,19);

	this.instance_91 = new lib.Symbol94("synched",0);
	this.instance_91.setTransform(388.1,55.9);
	this.instance_91.filters = [new cjs.ColorFilter(0.671875, 0.671875, 0.671875, 1, 0, 0, 0, 0)];
	this.instance_91.cache(0,-1,19,19);

	this.instance_92 = new lib.Symbol97("synched",0);
	this.instance_92.setTransform(260.3,56.4);
	this.instance_92.filters = [new cjs.ColorFilter(0.69140625, 0.69140625, 0.69140625, 1, 0, 0, 0, 0)];
	this.instance_92.cache(0,-2,19,19);

	this.instance_93 = new lib.Symbol96("synched",0);
	this.instance_93.setTransform(388.1,55.9);
	this.instance_93.filters = [new cjs.ColorFilter(0.69140625, 0.69140625, 0.69140625, 1, 0, 0, 0, 0)];
	this.instance_93.cache(0,-1,19,19);

	this.instance_94 = new lib.Symbol99("synched",0);
	this.instance_94.setTransform(260.3,56.4);
	this.instance_94.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 0, 0, 0, 0)];
	this.instance_94.cache(0,-2,19,19);

	this.instance_95 = new lib.Symbol98("synched",0);
	this.instance_95.setTransform(388.1,55.9);
	this.instance_95.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 0, 0, 0, 0)];
	this.instance_95.cache(0,-1,19,19);

	this.instance_96 = new lib.Symbol101("synched",0);
	this.instance_96.setTransform(260.3,56.4);
	this.instance_96.filters = [new cjs.ColorFilter(0.71875, 0.71875, 0.71875, 1, 0, 0, 0, 0)];
	this.instance_96.cache(0,-2,19,19);

	this.instance_97 = new lib.Symbol100("synched",0);
	this.instance_97.setTransform(388.1,55.9);
	this.instance_97.filters = [new cjs.ColorFilter(0.71875, 0.71875, 0.71875, 1, 0, 0, 0, 0)];
	this.instance_97.cache(0,-1,19,19);

	this.instance_98 = new lib.Symbol103("synched",0);
	this.instance_98.setTransform(260.3,56.4);
	this.instance_98.filters = [new cjs.ColorFilter(0.73046875, 0.73046875, 0.73046875, 1, 0, 0, 0, 0)];
	this.instance_98.cache(0,-2,19,19);

	this.instance_99 = new lib.Symbol102("synched",0);
	this.instance_99.setTransform(388.1,55.9);
	this.instance_99.filters = [new cjs.ColorFilter(0.73046875, 0.73046875, 0.73046875, 1, 0, 0, 0, 0)];
	this.instance_99.cache(0,-1,19,19);

	this.instance_100 = new lib.Symbol105("synched",0);
	this.instance_100.setTransform(260.3,56.4);
	this.instance_100.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance_100.cache(0,-2,19,19);

	this.instance_101 = new lib.Symbol104("synched",0);
	this.instance_101.setTransform(388.1,55.9);
	this.instance_101.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance_101.cache(0,-1,19,19);

	this.instance_102 = new lib.Symbol107("synched",0);
	this.instance_102.setTransform(260.3,56.4);
	this.instance_102.filters = [new cjs.ColorFilter(0.76953125, 0.76953125, 0.76953125, 1, 0, 0, 0, 0)];
	this.instance_102.cache(0,-2,19,19);

	this.instance_103 = new lib.Symbol106("synched",0);
	this.instance_103.setTransform(388.1,55.9);
	this.instance_103.filters = [new cjs.ColorFilter(0.76953125, 0.76953125, 0.76953125, 1, 0, 0, 0, 0)];
	this.instance_103.cache(0,-1,19,19);

	this.instance_104 = new lib.Symbol109("synched",0);
	this.instance_104.setTransform(260.3,56.4);
	this.instance_104.filters = [new cjs.ColorFilter(0.78125, 0.78125, 0.78125, 1, 0, 0, 0, 0)];
	this.instance_104.cache(0,-2,19,19);

	this.instance_105 = new lib.Symbol108("synched",0);
	this.instance_105.setTransform(388.1,55.9);
	this.instance_105.filters = [new cjs.ColorFilter(0.78125, 0.78125, 0.78125, 1, 0, 0, 0, 0)];
	this.instance_105.cache(0,-1,19,19);

	this.instance_106 = new lib.Symbol111("synched",0);
	this.instance_106.setTransform(260.3,56.4);
	this.instance_106.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_106.cache(0,-2,19,19);

	this.instance_107 = new lib.Symbol110("synched",0);
	this.instance_107.setTransform(388.1,55.9);
	this.instance_107.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_107.cache(0,-1,19,19);

	this.instance_108 = new lib.Symbol113("synched",0);
	this.instance_108.setTransform(260.3,56.4);
	this.instance_108.filters = [new cjs.ColorFilter(0.80859375, 0.80859375, 0.80859375, 1, 0, 0, 0, 0)];
	this.instance_108.cache(0,-2,19,19);

	this.instance_109 = new lib.Symbol112("synched",0);
	this.instance_109.setTransform(388.1,55.9);
	this.instance_109.filters = [new cjs.ColorFilter(0.80859375, 0.80859375, 0.80859375, 1, 0, 0, 0, 0)];
	this.instance_109.cache(0,-1,19,19);

	this.instance_110 = new lib.Symbol115("synched",0);
	this.instance_110.setTransform(260.3,56.4);
	this.instance_110.filters = [new cjs.ColorFilter(0.828125, 0.828125, 0.828125, 1, 0, 0, 0, 0)];
	this.instance_110.cache(0,-2,19,19);

	this.instance_111 = new lib.Symbol114("synched",0);
	this.instance_111.setTransform(388.1,55.9);
	this.instance_111.filters = [new cjs.ColorFilter(0.828125, 0.828125, 0.828125, 1, 0, 0, 0, 0)];
	this.instance_111.cache(0,-1,19,19);

	this.instance_112 = new lib.Symbol117("synched",0);
	this.instance_112.setTransform(260.3,56.4);
	this.instance_112.filters = [new cjs.ColorFilter(0.83984375, 0.83984375, 0.83984375, 1, 0, 0, 0, 0)];
	this.instance_112.cache(0,-2,19,19);

	this.instance_113 = new lib.Symbol116("synched",0);
	this.instance_113.setTransform(388.1,55.9);
	this.instance_113.filters = [new cjs.ColorFilter(0.83984375, 0.83984375, 0.83984375, 1, 0, 0, 0, 0)];
	this.instance_113.cache(0,-1,19,19);

	this.instance_114 = new lib.Symbol119("synched",0);
	this.instance_114.setTransform(260.3,56.4);
	this.instance_114.filters = [new cjs.ColorFilter(0.859375, 0.859375, 0.859375, 1, 0, 0, 0, 0)];
	this.instance_114.cache(0,-2,19,19);

	this.instance_115 = new lib.Symbol118("synched",0);
	this.instance_115.setTransform(388.1,55.9);
	this.instance_115.filters = [new cjs.ColorFilter(0.859375, 0.859375, 0.859375, 1, 0, 0, 0, 0)];
	this.instance_115.cache(0,-1,19,19);

	this.instance_116 = new lib.Symbol121("synched",0);
	this.instance_116.setTransform(260.3,56.4);
	this.instance_116.filters = [new cjs.ColorFilter(0.87890625, 0.87890625, 0.87890625, 1, 0, 0, 0, 0)];
	this.instance_116.cache(0,-2,19,19);

	this.instance_117 = new lib.Symbol120("synched",0);
	this.instance_117.setTransform(388.1,55.9);
	this.instance_117.filters = [new cjs.ColorFilter(0.87890625, 0.87890625, 0.87890625, 1, 0, 0, 0, 0)];
	this.instance_117.cache(0,-1,19,19);

	this.instance_118 = new lib.Symbol123("synched",0);
	this.instance_118.setTransform(260.3,56.4);
	this.instance_118.filters = [new cjs.ColorFilter(0.890625, 0.890625, 0.890625, 1, 0, 0, 0, 0)];
	this.instance_118.cache(0,-2,19,19);

	this.instance_119 = new lib.Symbol122("synched",0);
	this.instance_119.setTransform(388.1,55.9);
	this.instance_119.filters = [new cjs.ColorFilter(0.890625, 0.890625, 0.890625, 1, 0, 0, 0, 0)];
	this.instance_119.cache(0,-1,19,19);

	this.instance_120 = new lib.Symbol125("synched",0);
	this.instance_120.setTransform(260.3,56.4);
	this.instance_120.filters = [new cjs.ColorFilter(0.91015625, 0.91015625, 0.91015625, 1, 0, 0, 0, 0)];
	this.instance_120.cache(0,-2,19,19);

	this.instance_121 = new lib.Symbol124("synched",0);
	this.instance_121.setTransform(388.1,55.9);
	this.instance_121.filters = [new cjs.ColorFilter(0.91015625, 0.91015625, 0.91015625, 1, 0, 0, 0, 0)];
	this.instance_121.cache(0,-1,19,19);

	this.instance_122 = new lib.Symbol127("synched",0);
	this.instance_122.setTransform(260.3,56.4);
	this.instance_122.filters = [new cjs.ColorFilter(0.921875, 0.921875, 0.921875, 1, 0, 0, 0, 0)];
	this.instance_122.cache(0,-2,19,19);

	this.instance_123 = new lib.Symbol126("synched",0);
	this.instance_123.setTransform(388.1,55.9);
	this.instance_123.filters = [new cjs.ColorFilter(0.921875, 0.921875, 0.921875, 1, 0, 0, 0, 0)];
	this.instance_123.cache(0,-1,19,19);

	this.instance_124 = new lib.Symbol129("synched",0);
	this.instance_124.setTransform(260.3,56.4);
	this.instance_124.filters = [new cjs.ColorFilter(0.94140625, 0.94140625, 0.94140625, 1, 0, 0, 0, 0)];
	this.instance_124.cache(0,-2,19,19);

	this.instance_125 = new lib.Symbol128("synched",0);
	this.instance_125.setTransform(388.1,55.9);
	this.instance_125.filters = [new cjs.ColorFilter(0.94140625, 0.94140625, 0.94140625, 1, 0, 0, 0, 0)];
	this.instance_125.cache(0,-1,19,19);

	this.instance_126 = new lib.Symbol131("synched",0);
	this.instance_126.setTransform(260.3,56.4);
	this.instance_126.filters = [new cjs.ColorFilter(0.94921875, 0.94921875, 0.94921875, 1, 0, 0, 0, 0)];
	this.instance_126.cache(0,-2,19,19);

	this.instance_127 = new lib.Symbol130("synched",0);
	this.instance_127.setTransform(388.1,55.9);
	this.instance_127.filters = [new cjs.ColorFilter(0.94921875, 0.94921875, 0.94921875, 1, 0, 0, 0, 0)];
	this.instance_127.cache(0,-1,19,19);

	this.instance_128 = new lib.Symbol133("synched",0);
	this.instance_128.setTransform(260.3,56.4);
	this.instance_128.filters = [new cjs.ColorFilter(0.96875, 0.96875, 0.96875, 1, 0, 0, 0, 0)];
	this.instance_128.cache(0,-2,19,19);

	this.instance_129 = new lib.Symbol132("synched",0);
	this.instance_129.setTransform(388.1,55.9);
	this.instance_129.filters = [new cjs.ColorFilter(0.96875, 0.96875, 0.96875, 1, 0, 0, 0, 0)];
	this.instance_129.cache(0,-1,19,19);

	this.instance_130 = new lib.Symbol135("synched",0);
	this.instance_130.setTransform(260.3,56.4);
	this.instance_130.filters = [new cjs.ColorFilter(0.98046875, 0.98046875, 0.98046875, 1, 0, 0, 0, 0)];
	this.instance_130.cache(0,-2,19,19);

	this.instance_131 = new lib.Symbol134("synched",0);
	this.instance_131.setTransform(388.1,55.9);
	this.instance_131.filters = [new cjs.ColorFilter(0.98046875, 0.98046875, 0.98046875, 1, 0, 0, 0, 0)];
	this.instance_131.cache(0,-1,19,19);

	this.instance_132 = new lib.Symbol137("synched",0);
	this.instance_132.setTransform(260.3,56.4);

	this.instance_133 = new lib.Symbol136("synched",0);
	this.instance_133.setTransform(388.1,55.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{scaleX:4.55,scaleY:4.55,x:240.9,y:-34,alpha:0}}]}).to({state:[{t:this.instance_4},{t:this.instance_6},{t:this.instance_5},{t:this.instance_1},{t:this.instance,p:{scaleX:4.487,scaleY:4.487,x:242.1,y:-32.7,alpha:0.012}}]},1).to({state:[{t:this.instance_4},{t:this.instance_8},{t:this.instance_7},{t:this.instance_1},{t:this.instance,p:{scaleX:4.423,scaleY:4.423,x:243.5,y:-31.3,alpha:0.02}}]},1).to({state:[{t:this.instance_4},{t:this.instance_10},{t:this.instance_9},{t:this.instance_1},{t:this.instance,p:{scaleX:4.36,scaleY:4.36,x:244.8,y:-30.1,alpha:0.02}}]},1).to({state:[{t:this.instance_4},{t:this.instance_12},{t:this.instance_11},{t:this.instance_1},{t:this.instance,p:{scaleX:4.297,scaleY:4.297,x:246.2,y:-28.7,alpha:0.031}}]},1).to({state:[{t:this.instance_4},{t:this.instance_14},{t:this.instance_13},{t:this.instance_1},{t:this.instance,p:{scaleX:4.233,scaleY:4.233,x:247.5,y:-27.4,alpha:0.039}}]},1).to({state:[{t:this.instance_4},{t:this.instance_16},{t:this.instance_15},{t:this.instance_1},{t:this.instance,p:{scaleX:4.17,scaleY:4.17,x:248.9,y:-26.1,alpha:0.051}}]},1).to({state:[{t:this.instance_4},{t:this.instance_18},{t:this.instance_17},{t:this.instance_1},{t:this.instance,p:{scaleX:4.106,scaleY:4.106,x:250.2,y:-24.8,alpha:0.059}}]},1).to({state:[{t:this.instance_4},{t:this.instance_20},{t:this.instance_19},{t:this.instance_1},{t:this.instance,p:{scaleX:4.043,scaleY:4.043,x:251.5,y:-23.5,alpha:0.07}}]},1).to({state:[{t:this.instance_4},{t:this.instance_22},{t:this.instance_21},{t:this.instance_1},{t:this.instance,p:{scaleX:3.98,scaleY:3.98,x:252.8,y:-22.2,alpha:0.07}}]},1).to({state:[{t:this.instance_4},{t:this.instance_25},{t:this.instance_24},{t:this.instance_1},{t:this.instance_23,p:{alpha:0}},{t:this.instance,p:{scaleX:3.916,scaleY:3.916,x:254.1,y:-20.9,alpha:0.078}}]},1).to({state:[{t:this.instance_4},{t:this.instance_27},{t:this.instance_26},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.02}},{t:this.instance,p:{scaleX:3.853,scaleY:3.853,x:255.5,y:-19.6,alpha:0.09}}]},1).to({state:[{t:this.instance_4},{t:this.instance_29},{t:this.instance_28},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.039}},{t:this.instance,p:{scaleX:3.789,scaleY:3.789,x:256.8,y:-18.3,alpha:0.102}}]},1).to({state:[{t:this.instance_4},{t:this.instance_31},{t:this.instance_30},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.051}},{t:this.instance,p:{scaleX:3.726,scaleY:3.726,x:258.2,y:-17,alpha:0.109}}]},1).to({state:[{t:this.instance_4},{t:this.instance_33},{t:this.instance_32},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.07}},{t:this.instance,p:{scaleX:3.663,scaleY:3.663,x:259.5,y:-15.6,alpha:0.121}}]},1).to({state:[{t:this.instance_4},{t:this.instance_35},{t:this.instance_34},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.09}},{t:this.instance,p:{scaleX:3.599,scaleY:3.599,x:260.8,y:-14.4,alpha:0.129}}]},1).to({state:[{t:this.instance_4},{t:this.instance_37},{t:this.instance_36},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.109}},{t:this.instance,p:{scaleX:3.536,scaleY:3.536,x:262.2,y:-13,alpha:0.129}}]},1).to({state:[{t:this.instance_4},{t:this.instance_39},{t:this.instance_38},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.129}},{t:this.instance,p:{scaleX:3.473,scaleY:3.473,x:263.5,y:-11.8,alpha:0.141}}]},1).to({state:[{t:this.instance_4},{t:this.instance_41},{t:this.instance_40},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.148}},{t:this.instance,p:{scaleX:3.409,scaleY:3.409,x:264.9,y:-10.5,alpha:0.148}}]},1).to({state:[{t:this.instance_4},{t:this.instance_43},{t:this.instance_42},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.172}},{t:this.instance,p:{scaleX:3.346,scaleY:3.346,x:266.2,y:-9.2,alpha:0.172}}]},1).to({state:[{t:this.instance_4},{t:this.instance_45},{t:this.instance_44},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.199}},{t:this.instance,p:{scaleX:3.282,scaleY:3.282,x:267.5,y:-7.9,alpha:0.191}}]},1).to({state:[{t:this.instance_4},{t:this.instance_47},{t:this.instance_46},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.219}},{t:this.instance,p:{scaleX:3.219,scaleY:3.219,x:268.9,y:-6.6,alpha:0.211}}]},1).to({state:[{t:this.instance_4},{t:this.instance_49},{t:this.instance_48},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.238}},{t:this.instance,p:{scaleX:3.156,scaleY:3.156,x:270.2,y:-5.3,alpha:0.238}}]},1).to({state:[{t:this.instance_4},{t:this.instance_51},{t:this.instance_50},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.262}},{t:this.instance,p:{scaleX:3.092,scaleY:3.092,x:271.6,y:-4,alpha:0.262}}]},1).to({state:[{t:this.instance_4},{t:this.instance_53},{t:this.instance_52},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.289}},{t:this.instance,p:{scaleX:3.029,scaleY:3.029,x:272.9,y:-2.7,alpha:0.281}}]},1).to({state:[{t:this.instance_4},{t:this.instance_55},{t:this.instance_54},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.309}},{t:this.instance,p:{scaleX:2.965,scaleY:2.965,x:274.2,y:-1.4,alpha:0.301}}]},1).to({state:[{t:this.instance_4},{t:this.instance_57},{t:this.instance_56},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.328}},{t:this.instance,p:{scaleX:2.902,scaleY:2.902,x:275.6,y:-0.1,alpha:0.328}}]},1).to({state:[{t:this.instance_4},{t:this.instance_59},{t:this.instance_58},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.352}},{t:this.instance,p:{scaleX:2.839,scaleY:2.839,x:276.9,y:1.2,alpha:0.352}}]},1).to({state:[{t:this.instance_4},{t:this.instance_61},{t:this.instance_60},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.379}},{t:this.instance,p:{scaleX:2.775,scaleY:2.775,x:278.2,y:2.4,alpha:0.371}}]},1).to({state:[{t:this.instance_4},{t:this.instance_63},{t:this.instance_62},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.398}},{t:this.instance,p:{scaleX:2.712,scaleY:2.712,x:279.6,y:3.7,alpha:0.391}}]},1).to({state:[{t:this.instance_4},{t:this.instance_65},{t:this.instance_64},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.422}},{t:this.instance,p:{scaleX:2.648,scaleY:2.648,x:280.9,y:5,alpha:0.422}}]},1).to({state:[{t:this.instance_4},{t:this.instance_67},{t:this.instance_66},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.441}},{t:this.instance,p:{scaleX:2.585,scaleY:2.585,x:282.2,y:6.3,alpha:0.441}}]},1).to({state:[{t:this.instance_4},{t:this.instance_69},{t:this.instance_68},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.461}},{t:this.instance,p:{scaleX:2.522,scaleY:2.522,x:283.6,y:7.7,alpha:0.461}}]},1).to({state:[{t:this.instance_4},{t:this.instance_71},{t:this.instance_70},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.48}},{t:this.instance,p:{scaleX:2.458,scaleY:2.458,x:285,y:9,alpha:0.48}}]},1).to({state:[{t:this.instance_4},{t:this.instance_73},{t:this.instance_72},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.512}},{t:this.instance,p:{scaleX:2.395,scaleY:2.395,x:286.3,y:10.3,alpha:0.512}}]},1).to({state:[{t:this.instance_4},{t:this.instance_75},{t:this.instance_74},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.531}},{t:this.instance,p:{scaleX:2.331,scaleY:2.331,x:287.6,y:11.6,alpha:0.531}}]},1).to({state:[{t:this.instance_4},{t:this.instance_77},{t:this.instance_76},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.551}},{t:this.instance,p:{scaleX:2.268,scaleY:2.268,x:288.9,y:12.9,alpha:0.551}}]},1).to({state:[{t:this.instance_4},{t:this.instance_79},{t:this.instance_78},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.57}},{t:this.instance,p:{scaleX:2.205,scaleY:2.205,x:290.3,y:14.2,alpha:0.57}}]},1).to({state:[{t:this.instance_4},{t:this.instance_81},{t:this.instance_80},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.602}},{t:this.instance,p:{scaleX:2.141,scaleY:2.141,x:291.7,y:15.4,alpha:0.602}}]},1).to({state:[{t:this.instance_4},{t:this.instance_83},{t:this.instance_82},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.621}},{t:this.instance,p:{scaleX:2.078,scaleY:2.078,x:293,y:16.7,alpha:0.621}}]},1).to({state:[{t:this.instance_4},{t:this.instance_85},{t:this.instance_84},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.641}},{t:this.instance,p:{scaleX:2.014,scaleY:2.014,x:294.4,y:18,alpha:0.641}}]},1).to({state:[{t:this.instance_4},{t:this.instance_87},{t:this.instance_86},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.66}},{t:this.instance,p:{scaleX:1.951,scaleY:1.951,x:295.7,y:19.3,alpha:0.66}}]},1).to({state:[{t:this.instance_4},{t:this.instance_89},{t:this.instance_88},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.691}},{t:this.instance,p:{scaleX:1.888,scaleY:1.888,x:297,y:20.6,alpha:0.691}}]},1).to({state:[{t:this.instance_4},{t:this.instance_91},{t:this.instance_90},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.711}},{t:this.instance,p:{scaleX:1.824,scaleY:1.824,x:298.3,y:21.9,alpha:0.711}}]},1).to({state:[{t:this.instance_4},{t:this.instance_93},{t:this.instance_92},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.73}},{t:this.instance,p:{scaleX:1.761,scaleY:1.761,x:299.7,y:23.2,alpha:0.73}}]},1).to({state:[{t:this.instance_4},{t:this.instance_95},{t:this.instance_94},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.75}},{t:this.instance,p:{scaleX:1.697,scaleY:1.697,x:301,y:24.5,alpha:0.75}}]},1).to({state:[{t:this.instance_4},{t:this.instance_97},{t:this.instance_96},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.781}},{t:this.instance,p:{scaleX:1.634,scaleY:1.634,x:302.4,y:25.8,alpha:0.781}}]},1).to({state:[{t:this.instance_4},{t:this.instance_99},{t:this.instance_98},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.801}},{t:this.instance,p:{scaleX:1.571,scaleY:1.571,x:303.7,y:27.1,alpha:0.801}}]},1).to({state:[{t:this.instance_4},{t:this.instance_101},{t:this.instance_100},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.82}},{t:this.instance,p:{scaleX:1.507,scaleY:1.507,x:305.1,y:28.4,alpha:0.82}}]},1).to({state:[{t:this.instance_4},{t:this.instance_103},{t:this.instance_102},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.84}},{t:this.instance,p:{scaleX:1.444,scaleY:1.444,x:306.4,y:29.7,alpha:0.84}}]},1).to({state:[{t:this.instance_4},{t:this.instance_105},{t:this.instance_104},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.871}},{t:this.instance,p:{scaleX:1.38,scaleY:1.38,x:307.7,y:31,alpha:0.871}}]},1).to({state:[{t:this.instance_4},{t:this.instance_107},{t:this.instance_106},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.891}},{t:this.instance,p:{scaleX:1.317,scaleY:1.317,x:309.1,y:32.3,alpha:0.891}}]},1).to({state:[{t:this.instance_4},{t:this.instance_109},{t:this.instance_108},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.91}},{t:this.instance,p:{scaleX:1.254,scaleY:1.254,x:310.4,y:33.6,alpha:0.91}}]},1).to({state:[{t:this.instance_4},{t:this.instance_111},{t:this.instance_110},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.93}},{t:this.instance,p:{scaleX:1.19,scaleY:1.19,x:311.7,y:34.9,alpha:0.93}}]},1).to({state:[{t:this.instance_4},{t:this.instance_113},{t:this.instance_112},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.961}},{t:this.instance,p:{scaleX:1.127,scaleY:1.127,x:313.1,y:36.2,alpha:0.961}}]},1).to({state:[{t:this.instance_4},{t:this.instance_115},{t:this.instance_114},{t:this.instance_1},{t:this.instance_23,p:{alpha:0.98}},{t:this.instance,p:{scaleX:1.063,scaleY:1.063,x:314.4,y:37.5,alpha:0.98}}]},1).to({state:[{t:this.instance_4},{t:this.instance_117},{t:this.instance_116},{t:this.instance_1},{t:this.instance_23,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:315.8,y:38.8,alpha:1}}]},1).to({state:[{t:this.instance_4},{t:this.instance_119},{t:this.instance_118},{t:this.instance_1},{t:this.instance_23,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:315.8,y:38.8,alpha:1}}]},1).to({state:[{t:this.instance_4},{t:this.instance_121},{t:this.instance_120},{t:this.instance_1},{t:this.instance_23,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:315.8,y:38.8,alpha:1}}]},1).to({state:[{t:this.instance_4},{t:this.instance_123},{t:this.instance_122},{t:this.instance_1},{t:this.instance_23,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:315.8,y:38.8,alpha:1}}]},1).to({state:[{t:this.instance_4},{t:this.instance_125},{t:this.instance_124},{t:this.instance_1},{t:this.instance_23,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:315.8,y:38.8,alpha:1}}]},1).to({state:[{t:this.instance_4},{t:this.instance_127},{t:this.instance_126},{t:this.instance_1},{t:this.instance_23,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:315.8,y:38.8,alpha:1}}]},1).to({state:[{t:this.instance_4},{t:this.instance_129},{t:this.instance_128},{t:this.instance_1},{t:this.instance_23,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:315.8,y:38.8,alpha:1}}]},1).to({state:[{t:this.instance_4},{t:this.instance_131},{t:this.instance_130},{t:this.instance_1},{t:this.instance_23,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:315.8,y:38.8,alpha:1}}]},1).to({state:[{t:this.instance_4},{t:this.instance_133},{t:this.instance_132},{t:this.instance_1},{t:this.instance_23,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:315.8,y:38.8,alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321.8,24.8,705.3,189.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;