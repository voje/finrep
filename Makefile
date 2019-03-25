.PHONY: node-env

run-env:
	docker run -it --rm \
		-v $(shell pwd):/project/ \
		-w /project \
		--net host \
		finrep-env \
		/bin/bash 

install-env:
	cd finrep; npm install .

# place the repot CSV file from Toshl into git root folder. Name it data.csv (it gets .gitignored).  
prepare-data: install-env
	cd finrep; ./prepare.sh

run-dev: prepare-data
	cd finrep; npm run dev

build-prod: prepare-data
	cd finrep; npm run build

push-to-gh:
	# gh-pages setings
	cp fixed_index.html finrep/dist/index.html

	# not sure, might need to push to master first
	git subtree push --prefix finrep/dist origin gh-pages
