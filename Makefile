
build:
	./node_modules/haiku/bin/haiku build

deploy: build
	./node_modules/beamer/bin/beam build
