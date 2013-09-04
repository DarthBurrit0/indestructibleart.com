
clean:
	rm -rf build

build: clean
	./node_modules/haiku/bin/haiku build

deploy: build
	./node_modules/beamer/bin/beam build

push:
	git push evan master
	git push ryan master
