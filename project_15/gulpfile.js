"use strict";

import gulp from "gulp";
import browserSync from "browser-sync";
import { deleteAsync } from "del";

// Plugins

import autoPrefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import htmlmin from "gulp-htmlmin";
import babel from "gulp-babel";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import fileinclude from "gulp-file-include";
import size from "gulp-size";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

// main

const clean = () => {
  return deleteAsync(["dist"]);
};

const paths = {
  html: {
    src: "src/*.html",
    dest: "dist/",
  },
  styles: {
    src: "src/sass/**/*.scss",
    dest: "dist/style/",
  },
  scripts: {
    src: "src/js/**/*.js",
    dest: "dist/script/",
  },
};

// static server

const server = () => {
  return browserSync.init({
    server: {
      baseDir: "./dist/",
    },
  });
};

const renderHTML = () => {
  return gulp
    .src(paths.html.src)
    .pipe(fileinclude())
    .pipe(size({ title: "Before:" })) // for checking how size of document(before)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size({ title: "After:" })) // for checking how size of document(after)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
};

const renderStyles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(size({ title: "Before:" })) // for checking how size of document(before)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      autoPrefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(
      rename({
        basename: "main",
        suffix: ".min",
      })
    )
    .pipe(size({ title: "After:" })) // for checking how size of document(after)
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
};

const renderScript = () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
};

const watchers = () => {
  gulp.watch(paths.scripts.src, renderScript);
  gulp.watch(paths.styles.src, renderStyles);
  gulp.watch(paths.html.src, renderHTML);
};

const dev = gulp.series(
  clean,
  gulp.parallel(server, watchers, renderHTML, renderStyles, renderScript)
);

gulp.task("default", dev);
