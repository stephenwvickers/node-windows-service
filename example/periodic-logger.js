
/**
 ** To run this example program you will need to move it to a directory where
 ** the windows-service module can be found by node, otherwise the service
 ** will fail to start.
 **
 ** This example program will not run out of the example directory, it serves
 ** merely as a reference for you.
 **
 ** When running as a service the current working directory will be the
 ** "%windir%\system32" directory (i.e. c:\windows\system32)
 **/

var fs = require ("fs");
var service = require ("windows-service");

function usage () {
	console.log ("usage: node periodic-logger --add <name>");
	console.log ("       node periodic-logger --remove <name>");
	console.log ("       node periodic-logger --run");
	process.exit (-1);
}

if (process.argv[2] == "--add" && process.argv.length >= 4) {
	service.add (process.argv[3], {programArgs: ["--run"]});
} else if (process.argv[2] == "--remove" && process.argv.length >= 4) {
	service.remove (process.argv[3]);
} else if (process.argv[2] == "--run") {
	var logStream = fs.createWriteStream (process.argv[1] + ".log");
	service.run (logStream, function () {
		service.stop (0);
	});

	// Here is our long running code, simply print a date/time string to
	// our log file
	setInterval (function () {
		console.error (new Date ().toString ());
	}, 1000);
} else {
	usage ();
}
