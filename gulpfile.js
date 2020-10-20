const path = require("path");
const fs = require("fs");
const del = require("del");
const gulp = require("gulp");
const nunjucks = require("gulp-nunjucks");
const data = require("gulp-data");
const JSON5 = require("json5");
const gulpLoadPlugins = require("gulp-load-plugins");
const $ = gulpLoadPlugins();

const getData = () => {
  let data = {};
  try {
    data = Object.assign(
      data,
      JSON5.parse(
        fs.readFileSync(
          path.resolve("./src/data/zh-HK/ExtraBlocks.json"),
          "utf8"
        )
      )
    );
  } catch (e) {
  } finally {
    return data;
  }
};

gulp.task("view", () =>
  gulp
    .src("./src/templates/index.html")
    .pipe(data(() => getData()))
    .pipe(nunjucks.compile())
    .pipe(gulp.dest("public"))
);

gulp.task("clean", () => del(["dist"], { dot: true }));

gulp.task("default", gulp.series("clean", "view"));
