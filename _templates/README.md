# Code Generators

This repository uses [hygen](https://github.com/jondot/hygen) for scaffolding recurring patterns within the app. To read more about it check out the github repo. You can also run 

## Usage

```
$ hygen [cmd] [action] [--params]
```

For example to generate a context for use in the app simply run:

```
$ hygen context new foo-bar
OR
$ hygen context new --name foo-bar
```

To get a list of all available commands you can run:

```
$ hygen help
```
