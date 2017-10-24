(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 370,
	height: 310,
	fps: 24,
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



(lib.Symbol112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF8402").ss(0.5).p("AAAhMIAACZ");
	this.shape.setTransform(147.2,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF8402").ss(0.5).p("AAChXIgDCv");
	this.shape_1.setTransform(146.3,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF8402").ss(0.5).p("AAFhdIgJC6");
	this.shape_2.setTransform(145.2,24.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF8402").ss(0.5).p("AAIhfIgPC/");
	this.shape_3.setTransform(144.3,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF8402").ss(0.5).p("AAAhSIACCl");
	this.shape_4.setTransform(148.2,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF8402").ss(0.5).p("AgEhHIAJCP");
	this.shape_5.setTransform(149.4,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF8402").ss(0.5).p("AgKhRIAVCj");
	this.shape_6.setTransform(150.6,23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF8402").ss(0.5).p("AgQhZIAhCz");
	this.shape_7.setTransform(152.1,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF8402").ss(0.5).p("AgRhOIAjCd");
	this.shape_8.setTransform(152.9,22.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF8402").ss(0.5).p("AgQg/IAhB/");
	this.shape_9.setTransform(153.4,21.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF8402").ss(0.5).p("AAKhJIgTCU");
	this.shape_10.setTransform(143.6,22.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF8402").ss(0.5).p("AAShSIgkCl");
	this.shape_11.setTransform(142.8,23);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF8402").ss(0.5).p("AAThEIglCJ");
	this.shape_12.setTransform(142.2,21.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF8402").ss(0.5).p("Ah8CGIBRkHIBVAAIBTEH");
	this.shape_13.setTransform(148,27.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF8402").ss(0.5).p("AABAAIBEAEQAdAFAFAHIABADIABgBIABABIAOgTIACgCQAAgIgkgGIhWgGIhVAGQgkAGAAAIIADADIASASIAAAAQABgIAegHg");
	this.shape_14.setTransform(147.9,10.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF8402").ss(0.5).p("AAAgLIgtADQgUAEAAAEQAAAEAUAEIAtAEIAvgEQATgEAAgEQAAgEgTgEg");
	this.shape_15.setTransform(148.1,13.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF8402").ss(0.5).p("AAAgIIAvADQATAEAAADQAAAFgTAEIgvAEIgtgEQgUgEAAgFQAAgDAUgEgAAAAUIBIgGQAegGABgIIAAAAIgCgCQgGgIgdgFIhCgFIhHAGQgdAGgBAIIgBAAQAAAIAfAGg");
	this.shape_16.setTransform(148.1,12.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF8402").ss(0.5).p("ABbglIhbgFIhbAFQg2AFggALQghALAAAMQAAANAfALQAdAKAyAGIgRgTIgDgEQAAgJAjgGIBVgEIBWAEQAkAGAAAJIgPAXQAwgGAbgLQAdgLAAgMQAAgMgigLQgggLg2gFg");
	this.shape_17.setTransform(147.8,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF8402").ss(0.5).p("AA1gUIgqgDIgXgCIhJAGQgeAGAAAJIAAAAQABgJAegGIBIgGIAXACAA1gUQAcAFAHAIQgGgIgdgFg");
	this.shape_18.setTransform(149.4,13.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF8402").ss(0.5).p("ABcAWQgKgUgZgLQgZgNggAAQgeAAgZANQgZALgKAUIBbgEg");
	this.shape_19.setTransform(147.5,2.3,1,1,0,0,0,-0.2,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFF5E1").s().p("AgMA2IgBAAIgBgBIAAhoIABgBIABgBIAMAAIAGABIAEACIAEAFIABAFIAAAoQAAAHgFADQgDADgHAAIgDAAIAAAkIgBAEIgEABgAgDAEIADAAIADgBIABgDIAAgoIgBgDIgDgBIgDAAg");
	this.shape_20.setTransform(294.4,23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF5E1").s().p("AgEA2IgGgCIgCgFIgBgFIAAhTQAAgGADgEQAEgDAGAAIAFAAIAGADIACAEIABAGIAABTQAAAGgDAEIgLADgAgCgsIgBADIAABTIABADIACABIADgBIABgDIAAhTIgBgDIgDgCg");
	this.shape_21.setTransform(287.5,23.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFF5E1").s().p("AAJA2IgEgBIgBgEIAAguIgHAAIAAAuIgBAEIgDABIgFAAIgBAAIgBgBIAAhoIABgBIABgBIAFAAIADABIABADIAAAtIAHAAIAAgtIABgDIAEgBIAEAAIABABIAAABIAABoIAAABIgBAAg");
	this.shape_22.setTransform(280.6,23.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF5E1").s().p("AgJA0QgEgEgBgGIAAgYIABgBIACgBIADAAQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABIABADIAAAVIACADIABABIADgBIABgDIgBgSIgPgwQgCgHAAgKIACgGIADgEIAEgDIAFAAQAHAAADADQAFAEAAAGIAAAZIgCAAIgEAAIgDgBIgCgDIAAgVIgBgDQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABIgCADIADAXIALAiIADAMIABAOIgBAFIgEAFIgEACIgGABg");
	this.shape_23.setTransform(273.7,23.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFF5E1").s().p("AgBA2IgCAAIgBgDIAAhfIgEAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgCgDIAAgCIABgBIABgBIAXAAIABABIABABIAAACIgCADIgDACIgEAAIAABfIgCADIgBAAg");
	this.shape_24.setTransform(261.5,23.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF5E1").s().p("AgJA2IgBAAIAAgBIAAhoIAAgBIABgBIATAAIABABIABABIAAACIgCADQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAIgHAAIAAAqIAJAAIABABIAAABIgBADIgDABIgGAAIAAAtIgBAEIgDABg");
	this.shape_25.setTransform(255.4,23.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFF5E1").s().p("AgBA2IgCAAIgBgDIAAhkIACgDIACgBIADAAIACABIAABnIgBADIgCAAg");
	this.shape_26.setTransform(249.8,23.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF5E1").s().p("AAIA2IgDgBIgBgEIAAgkIgBgDIgDgBIgDAAIAAAoIgBAEIgEABIgEAAIgBAAIAAgBIAAhoIAAgBIABgBIAMAAIAFABIAFACIAEAFIAAAFIAAAlIgBAEIgEADIAEAEIABAFIAAAoIAAABIgBAAgAgDAAIADAAIADAAIABgDIAAglIgBgDIgDgBIgDAAg");
	this.shape_27.setTransform(243.9,23.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFF5E1").s().p("AAJA2IgEgBIgBgEIAAguIgHAAIAAAuIgBAEIgDABIgFAAIgBAAIgBgBIAAhoIABgBIABgBIAFAAIACABIACADIAAAtIAHAAIAAgtIABgDIAEgBIAEAAIABABIAAABIAABoIAAABIgBAAg");
	this.shape_28.setTransform(237,23.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF5E1").s().p("AgBA2IgCAAIAAgDIAAhfIgGAAIgCgCIgBgDIAAgCIAAgBIABgBIAXAAIABABIABABIAAACIgBADQgBABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgFAAIAABfIgBADIgCAAg");
	this.shape_29.setTransform(230.4,23.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFF5E1").s().p("AgOBOIgBAAIgBgCIAAiXIABgCIABAAIAcAAIACAAIABACIAAAEIgCAFIgEABIgMAAIAAA9IANAAIACABIAAABIAAACIgBAFQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgKAAIAAA7IAMAAIAEACIACAEIAAAEIgBACIgCAAg");
	this.shape_30.setTransform(58,23.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFF5E1").s().p("AgOBOIgBAAIgBgCIAAiXIABgCIABAAIAdAAIABAAIABACIAAAEIgCAFIgEABIgMAAIAAA9IANAAIACABIABABIAAACIgCAFIgEACIgKAAIAABBIgBAFIgFABg");
	this.shape_31.setTransform(49.2,23.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFF5E1").s().p("AgCBOIgDgBIgBgDIAAiSIACgEQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAFAAIABAAIABACIAACVIgBADIgDABg");
	this.shape_32.setTransform(41.1,23.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFF5E1").s().p("AgOBOIgBAAIgBgCIAAiXIABgCIABAAIAHAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEIAACKIAMAAIAEACIACAEIAAAEIgBACIgCAAg");
	this.shape_33.setTransform(33.3,23.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFF5E1").s().p("AgSBOIgBAAIgBgCIAAiXIABgCIABAAIASAAQAJAAAGAFQAGAFAAAJIAAB1QAAAJgFAFQgGAFgKAAgAgFBCIAFAAQADAAACgCIABgFIAAh1IgBgFIgFgCIgFAAg");
	this.shape_34.setTransform(23.8,23.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFF5E1").s().p("AANBOIgFgBIgBgEIgCgWIgJAAIgCAWIgCAEIgEABIgGAAIgCAAIAAgCIANiXIAAgCIACAAIALAAIABAAIABACIAOCXIgBACIgDAAgAgDAnIAIAAIgFhTg");
	this.shape_35.setTransform(14.1,23.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFF5E1").s().p("AAWBOIgFgBQgBgCAAgDIADhtIgMBuIgCAEIgFABIAAAAIgEgBIgCgEIgMhuIADBtIgBAFIgFABIgGAAIgCAAIgBgCIAAiXIABgCIACAAIAHAAIAEAAIADADIADAHIACANIAIBdIALhqIADgHIADgDIADAAIAJAAIABAAIABACIAACXIgBACIgBAAg");
	this.shape_36.setTransform(3.1,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,295.9,43.1);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF8402").p("AksAAIJZAA");
	this.shape.setTransform(187.3,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF8402").p("AksAAIJZAA");
	this.shape_1.setTransform(187.3,31.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF8402").p("AmlAAINKAA");
	this.shape_2.setTransform(102.2,29);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF8402").p("AhdAAIC8AA");
	this.shape_3.setTransform(41.1,29);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF8402").p("AAvAAQAAATgOAOQgOANgTAAQgRAAgOgNQgPgOAAgTQAAgRAPgPQAOgNARAAQATAAAOANQAOAPAAARg");
	this.shape_4.setTransform(55.3,29);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF8402").p("AAvAAQAAATgOAOQgOANgTAAQgSAAgNgNQgOgOAAgTQAAgRAOgPQANgNASAAQATAAAOANQAOAPAAARg");
	this.shape_5.setTransform(26.9,29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF8402").ss(3).p("AlzAAILnAA");
	this.shape_6.setTransform(53.7,37.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFAD01").p("ABIh0IjUDuIEeAAg");
	this.shape_7.setTransform(90.7,46.4,1,1,0,0,0,0,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFAD01").p("ABjBRIgvicIiRCcg");
	this.shape_8.setTransform(104.2,50.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFAD01").p("AAwAgIhahjIAsCSg");
	this.shape_9.setTransform(102.5,41.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFAD01").s().p("AgthIIBbBjIguAug");
	this.shape_10.setTransform(102.8,42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFAD01").p("AAlAYIhGhNIAhB0g");
	this.shape_11.setTransform(113.1,48);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFAD01").s().p("Agig6IBGBNIgmAng");
	this.shape_12.setTransform(113.3,48.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFAD01").p("AAuA6IhbhkIAgBkg");
	this.shape_13.setTransform(123.7,52.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFAD01").s().p("AgNAzIgghlIBbBlg");
	this.shape_14.setTransform(123.8,53.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFAD01").p("ABBA1IgghkIhcBkg");
	this.shape_15.setTransform(115.7,53,1,1,0,0,0,-0.1,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF8402").s().p("AheBgQgogogBg4QABg2AogoQAogoA2gBQA4ABAnAoQAoAoAAA2QAAA4goAoQgnAng4AAQg2AAgogng");
	this.shape_16.setTransform(114.2,41.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFAD01").p("AAAhvIBvBvIhvBvIhvhvg");
	this.shape_17.setTransform(247.8,41.8,1,1,0,0,0,0,0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFAD01").p("AAABwIhvhwIBvhvIBwBvg");
	this.shape_18.setTransform(259,41.9,1,1,0,0,0,0,-0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCE67").s().p("AgVAQIAAgCIAHAAIAAACQAAAQAOAAQAPAAAAgPQAAgKgQgGQgSgEAAgOQAAgJAFgFQAGgGAIAAQAUAAAAAUIgHAAQAAgOgNAAQgFAAgEAEQgDADAAAGQAAALAQAGQASAEAAANQAAAWgWAAQgVAAAAgWg");
	this.shape_19.setTransform(79.3,44.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCE67").s().p("AgCAlIAAhJIAFAAIAABJg");
	this.shape_20.setTransform(75.9,44.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCE67").s().p("AgCAlIAAhDIgTAAIAAgGIArAAIAAAGIgTAAIAABDg");
	this.shape_21.setTransform(72.6,44.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCE67").s().p("AATAlIgGgWIgYAAIgGAWIgIAAIAWhJIAHAAIAWBJgAgKAJIAVAAIgLgnIAAAAg");
	this.shape_22.setTransform(68.3,44.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCE67").s().p("AAOAlIgCgLIgBgGQAAgKgCgEQgDgDgHAAIgNAAIAAAiIgHAAIAAhJIAVAAQATAAAAATQAAAQgOABIAAAAQANABABARIAAAIQAAAHACAEgAgOgBIALAAQAQAAgBgOQABgPgPAAIgMAAg");
	this.shape_23.setTransform(63.3,44.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCE67").s().p("AgVAAQAAglAWAAQAUAAABAWIgHAAQAAgHgDgEQgEgFgHAAQgPAAAAAfQAAAgAPAAQAPAAAAgaIAAgCIgQAAIAAgEIAWAAIAAAlIgFAAIAAgNIAAAAQgDAOgNAAQgWAAAAgmg");
	this.shape_24.setTransform(57.7,44.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCE67").s().p("AASAlIgFgWIgYAAIgHAWIgHAAIAXhJIAGAAIAVBJgAgKAJIAVAAIgLgng");
	this.shape_25.setTransform(49.8,44.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCE67").s().p("AgVAlIAAhJIASAAQANAAAHAKQAFAIAAASQAAATgFAIQgHAKgNAAgAgOAfIAKAAQAKAAAEgHQAFgHABgRQgBgQgFgHQgEgHgKAAIgKAAg");
	this.shape_26.setTransform(44.5,44.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCE67").s().p("AATAlIgGgWIgYAAIgGAWIgIAAIAWhJIAHAAIAWBJgAgKAJIAVAAIgLgnIAAAAg");
	this.shape_27.setTransform(39,44.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCE67").s().p("AAOAlIgCgLIgBgGQAAgKgCgEQgDgDgHAAIgNAAIAAAiIgHAAIAAhJIAVAAQATAAAAATQAAAQgOABIAAAAQANABABARIAAAIQAAAHACAEgAgOgBIAMAAQAOAAAAgOQABgPgPAAIgMAAg");
	this.shape_28.setTransform(34,44.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCE67").s().p("AgCAlIAAhDIgTAAIAAgGIArAAIAAAGIgTAAIAABDg");
	this.shape_29.setTransform(28.9,44.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCE67").s().p("AANAlIgbg/IAAA/IgHAAIAAhJIAJAAIAbA/IAAg/IAHAAIAABJg");
	this.shape_30.setTransform(23.8,44.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCE67").s().p("AgRAlIAAhJIAiAAIAAAGIgcAAIAAAbIAbAAIAAAEIgbAAIAAAeIAdAAIAAAGg");
	this.shape_31.setTransform(18.9,44.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCE67").s().p("AAIAuIAAgYIgiAAIAAgIIAig7IAIAAIAAA8IALAAIAAAHIgLAAIAAAYgAgSAPIAaAAIAAgug");
	this.shape_32.setTransform(357.4,52.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCE67").s().p("AgRAnQgHgGAAgNIAIAAQAAAJAFAFQAEAFAHAAQARAAAAgaQAAgVgRAAQgLAAgEAIIgHAAIAFgtIAmAAIAAAIIggAAIgEAfIAAABQAFgKALAAQALAAAHAIQAGAHAAAOQAAAPgGAHQgIAKgLgBQgLAAgGgGg");
	this.shape_33.setTransform(351.2,52.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCE67").s().p("AgMADIAAgFIAaAAIAAAFg");
	this.shape_34.setTransform(345.9,53.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCE67").s().p("AgRAoQgGgGAAgJIAJAAQAAAPAOAAQARAAAAgoQgEANgOAAQgYAAAAgbQAAgOAGgIQAHgJAMAAQAOAAAGALQAGAKAAAXQAAAXgGALQgHANgNAAQgLAAgGgGgAgQgPQAAAVAQAAQAQAAAAgVQAAgYgQAAQgQAAAAAYg");
	this.shape_35.setTransform(340.6,52.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCE67").s().p("AgRAnQgHgGAAgNIAIAAQAAAJAFAFQAEAFAHAAQARAAAAgaQAAgVgRAAQgLAAgEAIIgHAAIAFgtIAmAAIAAAIIggAAIgEAfIAAABQAFgKALAAQALAAAHAIQAGAHAAAOQAAAPgGAHQgIAKgLgBQgLAAgGgGg");
	this.shape_36.setTransform(334.4,52.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCE67").s().p("AACAtIADgeIgNAAIgEAeIgHAAIAEgeIgOAAIAAgFIAPAAIACgTIgOAAIAAgFIAPAAIAEgeIAHAAIgEAeIAOAAIADgeIAHAAIgEAeIAOAAIAAAFIgPAAIgCATIAOAAIAAAFIgPAAIgEAegAgIAKIAOAAIADgTIgOAAg");
	this.shape_37.setTransform(325,52.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCE67").s().p("AgOAtQABgTAJgYQAIgWAOgRIgqAAIAAgHIAxAAIAAAHQgOASgJAWQgGAWgCAUg");
	this.shape_38.setTransform(315.7,52.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCE67").s().p("AAIAuIAAgYIgiAAIAAgIIAig7IAHAAIAAA8IALAAIAAAHIgLAAIAAAYgAgTAPIAbAAIAAguIgBAAg");
	this.shape_39.setTransform(309.5,52.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFCE67").s().p("AAXAuIgHgbIgeAAIgIAbIgJAAIAbhbIAJAAIAbBbgAgNAMIAbAAIgOgzg");
	this.shape_40.setTransform(300,52.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCE67").s().p("AARAuIgDgNIAAgIQAAgNgDgDQgEgFgJgBIgQAAIAAArIgIAAIAAhbIAaAAQAXAAABAXQgBAVgQABQAQACAAAUIAAALQAAAJAEAEgAgSgBIAPAAQASAAAAgSQAAgTgRAAIgQAAg");
	this.shape_41.setTransform(293.7,52.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFCE67").s().p("AgbAAQAAgvAcABQANgBAHAJQAGAIAAAMIgIAAQAAgVgSgBQgUAAAAAoQAAAoAUAAQARAAACgZIAIAAQgCAggZAAQgcAAAAgvg");
	this.shape_42.setTransform(287,52.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCE67").s().p("AgcAAQAAgvAcAAQAdAAAAAvQAAAvgdABQgcgBAAgvgAgUAAQAAApAUgBQAVABAAgpQAAgngVgBQgUABAAAng");
	this.shape_43.setTransform(356.9,37);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCE67").s().p("AgDAuIAAhbIAHAAIAABbg");
	this.shape_44.setTransform(352.1,37);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCE67").s().p("AgbAAQAAgvAbAAQAOAAAHAJQAGAIAAAMIgIAAQAAgVgTgBQgTABAAAnQAAApATgBQASAAACgaIAIAAQgCAigaAAQgbgBAAgvg");
	this.shape_45.setTransform(347.7,37);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFCE67").s().p("AgYAuIAAhbIAYAAQAZAAAAAaQAAAZgbAAIgOAAIAAAogAgQAAIAPAAQARAAAAgTQAAgTgRAAIgPAAg");
	this.shape_46.setTransform(341.2,37);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCE67").s().p("AgDAuIAAhbIAGAAIAABbg");
	this.shape_47.setTransform(336.8,37);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFCE67").s().p("AgbAAQAAgvAcAAQAZAAABAcIgIAAQAAgIgEgGQgGgHgIAAQgUABAAAnQAAApAUgBQATABAAgiIAAgBIgUAAIAAgGIAcAAIAAAuIgHAAIAAgQQgCAJgGAEIgMAFQgcgBAAgvg");
	this.shape_48.setTransform(332.1,37);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCE67").s().p("AgWAuIAAhbIAsAAIAAAHIgkAAIAAAiIAhAAIAAAFIghAAIAAAmIAlAAIAAAHg");
	this.shape_49.setTransform(325.9,37);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFCE67").s().p("AgcAAQAAgvAcAAQAdAAAAAvQAAAvgdABQgcgBAAgvgAgUAAQAAApAUgBQAVABAAgpQAAgngVgBQgUABAAAng");
	this.shape_50.setTransform(316.1,37);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCE67").s().p("AgDAuIAAhbIAHAAIAABbg");
	this.shape_51.setTransform(311.3,37);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFCE67").s().p("AgbAAQAAgvAcAAQANAAAHAJQAGAIAAAMIgIAAQAAgJgFgGQgFgHgIAAQgUABAAAnQAAApAUgBQASAAABgaIAIAAQgCAigZAAQgcgBAAgvg");
	this.shape_52.setTransform(306.9,37);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCE67").s().p("AAXAuIgIgbIgeAAIgHAbIgJAAIAbhbIAJAAIAbBbgAgNAMIAbAAIgOgyg");
	this.shape_53.setTransform(300.1,37);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFCE67").s().p("AgWAuIAAhbIAIAAIAABUIAlAAIAAAHg");
	this.shape_54.setTransform(294.4,37);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCE67").s().p("AAXAuIgHgbIgeAAIgIAbIgJAAIAbhbIAJAAIAbBbgAgNAMIAbAAIgOgyg");
	this.shape_55.setTransform(288.1,37);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFCE67").s().p("AgYAuIAAhbIAYAAQAZAAAAAaQAAAZgbAAIgOAAIAAAogAgQAAIAPAAQARAAAAgTQAAgTgRAAIgPAAg");
	this.shape_56.setTransform(282.3,37);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_57.setTransform(79.9,5.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_58.setTransform(79.9,7.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF8402").p("AqbAUICMgnICHAnICZgnICrAnICcgnICdAnICignICiAnIBjgn");
	this.shape_59.setTransform(79.9,9.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF8402").p("AqbAUICMgnICHAnICZgnICrAnICcgnICdAnICignICiAnIBjgn");
	this.shape_60.setTransform(79.9,11.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_61.setTransform(79.9,13.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_62.setTransform(79.9,15.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_63.setTransform(79.9,17.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_64.setTransform(79.9,19.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICcgmICdAmICigmICiAmIBjgm");
	this.shape_65.setTransform(79.9,21.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF8402").p("AqbAUICMgnICHAnICZgnICrAnICcgnICdAnICignICiAnIBjgn");
	this.shape_66.setTransform(79.9,23.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_67.setTransform(296.8,5.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_68.setTransform(296.8,7.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF8402").p("AqbAUICMgnICHAnICZgnICrAnICbgnICeAnICignICiAnIBjgn");
	this.shape_69.setTransform(296.8,9.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF8402").p("AqbAUICMgnICHAnICZgnICrAnICbgnICeAnICignICiAnIBjgn");
	this.shape_70.setTransform(296.8,11.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_71.setTransform(296.8,13.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_72.setTransform(296.8,15.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_73.setTransform(296.8,17.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_74.setTransform(296.8,19.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FF8402").p("AqbATICMgmICHAmICZgmICrAmICbgmICeAmICigmICiAmIBjgm");
	this.shape_75.setTransform(296.8,21.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FF8402").p("AqbAUICMgnICHAnICZgnICrAnICbgnICeAnICignICiAnIBjgn");
	this.shape_76.setTransform(296.8,23.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FF8402").ss(3).p("AqbAAIU3AA");
	this.shape_77.setTransform(296.8,28);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FF8402").ss(2).p("AomAAIRNAA");
	this.shape_78.setTransform(308.5,59.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCE67").s().p("AAWAlIAAhCIAAAAIgTBCIgFAAIgThCIAABCIgHAAIAAhJIAMAAIAQBAIAAAAIAShAIALAAIAABJg");
	this.shape_79.setTransform(62.8,54.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFCE67").s().p("AgTAlIAAhJIATAAQAUAAAAAVQAAATgVAAIgLAAIAAAhgAgMAAIALAAQAOAAAAgPQAAgPgOAAIgLAAg");
	this.shape_80.setTransform(56.9,54.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCE67").s().p("AgNAfQgGgGAAgKQAAgHADgFQAEgEAGAAIAAgBQgLgCAAgOQAAgSARAAQASAAAAASQAAAOgLACIAAABQANABAAAPQAAAKgFAGQgGAGgJAAQgIAAgFgGgAgMAPQAAARAMAAQAGAAAEgFQAEgFAAgHQAAgHgEgEQgEgEgGAAQgMAAAAAPgAgKgRQAAANAKAAQALAAAAgNQAAgOgLAAQgKAAAAAOg");
	this.shape_81.setTransform(51.8,54.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFCE67").s().p("AgKACIAAgDIAVAAIAAADg");
	this.shape_82.setTransform(45.1,55.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFCE67").s().p("AAWAlIAAhCIAAAAIgTBCIgFAAIgThCIAAAAIAABCIgHAAIAAhJIAMAAIAQBAIAShAIALAAIAABJg");
	this.shape_83.setTransform(37.3,54.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFCE67").s().p("AATAlIgHgWIgYAAIgGAWIgGAAIAVhJIAHAAIAVBJgAgKAJIAVAAIgLgng");
	this.shape_84.setTransform(31.1,54.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFCE67").s().p("AAFAkIAAg2IgPAAIAAgFQAPAAABgMIAFAAIAABHg");
	this.shape_85.setTransform(23.3,54.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFCE67").s().p("AAFAkIAAg2IgPAAIAAgFQAPAAABgMIAFAAIAABHg");
	this.shape_86.setTransform(18.3,54.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FF8402").p("AhEAAICJAA");
	this.shape_87.setTransform(164.3,15.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FF8402").p("AhEAAICJAA");
	this.shape_88.setTransform(164.3,14.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FF8402").p("AhEAAICJAA");
	this.shape_89.setTransform(164.3,12.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FF8402").p("AhEAAICJAA");
	this.shape_90.setTransform(164.3,10.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FF8402").p("AhEAAICJAA");
	this.shape_91.setTransform(164.3,9.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FF8402").p("AhEAAICJAA");
	this.shape_92.setTransform(164.3,7.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FF8402").p("AhEAAICJAA");
	this.shape_93.setTransform(164.3,5.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FF8402").p("AhJAAICTAA");
	this.shape_94.setTransform(210.8,15.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FF8402").p("AhJAAICTAA");
	this.shape_95.setTransform(210.8,14.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FF8402").p("AhJAAICTAA");
	this.shape_96.setTransform(210.8,12.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FF8402").p("AhJAAICTAA");
	this.shape_97.setTransform(210.8,10.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FF8402").p("AhJAAICTAA");
	this.shape_98.setTransform(210.8,9.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FF8402").p("AhJAAICTAA");
	this.shape_99.setTransform(210.8,7.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FF8402").p("AhJAAICTAA");
	this.shape_100.setTransform(210.8,5.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCE67").s().p("AAbA2IgJggIgkAAIgJAgIgKAAIAghrIAKAAIAhBrgAgQAOIAgAAIgQg8IAAAAg");
	this.shape_101.setTransform(213.6,23.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFCE67").s().p("AgEA2IAAhjIgcAAIAAgIIBBAAIAAAIIgdAAIAABjg");
	this.shape_102.setTransform(207.2,23.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFCE67").s().p("AgaA2IAAhrIA0AAIAAAIIgqAAIAAAoIAnAAIAAAGIgnAAIAAAtIArAAIAAAIg");
	this.shape_103.setTransform(200.6,23.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFCE67").s().p("AAVA2QgDgEAAgLIgBgJQAAgPgEgFQgFgGgLAAIgSAAIAAAyIgKAAIAAhrIAfAAQAcAAAAAbQAAAYgUACIAAAAQAKABAFAGQAEAGAAANIAAAMQABAMAEAEgAgVgCIARAAQAWAAAAgWQAAgVgVAAIgSAAg");
	this.shape_104.setTransform(193.4,23.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCE67").s().p("AggAAQAAg3AhAAQAQAAAIAKQAHAJAAAPIgKAAQAAgMgFgHQgGgHgKAAQgYAAAAAvQAAAwAYAAQAVAAABgfIAKAAQgCAngeAAQghAAAAg4g");
	this.shape_105.setTransform(185.4,23.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFCE67").s().p("AATA2IgohdIAAAAIAABdIgKAAIAAhrIANAAIAoBdIAAhdIAKAAIAABrg");
	this.shape_106.setTransform(177.1,23.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFCE67").s().p("AgiAAQAAg3AiAAQAjAAAAA3QAAA4gjAAQgiAAAAg4gAgYAAQAAAwAYAAQAZAAAAgwQAAgvgZAAQgYAAAAAvg");
	this.shape_107.setTransform(168.7,23.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFCE67").s().p("AggAAQgBg3AiAAQAPAAAJAKQAHAJAAAPIgKAAQAAgMgFgHQgGgHgKAAQgYAAABAvQgBAwAYAAQAVAAABgfIAKAAQgCAngeAAQgiAAABg4g");
	this.shape_108.setTransform(160.6,23.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFCE67").s().p("AAcA2IgJggIglAAIgJAgIgKAAIAghrIALAAIAgBrgAgQAOIAhAAIgRg7IAAAAg");
	this.shape_109.setTransform(198.9,11.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFCE67").s().p("AgEA2IAAhrIAIAAIAABrg");
	this.shape_110.setTransform(193.7,11.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFCE67").s().p("AAUA2QgCgDgBgMIAAgJQAAgPgEgFQgEgGgLAAIgTAAIAAAyIgKAAIAAhrIAfAAQANAAAIAHQAIAHgBANQABAYgVACIAAABQALAAAEAHQAEAFAAAOIAAALQABALAEAFgAgVgCIARAAQAXAAgBgWQABgVgWAAIgSAAg");
	this.shape_111.setTransform(188.7,11.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFCE67").s().p("AgaA2IAAhrIA0AAIAAAIIgqAAIAAAoIAoAAIAAAGIgoAAIAAAtIArAAIAAAIg");
	this.shape_112.setTransform(181.4,11.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFCE67").s().p("AgaA2IAAhrIA1AAIAAAIIgrAAIAAAoIAoAAIAAAGIgoAAIAAA1g");
	this.shape_113.setTransform(174.7,11.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FF8402").p("AAAAxIhbhjIC3AAg");
	this.shape_114.setTransform(339.1,69,1,1,0,0,0,0,-0.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373330").s().p("AhbgxIC3AAIhcBjg");
	this.shape_115.setTransform(339.1,69.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FF8402").p("AgnAAQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPQAAARgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgRg");
	this.shape_116.setTransform(339.1,72.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#373330").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgNAPAAQARAAALANQAMAMAAAPQAAAQgMAMQgLANgRAAQgPAAgMgNg");
	this.shape_117.setTransform(339.1,72.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FF8402").p("Ag0AAQAAgVAQgPQAPgQAVAAQAWAAAQAQQAPAPAAAVQAAAWgPAPQgQAQgWAAQgVAAgPgQQgQgPAAgWg");
	this.shape_118.setTransform(339.2,73.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#373330").s().p("AglAmQgPgRAAgVQAAgUAPgRQAQgPAVAAQAVAAARAPQAPARAAAUQAAAVgPARQgRAPgVAAQgVAAgQgPg");
	this.shape_119.setTransform(339.2,73.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FF8402").p("AhcAzIBchjIBcBjg");
	this.shape_120.setTransform(350.1,75.7,1,1,0,0,0,0.4,0);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#373330").s().p("AhbAyIBbhjIBcBjg");
	this.shape_121.setTransform(349.7,75.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FF8402").p("AApAAQAAARgMAMQgMALgRAAQgPAAgMgLQgMgMAAgRQAAgQAMgMQAMgLAPAAQARAAAMALQAMAMAAAQg");
	this.shape_122.setTransform(349.7,72.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#373330").s().p("AgbAdQgNgMAAgRQAAgQANgMQAMgMAPABQAQgBAMAMQANAMAAAQQAAARgNAMQgMAMgQgBQgPABgMgMg");
	this.shape_123.setTransform(349.7,72.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FF8402").p("AAmgkQAPAQAAAUQAAAWgPAQQgQAPgWAAQgUAAgQgPQgQgQAAgWQAAgUAQgQQAQgQAUAAQAWAAAQAQg");
	this.shape_124.setTransform(349.7,71.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#373330").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgQAVAAQAWAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape_125.setTransform(349.7,71.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FF8402").p("AAAgwIBcBjIi4AAg");
	this.shape_126.setTransform(328.3,75.9,1,1,0,0,0,0,0.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#373330").s().p("AhcAyIBchjIBcBjg");
	this.shape_127.setTransform(328.3,75.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FF8402").p("AAcgcQAMAMAAAQQAAARgMAMQgLALgRAAQgPAAgMgLQgMgMAAgRQAAgQAMgMQAMgLAPAAQARAAALALg");
	this.shape_128.setTransform(328.3,72.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#373330").s().p("AgbAdQgMgMAAgRQAAgQAMgMQAMgMAPABQARgBALAMQAMAMAAAQQAAARgMAMQgLAMgRgBQgPABgMgMg");
	this.shape_129.setTransform(328.3,72.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FF8402").p("AAmAmQgQAPgWAAQgUAAgQgPQgQgQAAgWQAAgUAQgQQAQgQAUAAQAWAAAQAQQAPAQAAAUQAAAWgPAQg");
	this.shape_130.setTransform(328.3,71.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#373330").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgQAVAAQAVAAARAQQAPAPAAAVQAAAWgPAPQgRAQgVAAQgVAAgPgQg");
	this.shape_131.setTransform(328.3,71.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FF8402").p("AhcAzIBchjIBdBjg");
	this.shape_132.setTransform(269.2,75.7,1,1,0,0,0,0.4,0);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#373330").s().p("AhbAyIBbhjIBcBjg");
	this.shape_133.setTransform(268.8,75.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FF8402").p("AApAAQAAARgNAMQgMALgQAAQgPAAgMgLQgNgMAAgRQAAgQANgMQAMgLAPAAQAQAAAMALQANAMAAAQg");
	this.shape_134.setTransform(268.8,72.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#373330").s().p("AgbAdQgMgMAAgRQAAgQAMgMQAMgMAPABQAQgBAMAMQANAMAAAQQAAARgNAMQgMAMgQgBQgPABgMgMg");
	this.shape_135.setTransform(268.8,72.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FF8402").p("AAmgkQAPAQAAAUQAAAWgPAQQgRAPgVAAQgUAAgRgPQgPgQAAgWQAAgUAPgQQARgQAUAAQAVAAARAQg");
	this.shape_136.setTransform(268.8,71.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#373330").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgQAVAAQAWAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape_137.setTransform(268.8,71.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#FF8402").p("ABcgyIhcBjIhbhjg");
	this.shape_138.setTransform(298.8,69.2,1,1,0,0,0,-0.4,0);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#373330").s().p("AhbgxIC3AAIhcBjg");
	this.shape_139.setTransform(299.2,69.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FF8402").p("AgnAAQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMAMQgMAMgQAAQgQAAgLgMQgMgMAAgRg");
	this.shape_140.setTransform(299.2,72.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#373330").s().p("AgbAcQgMgMAAgQQAAgPAMgMQALgNAQAAQAQAAAMANQAMAMAAAPQAAAQgMAMQgMANgQAAQgQAAgLgNg");
	this.shape_141.setTransform(299.2,72.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FF8402").p("Ag0AAQAAgVAQgPQAQgQAUAAQAWAAAQAQQAPAPAAAVQAAAWgPAPQgQAQgWAAQgUAAgQgQQgQgPAAgWg");
	this.shape_142.setTransform(299.2,73.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373330").s().p("AgkAmQgQgRAAgVQAAgUAQgRQAPgPAVAAQAWAAAPAPQAQARAAAUQAAAVgQARQgPAPgWAAQgVAAgPgPg");
	this.shape_143.setTransform(299.2,73.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FF8402").p("AhcAzIBchjIBcBjg");
	this.shape_144.setTransform(310.1,75.7,1,1,0,0,0,0.4,0);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#373330").s().p("AhbAyIBbhjIBcBjg");
	this.shape_145.setTransform(309.7,75.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FF8402").p("AAoAAQAAARgMAMQgMALgQAAQgQAAgMgLQgMgMAAgRQAAgQAMgMQAMgLAQAAQAQAAAMALQAMAMAAAQg");
	this.shape_146.setTransform(309.7,72.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#373330").s().p("AgbAdQgMgMAAgRQAAgQAMgMQAMgMAPABQAQgBAMAMQANAMAAAQQAAARgNAMQgMAMgQgBQgPABgMgMg");
	this.shape_147.setTransform(309.7,72.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FF8402").p("AAlgkQAQAQAAAUQAAAWgQAQQgQAPgVAAQgVAAgQgPQgPgQAAgWQAAgUAPgQQAQgQAVAAQAVAAAQAQg");
	this.shape_148.setTransform(309.7,71.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#373330").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgQAVAAQAWAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape_149.setTransform(309.7,71.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FF8402").p("AAAgwIBcBjIi3AAg");
	this.shape_150.setTransform(288.3,75.9,1,1,0,0,0,0,0.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#373330").s().p("AhbAyIBbhjIBcBjg");
	this.shape_151.setTransform(288.3,75.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FF8402").p("AAcgcQAMAMAAAQQAAARgMAMQgLALgRAAQgPAAgMgLQgMgMAAgRQAAgQAMgMQAMgLAPAAQARAAALALg");
	this.shape_152.setTransform(288.3,72.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#373330").s().p("AgbAdQgMgMAAgRQAAgQAMgMQAMgMAPABQARgBALAMQAMAMAAAQQAAARgMAMQgLAMgRgBQgPABgMgMg");
	this.shape_153.setTransform(288.3,72.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FF8402").p("AAAg0QAVAAAQAQQAQAQAAAUQAAAWgQAQQgQAPgVAAQgVAAgQgPQgPgQAAgWQAAgUAPgQQAQgQAVAAg");
	this.shape_154.setTransform(288.4,71.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#373330").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgQAVAAQAWAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape_155.setTransform(288.4,71.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#FF8402").ss(2).p("AH1C/QhUBngkB/Iw5AAIAAtJIV5AAIAAHBQh0A7hUBng");
	this.shape_156.setTransform(80.1,42.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#FF8402").ss(2).p("AK9mkI15AAIAAHBQB0A7BUBnQBUBnAkB/IQ5AAg");
	this.shape_157.setTransform(296.1,42.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#FFEFCC").p("AAYgPIgvAg");
	this.shape_158.setTransform(137.6,153.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#FFEFCC").p("AARgOIghAd");
	this.shape_159.setTransform(144,159.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#FFEFCC").p("AAQgNIgfAb");
	this.shape_160.setTransform(137.8,164.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#FFEFCC").p("AAUgVIgnAr");
	this.shape_161.setTransform(151.5,164.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#FFEFCC").p("AAWgXIgrAv");
	this.shape_162.setTransform(141.9,175.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#FFEFCC").p("AAKgJIgTAT");
	this.shape_163.setTransform(135.7,181.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#FFEFCC").p("AAWgaIgrA1");
	this.shape_164.setTransform(157.6,170.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#FFEFCC").p("AAsg0IhWBp");
	this.shape_165.setTransform(150,179.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#FFEFCC").p("AAPgRIgdAj");
	this.shape_166.setTransform(143.1,187.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#FFEFCC").p("AAQgYIgfAx");
	this.shape_167.setTransform(164.9,172.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#FFEFCC").p("AAlg4IhJBx");
	this.shape_168.setTransform(153.3,190);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#FFEFCC").p("AAKgPIgTAf");
	this.shape_169.setTransform(146.4,200.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#FFEFCC").p("AAjhFIhFCL");
	this.shape_170.setTransform(169.2,178.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#FFEFCC").p("AAKgTIgTAn");
	this.shape_171.setTransform(162.7,191.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#FFEFCC").p("AAihDIhDCH");
	this.shape_172.setTransform(157.3,202.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#FFEFCC").p("AALgVIgVAr");
	this.shape_173.setTransform(151.8,213.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#FFEFCC").p("AAIgiIgPBF");
	this.shape_174.setTransform(177.3,176.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#FFEFCC").p("AARhMIghCZ");
	this.shape_175.setTransform(174.2,190.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#FFEFCC").p("AANg5IgZBz");
	this.shape_176.setTransform(168.6,215.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#FFEFCC").p("AAKhZIgTCz");
	this.shape_177.setTransform(182.7,183.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#FFEFCC").p("AACgWIgDAt");
	this.shape_178.setTransform(180.7,201);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#FFEFCC").p("AADgaIgEA0");
	this.shape_179.setTransform(179.4,212.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#FFEFCC").p("AADgcIgFA5");
	this.shape_180.setTransform(178.5,220.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#FFEFCC").p("AgXgQIAvAg");
	this.shape_181.setTransform(242.2,153.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#FFEFCC").p("AgQgOIAhAd");
	this.shape_182.setTransform(235.9,158.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#FFEFCC").p("AgPgNIAfAb");
	this.shape_183.setTransform(242.1,164.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#FFEFCC").p("AgTgVIAnAr");
	this.shape_184.setTransform(228.4,164.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#FFEFCC").p("AgVgWIArAu");
	this.shape_185.setTransform(238,174.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#FFEFCC").p("AgJgJIATAT");
	this.shape_186.setTransform(244.2,181.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#FFEFCC").p("AgVgaIArA1");
	this.shape_187.setTransform(222.3,169.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#FFEFCC").p("Agqg0IBVBp");
	this.shape_188.setTransform(229.9,178.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#FFEFCC").p("AgOgSIAdAl");
	this.shape_189.setTransform(236.8,187.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#FFEFCC").p("AgPgYIAfAx");
	this.shape_190.setTransform(214.9,171.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#FFEFCC").p("Agkg4IBJBx");
	this.shape_191.setTransform(226.6,189.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#FFEFCC").p("AgJgPIATAf");
	this.shape_192.setTransform(233.5,200.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FFEFCC").p("AgihFIBFCL");
	this.shape_193.setTransform(210.7,178);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#FFEFCC").p("AgJgTIATAn");
	this.shape_194.setTransform(217.2,191.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#FFEFCC").p("AghhDIBDCH");
	this.shape_195.setTransform(222.5,201.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#FFEFCC").p("AgKgVIAVAr");
	this.shape_196.setTransform(228,212.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#FFEFCC").p("AgHgiIAPBF");
	this.shape_197.setTransform(202.6,176.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#FFEFCC").p("AgQhMIAhCZ");
	this.shape_198.setTransform(205.7,189.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#FFEFCC").p("AgMg5IAYBz");
	this.shape_199.setTransform(211.3,214.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#FFEFCC").p("AgJhZIATCz");
	this.shape_200.setTransform(197.2,182.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#FFEFCC").p("AgBgWIADAt");
	this.shape_201.setTransform(199.2,200.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#FFEFCC").p("AgCgZIAFA0");
	this.shape_202.setTransform(200.5,211.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#FFEFCC").p("AgCgcIAFA5");
	this.shape_203.setTransform(201.4,219.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FFEFCC").p("AgFgdIAMA7");
	this.shape_204.setTransform(208.7,203.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#FFEFCC").p("AAAgxIAABj");
	this.shape_205.setTransform(190.8,178.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#FFEFCC").p("AAAh8IAAD5");
	this.shape_206.setTransform(190.8,200.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#FFEFCC").p("AAAgPIAAAf");
	this.shape_207.setTransform(190.8,221.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#FFEFCC").p("AgEgEIAJAJ");
	this.shape_208.setTransform(238.2,160.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#FFEFCC").p("AgEgEIAJAJ");
	this.shape_209.setTransform(240.7,177.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FFEFCC").p("AgFgJIALAT");
	this.shape_210.setTransform(235.3,202.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#FFEFCC").p("AgDgIIAHAR");
	this.shape_211.setTransform(214.7,186.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#FFEFCC").p("AAAgCIAAAF");
	this.shape_212.setTransform(207.9,199.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#FFEFCC").p("AAAgGIAAAN");
	this.shape_213.setTransform(199.6,203.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#FFEFCC").p("AAAgPIABAf");
	this.shape_214.setTransform(200,207.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#FFEFCC").p("AAAgRIAAAj");
	this.shape_215.setTransform(190.8,214.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#FF8402").ss(2).p("ACFB4IkJAAICEjlg");
	this.shape_216.setTransform(174.4,239.8,1,1,0,0,0,-0.4,0);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#FF8402").ss(2).p("AAAhtICFDlIkJAAg");
	this.shape_217.setTransform(207.2,240.6,1,1,0,0,0,0,0.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#FF8402").ss(2).p("Ai6CnIC6lDIC7FDg");
	this.shape_218.setTransform(191.4,243.3,1,1,0,0,0,0.4,0);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFCE67").s().p("AgPAtQACgTAJgYQAIgWAOgRIgrAAIAAgHIAzAAIAAAHQgOASgKAWQgGAWgCAUg");
	this.shape_219.setTransform(85.4,69.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFCE67").s().p("AAGAuIAAhFIgTAAIAAgGQAUAAABgPIAGAAIAABag");
	this.shape_220.setTransform(78.4,69);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFCE67").s().p("AgTAhQgFgLAAgWQAAgVAFgLQAGgNANAAQAOAAAGANQAFALAAAVQAAAWgFALQgGANgOAAQgNAAgGgNgAgMgeQgEAKAAAUQAAAWAEAJQAEAJAIAAQAJAAAEgJQAEgJAAgWQAAgUgEgKQgEgJgJAAQgIAAgEAJg");
	this.shape_221.setTransform(72.9,69.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFCE67").s().p("AgYAuQAAgTATgRIAIgIQANgJAAgMQAAgTgQAAQgPAAgBAXIgIAAQAAgdAYAAQAKAAAHAFQAHAHAAAMQAAARgPAKIgJAIQgOAMgBAMIAoAAIAAAHg");
	this.shape_222.setTransform(66.7,69);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFCE67").s().p("AAIAuIAAgYIgiAAIAAgIIAig6IAIAAIAAA7IAKAAIAAAHIgKAAIAAAYgAgTAPIAbAAIAAguIgBAAg");
	this.shape_223.setTransform(57.4,69);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFCE67").s().p("AgcAAQAAguAcAAQAdAAAAAuQAAAvgdAAQgcAAAAgvgAgUAAQAAAoAUAAQAUAAAAgoQAAgngUAAQgUAAAAAng");
	this.shape_224.setTransform(47.5,69);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFCE67").s().p("AgaAuIAAgIIAshMIgpAAIAAgHIAxAAIAAAIIgqBMIArAAIAAAHg");
	this.shape_225.setTransform(40.9,69);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFCE67").s().p("AARAuQgCgEAAgJIAAgIQgBgNgEgEQgDgFgJAAIgQAAIAAArIgIAAIAAhbIAaAAQAMAAAFAGQAHAGAAALQAAAVgRABIAAAAQAIABAEAFQADAFABALIAAAKQABAKADAEgAgSgCIAPAAQASAAABgSQgBgSgRAAIgQAAg");
	this.shape_226.setTransform(34.9,69);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFCE67").s().p("AAXAuIgHgbIgfAAIgHAbIgJAAIAbhbIAJAAIAbBbgAgNAMIAbAAIgOgyIAAAAg");
	this.shape_227.setTransform(28.1,69);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFCE67").s().p("AAbAuIAAhTIAAAAIgYBTIgFAAIgZhTIAAAAIAABTIgIAAIAAhbIAOAAIAVBQIAAAAIAWhQIAOAAIAABbg");
	this.shape_228.setTransform(20.5,69);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#FF8402").ss(2).p("AlzAAILnAA");
	this.shape_229.setTransform(52.9,79);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#FF8402").ss(2).p("AlzAAILnAA");
	this.shape_230.setTransform(52.9,76.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#FF8402").ss(2).p("AozAAIRnAA");
	this.shape_231.setTransform(72.1,61.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#FFAD01").p("AhVAkICrhH");
	this.shape_232.setTransform(311.6,140.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#FFAD01").p("AkzAxIJnhh");
	this.shape_233.setTransform(336,149);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#FFAD01").p("AkygZIJkAz");
	this.shape_234.setTransform(336.1,166.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#FFAD01").p("AlHhzIKPDn");
	this.shape_235.setTransform(333.9,185.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#FFAD01").p("AlXmoIKvNR");
	this.shape_236.setTransform(332.4,223.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#FFAD01").p("AhljnIDLHP");
	this.shape_237.setTransform(299.2,209.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#FFAD01").p("AghjEIBDGJ");
	this.shape_238.setTransform(282.6,208.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#FFAD01").p("AAPk+IgdJ9");
	this.shape_239.setTransform(267.2,219.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#FFAD01").p("AjCAAQAABQA5A6QA6A5BPAAQBQAAA5g5QA6g6AAhQQAAhPg6g5Qg5g6hQAAQhPAAg6A6Qg5A5AABPg");
	this.shape_240.setTransform(276.9,165);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFAD01").s().p("AiICJQg5g5gBhQQABhPA5g6QA5g5BPAAQBQAAA5A5QA6A6AABPQAABQg6A5Qg5A5hQAAQhPAAg5g5g");
	this.shape_241.setTransform(276.9,165);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#FFAD01").ss(2).p("ApUKAISpAAIAAz/IypAAg");
	this.shape_242.setTransform(307.1,200.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#FFAD01").ss(2).p("AEuD8IiYnuIm7Hug");
	this.shape_243.setTransform(282.5,239.6,1,1,0,0,0,-0.2,0);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#FFAD01").ss(2).p("ADNCnIhilEIktFEg");
	this.shape_244.setTransform(310.6,248.1,1,1,0,0,0,-0.2,0);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#FFAD01").p("ABiA9Ii+jPIBeEwg");
	this.shape_245.setTransform(307.6,230.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFAD01").s().p("AhfiYIC/DQIhgBgg");
	this.shape_246.setTransform(307.8,231.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#FFAD01").p("AgEB+IBQhRIiUihg");
	this.shape_247.setTransform(329.4,244);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFAD01").s().p("AhJh5ICTChIhPBSg");
	this.shape_248.setTransform(329.6,244.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#FFAD01").p("ABgBxIi/jSIBDDSg");
	this.shape_249.setTransform(351.2,253.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFAD01").s().p("AgcBqIhDjTIC/DTg");
	this.shape_250.setTransform(351.2,254.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#FFAD01").ss(2).p("ABEhkIjBDTIEEAAg");
	this.shape_251.setTransform(334.7,254.3,1,1,0,0,0,0,0.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#FFAD01").p("ABWAkIirhH");
	this.shape_252.setTransform(63.9,140.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#FFAD01").p("AE0AxIpnhh");
	this.shape_253.setTransform(39.5,149);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#FFAD01").p("AEzgZIplAz");
	this.shape_254.setTransform(39.4,166.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#FFAD01").p("AFJhzIqRDn");
	this.shape_255.setTransform(41.6,185.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#FFAD01").p("AFYmoIqvNR");
	this.shape_256.setTransform(43.2,223.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#FFAD01").p("ABmjnIjLHP");
	this.shape_257.setTransform(76.3,209.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#FFAD01").p("AAijEIhCGJ");
	this.shape_258.setTransform(93,208.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#FFAD01").p("AgOk+IAdJ9");
	this.shape_259.setTransform(108.4,219.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#FFAD01").p("AiIiIQA5g6BPAAQBQAAA5A6QA6A5AABPQAABQg6A6Qg5A5hQAAQhPAAg5g5Qg6g6AAhQQAAhPA6g5g");
	this.shape_260.setTransform(98.7,165);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFAD01").s().p("AiJCJQg5g5AAhQQAAhPA5g6QA6g5BPAAQBQAAA5A5QA5A6AABPQAABQg5A5Qg5A5hQAAQhPAAg6g5g");
	this.shape_261.setTransform(98.7,165);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#FFAD01").ss(2).p("AJVp/IAAT/IypAAIAAz/g");
	this.shape_262.setTransform(68.5,200.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#FFAD01").p("Ah3ASQAuglAPABQAGABAWATQAUATAIgDIAbgTQAVgRAIAAQALAAAcASIAbAS");
	this.shape_263.setTransform(354.8,114.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#FFAD01").p("Ah3ASQAuglAPABQAGABAWATQAUAUAIgEIAbgTQAVgRAIAAQALAAAdASIAaAS");
	this.shape_264.setTransform(354.9,111.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#FFAD01").p("Ah3ASQAuglAPABQAGABAWATQAUAUAIgEIAbgTQAVgRAIAAQALAAAdASIAaAS");
	this.shape_265.setTransform(354.9,109.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#FFAD01").p("Ah3ASQAuglAPABQAGABAWATQAUAUAIgEIAbgTQAVgRAIAAQALAAAdASIAaAS");
	this.shape_266.setTransform(355,106.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#FFAD01").p("Ah3ASQAuglAPABQAGABAWATQAUATAIgDIAbgTQAVgRAIAAQALAAAdASIAaAS");
	this.shape_267.setTransform(355,103.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#FFAD01").p("Ah3ASQAuglAPABQAGABAWATQAUAUAIgEIAbgTQAVgRAIAAQALAAAdASIAaAS");
	this.shape_268.setTransform(355.1,101.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#FFAD01").p("AB4hpIAADTIjvAAIAAjTg");
	this.shape_269.setTransform(355.1,108);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#FFAD01").p("AiJASQA1glARABQAIABAYATQAYATAIgDIAggTQAYgRAKAAQAMAAAgASIAfAS");
	this.shape_270.setTransform(17.7,114.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#FFAD01").p("AiIASQA0glASABQAHABAZATQAXAUAIgEIAggTQAYgRAKAAQAMAAAgASIAfAS");
	this.shape_271.setTransform(17.8,111.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#FFAD01").p("AiJASQA1glARABQAHABAZATQAXAUAJgEIAggTQAYgRAJAAQAMAAAhASIAfAS");
	this.shape_272.setTransform(17.9,109.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#FFAD01").p("AiJASQA1glARABQAHABAZATQAXAUAJgEIAggTQAYgRAJAAQAMAAAhASIAfAS");
	this.shape_273.setTransform(17.9,106.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#FFAD01").p("AiJASQA1glARABQAIABAYATQAXATAJgDIAggTQAYgRAJAAQAMAAAhASIAfAS");
	this.shape_274.setTransform(18,103.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#FFAD01").p("AiJASQA1glARABQAHABAZATQAYAUAIgEQAEgCAcgRQAYgRAKAAQAMAAAgASIAfAS");
	this.shape_275.setTransform(18,101.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#FFAD01").p("ACJBqIkRAAIAAjTIERAAg");
	this.shape_276.setTransform(18,108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,-1,365.7,268.2);


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
	this.shape_8.setTransform(9.6,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFAD01").ss(0.3).p("ABLAAQAAAegWAXQgWAWgfAAQgdAAgXgWQgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeg");
	this.shape_9.setTransform(9.8,7.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373330").s().p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	this.shape_10.setTransform(9.8,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.8,21.2,17.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFAD01").p("AheAAIC9AA");
	this.shape.setTransform(9.6,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFAD01").p("AheAAIC9AA");
	this.shape_1.setTransform(9.6,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFAD01").p("AheAAIC9AA");
	this.shape_2.setTransform(9.6,11.4);

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
	this.shape_9.graphics.f().s("#FFAD01").p("ABLAAQAAAfgWAWQgWAWgfAAQgeAAgWgWQgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeg");
	this.shape_9.setTransform(9.8,8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373330").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_10.setTransform(9.8,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.5,21.2,17.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFAD01").ss(2).p("AiVjyIG6HuIpSAAg");
	this.shape.setTransform(92.8,240.3,1,1,0,0,0,0,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFAD01").ss(2).p("ADDCnImOAAIBilEg");
	this.shape_1.setTransform(63.9,248.1,1,1,0,0,0,-0.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFAD01").p("AhhA9IC+jPIheEwg");
	this.shape_2.setTransform(68,230.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFAD01").s().p("AhfA4IC+jQIhfEwg");
	this.shape_3.setTransform(67.8,231.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFAD01").p("AhLAtICUihIhEDyg");
	this.shape_4.setTransform(46.1,244);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFAD01").s().p("AhKAoICVihIhFDzg");
	this.shape_5.setTransform(46,244.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFAD01").p("AhfBxIC+jSIhCDSg");
	this.shape_6.setTransform(24.3,253.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFAD01").s().p("AhfBqIC/jTIhDDTg");
	this.shape_7.setTransform(24.3,254.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFAD01").ss(2).p("AhEhkIDCDTIkEAAg");
	this.shape_8.setTransform(40.8,254.3,1,1,0,0,0,0,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFAD01").p("Al6AAIL1AA");
	this.shape_9.setTransform(302.8,97.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFAD01").p("Al7AAIL3AA");
	this.shape_10.setTransform(302.7,95.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFAD01").p("Al7AAIL3AA");
	this.shape_11.setTransform(302.8,120.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFAD01").p("Al7AAIL3AA");
	this.shape_12.setTransform(302.8,118.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFAD01").ss(2).p("Ahbh6IDPAAIAAD1IjjAAQAbhMAAhRQAAg0gHgkg");
	this.shape_13.setTransform(249.4,107.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFAD01").ss(2).p("ABdh6IjQAAIAAD1IDjAAQgahOAAhPQAAg0AHgkg");
	this.shape_14.setTransform(124.3,108.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFAD01").p("AF3BSIrtAAIAAijILtAAg");
	this.shape_15.setTransform(302.7,107.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFAD01").ss(2).p("Al2hpILtAAIAADTIrtAAg");
	this.shape_16.setTransform(72.1,108);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFAD01").ss(2).p("AFLAAQAACJhhBhQhhBhiJAAQiHAAhihhQhhhhAAiJQAAiIBhhhQBhhhCIAAQCJAABhBhQBhBhAACIg");
	this.shape_17.setTransform(188.9,103.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF8402").ss(2).p("AguBrQAXhxBIhc");
	this.shape_18.setTransform(99.3,72.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF8402").ss(2).p("AguBrQAXhxBIhc");
	this.shape_19.setTransform(103.4,72.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF8402").ss(2).p("AguBrQAXhxBIhc");
	this.shape_20.setTransform(107.5,72.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF8402").ss(2).p("AguBrQAYhyBHhb");
	this.shape_21.setTransform(111.6,72.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF8402").ss(2).p("AguBrQAYhyBHhb");
	this.shape_22.setTransform(115.7,72.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF8402").p("AhaBEQBMhYBrgt");
	this.shape_23.setTransform(135,46.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF8402").p("AhaBEQBMhYBrgt");
	this.shape_24.setTransform(137.8,49.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF8402").ss(2).p("AguBrQAXhxBIhc");
	this.shape_25.setTransform(119.8,72.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFAD01").ss(2).p("AHkAAQAADIiOCOQiOCPjIAAQjHAAiOiPQiOiOAAjIQAAjHCOiPQCOiODHAAQDIAACOCOQCOCPAADHg");
	this.shape_26.setTransform(187.7,103.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF8402").ss(2).p("AK9AAI15AA");
	this.shape_27.setTransform(70.1,125.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF8402").ss(2).p("AqXAAIUvAA");
	this.shape_28.setTransform(69.4,91.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF8402").ss(2).p("AqfAAIU/AA");
	this.shape_29.setTransform(305.4,91.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF8402").ss(2).p("AKvAAI1dAA");
	this.shape_30.setTransform(304.7,125.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF8402").ss(2).p("ApZD6QAsjVCoiJQCriNDbAAQDYAACrCQQCmCJAwDS");
	this.shape_31.setTransform(187.6,65.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF8402").ss(2).p("AI2jHQg/CxidBqQidBti9AAQi6AAihhyQidhug9io");
	this.shape_32.setTransform(188,145.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF8402").ss(2).p("AoLDaQAmi6CSh3QCVh6C/AAQC9AACUB3QCRBzApC0");
	this.shape_33.setTransform(187.6,71.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF8402").ss(2).p("AHtimQg/CTiEBXQiHBcijAAQiiAAiGhZQiEhVg/iQ");
	this.shape_34.setTransform(187.9,141.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,38.7,375.5,227.4);


(lib.Symbol196 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol195 = function(mode,startPosition,loop) {
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


(lib.Symbol194 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol193 = function(mode,startPosition,loop) {
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


(lib.Symbol192 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol191 = function(mode,startPosition,loop) {
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


(lib.Symbol190 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol189 = function(mode,startPosition,loop) {
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


(lib.Symbol188 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol187 = function(mode,startPosition,loop) {
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


(lib.Symbol186 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol185 = function(mode,startPosition,loop) {
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


(lib.Symbol184 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol183 = function(mode,startPosition,loop) {
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


(lib.Symbol182 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol181 = function(mode,startPosition,loop) {
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


(lib.Symbol180 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol179 = function(mode,startPosition,loop) {
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


(lib.Symbol178 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol177 = function(mode,startPosition,loop) {
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


(lib.Symbol176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol175 = function(mode,startPosition,loop) {
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


(lib.Symbol174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol173 = function(mode,startPosition,loop) {
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


(lib.Symbol172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol171 = function(mode,startPosition,loop) {
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


(lib.Symbol170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol169 = function(mode,startPosition,loop) {
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


(lib.Symbol168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol167 = function(mode,startPosition,loop) {
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


(lib.Symbol166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol165 = function(mode,startPosition,loop) {
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


(lib.Symbol164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol163 = function(mode,startPosition,loop) {
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


(lib.Symbol162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol161 = function(mode,startPosition,loop) {
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


(lib.Symbol160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol159 = function(mode,startPosition,loop) {
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


(lib.Symbol158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol157 = function(mode,startPosition,loop) {
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


(lib.Symbol156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol155 = function(mode,startPosition,loop) {
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


(lib.Symbol154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol153 = function(mode,startPosition,loop) {
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


(lib.Symbol152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol151 = function(mode,startPosition,loop) {
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


(lib.Symbol150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol149 = function(mode,startPosition,loop) {
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


(lib.Symbol148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol147 = function(mode,startPosition,loop) {
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


(lib.Symbol146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol145 = function(mode,startPosition,loop) {
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


(lib.Symbol144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol143 = function(mode,startPosition,loop) {
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


(lib.Symbol142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol141 = function(mode,startPosition,loop) {
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


(lib.Symbol140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol139 = function(mode,startPosition,loop) {
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


(lib.Symbol138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol137 = function(mode,startPosition,loop) {
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


(lib.Symbol136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol135 = function(mode,startPosition,loop) {
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


(lib.Symbol134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol133 = function(mode,startPosition,loop) {
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


(lib.Symbol132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol131 = function(mode,startPosition,loop) {
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


(lib.Symbol130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol129 = function(mode,startPosition,loop) {
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


(lib.Symbol128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol127 = function(mode,startPosition,loop) {
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


(lib.Symbol126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol125 = function(mode,startPosition,loop) {
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


(lib.Symbol124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol123 = function(mode,startPosition,loop) {
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


(lib.Symbol122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol121 = function(mode,startPosition,loop) {
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


(lib.Symbol120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol119 = function(mode,startPosition,loop) {
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


(lib.Symbol118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol117 = function(mode,startPosition,loop) {
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


(lib.Symbol116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol115 = function(mode,startPosition,loop) {
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


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol113 = function(mode,startPosition,loop) {
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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol28 = function(mode,startPosition,loop) {
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


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol26 = function(mode,startPosition,loop) {
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


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol24 = function(mode,startPosition,loop) {
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


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol22 = function(mode,startPosition,loop) {
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


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol20 = function(mode,startPosition,loop) {
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


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol18 = function(mode,startPosition,loop) {
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


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol16 = function(mode,startPosition,loop) {
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


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol14 = function(mode,startPosition,loop) {
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


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol12 = function(mode,startPosition,loop) {
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


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol10 = function(mode,startPosition,loop) {
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


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


(lib.Symbol8 = function(mode,startPosition,loop) {
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
	mask.graphics.p("Ag0A1QgWgXAAgeQAAgeAWgWQAXgWAdAAQAfAAAWAWQAWAWAAAeQAAAegWAXQgWAWgfAAQgdAAgXgWg");
	mask.setTransform(9.8,7.7);

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,15.1,15.1);


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
(lib.Untitled3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7("synched",0);
	this.instance.setTransform(-1.1,28.8);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(1,-3,370,272);

	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.setTransform(111.8,129.2);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(0,-2,19,19);

	this.instance_2 = new lib.Symbol2("synched",0);
	this.instance_2.setTransform(239.7,128.7);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_2.cache(0,-1,19,19);

	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(-1.1,28.8);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-3,37,380,231);

	this.instance_4 = new lib.Symbol9("synched",0);
	this.instance_4.setTransform(111.8,129.2);
	this.instance_4.filters = [new cjs.ColorFilter(0.01171875, 0.01171875, 0.01171875, 1, 0, 0, 0, 0)];
	this.instance_4.cache(0,-2,19,19);

	this.instance_5 = new lib.Symbol8("synched",0);
	this.instance_5.setTransform(239.7,128.7);
	this.instance_5.filters = [new cjs.ColorFilter(0.01171875, 0.01171875, 0.01171875, 1, 0, 0, 0, 0)];
	this.instance_5.cache(0,-1,19,19);

	this.instance_6 = new lib.Symbol11("synched",0);
	this.instance_6.setTransform(111.8,129.2);
	this.instance_6.filters = [new cjs.ColorFilter(0.01953125, 0.01953125, 0.01953125, 1, 0, 0, 0, 0)];
	this.instance_6.cache(0,-2,19,19);

	this.instance_7 = new lib.Symbol10("synched",0);
	this.instance_7.setTransform(239.7,128.7);
	this.instance_7.filters = [new cjs.ColorFilter(0.01953125, 0.01953125, 0.01953125, 1, 0, 0, 0, 0)];
	this.instance_7.cache(0,-1,19,19);

	this.instance_8 = new lib.Symbol13("synched",0);
	this.instance_8.setTransform(111.8,129.2);
	this.instance_8.filters = [new cjs.ColorFilter(0.03125, 0.03125, 0.03125, 1, 0, 0, 0, 0)];
	this.instance_8.cache(0,-2,19,19);

	this.instance_9 = new lib.Symbol12("synched",0);
	this.instance_9.setTransform(239.7,128.7);
	this.instance_9.filters = [new cjs.ColorFilter(0.03125, 0.03125, 0.03125, 1, 0, 0, 0, 0)];
	this.instance_9.cache(0,-1,19,19);

	this.instance_10 = new lib.Symbol15("synched",0);
	this.instance_10.setTransform(111.8,129.2);
	this.instance_10.filters = [new cjs.ColorFilter(0.0390625, 0.0390625, 0.0390625, 1, 0, 0, 0, 0)];
	this.instance_10.cache(0,-2,19,19);

	this.instance_11 = new lib.Symbol14("synched",0);
	this.instance_11.setTransform(239.7,128.7);
	this.instance_11.filters = [new cjs.ColorFilter(0.0390625, 0.0390625, 0.0390625, 1, 0, 0, 0, 0)];
	this.instance_11.cache(0,-1,19,19);

	this.instance_12 = new lib.Symbol17("synched",0);
	this.instance_12.setTransform(111.8,129.2);
	this.instance_12.filters = [new cjs.ColorFilter(0.05078125, 0.05078125, 0.05078125, 1, 0, 0, 0, 0)];
	this.instance_12.cache(0,-2,19,19);

	this.instance_13 = new lib.Symbol16("synched",0);
	this.instance_13.setTransform(239.7,128.7);
	this.instance_13.filters = [new cjs.ColorFilter(0.05078125, 0.05078125, 0.05078125, 1, 0, 0, 0, 0)];
	this.instance_13.cache(0,-1,19,19);

	this.instance_14 = new lib.Symbol19("synched",0);
	this.instance_14.setTransform(111.8,129.2);
	this.instance_14.filters = [new cjs.ColorFilter(0.05859375, 0.05859375, 0.05859375, 1, 0, 0, 0, 0)];
	this.instance_14.cache(0,-2,19,19);

	this.instance_15 = new lib.Symbol18("synched",0);
	this.instance_15.setTransform(239.7,128.7);
	this.instance_15.filters = [new cjs.ColorFilter(0.05859375, 0.05859375, 0.05859375, 1, 0, 0, 0, 0)];
	this.instance_15.cache(0,-1,19,19);

	this.instance_16 = new lib.Symbol21("synched",0);
	this.instance_16.setTransform(111.8,129.2);
	this.instance_16.filters = [new cjs.ColorFilter(0.0703125, 0.0703125, 0.0703125, 1, 0, 0, 0, 0)];
	this.instance_16.cache(0,-2,19,19);

	this.instance_17 = new lib.Symbol20("synched",0);
	this.instance_17.setTransform(239.7,128.7);
	this.instance_17.filters = [new cjs.ColorFilter(0.0703125, 0.0703125, 0.0703125, 1, 0, 0, 0, 0)];
	this.instance_17.cache(0,-1,19,19);

	this.instance_18 = new lib.Symbol23("synched",0);
	this.instance_18.setTransform(111.8,129.2);
	this.instance_18.filters = [new cjs.ColorFilter(0.08984375, 0.08984375, 0.08984375, 1, 0, 0, 0, 0)];
	this.instance_18.cache(0,-2,19,19);

	this.instance_19 = new lib.Symbol22("synched",0);
	this.instance_19.setTransform(239.7,128.7);
	this.instance_19.filters = [new cjs.ColorFilter(0.08984375, 0.08984375, 0.08984375, 1, 0, 0, 0, 0)];
	this.instance_19.cache(0,-1,19,19);

	this.instance_20 = new lib.Symbol25("synched",0);
	this.instance_20.setTransform(111.8,129.2);
	this.instance_20.filters = [new cjs.ColorFilter(0.08984375, 0.08984375, 0.08984375, 1, 0, 0, 0, 0)];
	this.instance_20.cache(0,-2,19,19);

	this.instance_21 = new lib.Symbol24("synched",0);
	this.instance_21.setTransform(239.7,128.7);
	this.instance_21.filters = [new cjs.ColorFilter(0.08984375, 0.08984375, 0.08984375, 1, 0, 0, 0, 0)];
	this.instance_21.cache(0,-1,19,19);

	this.instance_22 = new lib.Symbol27("synched",0);
	this.instance_22.setTransform(111.8,129.2);
	this.instance_22.filters = [new cjs.ColorFilter(0.109375, 0.109375, 0.109375, 1, 0, 0, 0, 0)];
	this.instance_22.cache(0,-2,19,19);

	this.instance_23 = new lib.Symbol26("synched",0);
	this.instance_23.setTransform(239.7,128.7);
	this.instance_23.filters = [new cjs.ColorFilter(0.109375, 0.109375, 0.109375, 1, 0, 0, 0, 0)];
	this.instance_23.cache(0,-1,19,19);

	this.instance_24 = new lib.Symbol29("synched",0);
	this.instance_24.setTransform(111.8,129.2);
	this.instance_24.filters = [new cjs.ColorFilter(0.12109375, 0.12109375, 0.12109375, 1, 0, 0, 0, 0)];
	this.instance_24.cache(0,-2,19,19);

	this.instance_25 = new lib.Symbol28("synched",0);
	this.instance_25.setTransform(239.7,128.7);
	this.instance_25.filters = [new cjs.ColorFilter(0.12109375, 0.12109375, 0.12109375, 1, 0, 0, 0, 0)];
	this.instance_25.cache(0,-1,19,19);

	this.instance_26 = new lib.Symbol31("synched",0);
	this.instance_26.setTransform(111.8,129.2);
	this.instance_26.filters = [new cjs.ColorFilter(0.12890625, 0.12890625, 0.12890625, 1, 0, 0, 0, 0)];
	this.instance_26.cache(0,-2,19,19);

	this.instance_27 = new lib.Symbol30("synched",0);
	this.instance_27.setTransform(239.7,128.7);
	this.instance_27.filters = [new cjs.ColorFilter(0.12890625, 0.12890625, 0.12890625, 1, 0, 0, 0, 0)];
	this.instance_27.cache(0,-1,19,19);

	this.instance_28 = new lib.Symbol33("synched",0);
	this.instance_28.setTransform(111.8,129.2);
	this.instance_28.filters = [new cjs.ColorFilter(0.140625, 0.140625, 0.140625, 1, 0, 0, 0, 0)];
	this.instance_28.cache(0,-2,19,19);

	this.instance_29 = new lib.Symbol32("synched",0);
	this.instance_29.setTransform(239.7,128.7);
	this.instance_29.filters = [new cjs.ColorFilter(0.140625, 0.140625, 0.140625, 1, 0, 0, 0, 0)];
	this.instance_29.cache(0,-1,19,19);

	this.instance_30 = new lib.Symbol35("synched",0);
	this.instance_30.setTransform(111.8,129.2);
	this.instance_30.filters = [new cjs.ColorFilter(0.1484375, 0.1484375, 0.1484375, 1, 0, 0, 0, 0)];
	this.instance_30.cache(0,-2,19,19);

	this.instance_31 = new lib.Symbol34("synched",0);
	this.instance_31.setTransform(239.7,128.7);
	this.instance_31.filters = [new cjs.ColorFilter(0.1484375, 0.1484375, 0.1484375, 1, 0, 0, 0, 0)];
	this.instance_31.cache(0,-1,19,19);

	this.instance_32 = new lib.Symbol37("synched",0);
	this.instance_32.setTransform(111.8,129.2);
	this.instance_32.filters = [new cjs.ColorFilter(0.16015625, 0.16015625, 0.16015625, 1, 0, 0, 0, 0)];
	this.instance_32.cache(0,-2,19,19);

	this.instance_33 = new lib.Symbol36("synched",0);
	this.instance_33.setTransform(239.7,128.7);
	this.instance_33.filters = [new cjs.ColorFilter(0.16015625, 0.16015625, 0.16015625, 1, 0, 0, 0, 0)];
	this.instance_33.cache(0,-1,19,19);

	this.instance_34 = new lib.Symbol39("synched",0);
	this.instance_34.setTransform(111.8,129.2);
	this.instance_34.filters = [new cjs.ColorFilter(0.171875, 0.171875, 0.171875, 1, 1, 1, 1, 0)];
	this.instance_34.cache(0,-2,19,19);

	this.instance_35 = new lib.Symbol38("synched",0);
	this.instance_35.setTransform(239.7,128.7);
	this.instance_35.filters = [new cjs.ColorFilter(0.171875, 0.171875, 0.171875, 1, 1, 1, 1, 0)];
	this.instance_35.cache(0,-1,19,19);

	this.instance_36 = new lib.Symbol41("synched",0);
	this.instance_36.setTransform(111.8,129.2);
	this.instance_36.filters = [new cjs.ColorFilter(0.1796875, 0.1796875, 0.1796875, 1, 1, 1, 1, 0)];
	this.instance_36.cache(0,-2,19,19);

	this.instance_37 = new lib.Symbol40("synched",0);
	this.instance_37.setTransform(239.7,128.7);
	this.instance_37.filters = [new cjs.ColorFilter(0.1796875, 0.1796875, 0.1796875, 1, 1, 1, 1, 0)];
	this.instance_37.cache(0,-1,19,19);

	this.instance_38 = new lib.Symbol43("synched",0);
	this.instance_38.setTransform(111.8,129.2);
	this.instance_38.filters = [new cjs.ColorFilter(0.19140625, 0.19140625, 0.19140625, 1, 1, 1, 1, 0)];
	this.instance_38.cache(0,-2,19,19);

	this.instance_39 = new lib.Symbol42("synched",0);
	this.instance_39.setTransform(239.7,128.7);
	this.instance_39.filters = [new cjs.ColorFilter(0.19140625, 0.19140625, 0.19140625, 1, 1, 1, 1, 0)];
	this.instance_39.cache(0,-1,19,19);

	this.instance_40 = new lib.Symbol45("synched",0);
	this.instance_40.setTransform(111.8,129.2);
	this.instance_40.filters = [new cjs.ColorFilter(0.19921875, 0.19921875, 0.19921875, 1, 1, 1, 1, 0)];
	this.instance_40.cache(0,-2,19,19);

	this.instance_41 = new lib.Symbol44("synched",0);
	this.instance_41.setTransform(239.7,128.7);
	this.instance_41.filters = [new cjs.ColorFilter(0.19921875, 0.19921875, 0.19921875, 1, 1, 1, 1, 0)];
	this.instance_41.cache(0,-1,19,19);

	this.instance_42 = new lib.Symbol47("synched",0);
	this.instance_42.setTransform(111.8,129.2);
	this.instance_42.filters = [new cjs.ColorFilter(0.2109375, 0.2109375, 0.2109375, 1, 1, 1, 1, 0)];
	this.instance_42.cache(0,-2,19,19);

	this.instance_43 = new lib.Symbol46("synched",0);
	this.instance_43.setTransform(239.7,128.7);
	this.instance_43.filters = [new cjs.ColorFilter(0.2109375, 0.2109375, 0.2109375, 1, 1, 1, 1, 0)];
	this.instance_43.cache(0,-1,19,19);

	this.instance_44 = new lib.Symbol49("synched",0);
	this.instance_44.setTransform(111.8,129.2);
	this.instance_44.filters = [new cjs.ColorFilter(0.21875, 0.21875, 0.21875, 1, 1, 1, 1, 0)];
	this.instance_44.cache(0,-2,19,19);

	this.instance_45 = new lib.Symbol48("synched",0);
	this.instance_45.setTransform(239.7,128.7);
	this.instance_45.filters = [new cjs.ColorFilter(0.21875, 0.21875, 0.21875, 1, 1, 1, 1, 0)];
	this.instance_45.cache(0,-1,19,19);

	this.instance_46 = new lib.Symbol51("synched",0);
	this.instance_46.setTransform(111.8,129.2);
	this.instance_46.filters = [new cjs.ColorFilter(0.23046875, 0.23046875, 0.23046875, 1, 1, 1, 1, 0)];
	this.instance_46.cache(0,-2,19,19);

	this.instance_47 = new lib.Symbol50("synched",0);
	this.instance_47.setTransform(239.7,128.7);
	this.instance_47.filters = [new cjs.ColorFilter(0.23046875, 0.23046875, 0.23046875, 1, 1, 1, 1, 0)];
	this.instance_47.cache(0,-1,19,19);

	this.instance_48 = new lib.Symbol53("synched",0);
	this.instance_48.setTransform(111.8,129.2);
	this.instance_48.filters = [new cjs.ColorFilter(0.23828125, 0.23828125, 0.23828125, 1, 1, 1, 1, 0)];
	this.instance_48.cache(0,-2,19,19);

	this.instance_49 = new lib.Symbol52("synched",0);
	this.instance_49.setTransform(239.7,128.7);
	this.instance_49.filters = [new cjs.ColorFilter(0.23828125, 0.23828125, 0.23828125, 1, 1, 1, 1, 0)];
	this.instance_49.cache(0,-1,19,19);

	this.instance_50 = new lib.Symbol55("synched",0);
	this.instance_50.setTransform(111.8,129.2);
	this.instance_50.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 1, 1, 1, 0)];
	this.instance_50.cache(0,-2,19,19);

	this.instance_51 = new lib.Symbol54("synched",0);
	this.instance_51.setTransform(239.7,128.7);
	this.instance_51.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 1, 1, 1, 0)];
	this.instance_51.cache(0,-1,19,19);

	this.instance_52 = new lib.Symbol57("synched",0);
	this.instance_52.setTransform(111.8,129.2);
	this.instance_52.filters = [new cjs.ColorFilter(0.26171875, 0.26171875, 0.26171875, 1, 1, 1, 1, 0)];
	this.instance_52.cache(0,-2,19,19);

	this.instance_53 = new lib.Symbol56("synched",0);
	this.instance_53.setTransform(239.7,128.7);
	this.instance_53.filters = [new cjs.ColorFilter(0.26171875, 0.26171875, 0.26171875, 1, 1, 1, 1, 0)];
	this.instance_53.cache(0,-1,19,19);

	this.instance_54 = new lib.Symbol59("synched",0);
	this.instance_54.setTransform(111.8,129.2);
	this.instance_54.filters = [new cjs.ColorFilter(0.26953125, 0.26953125, 0.26953125, 1, 1, 1, 1, 0)];
	this.instance_54.cache(0,-2,19,19);

	this.instance_55 = new lib.Symbol58("synched",0);
	this.instance_55.setTransform(239.7,128.7);
	this.instance_55.filters = [new cjs.ColorFilter(0.26953125, 0.26953125, 0.26953125, 1, 1, 1, 1, 0)];
	this.instance_55.cache(0,-1,19,19);

	this.instance_56 = new lib.Symbol61("synched",0);
	this.instance_56.setTransform(111.8,129.2);
	this.instance_56.filters = [new cjs.ColorFilter(0.2890625, 0.2890625, 0.2890625, 1, 1, 1, 1, 0)];
	this.instance_56.cache(0,-2,19,19);

	this.instance_57 = new lib.Symbol60("synched",0);
	this.instance_57.setTransform(239.7,128.7);
	this.instance_57.filters = [new cjs.ColorFilter(0.2890625, 0.2890625, 0.2890625, 1, 1, 1, 1, 0)];
	this.instance_57.cache(0,-1,19,19);

	this.instance_58 = new lib.Symbol63("synched",0);
	this.instance_58.setTransform(111.8,129.2);
	this.instance_58.filters = [new cjs.ColorFilter(0.2890625, 0.2890625, 0.2890625, 1, 1, 1, 1, 0)];
	this.instance_58.cache(0,-2,19,19);

	this.instance_59 = new lib.Symbol62("synched",0);
	this.instance_59.setTransform(239.7,128.7);
	this.instance_59.filters = [new cjs.ColorFilter(0.2890625, 0.2890625, 0.2890625, 1, 1, 1, 1, 0)];
	this.instance_59.cache(0,-1,19,19);

	this.instance_60 = new lib.Symbol65("synched",0);
	this.instance_60.setTransform(111.8,129.2);
	this.instance_60.filters = [new cjs.ColorFilter(0.30078125, 0.30078125, 0.30078125, 1, 1, 1, 1, 0)];
	this.instance_60.cache(0,-2,19,19);

	this.instance_61 = new lib.Symbol64("synched",0);
	this.instance_61.setTransform(239.7,128.7);
	this.instance_61.filters = [new cjs.ColorFilter(0.30078125, 0.30078125, 0.30078125, 1, 1, 1, 1, 0)];
	this.instance_61.cache(0,-1,19,19);

	this.instance_62 = new lib.Symbol67("synched",0);
	this.instance_62.setTransform(111.8,129.2);
	this.instance_62.filters = [new cjs.ColorFilter(0.3203125, 0.3203125, 0.3203125, 1, 1, 1, 1, 0)];
	this.instance_62.cache(0,-2,19,19);

	this.instance_63 = new lib.Symbol66("synched",0);
	this.instance_63.setTransform(239.7,128.7);
	this.instance_63.filters = [new cjs.ColorFilter(0.3203125, 0.3203125, 0.3203125, 1, 1, 1, 1, 0)];
	this.instance_63.cache(0,-1,19,19);

	this.instance_64 = new lib.Symbol69("synched",0);
	this.instance_64.setTransform(111.8,129.2);
	this.instance_64.filters = [new cjs.ColorFilter(0.3203125, 0.3203125, 0.3203125, 1, 1, 1, 1, 0)];
	this.instance_64.cache(0,-2,19,19);

	this.instance_65 = new lib.Symbol68("synched",0);
	this.instance_65.setTransform(239.7,128.7);
	this.instance_65.filters = [new cjs.ColorFilter(0.3203125, 0.3203125, 0.3203125, 1, 1, 1, 1, 0)];
	this.instance_65.cache(0,-1,19,19);

	this.instance_66 = new lib.Symbol71("synched",0);
	this.instance_66.setTransform(111.8,129.2);
	this.instance_66.filters = [new cjs.ColorFilter(0.33984375, 0.33984375, 0.33984375, 1, 1, 1, 1, 0)];
	this.instance_66.cache(0,-2,19,19);

	this.instance_67 = new lib.Symbol70("synched",0);
	this.instance_67.setTransform(239.7,128.7);
	this.instance_67.filters = [new cjs.ColorFilter(0.33984375, 0.33984375, 0.33984375, 1, 1, 1, 1, 0)];
	this.instance_67.cache(0,-1,19,19);

	this.instance_68 = new lib.Symbol73("synched",0);
	this.instance_68.setTransform(111.8,129.2);
	this.instance_68.filters = [new cjs.ColorFilter(0.3515625, 0.3515625, 0.3515625, 1, 1, 1, 1, 0)];
	this.instance_68.cache(0,-2,19,19);

	this.instance_69 = new lib.Symbol72("synched",0);
	this.instance_69.setTransform(239.7,128.7);
	this.instance_69.filters = [new cjs.ColorFilter(0.3515625, 0.3515625, 0.3515625, 1, 1, 1, 1, 0)];
	this.instance_69.cache(0,-1,19,19);

	this.instance_70 = new lib.Symbol75("synched",0);
	this.instance_70.setTransform(111.8,129.2);
	this.instance_70.filters = [new cjs.ColorFilter(0.359375, 0.359375, 0.359375, 1, 1, 1, 1, 0)];
	this.instance_70.cache(0,-2,19,19);

	this.instance_71 = new lib.Symbol74("synched",0);
	this.instance_71.setTransform(239.7,128.7);
	this.instance_71.filters = [new cjs.ColorFilter(0.359375, 0.359375, 0.359375, 1, 1, 1, 1, 0)];
	this.instance_71.cache(0,-1,19,19);

	this.instance_72 = new lib.Symbol77("synched",0);
	this.instance_72.setTransform(111.8,129.2);
	this.instance_72.filters = [new cjs.ColorFilter(0.37109375, 0.37109375, 0.37109375, 1, 1, 1, 1, 0)];
	this.instance_72.cache(0,-2,19,19);

	this.instance_73 = new lib.Symbol76("synched",0);
	this.instance_73.setTransform(239.7,128.7);
	this.instance_73.filters = [new cjs.ColorFilter(0.37109375, 0.37109375, 0.37109375, 1, 1, 1, 1, 0)];
	this.instance_73.cache(0,-1,19,19);

	this.instance_74 = new lib.Symbol79("synched",0);
	this.instance_74.setTransform(111.8,129.2);
	this.instance_74.filters = [new cjs.ColorFilter(0.37890625, 0.37890625, 0.37890625, 1, 1, 1, 1, 0)];
	this.instance_74.cache(0,-2,19,19);

	this.instance_75 = new lib.Symbol78("synched",0);
	this.instance_75.setTransform(239.7,128.7);
	this.instance_75.filters = [new cjs.ColorFilter(0.37890625, 0.37890625, 0.37890625, 1, 1, 1, 1, 0)];
	this.instance_75.cache(0,-1,19,19);

	this.instance_76 = new lib.Symbol81("synched",0);
	this.instance_76.setTransform(111.8,129.2);
	this.instance_76.filters = [new cjs.ColorFilter(0.390625, 0.390625, 0.390625, 1, 1, 1, 1, 0)];
	this.instance_76.cache(0,-2,19,19);

	this.instance_77 = new lib.Symbol80("synched",0);
	this.instance_77.setTransform(239.7,128.7);
	this.instance_77.filters = [new cjs.ColorFilter(0.390625, 0.390625, 0.390625, 1, 1, 1, 1, 0)];
	this.instance_77.cache(0,-1,19,19);

	this.instance_78 = new lib.Symbol83("synched",0);
	this.instance_78.setTransform(111.8,129.2);
	this.instance_78.filters = [new cjs.ColorFilter(0.3984375, 0.3984375, 0.3984375, 1, 1, 1, 1, 0)];
	this.instance_78.cache(0,-2,19,19);

	this.instance_79 = new lib.Symbol82("synched",0);
	this.instance_79.setTransform(239.7,128.7);
	this.instance_79.filters = [new cjs.ColorFilter(0.3984375, 0.3984375, 0.3984375, 1, 1, 1, 1, 0)];
	this.instance_79.cache(0,-1,19,19);

	this.instance_80 = new lib.Symbol85("synched",0);
	this.instance_80.setTransform(111.8,129.2);
	this.instance_80.filters = [new cjs.ColorFilter(0.41015625, 0.41015625, 0.41015625, 1, 1, 1, 1, 0)];
	this.instance_80.cache(0,-2,19,19);

	this.instance_81 = new lib.Symbol84("synched",0);
	this.instance_81.setTransform(239.7,128.7);
	this.instance_81.filters = [new cjs.ColorFilter(0.41015625, 0.41015625, 0.41015625, 1, 1, 1, 1, 0)];
	this.instance_81.cache(0,-1,19,19);

	this.instance_82 = new lib.Symbol87("synched",0);
	this.instance_82.setTransform(111.8,129.2);
	this.instance_82.filters = [new cjs.ColorFilter(0.421875, 0.421875, 0.421875, 1, 1, 1, 1, 0)];
	this.instance_82.cache(0,-2,19,19);

	this.instance_83 = new lib.Symbol86("synched",0);
	this.instance_83.setTransform(239.7,128.7);
	this.instance_83.filters = [new cjs.ColorFilter(0.421875, 0.421875, 0.421875, 1, 1, 1, 1, 0)];
	this.instance_83.cache(0,-1,19,19);

	this.instance_84 = new lib.Symbol89("synched",0);
	this.instance_84.setTransform(111.8,129.2);
	this.instance_84.filters = [new cjs.ColorFilter(0.4296875, 0.4296875, 0.4296875, 1, 1, 1, 1, 0)];
	this.instance_84.cache(0,-2,19,19);

	this.instance_85 = new lib.Symbol88("synched",0);
	this.instance_85.setTransform(239.7,128.7);
	this.instance_85.filters = [new cjs.ColorFilter(0.4296875, 0.4296875, 0.4296875, 1, 1, 1, 1, 0)];
	this.instance_85.cache(0,-1,19,19);

	this.instance_86 = new lib.Symbol91("synched",0);
	this.instance_86.setTransform(111.8,129.2);
	this.instance_86.filters = [new cjs.ColorFilter(0.44140625, 0.44140625, 0.44140625, 1, 1, 1, 1, 0)];
	this.instance_86.cache(0,-2,19,19);

	this.instance_87 = new lib.Symbol90("synched",0);
	this.instance_87.setTransform(239.7,128.7);
	this.instance_87.filters = [new cjs.ColorFilter(0.44140625, 0.44140625, 0.44140625, 1, 1, 1, 1, 0)];
	this.instance_87.cache(0,-1,19,19);

	this.instance_88 = new lib.Symbol93("synched",0);
	this.instance_88.setTransform(111.8,129.2);
	this.instance_88.filters = [new cjs.ColorFilter(0.44921875, 0.44921875, 0.44921875, 1, 1, 1, 1, 0)];
	this.instance_88.cache(0,-2,19,19);

	this.instance_89 = new lib.Symbol92("synched",0);
	this.instance_89.setTransform(239.7,128.7);
	this.instance_89.filters = [new cjs.ColorFilter(0.44921875, 0.44921875, 0.44921875, 1, 1, 1, 1, 0)];
	this.instance_89.cache(0,-1,19,19);

	this.instance_90 = new lib.Symbol95("synched",0);
	this.instance_90.setTransform(111.8,129.2);
	this.instance_90.filters = [new cjs.ColorFilter(0.4609375, 0.4609375, 0.4609375, 1, 1, 1, 1, 0)];
	this.instance_90.cache(0,-2,19,19);

	this.instance_91 = new lib.Symbol94("synched",0);
	this.instance_91.setTransform(239.7,128.7);
	this.instance_91.filters = [new cjs.ColorFilter(0.4609375, 0.4609375, 0.4609375, 1, 1, 1, 1, 0)];
	this.instance_91.cache(0,-1,19,19);

	this.instance_92 = new lib.Symbol97("synched",0);
	this.instance_92.setTransform(111.8,129.2);
	this.instance_92.filters = [new cjs.ColorFilter(0.46875, 0.46875, 0.46875, 1, 1, 1, 1, 0)];
	this.instance_92.cache(0,-2,19,19);

	this.instance_93 = new lib.Symbol96("synched",0);
	this.instance_93.setTransform(239.7,128.7);
	this.instance_93.filters = [new cjs.ColorFilter(0.46875, 0.46875, 0.46875, 1, 1, 1, 1, 0)];
	this.instance_93.cache(0,-1,19,19);

	this.instance_94 = new lib.Symbol99("synched",0);
	this.instance_94.setTransform(111.8,129.2);
	this.instance_94.filters = [new cjs.ColorFilter(0.48046875, 0.48046875, 0.48046875, 1, 1, 1, 1, 0)];
	this.instance_94.cache(0,-2,19,19);

	this.instance_95 = new lib.Symbol98("synched",0);
	this.instance_95.setTransform(239.7,128.7);
	this.instance_95.filters = [new cjs.ColorFilter(0.48046875, 0.48046875, 0.48046875, 1, 1, 1, 1, 0)];
	this.instance_95.cache(0,-1,19,19);

	this.instance_96 = new lib.Symbol101("synched",0);
	this.instance_96.setTransform(111.8,129.2);
	this.instance_96.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 2, 2, 2, 0)];
	this.instance_96.cache(0,-2,19,19);

	this.instance_97 = new lib.Symbol100("synched",0);
	this.instance_97.setTransform(239.7,128.7);
	this.instance_97.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 2, 2, 2, 0)];
	this.instance_97.cache(0,-1,19,19);

	this.instance_98 = new lib.Symbol103("synched",0);
	this.instance_98.setTransform(111.8,129.2);
	this.instance_98.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 2, 2, 2, 0)];
	this.instance_98.cache(0,-2,19,19);

	this.instance_99 = new lib.Symbol102("synched",0);
	this.instance_99.setTransform(239.7,128.7);
	this.instance_99.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 2, 2, 2, 0)];
	this.instance_99.cache(0,-1,19,19);

	this.instance_100 = new lib.Symbol105("synched",0);
	this.instance_100.setTransform(111.8,129.2);
	this.instance_100.filters = [new cjs.ColorFilter(0.51953125, 0.51953125, 0.51953125, 1, 2, 2, 2, 0)];
	this.instance_100.cache(0,-2,19,19);

	this.instance_101 = new lib.Symbol104("synched",0);
	this.instance_101.setTransform(239.7,128.7);
	this.instance_101.filters = [new cjs.ColorFilter(0.51953125, 0.51953125, 0.51953125, 1, 2, 2, 2, 0)];
	this.instance_101.cache(0,-1,19,19);

	this.instance_102 = new lib.Symbol107("synched",0);
	this.instance_102.setTransform(111.8,129.2);
	this.instance_102.filters = [new cjs.ColorFilter(0.53125, 0.53125, 0.53125, 1, 2, 2, 2, 0)];
	this.instance_102.cache(0,-2,19,19);

	this.instance_103 = new lib.Symbol106("synched",0);
	this.instance_103.setTransform(239.7,128.7);
	this.instance_103.filters = [new cjs.ColorFilter(0.53125, 0.53125, 0.53125, 1, 2, 2, 2, 0)];
	this.instance_103.cache(0,-1,19,19);

	this.instance_104 = new lib.Symbol109("synched",0);
	this.instance_104.setTransform(111.8,129.2);
	this.instance_104.filters = [new cjs.ColorFilter(0.5390625, 0.5390625, 0.5390625, 1, 2, 2, 2, 0)];
	this.instance_104.cache(0,-2,19,19);

	this.instance_105 = new lib.Symbol108("synched",0);
	this.instance_105.setTransform(239.7,128.7);
	this.instance_105.filters = [new cjs.ColorFilter(0.5390625, 0.5390625, 0.5390625, 1, 2, 2, 2, 0)];
	this.instance_105.cache(0,-1,19,19);

	this.instance_106 = new lib.Symbol112("synched",0);
	this.instance_106.setTransform(41.6,112.4);
	this.instance_106.alpha = 0;

	this.instance_107 = new lib.Symbol111("synched",0);
	this.instance_107.setTransform(111.8,129.2);
	this.instance_107.filters = [new cjs.ColorFilter(0.55078125, 0.55078125, 0.55078125, 1, 2, 2, 2, 0)];
	this.instance_107.cache(0,-2,19,19);

	this.instance_108 = new lib.Symbol110("synched",0);
	this.instance_108.setTransform(239.7,128.7);
	this.instance_108.filters = [new cjs.ColorFilter(0.55078125, 0.55078125, 0.55078125, 1, 2, 2, 2, 0)];
	this.instance_108.cache(0,-1,19,19);

	this.instance_109 = new lib.Symbol114("synched",0);
	this.instance_109.setTransform(111.8,129.2);
	this.instance_109.filters = [new cjs.ColorFilter(0.55859375, 0.55859375, 0.55859375, 1, 2, 2, 2, 0)];
	this.instance_109.cache(0,-2,19,19);

	this.instance_110 = new lib.Symbol113("synched",0);
	this.instance_110.setTransform(239.7,128.7);
	this.instance_110.filters = [new cjs.ColorFilter(0.55859375, 0.55859375, 0.55859375, 1, 2, 2, 2, 0)];
	this.instance_110.cache(0,-1,19,19);

	this.instance_111 = new lib.Symbol116("synched",0);
	this.instance_111.setTransform(111.8,129.2);
	this.instance_111.filters = [new cjs.ColorFilter(0.5703125, 0.5703125, 0.5703125, 1, 2, 2, 2, 0)];
	this.instance_111.cache(0,-2,19,19);

	this.instance_112 = new lib.Symbol115("synched",0);
	this.instance_112.setTransform(239.7,128.7);
	this.instance_112.filters = [new cjs.ColorFilter(0.5703125, 0.5703125, 0.5703125, 1, 2, 2, 2, 0)];
	this.instance_112.cache(0,-1,19,19);

	this.instance_113 = new lib.Symbol118("synched",0);
	this.instance_113.setTransform(111.8,129.2);
	this.instance_113.filters = [new cjs.ColorFilter(0.578125, 0.578125, 0.578125, 1, 2, 2, 2, 0)];
	this.instance_113.cache(0,-2,19,19);

	this.instance_114 = new lib.Symbol117("synched",0);
	this.instance_114.setTransform(239.7,128.7);
	this.instance_114.filters = [new cjs.ColorFilter(0.578125, 0.578125, 0.578125, 1, 2, 2, 2, 0)];
	this.instance_114.cache(0,-1,19,19);

	this.instance_115 = new lib.Symbol120("synched",0);
	this.instance_115.setTransform(111.8,129.2);
	this.instance_115.filters = [new cjs.ColorFilter(0.58984375, 0.58984375, 0.58984375, 1, 2, 2, 2, 0)];
	this.instance_115.cache(0,-2,19,19);

	this.instance_116 = new lib.Symbol119("synched",0);
	this.instance_116.setTransform(239.7,128.7);
	this.instance_116.filters = [new cjs.ColorFilter(0.58984375, 0.58984375, 0.58984375, 1, 2, 2, 2, 0)];
	this.instance_116.cache(0,-1,19,19);

	this.instance_117 = new lib.Symbol122("synched",0);
	this.instance_117.setTransform(111.8,129.2);
	this.instance_117.filters = [new cjs.ColorFilter(0.6015625, 0.6015625, 0.6015625, 1, 2, 2, 2, 0)];
	this.instance_117.cache(0,-2,19,19);

	this.instance_118 = new lib.Symbol121("synched",0);
	this.instance_118.setTransform(239.7,128.7);
	this.instance_118.filters = [new cjs.ColorFilter(0.6015625, 0.6015625, 0.6015625, 1, 2, 2, 2, 0)];
	this.instance_118.cache(0,-1,19,19);

	this.instance_119 = new lib.Symbol124("synched",0);
	this.instance_119.setTransform(111.8,129.2);
	this.instance_119.filters = [new cjs.ColorFilter(0.609375, 0.609375, 0.609375, 1, 2, 2, 2, 0)];
	this.instance_119.cache(0,-2,19,19);

	this.instance_120 = new lib.Symbol123("synched",0);
	this.instance_120.setTransform(239.7,128.7);
	this.instance_120.filters = [new cjs.ColorFilter(0.609375, 0.609375, 0.609375, 1, 2, 2, 2, 0)];
	this.instance_120.cache(0,-1,19,19);

	this.instance_121 = new lib.Symbol126("synched",0);
	this.instance_121.setTransform(111.8,129.2);
	this.instance_121.filters = [new cjs.ColorFilter(0.62109375, 0.62109375, 0.62109375, 1, 2, 2, 2, 0)];
	this.instance_121.cache(0,-2,19,19);

	this.instance_122 = new lib.Symbol125("synched",0);
	this.instance_122.setTransform(239.7,128.7);
	this.instance_122.filters = [new cjs.ColorFilter(0.62109375, 0.62109375, 0.62109375, 1, 2, 2, 2, 0)];
	this.instance_122.cache(0,-1,19,19);

	this.instance_123 = new lib.Symbol128("synched",0);
	this.instance_123.setTransform(111.8,129.2);
	this.instance_123.filters = [new cjs.ColorFilter(0.62890625, 0.62890625, 0.62890625, 1, 2, 2, 2, 0)];
	this.instance_123.cache(0,-2,19,19);

	this.instance_124 = new lib.Symbol127("synched",0);
	this.instance_124.setTransform(239.7,128.7);
	this.instance_124.filters = [new cjs.ColorFilter(0.62890625, 0.62890625, 0.62890625, 1, 2, 2, 2, 0)];
	this.instance_124.cache(0,-1,19,19);

	this.instance_125 = new lib.Symbol130("synched",0);
	this.instance_125.setTransform(111.8,129.2);
	this.instance_125.filters = [new cjs.ColorFilter(0.640625, 0.640625, 0.640625, 1, 2, 2, 2, 0)];
	this.instance_125.cache(0,-2,19,19);

	this.instance_126 = new lib.Symbol129("synched",0);
	this.instance_126.setTransform(239.7,128.7);
	this.instance_126.filters = [new cjs.ColorFilter(0.640625, 0.640625, 0.640625, 1, 2, 2, 2, 0)];
	this.instance_126.cache(0,-1,19,19);

	this.instance_127 = new lib.Symbol132("synched",0);
	this.instance_127.setTransform(111.8,129.2);
	this.instance_127.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 2, 2, 2, 0)];
	this.instance_127.cache(0,-2,19,19);

	this.instance_128 = new lib.Symbol131("synched",0);
	this.instance_128.setTransform(239.7,128.7);
	this.instance_128.filters = [new cjs.ColorFilter(0.6484375, 0.6484375, 0.6484375, 1, 2, 2, 2, 0)];
	this.instance_128.cache(0,-1,19,19);

	this.instance_129 = new lib.Symbol134("synched",0);
	this.instance_129.setTransform(111.8,129.2);
	this.instance_129.filters = [new cjs.ColorFilter(0.66015625, 0.66015625, 0.66015625, 1, 2, 2, 2, 0)];
	this.instance_129.cache(0,-2,19,19);

	this.instance_130 = new lib.Symbol133("synched",0);
	this.instance_130.setTransform(239.7,128.7);
	this.instance_130.filters = [new cjs.ColorFilter(0.66015625, 0.66015625, 0.66015625, 1, 2, 2, 2, 0)];
	this.instance_130.cache(0,-1,19,19);

	this.instance_131 = new lib.Symbol136("synched",0);
	this.instance_131.setTransform(111.8,129.2);
	this.instance_131.filters = [new cjs.ColorFilter(0.671875, 0.671875, 0.671875, 1, 2, 2, 2, 0)];
	this.instance_131.cache(0,-2,19,19);

	this.instance_132 = new lib.Symbol135("synched",0);
	this.instance_132.setTransform(239.7,128.7);
	this.instance_132.filters = [new cjs.ColorFilter(0.671875, 0.671875, 0.671875, 1, 2, 2, 2, 0)];
	this.instance_132.cache(0,-1,19,19);

	this.instance_133 = new lib.Symbol138("synched",0);
	this.instance_133.setTransform(111.8,129.2);
	this.instance_133.filters = [new cjs.ColorFilter(0.6796875, 0.6796875, 0.6796875, 1, 2, 2, 2, 0)];
	this.instance_133.cache(0,-2,19,19);

	this.instance_134 = new lib.Symbol137("synched",0);
	this.instance_134.setTransform(239.7,128.7);
	this.instance_134.filters = [new cjs.ColorFilter(0.6796875, 0.6796875, 0.6796875, 1, 2, 2, 2, 0)];
	this.instance_134.cache(0,-1,19,19);

	this.instance_135 = new lib.Symbol140("synched",0);
	this.instance_135.setTransform(111.8,129.2);
	this.instance_135.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 2, 2, 2, 0)];
	this.instance_135.cache(0,-2,19,19);

	this.instance_136 = new lib.Symbol139("synched",0);
	this.instance_136.setTransform(239.7,128.7);
	this.instance_136.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 2, 2, 2, 0)];
	this.instance_136.cache(0,-1,19,19);

	this.instance_137 = new lib.Symbol142("synched",0);
	this.instance_137.setTransform(111.8,129.2);
	this.instance_137.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 2, 2, 2, 0)];
	this.instance_137.cache(0,-2,19,19);

	this.instance_138 = new lib.Symbol141("synched",0);
	this.instance_138.setTransform(239.7,128.7);
	this.instance_138.filters = [new cjs.ColorFilter(0.69921875, 0.69921875, 0.69921875, 1, 2, 2, 2, 0)];
	this.instance_138.cache(0,-1,19,19);

	this.instance_139 = new lib.Symbol144("synched",0);
	this.instance_139.setTransform(111.8,129.2);
	this.instance_139.filters = [new cjs.ColorFilter(0.7109375, 0.7109375, 0.7109375, 1, 2, 2, 2, 0)];
	this.instance_139.cache(0,-2,19,19);

	this.instance_140 = new lib.Symbol143("synched",0);
	this.instance_140.setTransform(239.7,128.7);
	this.instance_140.filters = [new cjs.ColorFilter(0.7109375, 0.7109375, 0.7109375, 1, 2, 2, 2, 0)];
	this.instance_140.cache(0,-1,19,19);

	this.instance_141 = new lib.Symbol146("synched",0);
	this.instance_141.setTransform(111.8,129.2);
	this.instance_141.filters = [new cjs.ColorFilter(0.73046875, 0.73046875, 0.73046875, 1, 2, 2, 2, 0)];
	this.instance_141.cache(0,-2,19,19);

	this.instance_142 = new lib.Symbol145("synched",0);
	this.instance_142.setTransform(239.7,128.7);
	this.instance_142.filters = [new cjs.ColorFilter(0.73046875, 0.73046875, 0.73046875, 1, 2, 2, 2, 0)];
	this.instance_142.cache(0,-1,19,19);

	this.instance_143 = new lib.Symbol148("synched",0);
	this.instance_143.setTransform(111.8,129.2);
	this.instance_143.filters = [new cjs.ColorFilter(0.73046875, 0.73046875, 0.73046875, 1, 2, 2, 2, 0)];
	this.instance_143.cache(0,-2,19,19);

	this.instance_144 = new lib.Symbol147("synched",0);
	this.instance_144.setTransform(239.7,128.7);
	this.instance_144.filters = [new cjs.ColorFilter(0.73046875, 0.73046875, 0.73046875, 1, 2, 2, 2, 0)];
	this.instance_144.cache(0,-1,19,19);

	this.instance_145 = new lib.Symbol150("synched",0);
	this.instance_145.setTransform(111.8,129.2);
	this.instance_145.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 2, 2, 2, 0)];
	this.instance_145.cache(0,-2,19,19);

	this.instance_146 = new lib.Symbol149("synched",0);
	this.instance_146.setTransform(239.7,128.7);
	this.instance_146.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 2, 2, 2, 0)];
	this.instance_146.cache(0,-1,19,19);

	this.instance_147 = new lib.Symbol152("synched",0);
	this.instance_147.setTransform(111.8,129.2);
	this.instance_147.filters = [new cjs.ColorFilter(0.76171875, 0.76171875, 0.76171875, 1, 2, 2, 2, 0)];
	this.instance_147.cache(0,-2,19,19);

	this.instance_148 = new lib.Symbol151("synched",0);
	this.instance_148.setTransform(239.7,128.7);
	this.instance_148.filters = [new cjs.ColorFilter(0.76171875, 0.76171875, 0.76171875, 1, 2, 2, 2, 0)];
	this.instance_148.cache(0,-1,19,19);

	this.instance_149 = new lib.Symbol154("synched",0);
	this.instance_149.setTransform(111.8,129.2);
	this.instance_149.filters = [new cjs.ColorFilter(0.76953125, 0.76953125, 0.76953125, 1, 2, 2, 2, 0)];
	this.instance_149.cache(0,-2,19,19);

	this.instance_150 = new lib.Symbol153("synched",0);
	this.instance_150.setTransform(239.7,128.7);
	this.instance_150.filters = [new cjs.ColorFilter(0.76953125, 0.76953125, 0.76953125, 1, 2, 2, 2, 0)];
	this.instance_150.cache(0,-1,19,19);

	this.instance_151 = new lib.Symbol156("synched",0);
	this.instance_151.setTransform(111.8,129.2);
	this.instance_151.filters = [new cjs.ColorFilter(0.78125, 0.78125, 0.78125, 1, 2, 2, 2, 0)];
	this.instance_151.cache(0,-2,19,19);

	this.instance_152 = new lib.Symbol155("synched",0);
	this.instance_152.setTransform(239.7,128.7);
	this.instance_152.filters = [new cjs.ColorFilter(0.78125, 0.78125, 0.78125, 1, 2, 2, 2, 0)];
	this.instance_152.cache(0,-1,19,19);

	this.instance_153 = new lib.Symbol158("synched",0);
	this.instance_153.setTransform(111.8,129.2);
	this.instance_153.filters = [new cjs.ColorFilter(0.7890625, 0.7890625, 0.7890625, 1, 2, 2, 2, 0)];
	this.instance_153.cache(0,-2,19,19);

	this.instance_154 = new lib.Symbol157("synched",0);
	this.instance_154.setTransform(239.7,128.7);
	this.instance_154.filters = [new cjs.ColorFilter(0.7890625, 0.7890625, 0.7890625, 1, 2, 2, 2, 0)];
	this.instance_154.cache(0,-1,19,19);

	this.instance_155 = new lib.Symbol160("synched",0);
	this.instance_155.setTransform(111.8,129.2);
	this.instance_155.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 2, 2, 2, 0)];
	this.instance_155.cache(0,-2,19,19);

	this.instance_156 = new lib.Symbol159("synched",0);
	this.instance_156.setTransform(239.7,128.7);
	this.instance_156.filters = [new cjs.ColorFilter(0.80078125, 0.80078125, 0.80078125, 1, 2, 2, 2, 0)];
	this.instance_156.cache(0,-1,19,19);

	this.instance_157 = new lib.Symbol162("synched",0);
	this.instance_157.setTransform(111.8,129.2);
	this.instance_157.filters = [new cjs.ColorFilter(0.80859375, 0.80859375, 0.80859375, 1, 2, 2, 2, 0)];
	this.instance_157.cache(0,-2,19,19);

	this.instance_158 = new lib.Symbol161("synched",0);
	this.instance_158.setTransform(239.7,128.7);
	this.instance_158.filters = [new cjs.ColorFilter(0.80859375, 0.80859375, 0.80859375, 1, 2, 2, 2, 0)];
	this.instance_158.cache(0,-1,19,19);

	this.instance_159 = new lib.Symbol164("synched",0);
	this.instance_159.setTransform(111.8,129.2);
	this.instance_159.filters = [new cjs.ColorFilter(0.8203125, 0.8203125, 0.8203125, 1, 2, 2, 2, 0)];
	this.instance_159.cache(0,-2,19,19);

	this.instance_160 = new lib.Symbol163("synched",0);
	this.instance_160.setTransform(239.7,128.7);
	this.instance_160.filters = [new cjs.ColorFilter(0.8203125, 0.8203125, 0.8203125, 1, 2, 2, 2, 0)];
	this.instance_160.cache(0,-1,19,19);

	this.instance_161 = new lib.Symbol166("synched",0);
	this.instance_161.setTransform(111.8,129.2);
	this.instance_161.filters = [new cjs.ColorFilter(0.828125, 0.828125, 0.828125, 1, 3, 3, 3, 0)];
	this.instance_161.cache(0,-2,19,19);

	this.instance_162 = new lib.Symbol165("synched",0);
	this.instance_162.setTransform(239.7,128.7);
	this.instance_162.filters = [new cjs.ColorFilter(0.828125, 0.828125, 0.828125, 1, 3, 3, 3, 0)];
	this.instance_162.cache(0,-1,19,19);

	this.instance_163 = new lib.Symbol168("synched",0);
	this.instance_163.setTransform(111.8,129.2);
	this.instance_163.filters = [new cjs.ColorFilter(0.83984375, 0.83984375, 0.83984375, 1, 3, 3, 3, 0)];
	this.instance_163.cache(0,-2,19,19);

	this.instance_164 = new lib.Symbol167("synched",0);
	this.instance_164.setTransform(239.7,128.7);
	this.instance_164.filters = [new cjs.ColorFilter(0.83984375, 0.83984375, 0.83984375, 1, 3, 3, 3, 0)];
	this.instance_164.cache(0,-1,19,19);

	this.instance_165 = new lib.Symbol170("synched",0);
	this.instance_165.setTransform(111.8,129.2);
	this.instance_165.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 3, 3, 3, 0)];
	this.instance_165.cache(0,-2,19,19);

	this.instance_166 = new lib.Symbol169("synched",0);
	this.instance_166.setTransform(239.7,128.7);
	this.instance_166.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 3, 3, 3, 0)];
	this.instance_166.cache(0,-1,19,19);

	this.instance_167 = new lib.Symbol172("synched",0);
	this.instance_167.setTransform(111.8,129.2);
	this.instance_167.filters = [new cjs.ColorFilter(0.859375, 0.859375, 0.859375, 1, 3, 3, 3, 0)];
	this.instance_167.cache(0,-2,19,19);

	this.instance_168 = new lib.Symbol171("synched",0);
	this.instance_168.setTransform(239.7,128.7);
	this.instance_168.filters = [new cjs.ColorFilter(0.859375, 0.859375, 0.859375, 1, 3, 3, 3, 0)];
	this.instance_168.cache(0,-1,19,19);

	this.instance_169 = new lib.Symbol174("synched",0);
	this.instance_169.setTransform(111.8,129.2);
	this.instance_169.filters = [new cjs.ColorFilter(0.87109375, 0.87109375, 0.87109375, 1, 3, 3, 3, 0)];
	this.instance_169.cache(0,-2,19,19);

	this.instance_170 = new lib.Symbol173("synched",0);
	this.instance_170.setTransform(239.7,128.7);
	this.instance_170.filters = [new cjs.ColorFilter(0.87109375, 0.87109375, 0.87109375, 1, 3, 3, 3, 0)];
	this.instance_170.cache(0,-1,19,19);

	this.instance_171 = new lib.Symbol176("synched",0);
	this.instance_171.setTransform(111.8,129.2);
	this.instance_171.filters = [new cjs.ColorFilter(0.87890625, 0.87890625, 0.87890625, 1, 3, 3, 3, 0)];
	this.instance_171.cache(0,-2,19,19);

	this.instance_172 = new lib.Symbol175("synched",0);
	this.instance_172.setTransform(239.7,128.7);
	this.instance_172.filters = [new cjs.ColorFilter(0.87890625, 0.87890625, 0.87890625, 1, 3, 3, 3, 0)];
	this.instance_172.cache(0,-1,19,19);

	this.instance_173 = new lib.Symbol178("synched",0);
	this.instance_173.setTransform(111.8,129.2);
	this.instance_173.filters = [new cjs.ColorFilter(0.890625, 0.890625, 0.890625, 1, 3, 3, 3, 0)];
	this.instance_173.cache(0,-2,19,19);

	this.instance_174 = new lib.Symbol177("synched",0);
	this.instance_174.setTransform(239.7,128.7);
	this.instance_174.filters = [new cjs.ColorFilter(0.890625, 0.890625, 0.890625, 1, 3, 3, 3, 0)];
	this.instance_174.cache(0,-1,19,19);

	this.instance_175 = new lib.Symbol180("synched",0);
	this.instance_175.setTransform(111.8,129.2);
	this.instance_175.filters = [new cjs.ColorFilter(0.8984375, 0.8984375, 0.8984375, 1, 3, 3, 3, 0)];
	this.instance_175.cache(0,-2,19,19);

	this.instance_176 = new lib.Symbol179("synched",0);
	this.instance_176.setTransform(239.7,128.7);
	this.instance_176.filters = [new cjs.ColorFilter(0.8984375, 0.8984375, 0.8984375, 1, 3, 3, 3, 0)];
	this.instance_176.cache(0,-1,19,19);

	this.instance_177 = new lib.Symbol182("synched",0);
	this.instance_177.setTransform(111.8,129.2);
	this.instance_177.filters = [new cjs.ColorFilter(0.91015625, 0.91015625, 0.91015625, 1, 3, 3, 3, 0)];
	this.instance_177.cache(0,-2,19,19);

	this.instance_178 = new lib.Symbol181("synched",0);
	this.instance_178.setTransform(239.7,128.7);
	this.instance_178.filters = [new cjs.ColorFilter(0.91015625, 0.91015625, 0.91015625, 1, 3, 3, 3, 0)];
	this.instance_178.cache(0,-1,19,19);

	this.instance_179 = new lib.Symbol184("synched",0);
	this.instance_179.setTransform(111.8,129.2);
	this.instance_179.filters = [new cjs.ColorFilter(0.9296875, 0.9296875, 0.9296875, 1, 3, 3, 3, 0)];
	this.instance_179.cache(0,-2,19,19);

	this.instance_180 = new lib.Symbol183("synched",0);
	this.instance_180.setTransform(239.7,128.7);
	this.instance_180.filters = [new cjs.ColorFilter(0.9296875, 0.9296875, 0.9296875, 1, 3, 3, 3, 0)];
	this.instance_180.cache(0,-1,19,19);

	this.instance_181 = new lib.Symbol186("synched",0);
	this.instance_181.setTransform(111.8,129.2);
	this.instance_181.filters = [new cjs.ColorFilter(0.94140625, 0.94140625, 0.94140625, 1, 3, 3, 3, 0)];
	this.instance_181.cache(0,-2,19,19);

	this.instance_182 = new lib.Symbol185("synched",0);
	this.instance_182.setTransform(239.7,128.7);
	this.instance_182.filters = [new cjs.ColorFilter(0.94140625, 0.94140625, 0.94140625, 1, 3, 3, 3, 0)];
	this.instance_182.cache(0,-1,19,19);

	this.instance_183 = new lib.Symbol188("synched",0);
	this.instance_183.setTransform(111.8,129.2);
	this.instance_183.filters = [new cjs.ColorFilter(0.94921875, 0.94921875, 0.94921875, 1, 3, 3, 3, 0)];
	this.instance_183.cache(0,-2,19,19);

	this.instance_184 = new lib.Symbol187("synched",0);
	this.instance_184.setTransform(239.7,128.7);
	this.instance_184.filters = [new cjs.ColorFilter(0.94921875, 0.94921875, 0.94921875, 1, 3, 3, 3, 0)];
	this.instance_184.cache(0,-1,19,19);

	this.instance_185 = new lib.Symbol190("synched",0);
	this.instance_185.setTransform(111.8,129.2);
	this.instance_185.filters = [new cjs.ColorFilter(0.9609375, 0.9609375, 0.9609375, 1, 3, 3, 3, 0)];
	this.instance_185.cache(0,-2,19,19);

	this.instance_186 = new lib.Symbol189("synched",0);
	this.instance_186.setTransform(239.7,128.7);
	this.instance_186.filters = [new cjs.ColorFilter(0.9609375, 0.9609375, 0.9609375, 1, 3, 3, 3, 0)];
	this.instance_186.cache(0,-1,19,19);

	this.instance_187 = new lib.Symbol192("synched",0);
	this.instance_187.setTransform(111.8,129.2);
	this.instance_187.filters = [new cjs.ColorFilter(0.96875, 0.96875, 0.96875, 1, 3, 3, 3, 0)];
	this.instance_187.cache(0,-2,19,19);

	this.instance_188 = new lib.Symbol191("synched",0);
	this.instance_188.setTransform(239.7,128.7);
	this.instance_188.filters = [new cjs.ColorFilter(0.96875, 0.96875, 0.96875, 1, 3, 3, 3, 0)];
	this.instance_188.cache(0,-1,19,19);

	this.instance_189 = new lib.Symbol194("synched",0);
	this.instance_189.setTransform(111.8,129.2);
	this.instance_189.filters = [new cjs.ColorFilter(0.98046875, 0.98046875, 0.98046875, 1, 3, 3, 3, 0)];
	this.instance_189.cache(0,-2,19,19);

	this.instance_190 = new lib.Symbol193("synched",0);
	this.instance_190.setTransform(239.7,128.7);
	this.instance_190.filters = [new cjs.ColorFilter(0.98046875, 0.98046875, 0.98046875, 1, 3, 3, 3, 0)];
	this.instance_190.cache(0,-1,19,19);

	this.instance_191 = new lib.Symbol196("synched",0);
	this.instance_191.setTransform(111.8,129.2);
	this.instance_191.filters = [new cjs.ColorFilter(0.98828125, 0.98828125, 0.98828125, 1, 3, 3, 3, 0)];
	this.instance_191.cache(0,-2,19,19);

	this.instance_192 = new lib.Symbol195("synched",0);
	this.instance_192.setTransform(239.7,128.7);
	this.instance_192.filters = [new cjs.ColorFilter(0.98828125, 0.98828125, 0.98828125, 1, 3, 3, 3, 0)];
	this.instance_192.cache(0,-1,19,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_5},{t:this.instance_4},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_7},{t:this.instance_6},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_9},{t:this.instance_8},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_11},{t:this.instance_10},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_13},{t:this.instance_12},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_15},{t:this.instance_14},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_17},{t:this.instance_16},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_19},{t:this.instance_18},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_21},{t:this.instance_20},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_23},{t:this.instance_22},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_25},{t:this.instance_24},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_27},{t:this.instance_26},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_29},{t:this.instance_28},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_31},{t:this.instance_30},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_33},{t:this.instance_32},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_35},{t:this.instance_34},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_37},{t:this.instance_36},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_39},{t:this.instance_38},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_41},{t:this.instance_40},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_43},{t:this.instance_42},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_45},{t:this.instance_44},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_47},{t:this.instance_46},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_49},{t:this.instance_48},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_51},{t:this.instance_50},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_53},{t:this.instance_52},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_55},{t:this.instance_54},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_57},{t:this.instance_56},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_59},{t:this.instance_58},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_61},{t:this.instance_60},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_63},{t:this.instance_62},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_65},{t:this.instance_64},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_67},{t:this.instance_66},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_69},{t:this.instance_68},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_71},{t:this.instance_70},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_73},{t:this.instance_72},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_75},{t:this.instance_74},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_77},{t:this.instance_76},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_79},{t:this.instance_78},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_81},{t:this.instance_80},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_83},{t:this.instance_82},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_85},{t:this.instance_84},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_87},{t:this.instance_86},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_89},{t:this.instance_88},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_91},{t:this.instance_90},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_93},{t:this.instance_92},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_95},{t:this.instance_94},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_97},{t:this.instance_96},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_99},{t:this.instance_98},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_101},{t:this.instance_100},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_103},{t:this.instance_102},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_105},{t:this.instance_104},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_108},{t:this.instance_107},{t:this.instance},{t:this.instance_106,p:{alpha:0}}]},1).to({state:[{t:this.instance_3},{t:this.instance_110},{t:this.instance_109},{t:this.instance},{t:this.instance_106,p:{alpha:0.02}}]},1).to({state:[{t:this.instance_3},{t:this.instance_112},{t:this.instance_111},{t:this.instance},{t:this.instance_106,p:{alpha:0.051}}]},1).to({state:[{t:this.instance_3},{t:this.instance_114},{t:this.instance_113},{t:this.instance},{t:this.instance_106,p:{alpha:0.07}}]},1).to({state:[{t:this.instance_3},{t:this.instance_116},{t:this.instance_115},{t:this.instance},{t:this.instance_106,p:{alpha:0.09}}]},1).to({state:[{t:this.instance_3},{t:this.instance_118},{t:this.instance_117},{t:this.instance},{t:this.instance_106,p:{alpha:0.121}}]},1).to({state:[{t:this.instance_3},{t:this.instance_120},{t:this.instance_119},{t:this.instance},{t:this.instance_106,p:{alpha:0.141}}]},1).to({state:[{t:this.instance_3},{t:this.instance_122},{t:this.instance_121},{t:this.instance},{t:this.instance_106,p:{alpha:0.172}}]},1).to({state:[{t:this.instance_3},{t:this.instance_124},{t:this.instance_123},{t:this.instance},{t:this.instance_106,p:{alpha:0.191}}]},1).to({state:[{t:this.instance_3},{t:this.instance_126},{t:this.instance_125},{t:this.instance},{t:this.instance_106,p:{alpha:0.211}}]},1).to({state:[{t:this.instance_3},{t:this.instance_128},{t:this.instance_127},{t:this.instance},{t:this.instance_106,p:{alpha:0.238}}]},1).to({state:[{t:this.instance_3},{t:this.instance_130},{t:this.instance_129},{t:this.instance},{t:this.instance_106,p:{alpha:0.262}}]},1).to({state:[{t:this.instance_3},{t:this.instance_132},{t:this.instance_131},{t:this.instance},{t:this.instance_106,p:{alpha:0.289}}]},1).to({state:[{t:this.instance_3},{t:this.instance_134},{t:this.instance_133},{t:this.instance},{t:this.instance_106,p:{alpha:0.309}}]},1).to({state:[{t:this.instance_3},{t:this.instance_136},{t:this.instance_135},{t:this.instance},{t:this.instance_106,p:{alpha:0.328}}]},1).to({state:[{t:this.instance_3},{t:this.instance_138},{t:this.instance_137},{t:this.instance},{t:this.instance_106,p:{alpha:0.359}}]},1).to({state:[{t:this.instance_3},{t:this.instance_140},{t:this.instance_139},{t:this.instance},{t:this.instance_106,p:{alpha:0.379}}]},1).to({state:[{t:this.instance_3},{t:this.instance_142},{t:this.instance_141},{t:this.instance},{t:this.instance_106,p:{alpha:0.41}}]},1).to({state:[{t:this.instance_3},{t:this.instance_144},{t:this.instance_143},{t:this.instance},{t:this.instance_106,p:{alpha:0.43}}]},1).to({state:[{t:this.instance_3},{t:this.instance_146},{t:this.instance_145},{t:this.instance},{t:this.instance_106,p:{alpha:0.449}}]},1).to({state:[{t:this.instance_3},{t:this.instance_148},{t:this.instance_147},{t:this.instance},{t:this.instance_106,p:{alpha:0.48}}]},1).to({state:[{t:this.instance_3},{t:this.instance_150},{t:this.instance_149},{t:this.instance},{t:this.instance_106,p:{alpha:0.5}}]},1).to({state:[{t:this.instance_3},{t:this.instance_152},{t:this.instance_151},{t:this.instance},{t:this.instance_106,p:{alpha:0.52}}]},1).to({state:[{t:this.instance_3},{t:this.instance_154},{t:this.instance_153},{t:this.instance},{t:this.instance_106,p:{alpha:0.551}}]},1).to({state:[{t:this.instance_3},{t:this.instance_156},{t:this.instance_155},{t:this.instance},{t:this.instance_106,p:{alpha:0.57}}]},1).to({state:[{t:this.instance_3},{t:this.instance_158},{t:this.instance_157},{t:this.instance},{t:this.instance_106,p:{alpha:0.59}}]},1).to({state:[{t:this.instance_3},{t:this.instance_160},{t:this.instance_159},{t:this.instance},{t:this.instance_106,p:{alpha:0.621}}]},1).to({state:[{t:this.instance_3},{t:this.instance_162},{t:this.instance_161},{t:this.instance},{t:this.instance_106,p:{alpha:0.641}}]},1).to({state:[{t:this.instance_3},{t:this.instance_164},{t:this.instance_163},{t:this.instance},{t:this.instance_106,p:{alpha:0.672}}]},1).to({state:[{t:this.instance_3},{t:this.instance_166},{t:this.instance_165},{t:this.instance},{t:this.instance_106,p:{alpha:0.691}}]},1).to({state:[{t:this.instance_3},{t:this.instance_168},{t:this.instance_167},{t:this.instance},{t:this.instance_106,p:{alpha:0.711}}]},1).to({state:[{t:this.instance_3},{t:this.instance_170},{t:this.instance_169},{t:this.instance},{t:this.instance_106,p:{alpha:0.738}}]},1).to({state:[{t:this.instance_3},{t:this.instance_172},{t:this.instance_171},{t:this.instance},{t:this.instance_106,p:{alpha:0.762}}]},1).to({state:[{t:this.instance_3},{t:this.instance_174},{t:this.instance_173},{t:this.instance},{t:this.instance_106,p:{alpha:0.789}}]},1).to({state:[{t:this.instance_3},{t:this.instance_176},{t:this.instance_175},{t:this.instance},{t:this.instance_106,p:{alpha:0.809}}]},1).to({state:[{t:this.instance_3},{t:this.instance_178},{t:this.instance_177},{t:this.instance},{t:this.instance_106,p:{alpha:0.828}}]},1).to({state:[{t:this.instance_3},{t:this.instance_180},{t:this.instance_179},{t:this.instance},{t:this.instance_106,p:{alpha:0.859}}]},1).to({state:[{t:this.instance_3},{t:this.instance_182},{t:this.instance_181},{t:this.instance},{t:this.instance_106,p:{alpha:0.879}}]},1).to({state:[{t:this.instance_3},{t:this.instance_184},{t:this.instance_183},{t:this.instance},{t:this.instance_106,p:{alpha:0.91}}]},1).to({state:[{t:this.instance_3},{t:this.instance_186},{t:this.instance_185},{t:this.instance},{t:this.instance_106,p:{alpha:0.93}}]},1).to({state:[{t:this.instance_3},{t:this.instance_188},{t:this.instance_187},{t:this.instance},{t:this.instance_106,p:{alpha:0.949}}]},1).to({state:[{t:this.instance_3},{t:this.instance_190},{t:this.instance_189},{t:this.instance},{t:this.instance_106,p:{alpha:0.98}}]},1).to({state:[{t:this.instance_3},{t:this.instance_192},{t:this.instance_191},{t:this.instance},{t:this.instance_106,p:{alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(182.9,182.8,375.5,268.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;