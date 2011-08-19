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

// adjust the namespace if you changed it in index.html; this widget serves
// as our main controller to do stuff across the whole app and kick off the
// app when the page loads
dojo.declare('tht.Main', null, {
	audio: null,
	currentLesson: null,
	
    constructor: function() {
	   currentLesson=document.getElementById('currentLesson');
	   audio=uow.getAudio().then(dojo.hitch(this, function(){
		   dojo.subscribe('/org/hark/prefs/response', this, this.prefsCallback);
		   dojo.publish('/org/hark/prefs/request');
	   }));
    },
	
	prefsCallback: function(prefs, which) {
		audio.setProperty({name : 'volume', value : prefs.volume*prefs.speechVolume, immediate : true});
		audio.setProperty({name : 'volume', value : prefs.volume*prefs.soundVolume, channel : 'sounds', immediate : true});
		audio.setProperty({name : 'rate', value : prefs.speechRate, immediate : true});
	}
});

dojo.ready(function() {
    // build our main widget when everything is ready; adjust the name here
    // if you change it above but otherwise leave this alone and do all 
    // work in the widget above
    var app = new tht.Main();        
});