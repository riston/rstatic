var marked = require('marked')
  , fs = require('fs');


console.log(marked('i am using __markdown__.'));

// Get header and footer
var inputDir = './in'
  , outputDir = './out';

var header = fs.readFileSync(inputDir + '/header.html');
var footer = fs.readFileSync(inputDir + '/footer.html');


fs.readdir('./in/content', function(err, files) {
	files.forEach(function(filename) {
		console.log(filename);
		if (filename.indexOf('markdown')) {
			var outputFile = filename.replace('markdown', 'html');

			fs.readFile(inputDir + '/content/' + filename, function(err, file) {
				var content = file.toString();

				fs.writeFile(outputDir + '/' + outputFile, header + marked(content) + footer, function(err) {
					if (err) console.log('Error on file append');
					else {

					}
				});
			});

		}


	});
});