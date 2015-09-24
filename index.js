var cheerio = require('cheerio');
var gutil = require('gulp-util');
var through = require('through2');

module.exports = function (opts) {

    return through.obj(function (file, enc, callback) {
        if (file.isStream()) {
            this.emit('error', new gutil.PluginError('gulp-resources', 'Streams are not supported!'));
            return callback();
        }

        if (file.isBuffer()) {
            var contents = file.contents.toString('utf8');
            try {
                var $ = cheerio.load(contents, { decodeEntities : false });
                var changed = false;

                $('*').removeAttr('class');
                file.contents = new Buffer($.html());
            } catch (ex) {
                this.emit('error', ex);
                return callback();
            }
        }
        this.push(file);
        callback();
    });
};
