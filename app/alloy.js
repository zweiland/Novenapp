// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.CFG.purple = "#1b1464";
Alloy.CFG.yellow = "#ffd122";
Alloy.CFG.headerHeight = 44.5;


Alloy.CFG.currentTime = new Date();
Alloy.CFG.currentHours = Alloy.CFG.currentTime.getHours();
Alloy.CFG.currentMinutes = Alloy.CFG.currentTime.getMinutes();
Alloy.CFG.currentMonth = Alloy.CFG.currentTime.getMonth() + 1;
Alloy.CFG.currentDay = Alloy.CFG.currentTime.getDate();
Alloy.CFG.currenMonth = Alloy.CFG.currentTime.getMonth();
Alloy.CFG.currentYear = Alloy.CFG.currentTime.getFullYear();


// see if on ios7
// Function to test if device is iOS 7 or later
// http://docs.appcelerator.com/titanium/latest/#!/guide/iOS_7_Migration_Guide
function isiOS7Plus()
{
	// iOS-specific test
	if (Titanium.Platform.name == 'iPhone OS')
	{
		var version = Titanium.Platform.version.split(".");
		var major = parseInt(version[0],10);

		// Can only test this support on a 3.2+ device
		if (major >= 7)
		{
			return true;
		}
	}
	return false;
}

// set global variable for top
Alloy.CFG.iosTop = isiOS7Plus() ? 20 : 0;


