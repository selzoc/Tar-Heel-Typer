/**
 * Sample startup script for a UOW application.
 *
 * Import dojo modules or your own before you use them; remove these if you
 * replace the default layout.
 *
 * Copyright UNC Open Web Team 2010. All Rights Reserved.
 */
dojo.provide('tht.Main');

dojo.require('dojo.parser');
dojo.require('dijit.layout.BorderContainer');
dojo.require('dijit.layout.ContentPane');
dojo.require('dojo.hash');

var app=null;

// adjust the namespace if you changed it in index.html; this widget serves
// as our main controller to do stuff across the whole app and kick off the
// app when the page loads
dojo.declare('tht.Main', null, {
	masterVolume: 1.0,
	speechVolume: 1.0,
	soundVolume: 1.0,
	speechRate: 200,
	currentLesson: "",
	playingState: "none",
	audio: null,
	
    constructor: function() {
	   currentLesson=document.getElementById('currentLesson');
	   
	   audio=uow.getAudio().then(dojo.hitch(this, function(){
	       dojo.subscribe('/org/hark/prefs/response', this, this.prefsCallback);
	       dojo.publish('/org/hark/prefs/request');
	   }));
    },
	
	prefsCallback: function(prefs, which) {
		this.masterVolume=prefs.volume;
		this.speechVolume=prefs.speechVolume;
		this.soundVolume=prefs.soundVolume;
		this.speechRate=prefs.speechRate;
		
		if(audio && this.playingState=="playing")
			this.audio.setProperty({name : 'volume', value : this.masterVolume*this.soundVolume, immediate : true});
			
		else if(audio && this.playingState=="saying")
			this.audio.setProperty({name : 'volume', value : this.masterVolume*this.speechVolume, immediate : true});
	}
});

dojo.ready(function() {
    // build our main widget when everything is ready; adjust the name here
    // if you change it above but otherwise leave this alone and do all 
    // work in the widget above
    app = new tht.Main();
});