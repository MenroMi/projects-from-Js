"use strict";
import gulp from "gulp";
import browserSync from "browser-sync";


// Plugins

import GulpCleanCss from "gulp-clean-css";
import rename from "gulp-rename";
import autoPrefixer from "gulp-autoprefixer";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);


// Tasks

const server = () => {
    return browserSync.init({
        server: {
            baseDir: './src/'
        }
    })
};

const renderScssCode = () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(rename({suffix: ".min", prefix: ''}))
        .pipe(autoPrefixer())
        .pipe(GulpCleanCss({compatibility: "ie8"}))
        .pipe(gulp.dest('./src/css/'))
        .pipe(browserSync.stream());
};

const watchers = () => {
    gulp.watch('./src/scss/**/*.scss').on('change', renderScssCode);
    gulp.watch("./src/*.html").on("change", browserSync.reload);
}

const dev = gulp.parallel(watchers, server, renderScssCode);

gulp.task('default', dev);

