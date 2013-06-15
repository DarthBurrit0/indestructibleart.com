
clean:
	rm -rf build

build: clean
	./node_modules/haiku/bin/haiku build --log-level debug

deploy: build
	./node_modules/beamer/bin/beam build
