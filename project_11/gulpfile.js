import gulp from "gulp";
import {deleteAsync} from "del";
import browserSync from "browser-sync";

// Plugins

import fileinclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import size from "gulp-size";
import plumber from "gulp-plumber";
import notify from "gulp-notify";



// Tasks

const server = () => {
    browserSync.init({
        server: {
            baseDir: "./dist/html/"
        }
    })  
};

const clear = () => {
    return deleteAsync(["./dist/"]);
}


const html = () => {
    return gulp.src("./src/html/*.html")
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "html",
            message: error.message}))
    })) 
    .pipe(fileinclude()) // bundle all components on one file html
    .pipe(size({"title": "Before:"})) 
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(size({"title": "After:"}))
    .pipe(gulp.dest("./dist/html/"))
    .pipe(browserSync.stream());
};

// watcher

const watcher = () => {
    gulp.watch("./src/html/**/*.html", html)
    gulp.watch("./src/data/*.json", html)
}

const dev = gulp.series(clear, gulp.parallel(html, watcher, server));
// Exports

// exports.html = html; // exports.globalname-task = gulp-local-name-task
// exports.watcher = watcher;
// exports.clear = clear;
// exports.dev = dev;

gulp.task("default", dev);