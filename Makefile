.PHONY: default console server webpack build

default: server

console:
	bundle exec rails c

server:
	bundle exec rails s

webpack:
	yarn run webpack serve

build:
	NODE_ENV=production ./node_modules/.bin/webpack

