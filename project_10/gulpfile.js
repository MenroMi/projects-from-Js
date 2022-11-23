"use strict";

import gulp from "gulp";
import browserSync from "browser-sync";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from "gulp-rename";
import autoPrefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";

const sass = gulpSass(dartSass);


const server = () => {
    return browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
};

const styleSass = () => {
    return gulp.src("./src/sass/*.+(scss|sass)")
    .pipe(sass({outputStyle: "compressed"})).on('error', sass.logError)
        .pipe(rename({
            preffix: "",
            suffix: ".min",
        }))
        .pipe(autoPrefixer({
            browsers: ["last 2 versions"],
            cascade: false,
        }))
        .pipe(cleanCSS({compatibility: "ie8"}))
        .pipe(gulp.dest('./src/css/'))
        .pipe(browserSync.stream());
};

const watchers = () => {
    gulp.watch("./src/sass/*.+(sass|scss)");
    gulp.watch("src/*.html").on('change', browserSync.reload);
};

const dev = gulp.parallel(watchers, server, styleSass);

gulp.task("default", dev);