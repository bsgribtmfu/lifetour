const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const svgstore = require("gulp-svgstore");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const del = require("del");
const { plugin } = require("postcss");
const sync = require("browser-sync").create();

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(rename("style.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// HTML

const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

// Images

const images = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
}

exports.images = images;

const sprite = () => {
  return gulp.src([
    "source/img/icons/logo.svg",
    "source/img/icons/vkontakte.svg",
    "source/img/icons/facebook.svg",
    "source/img/icons/instagram.svg",
    "source/img/icons/halfmoon.svg",
    "source/img/icons/marker.svg",
    "source/img/icons/start.svg",
    "source/img/icons/sun.svg",
  ])
    .pipe(svgstore())
    .pipe(rename("img/icons/sprite.svg"))
    .pipe(gulp.dest("build"));
}

exports.sprite = sprite;

// Scripts

const scripts = () => {
  return gulp.src("source/js/main.js")
    .pipe(rename("main.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
}

exports.scripts = scripts;

// Copy

const copy = (done) => {
  gulp.src([
    "source/*.ico",
    "source/js/*.js",
    "source/fonts/*.{woff2,woff}",
    "source/css/swiper-bundle.css",
    "source/img/**/*.{png,jpg,svg}",
    "!source/img/**/sprite.svg",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"))
  done();
}

exports.copy = copy;

// Clean

const clean = () => {
  return del("build");
};

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Reload

const reload = done => {
  sync.reload();
  done();
}

// Watcher

const watcher = () => {
  gulp.watch("source/less/**/*.scss", gulp.series(styles));
  gulp.watch("source/js/main.js", gulp.series(scripts));
  gulp.watch("source/*.html", gulp.series(html, reload));
}

// Build

const build = gulp.series(
  clean,
  gulp.parallel(
    styles,
    html,
    sprite,
    scripts,
    copy,
    images
  )
);

exports.build = build;

// Default

exports.default = gulp.series(
  build,
  gulp.series(
    server,
    watcher
    )
);
