install:
	npm init

.PHONY: publish

publish:
	npm publish --dry-run

lint:
	npx eslint .

fix:
	npx eslint . --fix


