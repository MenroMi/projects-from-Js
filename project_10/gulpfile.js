"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
let cleanCSS = require("gulp-clean-css");


gulp.task("browser-sync", function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
});

gulp.task("styles-sass", function() {
    return gulp.src("./src/sass/*.+(scss|sass)")
        .pipe(sass({outputStyle: "compressed"})).on('error', sass.logError)
        .pipe(rename({
            preffix: "",
            suffix: ".min",
        }))
        .pipe(autoprefixer({
            browsers: ["last 2 versions"],
            cascade: false,
        }))
        .pipe(cleanCSS({compatibility: "ie8"}))
        .pipe(gulp.dest('./src/css/'))
        .pipe(browserSync.stream());
});

gulp.task("watchers", function() {
    gulp.watch("./src/sass/*.+(sass|scss)", gulp.parallel("styles-sass"));
    gulp.watch("src/*.html").on('change', browserSync.reload);
})

gulp.task('default', gulp.parallel("watchers", "browser-sync", 'styles-sass'));