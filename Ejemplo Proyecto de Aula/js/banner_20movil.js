(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 442,
	height: 100,
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



(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF8402").ss(0.5).p("AAAg1IAABr");
	this.shape.setTransform(14.5,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF8402").ss(0.5).p("AABg9IgBB7");
	this.shape_1.setTransform(13.9,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF8402").ss(0.5).p("AADhBIgFCD");
	this.shape_2.setTransform(13.1,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF8402").ss(0.5).p("AAGhDIgLCH");
	this.shape_3.setTransform(12.4,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF8402").ss(0.5).p("AAAg5IABB0");
	this.shape_4.setTransform(15.2,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF8402").ss(0.5).p("AgDgxIAHBj");
	this.shape_5.setTransform(16,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF8402").ss(0.5).p("AgHg5IAOBz");
	this.shape_6.setTransform(16.9,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF8402").ss(0.5).p("AgLg+IAXB9");
	this.shape_7.setTransform(17.9,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF8402").ss(0.5).p("AgMg3IAZBv");
	this.shape_8.setTransform(18.5,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF8402").ss(0.5).p("AgLgsIAXBZ");
	this.shape_9.setTransform(18.9,15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF8402").ss(0.5).p("AAHg0IgNBo");
	this.shape_10.setTransform(12,15.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF8402").ss(0.5).p("AANg6IgZB0");
	this.shape_11.setTransform(11.4,16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF8402").ss(0.5).p("AANgwIgZBh");
	this.shape_12.setTransform(11,15.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF8402").ss(0.5).p("AhXBfIA5i5IA8AAIA6C5");
	this.shape_13.setTransform(15.1,19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF8402").ss(0.5).p("AhTgHIANALQAAgEAVgEIAygEIAvADQAVAEAEADIABADIAAgBIABAAIAJgLIACgDQAAgGgZgEIg9gEIg8AEQgZAEAAAGg");
	this.shape_14.setTransform(15,8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF8402").ss(0.5).p("AAAgHIggACQgOADAAACQAAADAOADIAgACIAhgCQANgDAAgDQAAgCgNgDg");
	this.shape_15.setTransform(15.1,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF8402").ss(0.5).p("AgxgJQgVAEgBAFQAAAGAVAEIAyAEIAzgEQAVgEAAgGIAAAAIgBgBQgEgFgUgEIgvgDgAAAgFIAhACQANADAAABQAAAEgNADIghACIgggCQgOgDAAgEQAAgBAOgDg");
	this.shape_16.setTransform(15.1,9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF8402").ss(0.5).p("AhUANQAAgGAZgEIA7gDIA9ADQAZAEAAAGIgKAQQAhgEAUgIQAUgHAAgJQAAgIgYgIQgXgHgmgEIhAgDIhAADQgmAEgWAIQgYAIAAAHQAAAJAWAHQAVAIAjAEIgMgNg");
	this.shape_17.setTransform(14.9,6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF8402").ss(0.5).p("AhVgHQABgHAVgEIAzgEIAtAEQAUADAFAFQgEgFgVgEIgtgDIg0AEQgVAEAAAGg");
	this.shape_18.setTransform(16.5,9.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF8402").ss(0.5).p("ABAAQQgHgPgRgHQgSgJgWAAQgVAAgSAJQgSAHgHAPIBAgDg");
	this.shape_19.setTransform(14.7,1.6,1,1,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,31.9,31);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF5E1").s().p("AgNA7IgBAAIgBgBIAAhzIABgBIABAAIANAAIAGABIAGACIADAFIABAGIAAAsQAAAGgEAFQgFADgHAAIgEAAIAAApIAAADIgFABgAgEAFIAEAAIADgBIABgEIAAgsIgBgEQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgEAAg");
	this.shape.setTransform(326.3,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF5E1").s().p("AgFA8QgDgBgCgCIgEgFIgBgGIAAhbQAAgHAFgEQAFgEAFAAIAHABIAEADIAEAFIABAGIAABbQAAAHgEAEQgFAEgHAAgAgCgxQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIAABbQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIAEgBIABgEIAAhbIgBgEQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_1.setTransform(318.7,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF5E1").s().p("AAKA7IgEgBIgCgDIAAg0IgHAAIAAA0IgCADIgDABIgFAAIgBAAIgBgBIAAhzIABgBIABAAIAFAAIADABIACACIAAAzIAHAAIAAgzIACgCIAEgBIAEAAIACAAIAAB1IgCAAg");
	this.shape_2.setTransform(311.1,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF5E1").s().p("AgLA5QgEgDAAgIIAAgbIABgBIAGAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABIABADIAAAXIABAEIADABIADgBIABgEIgCgTIgCgPIgJgXIgFgQQgBgHAAgLIABgGIADgFIAGgDIAFgBQAGAAAFAEQAFAEAAAHIAAAaIAAABIgCABIgEAAIgFgCIgBgDIAAgXIgBgEIgDgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgBAEIABAOIADALIAMAmIADANIABAPIgCAGIgDAFIgFADIgGABQgGAAgFgEg");
	this.shape_3.setTransform(303.6,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF5E1").s().p("AgBA7IgCgBIgBgBIAAhqIgGAAIgDgBIgBgEIAAgDIABgBIABAAIAZAAIACAAIAAABIAAADIgBAEIgEABIgFAAIAABqIgBABIgCABg");
	this.shape_4.setTransform(290,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF5E1").s().p("AgKA7IgCAAIAAh1IACAAIAVAAIABAAIABABIAAADIgCAEIgDABIgIAAIAAAvIAKAAIABABIAAABIgBAEIgEABIgGAAIAAAyIgCADIgDABg");
	this.shape_5.setTransform(283.3,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF5E1").s().p("AgBA7IgDgBIAAgBIAAhwIABgCIADgBIADAAIACAAIAAABIAAByIgBABIgCABg");
	this.shape_6.setTransform(277.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF5E1").s().p("AAKA7IgFgBIgBgDIAAgoIgBgEQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAIgEAAIAAAtIgBADIgDABIgFAAIgBAAIgBgBIAAhzIABgBIABAAIANAAIAGABIAFACIADAFIACAGIAAApIgCAEIgEAEIAEADIACAHIAAArIgBABIgBAAgAgEAAIAEAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIABgDIAAgpIgBgEQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgEAAg");
	this.shape_7.setTransform(270.6,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF5E1").s().p("AAJA7IgDgBIgBgDIAAg0IgIAAIAAA0IgCADIgEABIgEAAIgCAAIAAgBIAAhzIAAgBIACAAIAEAAIAEABIACACIAAAzIAIAAIAAgzIABgCIADgBIAFAAIACAAIAAABIAABzIAAABIgCAAg");
	this.shape_8.setTransform(263,9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF5E1").s().p("AgCA7IgCgBIgBgBIAAhqIgFAAIgDgBIgBgEIAAgDIAAgBIACAAIAZAAIABAAIABABIAAADIgCAEQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgGAAIAABqIgBABIgCABg");
	this.shape_9.setTransform(255.8,9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF5E1").s().p("AgQBaIgCgBIgBgCIAAitIABgCIACgBIAgAAIACABIACACIAAAEIgDAGIgEACIgOAAIAABFIAPAAIACABIAAACIAAACIgBAGIgFACIgLAAIAABDIAOAAIAEACIADAGIAAAEIgCACIgCABg");
	this.shape_10.setTransform(66.5,9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF5E1").s().p("AgQBaIgCgBIAAgCIAAitIAAgCIACgBIAhAAIACABIAAACIAAAEIgBAGIgFACIgOAAIAABFIAPAAIACABIABACIAAACIgCAGIgFACIgLAAIAABKIgCAGIgFACg");
	this.shape_11.setTransform(56.4,9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF5E1").s().p("AgCBaIgEgCIgBgDIAAinIACgFQABgCAEAAIAGAAIABABIABACIAACrIgCADIgCACg");
	this.shape_12.setTransform(47.1,9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF5E1").s().p("AgPBaIgCgBIgBgCIAAitIABgCIACgBIAHAAIAFACIACAFIAACdIAOAAIAFACIABAGIAAAEIgBACIgBABg");
	this.shape_13.setTransform(38.2,9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF5E1").s().p("AgVBaIgCgBIAAgCIAAitIAAgCIACgBIAVAAQALAAAGAGQAHAGAAAKIAACHQAAAJgGAHQgHAGgLAAgAgGBLIAGAAQADAAACgCIACgFIAAiHIgCgFIgFgCIgGAAg");
	this.shape_14.setTransform(27.3,9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF5E1").s().p("AAPBaQgDAAgCgCIgCgFIgCgYIgLAAIgBAYIgCAFIgGACIgHAAIgCgBIgBgDIAQisIABgCIABgBIANAAIACABIABACIAPCsIgBADIgDABgAgEAsIAJAAIgFheg");
	this.shape_15.setTransform(16.1,9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF5E1").s().p("AAaBaQgEAAgCgCIgCgGIAEh8IgNB9IgDAFIgGACIgFgCQgCgCAAgDIgOh9IAEB8IgCAGQgCACgEAAIgHAAIgCgBIgBgCIAAitIABgCIACgBIAJAAIAEABIADADIAEAIIADAPIAJBrIANh6IADgIIADgDIAEgBIAKAAIACABIAAACIAACtIAAACIgCABg");
	this.shape_16.setTransform(3.6,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,328,18.1);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape.setTransform(0,75.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_1.setTransform(0,78.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_2.setTransform(0,72.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_3.setTransform(0,90.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_4.setTransform(0,93.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_5.setTransform(0,82.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_6.setTransform(0,70.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_7.setTransform(0,87.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_8.setTransform(0,85.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_9.setTransform(0,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_10.setTransform(0,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_11.setTransform(0,5.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_12.setTransform(0,7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_13.setTransform(0,17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_14.setTransform(0,67.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_15.setTransform(0,20.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_16.setTransform(0,25.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_17.setTransform(0,23.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_18.setTransform(0,71.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_19.setTransform(0,68.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_20.setTransform(0,1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_21.setTransform(0,6.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_22.setTransform(0,3.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_23.setTransform(0,86.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_24.setTransform(0,9.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_25.setTransform(0,74.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_26.setTransform(0,89.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_27.setTransform(0,76.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_28.setTransform(0,84);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_29.setTransform(0,11.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_30.setTransform(0,19.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_31.setTransform(0,16.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_32.setTransform(0,21.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_33.setTransform(0,91.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_34.setTransform(0,24.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_35.setTransform(0,27);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_36.setTransform(36.8,67.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_37.setTransform(36.8,68.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAH");
	this.shape_38.setTransform(36.8,70.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_39.setTransform(36.8,71.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_40.setTransform(36.8,72.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_41.setTransform(36.8,74.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_42.setTransform(36.8,75.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_43.setTransform(36.8,76.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_44.setTransform(36.8,78.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_45.setTransform(36.8,79.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_46.setTransform(36.8,82.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_47.setTransform(36.8,84);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_48.setTransform(36.8,85.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_49.setTransform(36.8,86.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_50.setTransform(36.8,88);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_51.setTransform(36.8,89.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAH");
	this.shape_52.setTransform(36.8,90.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_53.setTransform(36.8,92);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_54.setTransform(36.8,93.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_55.setTransform(36.8,94.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF8402").ss(0.5).p("AlvgGIAZgGIBrAZIBogZIBoAZIBvgZIBlAZIBagZIBcAZ");
	this.shape_56.setTransform(36.8,1.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_57.setTransform(36.8,2.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_58.setTransform(36.8,4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_59.setTransform(36.8,5.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_60.setTransform(36.8,6.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_61.setTransform(36.8,8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_62.setTransform(36.8,9.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_63.setTransform(36.8,10.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_64.setTransform(36.8,11.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_65.setTransform(36.8,13.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_66.setTransform(36.8,16.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_67.setTransform(36.8,17.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_68.setTransform(36.8,19.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAH");
	this.shape_69.setTransform(36.8,20.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_70.setTransform(36.8,21.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_71.setTransform(36.8,23.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_72.setTransform(36.8,24.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_73.setTransform(36.8,25.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_74.setTransform(36.8,27.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FF8402").ss(0.5).p("AFvANIhcgZIhaAZIhlgZIhvAZIhogZIhoAZIhrgZIgZAG");
	this.shape_75.setTransform(36.8,28.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FF8402").ss(0.8).p("AukAAIdJAA");
	this.shape_76.setTransform(93.3,60.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FF8402").ss(0.8).p("AuXAAIcvAA");
	this.shape_77.setTransform(92,36.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_78.setTransform(442,84.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_79.setTransform(442,73.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_80.setTransform(442,6.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_81.setTransform(442,11.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_82.setTransform(442,70.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_83.setTransform(442,27);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_84.setTransform(442,75.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_85.setTransform(442,19.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_86.setTransform(442,69.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_87.setTransform(442,82.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_88.setTransform(442,71.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_89.setTransform(442,67.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_90.setTransform(442,77);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_91.setTransform(442,24.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_92.setTransform(442,78.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_93.setTransform(442,21.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_94.setTransform(442,74.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_95.setTransform(442,16.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_96.setTransform(442,20.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_97.setTransform(442,23);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_98.setTransform(442,25.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_99.setTransform(442,2.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_100.setTransform(442,10.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_101.setTransform(442,90.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_102.setTransform(442,7.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_103.setTransform(442,5.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_104.setTransform(442,17.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_105.setTransform(442,89.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_106.setTransform(442,9.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_107.setTransform(442,92.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FF8402").ss(0.5).p("AAAgFIAAAL");
	this.shape_108.setTransform(442,86.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_109.setTransform(442,3.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_110.setTransform(442,1.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_111.setTransform(442,93.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_112.setTransform(442,88.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FF8402").ss(0.5).p("AAAAGIAAgL");
	this.shape_113.setTransform(442,85.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_114.setTransform(405.2,67.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_115.setTransform(405.2,69.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_116.setTransform(405.2,70.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_117.setTransform(405.2,71.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_118.setTransform(405.2,73.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_119.setTransform(405.2,74.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_120.setTransform(405.2,75.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_121.setTransform(405.2,77.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_122.setTransform(405.2,78.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_123.setTransform(405.2,79.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_124.setTransform(405.2,83);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_125.setTransform(405.2,84.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_126.setTransform(405.2,85.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_127.setTransform(405.2,86.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_128.setTransform(405.2,88.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_129.setTransform(405.2,89.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_130.setTransform(405.2,90.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_131.setTransform(405.2,92.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_132.setTransform(405.2,93.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FF8402").ss(0.5).p("AFvgGIgXgGIhsAZIhogZIhoAZIhvgZIhlAZIhZgZIhdAZ");
	this.shape_133.setTransform(405.2,94.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_134.setTransform(405.2,1.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_135.setTransform(405.2,2.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_136.setTransform(405.2,4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_137.setTransform(405.2,5.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_138.setTransform(405.2,6.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_139.setTransform(405.2,8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_140.setTransform(405.2,9.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_141.setTransform(405.2,10.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_142.setTransform(405.2,11.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_143.setTransform(405.2,13.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_144.setTransform(405.2,16.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_145.setTransform(405.2,17.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_146.setTransform(405.2,19.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_147.setTransform(405.2,20.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_148.setTransform(405.2,21.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_149.setTransform(405.2,23.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_150.setTransform(405.2,24.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_151.setTransform(405.2,25.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_152.setTransform(405.2,27.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#FF8402").ss(0.5).p("AluANIBdgZIBZAZIBlgZIBvAZIBogZIBoAZIBsgZIAXAG");
	this.shape_153.setTransform(405.2,28.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FF8402").ss(0.8).p("AOfAAI89AA");
	this.shape_154.setTransform(349.3,36.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#FF8402").ss(0.8).p("AOnAAI9NAA");
	this.shape_155.setTransform(348.5,60.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#FFAD01").p("AAAA+Ig9g+IA9g9IA+A9g");
	this.shape_156.setTransform(171.8,12.9,1,1,0,0,0,0,-0.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#FFAD01").p("AAAA+Ig9g+IA9g9IA+A9g");
	this.shape_157.setTransform(178.1,13.2,1,1,0,0,0,0,-0.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#FFAD01").p("AAAA+Ig9g+IA9g9IA+A9g");
	this.shape_158.setTransform(264.2,12.9,1,1,0,0,0,0,-0.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#FFAD01").p("AAAg9IA+A9Ig+A+Ig9g+g");
	this.shape_159.setTransform(270.5,13.6,1,1,0,0,0,0,0.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#FFAD01").ss(0.5).p("AhQBEIAoiCIB1CCg");
	this.shape_160.setTransform(267.6,88.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#FFAD01").ss(0.5).p("Ag2AtIAahVIBOBVg");
	this.shape_161.setTransform(260.1,90.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#FFAD01").ss(0.5).p("AgaAUIAxg2IgYBQg");
	this.shape_162.setTransform(261,85.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFAD01").s().p("AgYAPIAxg2IgZBPg");
	this.shape_163.setTransform(260.8,86.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#FFAD01").ss(0.5).p("AgUAPIAmgpIgSA/g");
	this.shape_164.setTransform(255.2,89.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFAD01").s().p("AgTALIAngqIgSA/g");
	this.shape_165.setTransform(255,90.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#FFAD01").ss(0.5).p("AgYAjIAxg2IgSA2g");
	this.shape_166.setTransform(249.3,91.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFAD01").s().p("AgYAcIAxg3IgSA3g");
	this.shape_167.setTransform(249.3,92.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#FFAD01").ss(0.5).p("AgkAeIASg2IAyA2g");
	this.shape_168.setTransform(253.9,92.4,1,1,0,0,0,0.1,0);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FF8402").s().p("Ag0A0QgVgVAAgfQAAgdAVgXQAXgVAdgBQAfABAVAVQAXAXAAAdQAAAfgXAVQgVAXgfAAQgdAAgXgXg");
	this.shape_169.setTransform(254.6,86.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#FFAD01").ss(0.5).p("ABRBEIgpiCIh0CCg");
	this.shape_170.setTransform(173.6,88.7,1,1,0,0,0,-0.1,0);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#FFAD01").ss(0.5).p("AA3AtIgahVIhOBVg");
	this.shape_171.setTransform(181.1,90.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#FFAD01").ss(0.5).p("AAbAUIgxg2IAYBQg");
	this.shape_172.setTransform(180.2,85.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFAD01").s().p("AgYgnIAxA2IgZAZg");
	this.shape_173.setTransform(180.5,86.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#FFAD01").ss(0.5).p("AAVAPIgmgpIARA/g");
	this.shape_174.setTransform(186.1,89.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFAD01").s().p("AgTgfIAnAqIgVAVg");
	this.shape_175.setTransform(186.3,90.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#FFAD01").ss(0.5).p("AAZAjIgxg2IASA2g");
	this.shape_176.setTransform(192,91.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFAD01").s().p("AgHAcIgRg3IAxA3g");
	this.shape_177.setTransform(192,92.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#FFAD01").ss(0.5).p("AAlAeIgSg2IgyA2g");
	this.shape_178.setTransform(187.4,92.4,1,1,0,0,0,-0.1,0);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF8402").s().p("AgzA0QgXgVAAgfQAAgdAXgXQAVgVAegBQAfABAVAVQAXAXAAAdQAAAfgXAVQgVAXgfAAQgeAAgVgXg");
	this.shape_179.setTransform(186.7,86.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_180.setTransform(407.5,57.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_181.setTransform(407.5,54.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_182.setTransform(407.5,52.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_183.setTransform(407.5,50.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_184.setTransform(407.5,48.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_185.setTransform(407.5,45.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_186.setTransform(407.5,43.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_187.setTransform(407.5,41.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_188.setTransform(292.5,57.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_189.setTransform(292.5,54.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_190.setTransform(292.5,52.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_191.setTransform(292.5,50.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_192.setTransform(292.5,48.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_193.setTransform(292.5,45.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_194.setTransform(292.5,43.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_195.setTransform(292.5,41.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_196.setTransform(145.6,57.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_197.setTransform(145.6,55.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_198.setTransform(145.6,53.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_199.setTransform(145.6,50.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_200.setTransform(145.6,48.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_201.setTransform(145.6,46.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_202.setTransform(145.6,44);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_203.setTransform(145.6,41.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_204.setTransform(38.5,57.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_205.setTransform(38.5,55);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_206.setTransform(38.5,52.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_207.setTransform(38.5,50.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_208.setTransform(38.5,48.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_209.setTransform(38.5,45.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_210.setTransform(38.5,43.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#FFAD01").ss(0.5).p("AisAAIFZAA");
	this.shape_211.setTransform(38.5,41.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_212.setTransform(324.2,67.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_213.setTransform(324.2,69.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_214.setTransform(324.2,70.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_215.setTransform(324.2,71.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_216.setTransform(324.2,73.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_217.setTransform(324.2,74.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_218.setTransform(324.2,75.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_219.setTransform(324.2,77.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_220.setTransform(324.2,78.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_221.setTransform(324.2,79.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_222.setTransform(324.2,83);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_223.setTransform(324.2,84.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_224.setTransform(324.2,85.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_225.setTransform(324.2,86.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_226.setTransform(324.2,88.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_227.setTransform(324.2,89.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_228.setTransform(324.2,90.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_229.setTransform(324.2,92.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_230.setTransform(324.2,93.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_231.setTransform(324.2,94.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_232.setTransform(324.2,1.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_233.setTransform(324.2,2.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_234.setTransform(324.2,4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_235.setTransform(324.2,5.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_236.setTransform(324.2,6.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_237.setTransform(324.2,8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_238.setTransform(324.2,9.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_239.setTransform(324.2,10.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_240.setTransform(324.2,11.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_241.setTransform(324.2,13.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_242.setTransform(324.2,16.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_243.setTransform(324.2,17.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_244.setTransform(324.2,19.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_245.setTransform(324.2,20.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_246.setTransform(324.2,21.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_247.setTransform(324.2,23.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_248.setTransform(324.2,24.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_249.setTransform(324.2,25.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_250.setTransform(324.2,27.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#FF8402").ss(0.5).p("AG6ANIhdgZIhZAZIhlgZIhxAZIhmgZIhoAZIhsgZIhrAZIhBgZ");
	this.shape_251.setTransform(324.2,28.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_252.setTransform(117.8,67.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_253.setTransform(117.8,68.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_254.setTransform(117.8,70.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_255.setTransform(117.8,71.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_256.setTransform(117.8,72.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_257.setTransform(117.8,74.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_258.setTransform(117.8,75.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_259.setTransform(117.8,76.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_260.setTransform(117.8,78.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_261.setTransform(117.8,79.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_262.setTransform(117.8,82.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_263.setTransform(117.8,84);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_264.setTransform(117.8,85.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_265.setTransform(117.8,86.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_266.setTransform(117.8,88);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_267.setTransform(117.8,89.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_268.setTransform(117.8,90.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_269.setTransform(117.8,92);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_270.setTransform(117.8,93.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_271.setTransform(117.8,94.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_272.setTransform(117.8,1.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_273.setTransform(117.8,2.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_274.setTransform(117.8,4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_275.setTransform(117.8,5.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_276.setTransform(117.8,6.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_277.setTransform(117.8,8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_278.setTransform(117.8,9.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_279.setTransform(117.8,10.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_280.setTransform(117.8,11.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_281.setTransform(117.8,13.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_282.setTransform(117.8,16.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_283.setTransform(117.8,17.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_284.setTransform(117.8,19.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_285.setTransform(117.8,20.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_286.setTransform(117.8,21.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_287.setTransform(117.8,23.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_288.setTransform(117.8,24.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_289.setTransform(117.8,25.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_290.setTransform(117.8,27.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#FF8402").ss(0.5).p("Am5ANIBdgZIBaAZIBlgZIBxAZIBmgZIBoAZIBrgZIBrAZIBCgZ");
	this.shape_291.setTransform(117.8,28.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#FFAD01").ss(0.5).p("Ag8AMQAXgYAIABQADAAALAMQALANAEgCIANgMQAKgLAFAAQAFAAAPALIAOAM");
	this.shape_292.setTransform(433.4,53.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#FFAD01").ss(0.5).p("Ag8AMQAYgYAHABIAPAMQAKANAEgCIANgMQALgLAEAAQAGAAAOALIAOAM");
	this.shape_293.setTransform(433.4,51.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#FFAD01").ss(0.5).p("Ag8AMQAXgYAIABIAOAMQALANAEgCIANgMQAKgLAFAAQAFAAAPALIAOAM");
	this.shape_294.setTransform(433.5,50.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#FFAD01").ss(0.5).p("Ag8AMQAYgYAHABIAPAMQAKANAEgCIANgMQALgLAEAAQAGAAAOALIAOAM");
	this.shape_295.setTransform(433.5,48.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#FFAD01").ss(0.5).p("Ag8AMQAXgYAIABIAOAMQALANAEgCIANgMQALgLAEAAQAFAAAPALIAOAM");
	this.shape_296.setTransform(433.5,46.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#FFAD01").ss(0.5).p("Ag8AMQAYgYAHABIAPAMQAKANAEgCIANgMQALgLAEAAQAGAAAOALIAOAM");
	this.shape_297.setTransform(433.5,44.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#FFAD01").ss(0.5).p("AA9hFIAACLIh5AAIAAiLg");
	this.shape_298.setTransform(433.5,49.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#FFAD01").ss(0.5).p("AhDAMQAagYAJABIAQAMQALANAEgCIAPgMQAMgLAFAAQAGAAAQALIAPAM");
	this.shape_299.setTransform(9.8,53.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#FFAD01").ss(0.5).p("AhDAMQAbgYAIABIAQAMQALANAFgCIAOgMQAMgLAFAAQAGAAAQALIAPAM");
	this.shape_300.setTransform(9.8,51.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#FFAD01").ss(0.5).p("AhDAMQAagYAJABIAQAMQALANAEgCIAPgMQAMgLAFAAQAGAAAQALIAPAM");
	this.shape_301.setTransform(9.9,50.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#FFAD01").ss(0.5).p("AhDAMQAagYAJABIAQAMQALANAEgCIAPgMQAMgLAEAAQAGAAARALIAPAM");
	this.shape_302.setTransform(9.9,48.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#FFAD01").ss(0.5).p("AhDAMQAagYAJABIAQAMQALANAEgCIAPgMQAMgLAFAAQAGAAAQALIAPAM");
	this.shape_303.setTransform(9.9,46.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#FFAD01").ss(0.5).p("AhDAMQAagYAJABIAQAMQALANAEgCIAPgMQAMgLAFAAQAGAAAQALIAPAM");
	this.shape_304.setTransform(10,44.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#FFAD01").ss(0.5).p("ABEhFIAACLIiGAAIAAiLg");
	this.shape_305.setTransform(10,49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,444,98.3);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape.setTransform(6.8,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_1.setTransform(6.8,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_2.setTransform(6.8,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_3.setTransform(6.8,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_4.setTransform(6.8,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_5.setTransform(6.8,4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_6.setTransform(6.8,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_7.setTransform(6.8,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_8.setTransform(6.8,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFAD01").ss(0.3).p("AA1AAQAAAVgQAQQgPAQgWAAQgUAAgQgQQgPgQAAgVQAAgVAPgPQAQgQAUAAQAWAAAPAQQAQAPAAAVg");
	this.shape_9.setTransform(6.9,5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373330").s().p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	this.shape_10.setTransform(6.9,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.9,15.5,12.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape.setTransform(6.8,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_1.setTransform(6.8,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_2.setTransform(6.8,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_3.setTransform(6.8,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_4.setTransform(6.8,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_5.setTransform(6.8,4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_6.setTransform(6.8,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_7.setTransform(6.8,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFAD01").ss(0.3).p("AhCAAICFAA");
	this.shape_8.setTransform(6.8,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFAD01").ss(0.3).p("AA1AAQAAAVgQAQQgPAQgWAAQgUAAgQgQQgQgQAAgVQAAgVAQgPQAQgQAUAAQAWAAAPAQQAQAQAAAUg");
	this.shape_9.setTransform(6.9,5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373330").s().p("AgkAlQgQgQAAgVQAAgVAQgPQAQgQAUAAQAWAAAPAQQAQAQAAAUQAAAVgQAQQgPAQgWAAQgUAAgQgQg");
	this.shape_10.setTransform(6.9,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.9,15.6,12.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFAD01").ss(0.8).p("ABRhVIAACrIifAAQASg2AAg3QAAgmgFgYg");
	this.shape.setTransform(264.5,48.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFAD01").ss(0.8).p("AhQhVIAACrICfAAQgSg2AAg3QAAgmAFgYg");
	this.shape_1.setTransform(176,48.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFAD01").ss(0.8).p("AAAjpQBgAABFBFQBEBEAABgQAABghEBFQhFBFhgAAQhfAAhFhFQhEhFAAhgQAAhgBEhEQBEhFBgAAg");
	this.shape_2.setTransform(221.7,45.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFAD01").ss(0.8).p("AAAlVQCOAABkBkQBkBlAACMQAACNhkBlQhkBkiOAAQiMAAhkhkQhlhlAAiNQAAiMBlhlQBkhkCMAAg");
	this.shape_3.setTransform(220.9,45.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF8402").ss(0.8).p("AmoCvQAeiWB4hgQB4hjCaAAQCZAAB5BlQB1BhAiCT");
	this.shape_4.setTransform(220.8,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF8402").ss(0.8).p("AGPiLQgsB8hvBLQhvBNiFAAQiDAAhyhRQhvhNgqh2");
	this.shape_5.setTransform(221,74.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF8402").ss(0.8).p("AlxCZQAbiDBnhUQBphWCGAAQCHAABoBUQBmBQAdCA");
	this.shape_6.setTransform(220.8,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF8402").ss(0.8).p("AFch0QgsBoheA9QhgBBhyAAQhyAAhfg/Qhdg8gthl");
	this.shape_7.setTransform(221,71.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(166.9,0.3,106.9,89.1);


(lib.Symbol117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAlQgPgQAAgVQAAgVAPgPQAPgQAVAAQAVAAAQAQQAPAPABAVQgBAVgPAQQgQAQgVAAQgVAAgPgQg");
	mask.setTransform(6.9,5.4);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.6,10.7);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAmQgQgQAAgWQAAgUAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(6.1,5.4);

	// Layer 2
	this.instance = new lib.Symbol4("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0.1,10.7,10.7);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9("synched",0);
	this.instance.setTransform(129.7,-39.2,6.12,6.12);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Symbol8("synched",0);
	this.instance_1.setTransform(57,43.2);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Symbol7("synched",0);
	this.instance_2.setTransform(-1.3,2);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-3,-3,448,102);

	this.instance_3 = new lib.Symbol5("synched",0);
	this.instance_3.setTransform(166.8,44.8);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_3.cache(0,-2,15,15);

	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.setTransform(257,44.7);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_4.cache(0,-2,15,15);

	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.setTransform(-1.3,2);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_5.cache(165,-2,111,93);

	this.instance_6 = new lib.Symbol11("synched",0);
	this.instance_6.setTransform(166.8,44.8);
	this.instance_6.filters = [new cjs.ColorFilter(0.01953125, 0.01953125, 0.01953125, 1, 0, 0, 0, 0)];
	this.instance_6.cache(0,-2,15,15);

	this.instance_7 = new lib.Symbol10("synched",0);
	this.instance_7.setTransform(257,44.7);
	this.instance_7.filters = [new cjs.ColorFilter(0.01953125, 0.01953125, 0.01953125, 1, 0, 0, 0, 0)];
	this.instance_7.cache(0,-2,15,15);

	this.instance_8 = new lib.Symbol13("synched",0);
	this.instance_8.setTransform(166.8,44.8);
	this.instance_8.filters = [new cjs.ColorFilter(0.0390625, 0.0390625, 0.0390625, 1, 0, 0, 0, 0)];
	this.instance_8.cache(0,-2,15,15);

	this.instance_9 = new lib.Symbol12("synched",0);
	this.instance_9.setTransform(257,44.7);
	this.instance_9.filters = [new cjs.ColorFilter(0.0390625, 0.0390625, 0.0390625, 1, 0, 0, 0, 0)];
	this.instance_9.cache(0,-2,15,15);

	this.instance_10 = new lib.Symbol15("synched",0);
	this.instance_10.setTransform(166.8,44.8);
	this.instance_10.filters = [new cjs.ColorFilter(0.05078125, 0.05078125, 0.05078125, 1, 0, 0, 0, 0)];
	this.instance_10.cache(0,-2,15,15);

	this.instance_11 = new lib.Symbol14("synched",0);
	this.instance_11.setTransform(257,44.7);
	this.instance_11.filters = [new cjs.ColorFilter(0.05078125, 0.05078125, 0.05078125, 1, 0, 0, 0, 0)];
	this.instance_11.cache(0,-2,15,15);

	this.instance_12 = new lib.Symbol17("synched",0);
	this.instance_12.setTransform(166.8,44.8);
	this.instance_12.filters = [new cjs.ColorFilter(0.0703125, 0.0703125, 0.0703125, 1, 0, 0, 0, 0)];
	this.instance_12.cache(0,-2,15,15);

	this.instance_13 = new lib.Symbol16("synched",0);
	this.instance_13.setTransform(257,44.7);
	this.instance_13.filters = [new cjs.ColorFilter(0.0703125, 0.0703125, 0.0703125, 1, 0, 0, 0, 0)];
	this.instance_13.cache(0,-2,15,15);

	this.instance_14 = new lib.Symbol19("synched",0);
	this.instance_14.setTransform(166.8,44.8);
	this.instance_14.filters = [new cjs.ColorFilter(0.08984375, 0.08984375, 0.08984375, 1, 0, 0, 0, 0)];
	this.instance_14.cache(0,-2,15,15);

	this.instance_15 = new lib.Symbol18("synched",0);
	this.instance_15.setTransform(257,44.7);
	this.instance_15.filters = [new cjs.ColorFilter(0.08984375, 0.08984375, 0.08984375, 1, 0, 0, 0, 0)];
	this.instance_15.cache(0,-2,15,15);

	this.instance_16 = new lib.Symbol21("synched",0);
	this.instance_16.setTransform(166.8,44.8);
	this.instance_16.filters = [new cjs.ColorFilter(0.109375, 0.109375, 0.109375, 1, 0, 0, 0, 0)];
	this.instance_16.cache(0,-2,15,15);

	this.instance_17 = new lib.Symbol20("synched",0);
	this.instance_17.setTransform(257,44.7);
	this.instance_17.filters = [new cjs.ColorFilter(0.109375, 0.109375, 0.109375, 1, 0, 0, 0, 0)];
	this.instance_17.cache(0,-2,15,15);

	this.instance_18 = new lib.Symbol23("synched",0);
	this.instance_18.setTransform(166.8,44.8);
	this.instance_18.filters = [new cjs.ColorFilter(0.12890625, 0.12890625, 0.12890625, 1, 0, 0, 0, 0)];
	this.instance_18.cache(0,-2,15,15);

	this.instance_19 = new lib.Symbol22("synched",0);
	this.instance_19.setTransform(257,44.7);
	this.instance_19.filters = [new cjs.ColorFilter(0.12890625, 0.12890625, 0.12890625, 1, 0, 0, 0, 0)];
	this.instance_19.cache(0,-2,15,15);

	this.instance_20 = new lib.Symbol25("synched",0);
	this.instance_20.setTransform(166.8,44.8);
	this.instance_20.filters = [new cjs.ColorFilter(0.1484375, 0.1484375, 0.1484375, 1, 0, 0, 0, 0)];
	this.instance_20.cache(0,-2,15,15);

	this.instance_21 = new lib.Symbol24("synched",0);
	this.instance_21.setTransform(257,44.7);
	this.instance_21.filters = [new cjs.ColorFilter(0.1484375, 0.1484375, 0.1484375, 1, 0, 0, 0, 0)];
	this.instance_21.cache(0,-2,15,15);

	this.instance_22 = new lib.Symbol27("synched",0);
	this.instance_22.setTransform(166.8,44.8);
	this.instance_22.filters = [new cjs.ColorFilter(0.171875, 0.171875, 0.171875, 1, 0, 0, 0, 0)];
	this.instance_22.cache(0,-2,15,15);

	this.instance_23 = new lib.Symbol26("synched",0);
	this.instance_23.setTransform(257,44.7);
	this.instance_23.filters = [new cjs.ColorFilter(0.171875, 0.171875, 0.171875, 1, 0, 0, 0, 0)];
	this.instance_23.cache(0,-2,15,15);

	this.instance_24 = new lib.Symbol29("synched",0);
	this.instance_24.setTransform(166.8,44.8);
	this.instance_24.filters = [new cjs.ColorFilter(0.1796875, 0.1796875, 0.1796875, 1, 0, 0, 0, 0)];
	this.instance_24.cache(0,-2,15,15);

	this.instance_25 = new lib.Symbol28("synched",0);
	this.instance_25.setTransform(257,44.7);
	this.instance_25.filters = [new cjs.ColorFilter(0.1796875, 0.1796875, 0.1796875, 1, 0, 0, 0, 0)];
	this.instance_25.cache(0,-2,15,15);

	this.instance_26 = new lib.Symbol31("synched",0);
	this.instance_26.setTransform(166.8,44.8);
	this.instance_26.filters = [new cjs.ColorFilter(0.19921875, 0.19921875, 0.19921875, 1, 0, 0, 0, 0)];
	this.instance_26.cache(0,-2,15,15);

	this.instance_27 = new lib.Symbol30("synched",0);
	this.instance_27.setTransform(257,44.7);
	this.instance_27.filters = [new cjs.ColorFilter(0.19921875, 0.19921875, 0.19921875, 1, 0, 0, 0, 0)];
	this.instance_27.cache(0,-2,15,15);

	this.instance_28 = new lib.Symbol33("synched",0);
	this.instance_28.setTransform(166.8,44.8);
	this.instance_28.filters = [new cjs.ColorFilter(0.21875, 0.21875, 0.21875, 1, 0, 0, 0, 0)];
	this.instance_28.cache(0,-2,15,15);

	this.instance_29 = new lib.Symbol32("synched",0);
	this.instance_29.setTransform(257,44.7);
	this.instance_29.filters = [new cjs.ColorFilter(0.21875, 0.21875, 0.21875, 1, 0, 0, 0, 0)];
	this.instance_29.cache(0,-2,15,15);

	this.instance_30 = new lib.Symbol35("synched",0);
	this.instance_30.setTransform(166.8,44.8);
	this.instance_30.filters = [new cjs.ColorFilter(0.23828125, 0.23828125, 0.23828125, 1, 0, 0, 0, 0)];
	this.instance_30.cache(0,-2,15,15);

	this.instance_31 = new lib.Symbol34("synched",0);
	this.instance_31.setTransform(257,44.7);
	this.instance_31.filters = [new cjs.ColorFilter(0.23828125, 0.23828125, 0.23828125, 1, 0, 0, 0, 0)];
	this.instance_31.cache(0,-2,15,15);

	this.instance_32 = new lib.Symbol37("synched",0);
	this.instance_32.setTransform(166.8,44.8);
	this.instance_32.filters = [new cjs.ColorFilter(0.26171875, 0.26171875, 0.26171875, 1, 0, 0, 0, 0)];
	this.instance_32.cache(0,-2,15,15);

	this.instance_33 = new lib.Symbol36("synched",0);
	this.instance_33.setTransform(257,44.7);
	this.instance_33.filters = [new cjs.ColorFilter(0.26171875, 0.26171875, 0.26171875, 1, 0, 0, 0, 0)];
	this.instance_33.cache(0,-2,15,15);

	this.instance_34 = new lib.Symbol39("synched",0);
	this.instance_34.setTransform(166.8,44.8);
	this.instance_34.filters = [new cjs.ColorFilter(0.28125, 0.28125, 0.28125, 1, 0, 0, 0, 0)];
	this.instance_34.cache(0,-2,15,15);

	this.instance_35 = new lib.Symbol38("synched",0);
	this.instance_35.setTransform(257,44.7);
	this.instance_35.filters = [new cjs.ColorFilter(0.28125, 0.28125, 0.28125, 1, 0, 0, 0, 0)];
	this.instance_35.cache(0,-2,15,15);

	this.instance_36 = new lib.Symbol41("synched",0);
	this.instance_36.setTransform(166.8,44.8);
	this.instance_36.filters = [new cjs.ColorFilter(0.30078125, 0.30078125, 0.30078125, 1, 0, 0, 0, 0)];
	this.instance_36.cache(0,-2,15,15);

	this.instance_37 = new lib.Symbol40("synched",0);
	this.instance_37.setTransform(257,44.7);
	this.instance_37.filters = [new cjs.ColorFilter(0.30078125, 0.30078125, 0.30078125, 1, 0, 0, 0, 0)];
	this.instance_37.cache(0,-2,15,15);

	this.instance_38 = new lib.Symbol43("synched",0);
	this.instance_38.setTransform(166.8,44.8);
	this.instance_38.filters = [new cjs.ColorFilter(0.3203125, 0.3203125, 0.3203125, 1, 0, 0, 0, 0)];
	this.instance_38.cache(0,-2,15,15);

	this.instance_39 = new lib.Symbol42("synched",0);
	this.instance_39.setTransform(257,44.7);
	this.instance_39.filters = [new cjs.ColorFilter(0.3203125, 0.3203125, 0.3203125, 1, 0, 0, 0, 0)];
	this.instance_39.cache(0,-2,15,15);

	this.instance_40 = new lib.Symbol45("synched",0);
	this.instance_40.setTransform(166.8,44.8);
	this.instance_40.filters = [new cjs.ColorFilter(0.328125, 0.328125, 0.328125, 1, 0, 0, 0, 0)];
	this.instance_40.cache(0,-2,15,15);

	this.instance_41 = new lib.Symbol44("synched",0);
	this.instance_41.setTransform(257,44.7);
	this.instance_41.filters = [new cjs.ColorFilter(0.328125, 0.328125, 0.328125, 1, 0, 0, 0, 0)];
	this.instance_41.cache(0,-2,15,15);

	this.instance_42 = new lib.Symbol47("synched",0);
	this.instance_42.setTransform(166.8,44.8);
	this.instance_42.filters = [new cjs.ColorFilter(0.3515625, 0.3515625, 0.3515625, 1, 0, 0, 0, 0)];
	this.instance_42.cache(0,-2,15,15);

	this.instance_43 = new lib.Symbol46("synched",0);
	this.instance_43.setTransform(257,44.7);
	this.instance_43.filters = [new cjs.ColorFilter(0.3515625, 0.3515625, 0.3515625, 1, 0, 0, 0, 0)];
	this.instance_43.cache(0,-2,15,15);

	this.instance_44 = new lib.Symbol49("synched",0);
	this.instance_44.setTransform(166.8,44.8);
	this.instance_44.filters = [new cjs.ColorFilter(0.37109375, 0.37109375, 0.37109375, 1, 0, 0, 0, 0)];
	this.instance_44.cache(0,-2,15,15);

	this.instance_45 = new lib.Symbol48("synched",0);
	this.instance_45.setTransform(257,44.7);
	this.instance_45.filters = [new cjs.ColorFilter(0.37109375, 0.37109375, 0.37109375, 1, 0, 0, 0, 0)];
	this.instance_45.cache(0,-2,15,15);

	this.instance_46 = new lib.Symbol51("synched",0);
	this.instance_46.setTransform(166.8,44.8);
	this.instance_46.filters = [new cjs.ColorFilter(0.390625, 0.390625, 0.390625, 1, 0, 0, 0, 0)];
	this.instance_46.cache(0,-2,15,15);

	this.instance_47 = new lib.Symbol50("synched",0);
	this.instance_47.setTransform(257,44.7);
	this.instance_47.filters = [new cjs.ColorFilter(0.390625, 0.390625, 0.390625, 1, 0, 0, 0, 0)];
	this.instance_47.cache(0,-2,15,15);

	this.instance_48 = new lib.Symbol53("synched",0);
	this.instance_48.setTransform(166.8,44.8);
	this.instance_48.filters = [new cjs.ColorFilter(0.41015625, 0.41015625, 0.41015625, 1, 0, 0, 0, 0)];
	this.instance_48.cache(0,-2,15,15);

	this.instance_49 = new lib.Symbol52("synched",0);
	this.instance_49.setTransform(257,44.7);
	this.instance_49.filters = [new cjs.ColorFilter(0.41015625, 0.41015625, 0.41015625, 1, 0, 0, 0, 0)];
	this.instance_49.cache(0,-2,15,15);

	this.instance_50 = new lib.Symbol55("synched",0);
	this.instance_50.setTransform(166.8,44.8);
	this.instance_50.filters = [new cjs.ColorFilter(0.4296875, 0.4296875, 0.4296875, 1, 0, 0, 0, 0)];
	this.instance_50.cache(0,-2,15,15);

	this.instance_51 = new lib.Symbol54("synched",0);
	this.instance_51.setTransform(257,44.7);
	this.instance_51.filters = [new cjs.ColorFilter(0.4296875, 0.4296875, 0.4296875, 1, 0, 0, 0, 0)];
	this.instance_51.cache(0,-2,15,15);

	this.instance_52 = new lib.Symbol57("synched",0);
	this.instance_52.setTransform(166.8,44.8);
	this.instance_52.filters = [new cjs.ColorFilter(0.44921875, 0.44921875, 0.44921875, 1, 0, 0, 0, 0)];
	this.instance_52.cache(0,-2,15,15);

	this.instance_53 = new lib.Symbol56("synched",0);
	this.instance_53.setTransform(257,44.7);
	this.instance_53.filters = [new cjs.ColorFilter(0.44921875, 0.44921875, 0.44921875, 1, 0, 0, 0, 0)];
	this.instance_53.cache(0,-2,15,15);

	this.instance_54 = new lib.Symbol59("synched",0);
	this.instance_54.setTransform(166.8,44.8);
	this.instance_54.filters = [new cjs.ColorFilter(0.4609375, 0.4609375, 0.4609375, 1, 0, 0, 0, 0)];
	this.instance_54.cache(0,-2,15,15);

	this.instance_55 = new lib.Symbol58("synched",0);
	this.instance_55.setTransform(257,44.7);
	this.instance_55.filters = [new cjs.ColorFilter(0.4609375, 0.4609375, 0.4609375, 1, 0, 0, 0, 0)];
	this.instance_55.cache(0,-2,15,15);

	this.instance_56 = new lib.Symbol61("synched",0);
	this.instance_56.setTransform(166.8,44.8);
	this.instance_56.filters = [new cjs.ColorFilter(0.48046875, 0.48046875, 0.48046875, 1, 0, 0, 0, 0)];
	this.instance_56.cache(0,-2,15,15);

	this.instance_57 = new lib.Symbol60("synched",0);
	this.instance_57.setTransform(257,44.7);
	this.instance_57.filters = [new cjs.ColorFilter(0.48046875, 0.48046875, 0.48046875, 1, 0, 0, 0, 0)];
	this.instance_57.cache(0,-2,15,15);

	this.instance_58 = new lib.Symbol63("synched",0);
	this.instance_58.setTransform(166.8,44.8);
	this.instance_58.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 0, 0, 0)];
	this.instance_58.cache(0,-2,15,15);

	this.instance_59 = new lib.Symbol62("synched",0);
	this.instance_59.setTransform(257,44.7);
	this.instance_59.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 0, 0, 0)];
	this.instance_59.cache(0,-2,15,15);

	this.instance_60 = new lib.Symbol65("synched",0);
	this.instance_60.setTransform(166.8,44.8);
	this.instance_60.filters = [new cjs.ColorFilter(0.51953125, 0.51953125, 0.51953125, 1, 0, 0, 0, 0)];
	this.instance_60.cache(0,-2,15,15);

	this.instance_61 = new lib.Symbol64("synched",0);
	this.instance_61.setTransform(257,44.7);
	this.instance_61.filters = [new cjs.ColorFilter(0.51953125, 0.51953125, 0.51953125, 1, 0, 0, 0, 0)];
	this.instance_61.cache(0,-2,15,15);

	this.instance_62 = new lib.Symbol67("synched",0);
	this.instance_62.setTransform(166.8,44.8);
	this.instance_62.filters = [new cjs.ColorFilter(0.5390625, 0.5390625, 0.5390625, 1, 0, 0, 0, 0)];
	this.instance_62.cache(0,-2,15,15);

	this.instance_63 = new lib.Symbol66("synched",0);
	this.instance_63.setTransform(257,44.7);
	this.instance_63.filters = [new cjs.ColorFilter(0.5390625, 0.5390625, 0.5390625, 1, 0, 0, 0, 0)];
	this.instance_63.cache(0,-2,15,15);

	this.instance_64 = new lib.Symbol69("synched",0);
	this.instance_64.setTransform(166.8,44.8);
	this.instance_64.filters = [new cjs.ColorFilter(0.55078125, 0.55078125, 0.55078125, 1, 0, 0, 0, 0)];
	this.instance_64.cache(0,-2,15,15);

	this.instance_65 = new lib.Symbol68("synched",0);
	this.instance_65.setTransform(257,44.7);
	this.instance_65.filters = [new cjs.ColorFilter(0.55078125, 0.55078125, 0.55078125, 1, 0, 0, 0, 0)];
	this.instance_65.cache(0,-2,15,15);

	this.instance_66 = new lib.Symbol71("synched",0);
	this.instance_66.setTransform(166.8,44.8);
	this.instance_66.filters = [new cjs.ColorFilter(0.5703125, 0.5703125, 0.5703125, 1, 0, 0, 0, 0)];
	this.instance_66.cache(0,-2,15,15);

	this.instance_67 = new lib.Symbol70("synched",0);
	this.instance_67.setTransform(257,44.7);
	this.instance_67.filters = [new cjs.ColorFilter(0.5703125, 0.5703125, 0.5703125, 1, 0, 0, 0, 0)];
	this.instance_67.cache(0,-2,15,15);

	this.instance_68 = new lib.Symbol73("synched",0);
	this.instance_68.setTransform(166.8,44.8);
	this.instance_68.filters = [new cjs.ColorFilter(0.58984375, 0.58984375, 0.58984375, 1, 0, 0, 0, 0)];
	this.instance_68.cache(0,-2,15,15);

	this.instance_69 = new lib.Symbol72("synched",0);
	this.instance_69.setTransform(257,44.7);
	this.instance_69.filters = [new cjs.ColorFilter(0.58984375, 0.58984375, 0.58984375, 1, 0, 0, 0, 0)];
	this.instance_69.cache(0,-2,15,15);

	this.instance_70 = new lib.Symbol75("synched",0);
	this.instance_70.setTransform(166.8,44.8);
	this.instance_70.filters = [new cjs.ColorFilter(0.609375, 0.609375, 0.609375, 1, 0, 0, 0, 0)];
	this.instance_70.cache(0,-2,15,15);

	this.instance_71 = new lib.Symbol74("synched",0);
	this.instance_71.setTransform(257,44.7);
	this.instance_71.filters = [new cjs.ColorFilter(0.609375, 0.609375, 0.609375, 1, 0, 0, 0, 0)];
	this.instance_71.cache(0,-2,15,15);

	this.instance_72 = new lib.Symbol77("synched",0);
	this.instance_72.setTransform(166.8,44.8);
	this.instance_72.filters = [new cjs.ColorFilter(0.62890625, 0.62890625, 0.62890625, 1, 0, 0, 0, 0)];
	this.instance_72.cache(0,-2,15,15);

	this.instance_73 = new lib.Symbol76("synched",0);
	this.instance_73.setTransform(257,44.7);
	this.instance_73.filters = [new cjs.ColorFilter(0.62890625, 0.62890625, 0.62890625, 1, 0, 0, 0, 0)];
	this.instance_73.cache(0,-2,15,15);

	this.instance_74 = new lib.Symbol79("synched",0);
	this.instance_74.setTransform(166.8,44.8);
	this.instance_74.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 0, 0, 0)];
	this.instance_74.cache(0,-2,15,15);

	this.instance_75 = new lib.Symbol78("synched",0);
	this.instance_75.setTransform(257,44.7);
	this.instance_75.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 0, 0, 0, 0)];
	this.instance_75.cache(0,-2,15,15);

	this.instance_76 = new lib.Symbol81("synched",0);
	this.instance_76.setTransform(166.8,44.8);
	this.instance_76.filters = [new cjs.ColorFilter(0.671875, 0.671875, 0.671875, 1, 0, 0, 0, 0)];
	this.instance_76.cache(0,-2,15,15);

	this.instance_77 = new lib.Symbol80("synched",0);
	this.instance_77.setTransform(257,44.7);
	this.instance_77.filters = [new cjs.ColorFilter(0.671875, 0.671875, 0.671875, 1, 0, 0, 0, 0)];
	this.instance_77.cache(0,-2,15,15);

	this.instance_78 = new lib.Symbol83("synched",0);
	this.instance_78.setTransform(166.8,44.8);
	this.instance_78.filters = [new cjs.ColorFilter(0.6796875, 0.6796875, 0.6796875, 1, 0, 0, 0, 0)];
	this.instance_78.cache(0,-2,15,15);

	this.instance_79 = new lib.Symbol82("synched",0);
	this.instance_79.setTransform(257,44.7);
	this.instance_79.filters = [new cjs.ColorFilter(0.6796875, 0.6796875, 0.6796875, 1, 0, 0, 0, 0)];
	this.instance_79.cache(0,-2,15,15);

	this.instance_80 = new lib.Symbol85("synched",0);
	this.instance_80.setTransform(166.8,44.8);
	this.instance_80.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 0, 0, 0, 0)];
	this.instance_80.cache(0,-2,15,15);

	this.instance_81 = new lib.Symbol84("synched",0);
	this.instance_81.setTransform(257,44.7);
	this.instance_81.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 0, 0, 0, 0)];
	this.instance_81.cache(0,-2,15,15);

	this.instance_82 = new lib.Symbol87("synched",0);
	this.instance_82.setTransform(166.8,44.8);
	this.instance_82.filters = [new cjs.ColorFilter(0.71875, 0.71875, 0.71875, 1, 0, 0, 0, 0)];
	this.instance_82.cache(0,-2,15,15);

	this.instance_83 = new lib.Symbol86("synched",0);
	this.instance_83.setTransform(257,44.7);
	this.instance_83.filters = [new cjs.ColorFilter(0.71875, 0.71875, 0.71875, 1, 0, 0, 0, 0)];
	this.instance_83.cache(0,-2,15,15);

	this.instance_84 = new lib.Symbol89("synched",0);
	this.instance_84.setTransform(166.8,44.8);
	this.instance_84.filters = [new cjs.ColorFilter(0.73828125, 0.73828125, 0.73828125, 1, 0, 0, 0, 0)];
	this.instance_84.cache(0,-2,15,15);

	this.instance_85 = new lib.Symbol88("synched",0);
	this.instance_85.setTransform(257,44.7);
	this.instance_85.filters = [new cjs.ColorFilter(0.73828125, 0.73828125, 0.73828125, 1, 0, 0, 0, 0)];
	this.instance_85.cache(0,-2,15,15);

	this.instance_86 = new lib.Symbol91("synched",0);
	this.instance_86.setTransform(166.8,44.8);
	this.instance_86.filters = [new cjs.ColorFilter(0.76171875, 0.76171875, 0.76171875, 1, 0, 0, 0, 0)];
	this.instance_86.cache(0,-2,15,15);

	this.instance_87 = new lib.Symbol90("synched",0);
	this.instance_87.setTransform(257,44.7);
	this.instance_87.filters = [new cjs.ColorFilter(0.76171875, 0.76171875, 0.76171875, 1, 0, 0, 0, 0)];
	this.instance_87.cache(0,-2,15,15);

	this.instance_88 = new lib.Symbol93("synched",0);
	this.instance_88.setTransform(166.8,44.8);
	this.instance_88.filters = [new cjs.ColorFilter(0.78125, 0.78125, 0.78125, 1, 0, 0, 0, 0)];
	this.instance_88.cache(0,-2,15,15);

	this.instance_89 = new lib.Symbol92("synched",0);
	this.instance_89.setTransform(257,44.7);
	this.instance_89.filters = [new cjs.ColorFilter(0.78125, 0.78125, 0.78125, 1, 0, 0, 0, 0)];
	this.instance_89.cache(0,-2,15,15);

	this.instance_90 = new lib.Symbol95("synched",0);
	this.instance_90.setTransform(166.8,44.8);
	this.instance_90.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_90.cache(0,-2,15,15);

	this.instance_91 = new lib.Symbol94("synched",0);
	this.instance_91.setTransform(257,44.7);
	this.instance_91.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 0, 0, 0, 0)];
	this.instance_91.cache(0,-2,15,15);

	this.instance_92 = new lib.Symbol97("synched",0);
	this.instance_92.setTransform(166.8,44.8);
	this.instance_92.filters = [new cjs.ColorFilter(0.8203125, 0.8203125, 0.8203125, 1, 0, 0, 0, 0)];
	this.instance_92.cache(0,-2,15,15);

	this.instance_93 = new lib.Symbol96("synched",0);
	this.instance_93.setTransform(257,44.7);
	this.instance_93.filters = [new cjs.ColorFilter(0.8203125, 0.8203125, 0.8203125, 1, 0, 0, 0, 0)];
	this.instance_93.cache(0,-2,15,15);

	this.instance_94 = new lib.Symbol99("synched",0);
	this.instance_94.setTransform(166.8,44.8);
	this.instance_94.filters = [new cjs.ColorFilter(0.828125, 0.828125, 0.828125, 1, 0, 0, 0, 0)];
	this.instance_94.cache(0,-2,15,15);

	this.instance_95 = new lib.Symbol98("synched",0);
	this.instance_95.setTransform(257,44.7);
	this.instance_95.filters = [new cjs.ColorFilter(0.828125, 0.828125, 0.828125, 1, 0, 0, 0, 0)];
	this.instance_95.cache(0,-2,15,15);

	this.instance_96 = new lib.Symbol101("synched",0);
	this.instance_96.setTransform(166.8,44.8);
	this.instance_96.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
	this.instance_96.cache(0,-2,15,15);

	this.instance_97 = new lib.Symbol100("synched",0);
	this.instance_97.setTransform(257,44.7);
	this.instance_97.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
	this.instance_97.cache(0,-2,15,15);

	this.instance_98 = new lib.Symbol103("synched",0);
	this.instance_98.setTransform(166.8,44.8);
	this.instance_98.filters = [new cjs.ColorFilter(0.87109375, 0.87109375, 0.87109375, 1, 0, 0, 0, 0)];
	this.instance_98.cache(0,-2,15,15);

	this.instance_99 = new lib.Symbol102("synched",0);
	this.instance_99.setTransform(257,44.7);
	this.instance_99.filters = [new cjs.ColorFilter(0.87109375, 0.87109375, 0.87109375, 1, 0, 0, 0, 0)];
	this.instance_99.cache(0,-2,15,15);

	this.instance_100 = new lib.Symbol105("synched",0);
	this.instance_100.setTransform(166.8,44.8);
	this.instance_100.filters = [new cjs.ColorFilter(0.890625, 0.890625, 0.890625, 1, 0, 0, 0, 0)];
	this.instance_100.cache(0,-2,15,15);

	this.instance_101 = new lib.Symbol104("synched",0);
	this.instance_101.setTransform(257,44.7);
	this.instance_101.filters = [new cjs.ColorFilter(0.890625, 0.890625, 0.890625, 1, 0, 0, 0, 0)];
	this.instance_101.cache(0,-2,15,15);

	this.instance_102 = new lib.Symbol107("synched",0);
	this.instance_102.setTransform(166.8,44.8);
	this.instance_102.filters = [new cjs.ColorFilter(0.91015625, 0.91015625, 0.91015625, 1, 0, 0, 0, 0)];
	this.instance_102.cache(0,-2,15,15);

	this.instance_103 = new lib.Symbol106("synched",0);
	this.instance_103.setTransform(257,44.7);
	this.instance_103.filters = [new cjs.ColorFilter(0.91015625, 0.91015625, 0.91015625, 1, 0, 0, 0, 0)];
	this.instance_103.cache(0,-2,15,15);

	this.instance_104 = new lib.Symbol109("synched",0);
	this.instance_104.setTransform(166.8,44.8);
	this.instance_104.filters = [new cjs.ColorFilter(0.9296875, 0.9296875, 0.9296875, 1, 0, 0, 0, 0)];
	this.instance_104.cache(0,-2,15,15);

	this.instance_105 = new lib.Symbol108("synched",0);
	this.instance_105.setTransform(257,44.7);
	this.instance_105.filters = [new cjs.ColorFilter(0.9296875, 0.9296875, 0.9296875, 1, 0, 0, 0, 0)];
	this.instance_105.cache(0,-2,15,15);

	this.instance_106 = new lib.Symbol111("synched",0);
	this.instance_106.setTransform(166.8,44.8);
	this.instance_106.filters = [new cjs.ColorFilter(0.94921875, 0.94921875, 0.94921875, 1, 0, 0, 0, 0)];
	this.instance_106.cache(0,-2,15,15);

	this.instance_107 = new lib.Symbol110("synched",0);
	this.instance_107.setTransform(257,44.7);
	this.instance_107.filters = [new cjs.ColorFilter(0.94921875, 0.94921875, 0.94921875, 1, 0, 0, 0, 0)];
	this.instance_107.cache(0,-2,15,15);

	this.instance_108 = new lib.Symbol113("synched",0);
	this.instance_108.setTransform(166.8,44.8);
	this.instance_108.filters = [new cjs.ColorFilter(0.9609375, 0.9609375, 0.9609375, 1, 0, 0, 0, 0)];
	this.instance_108.cache(0,-2,15,15);

	this.instance_109 = new lib.Symbol112("synched",0);
	this.instance_109.setTransform(257,44.7);
	this.instance_109.filters = [new cjs.ColorFilter(0.9609375, 0.9609375, 0.9609375, 1, 0, 0, 0, 0)];
	this.instance_109.cache(0,-2,15,15);

	this.instance_110 = new lib.Symbol115("synched",0);
	this.instance_110.setTransform(166.8,44.8);
	this.instance_110.filters = [new cjs.ColorFilter(0.98046875, 0.98046875, 0.98046875, 1, 0, 0, 0, 0)];
	this.instance_110.cache(0,-2,15,15);

	this.instance_111 = new lib.Symbol114("synched",0);
	this.instance_111.setTransform(257,44.7);
	this.instance_111.filters = [new cjs.ColorFilter(0.98046875, 0.98046875, 0.98046875, 1, 0, 0, 0, 0)];
	this.instance_111.cache(0,-2,15,15);

	this.instance_112 = new lib.Symbol117("synched",0);
	this.instance_112.setTransform(166.8,44.8);

	this.instance_113 = new lib.Symbol116("synched",0);
	this.instance_113.setTransform(257,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{alpha:0}},{t:this.instance,p:{scaleX:6.12,scaleY:6.12,x:129.7,y:-39.2,alpha:0}}]}).to({state:[{t:this.instance_5},{t:this.instance_7},{t:this.instance_6},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.031}},{t:this.instance,p:{scaleX:6.011,scaleY:6.011,x:131.3,y:-37.6,alpha:0.02}}]},1).to({state:[{t:this.instance_5},{t:this.instance_9},{t:this.instance_8},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.051}},{t:this.instance,p:{scaleX:5.902,scaleY:5.902,x:133,y:-36,alpha:0.039}}]},1).to({state:[{t:this.instance_5},{t:this.instance_11},{t:this.instance_10},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.078}},{t:this.instance,p:{scaleX:5.793,scaleY:5.793,x:134.6,y:-34.5,alpha:0.059}}]},1).to({state:[{t:this.instance_5},{t:this.instance_13},{t:this.instance_12},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.102}},{t:this.instance,p:{scaleX:5.684,scaleY:5.684,x:136.2,y:-32.9,alpha:0.09}}]},1).to({state:[{t:this.instance_5},{t:this.instance_15},{t:this.instance_14},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.129}},{t:this.instance,p:{scaleX:5.575,scaleY:5.575,x:137.8,y:-31.3,alpha:0.109}}]},1).to({state:[{t:this.instance_5},{t:this.instance_17},{t:this.instance_16},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.148}},{t:this.instance,p:{scaleX:5.466,scaleY:5.466,x:139.4,y:-29.8,alpha:0.129}}]},1).to({state:[{t:this.instance_5},{t:this.instance_19},{t:this.instance_18},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.18}},{t:this.instance,p:{scaleX:5.357,scaleY:5.357,x:141.1,y:-28.2,alpha:0.148}}]},1).to({state:[{t:this.instance_5},{t:this.instance_21},{t:this.instance_20},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.211}},{t:this.instance,p:{scaleX:5.249,scaleY:5.249,x:142.7,y:-26.6,alpha:0.172}}]},1).to({state:[{t:this.instance_5},{t:this.instance_23},{t:this.instance_22},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.23}},{t:this.instance,p:{scaleX:5.14,scaleY:5.14,x:144.3,y:-25,alpha:0.191}}]},1).to({state:[{t:this.instance_5},{t:this.instance_25},{t:this.instance_24},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.262}},{t:this.instance,p:{scaleX:5.031,scaleY:5.031,x:145.9,y:-23.5,alpha:0.211}}]},1).to({state:[{t:this.instance_5},{t:this.instance_27},{t:this.instance_26},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.281}},{t:this.instance,p:{scaleX:4.922,scaleY:4.922,x:147.6,y:-21.9,alpha:0.23}}]},1).to({state:[{t:this.instance_5},{t:this.instance_29},{t:this.instance_28},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.309}},{t:this.instance,p:{scaleX:4.813,scaleY:4.813,x:149.2,y:-20.4,alpha:0.25}}]},1).to({state:[{t:this.instance_5},{t:this.instance_31},{t:this.instance_30},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.328}},{t:this.instance,p:{scaleX:4.704,scaleY:4.704,x:150.8,y:-18.8,alpha:0.281}}]},1).to({state:[{t:this.instance_5},{t:this.instance_33},{t:this.instance_32},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.359}},{t:this.instance,p:{scaleX:4.595,scaleY:4.595,x:152.5,y:-17.2,alpha:0.301}}]},1).to({state:[{t:this.instance_5},{t:this.instance_35},{t:this.instance_34},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.379}},{t:this.instance,p:{scaleX:4.486,scaleY:4.486,x:154,y:-15.7,alpha:0.32}}]},1).to({state:[{t:this.instance_5},{t:this.instance_37},{t:this.instance_36},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.41}},{t:this.instance,p:{scaleX:4.377,scaleY:4.377,x:155.7,y:-14.1,alpha:0.34}}]},1).to({state:[{t:this.instance_5},{t:this.instance_39},{t:this.instance_38},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.441}},{t:this.instance,p:{scaleX:4.268,scaleY:4.268,x:157.3,y:-12.5,alpha:0.359}}]},1).to({state:[{t:this.instance_5},{t:this.instance_41},{t:this.instance_40},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.461}},{t:this.instance,p:{scaleX:4.159,scaleY:4.159,x:158.9,y:-10.9,alpha:0.379}}]},1).to({state:[{t:this.instance_5},{t:this.instance_43},{t:this.instance_42},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.488}},{t:this.instance,p:{scaleX:4.05,scaleY:4.05,x:160.6,y:-9.4,alpha:0.398}}]},1).to({state:[{t:this.instance_5},{t:this.instance_45},{t:this.instance_44},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.512}},{t:this.instance,p:{scaleX:3.941,scaleY:3.941,x:162.2,y:-7.8,alpha:0.43}}]},1).to({state:[{t:this.instance_5},{t:this.instance_47},{t:this.instance_46},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.539}},{t:this.instance,p:{scaleX:3.832,scaleY:3.832,x:163.8,y:-6.2,alpha:0.449}}]},1).to({state:[{t:this.instance_5},{t:this.instance_49},{t:this.instance_48},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.559}},{t:this.instance,p:{scaleX:3.723,scaleY:3.723,x:165.4,y:-4.7,alpha:0.469}}]},1).to({state:[{t:this.instance_5},{t:this.instance_51},{t:this.instance_50},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.59}},{t:this.instance,p:{scaleX:3.615,scaleY:3.615,x:167,y:-3.1,alpha:0.488}}]},1).to({state:[{t:this.instance_5},{t:this.instance_53},{t:this.instance_52},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.621}},{t:this.instance,p:{scaleX:3.506,scaleY:3.506,x:168.7,y:-1.5,alpha:0.512}}]},1).to({state:[{t:this.instance_5},{t:this.instance_55},{t:this.instance_54},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.641}},{t:this.instance,p:{scaleX:3.397,scaleY:3.397,x:170.3,y:0.1,alpha:0.531}}]},1).to({state:[{t:this.instance_5},{t:this.instance_57},{t:this.instance_56},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.672}},{t:this.instance,p:{scaleX:3.288,scaleY:3.288,x:171.9,y:1.6,alpha:0.551}}]},1).to({state:[{t:this.instance_5},{t:this.instance_59},{t:this.instance_58},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.691}},{t:this.instance,p:{scaleX:3.179,scaleY:3.179,x:173.5,y:3.2,alpha:0.57}}]},1).to({state:[{t:this.instance_5},{t:this.instance_61},{t:this.instance_60},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.719}},{t:this.instance,p:{scaleX:3.07,scaleY:3.07,x:175.2,y:4.8,alpha:0.602}}]},1).to({state:[{t:this.instance_5},{t:this.instance_63},{t:this.instance_62},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.738}},{t:this.instance,p:{scaleX:2.961,scaleY:2.961,x:176.8,y:6.3,alpha:0.621}}]},1).to({state:[{t:this.instance_5},{t:this.instance_65},{t:this.instance_64},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.77}},{t:this.instance,p:{scaleX:2.852,scaleY:2.852,x:178.4,y:7.9,alpha:0.641}}]},1).to({state:[{t:this.instance_5},{t:this.instance_67},{t:this.instance_66},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.789}},{t:this.instance,p:{scaleX:2.743,scaleY:2.743,x:180.1,y:9.5,alpha:0.66}}]},1).to({state:[{t:this.instance_5},{t:this.instance_69},{t:this.instance_68},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.82}},{t:this.instance,p:{scaleX:2.634,scaleY:2.634,x:181.7,y:11.1,alpha:0.68}}]},1).to({state:[{t:this.instance_5},{t:this.instance_71},{t:this.instance_70},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.852}},{t:this.instance,p:{scaleX:2.525,scaleY:2.525,x:183.3,y:12.6,alpha:0.699}}]},1).to({state:[{t:this.instance_5},{t:this.instance_73},{t:this.instance_72},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.871}},{t:this.instance,p:{scaleX:2.416,scaleY:2.416,x:184.9,y:14.1,alpha:0.719}}]},1).to({state:[{t:this.instance_5},{t:this.instance_75},{t:this.instance_74},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.898}},{t:this.instance,p:{scaleX:2.307,scaleY:2.307,x:186.5,y:15.7,alpha:0.75}}]},1).to({state:[{t:this.instance_5},{t:this.instance_77},{t:this.instance_76},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.922}},{t:this.instance,p:{scaleX:2.198,scaleY:2.198,x:188.2,y:17.3,alpha:0.77}}]},1).to({state:[{t:this.instance_5},{t:this.instance_79},{t:this.instance_78},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.949}},{t:this.instance,p:{scaleX:2.089,scaleY:2.089,x:189.8,y:18.9,alpha:0.789}}]},1).to({state:[{t:this.instance_5},{t:this.instance_81},{t:this.instance_80},{t:this.instance_2},{t:this.instance_1,p:{alpha:0.969}},{t:this.instance,p:{scaleX:1.98,scaleY:1.98,x:191.4,y:20.4,alpha:0.809}}]},1).to({state:[{t:this.instance_5},{t:this.instance_83},{t:this.instance_82},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1.872,scaleY:1.872,x:193,y:22,alpha:0.828}}]},1).to({state:[{t:this.instance_5},{t:this.instance_85},{t:this.instance_84},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1.763,scaleY:1.763,x:194.6,y:23.6,alpha:0.852}}]},1).to({state:[{t:this.instance_5},{t:this.instance_87},{t:this.instance_86},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1.654,scaleY:1.654,x:196.3,y:25.1,alpha:0.871}}]},1).to({state:[{t:this.instance_5},{t:this.instance_89},{t:this.instance_88},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1.545,scaleY:1.545,x:197.9,y:26.7,alpha:0.891}}]},1).to({state:[{t:this.instance_5},{t:this.instance_91},{t:this.instance_90},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1.436,scaleY:1.436,x:199.5,y:28.3,alpha:0.91}}]},1).to({state:[{t:this.instance_5},{t:this.instance_93},{t:this.instance_92},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1.327,scaleY:1.327,x:201.1,y:29.9,alpha:0.941}}]},1).to({state:[{t:this.instance_5},{t:this.instance_95},{t:this.instance_94},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1.218,scaleY:1.218,x:202.8,y:31.4,alpha:0.961}}]},1).to({state:[{t:this.instance_5},{t:this.instance_97},{t:this.instance_96},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1.109,scaleY:1.109,x:204.4,y:33,alpha:0.98}}]},1).to({state:[{t:this.instance_5},{t:this.instance_99},{t:this.instance_98},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:206,y:34.6,alpha:1}}]},1).to({state:[{t:this.instance_5},{t:this.instance_101},{t:this.instance_100},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:206,y:34.6,alpha:1}}]},1).to({state:[{t:this.instance_5},{t:this.instance_103},{t:this.instance_102},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:206,y:34.6,alpha:1}}]},1).to({state:[{t:this.instance_5},{t:this.instance_105},{t:this.instance_104},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:206,y:34.6,alpha:1}}]},1).to({state:[{t:this.instance_5},{t:this.instance_107},{t:this.instance_106},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:206,y:34.6,alpha:1}}]},1).to({state:[{t:this.instance_5},{t:this.instance_109},{t:this.instance_108},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:206,y:34.6,alpha:1}}]},1).to({state:[{t:this.instance_5},{t:this.instance_111},{t:this.instance_110},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:206,y:34.6,alpha:1}}]},1).to({state:[{t:this.instance_5},{t:this.instance_113},{t:this.instance_112},{t:this.instance_2},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:206,y:34.6,alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(218.7,9.3,444,180.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;