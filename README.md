<p align="center">
	<img src="/docs/assets/logo.png?raw=true">
</p>

## What is this?

Gulp Starter is a just-add-water optimization of a Progressive Enhancement-based front-end workflow with the 2017 tools and standards in mind. It is heavily opinionated by the [@mrhenry](https://mrhenry.be) development team.

It includes a bunch of bootstrapping files & [Gulp](http://gulpjs.com) tasks to get you hacking away on a new project in seconds.

## Installation

If you trust us:

```
$ bash <(curl -s https://raw.githubusercontent.com/mrhenry/gulp-starter/master/script/install)
```

## Docs

The tasks are documented in the [Mr. Henry Gulp Registry](https://github.com/mrhenry/gulp-registry-mrhenry).

## Troubleshooting

### Node & Yarn setup

Gulp Starter uses [Yarn](https://yarnpkg.com/) for dependency management.  
When you install Yarn through Homebrew, it also pulls in the latest Node.js version (through Homebrew). This causes some issues when you already run a version of Node.js that has not been installed with Homebrew.

The easiest way I made this work was [follow these instructions to uninstall Node.js](http://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x/11178106#11178106) & then simply run `$ brew install yarn`. It sets up everything for you. You will still have to install Gulp globally either through Yarn or NPM.

### Other questions

Get in touch with [@pieterbeulque](https://github.com/pieterbeulque).

---

[Looking for the pre-2017 version?](https://github.com/mrhenry/gulp-starter-legacy)
