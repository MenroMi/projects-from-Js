import gulp from "gulp";
import browserSync from "browser-sync";

// Plugins

import GulpCleanCss from "gulp-clean-css";
// import fileinclude from "gulp-file-include";
// import htmlmin from "gulp-htmlmin";
import autoPrefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

// Tasks

const server = () => {
    return browserSync.init({
        server: {
            baseDir: "./src/"
        }
    })
};

const renderScss = () => {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sass({
            outputStyle: "compressed"
        })).on("error", sass.logError)
        .pipe(rename({ suffix: ".min", prefix: "" }))
        .pipe(autoPrefixer())
        .pipe(GulpCleanCss({ compatibility: "ie8" }))
        .pipe(gulp.dest("./src/css/"))
        .pipe(browserSync.stream());
};

const watchers = () => {
    gulp.watch("./src/scss/**/*.scss", renderScss);
};

const dev = gulp.series(renderScss, gulp.parallel(server, watchers));


gulp.task("default", dev);