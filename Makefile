.PHONY: node-env

run-env:
	docker run -it --rm \
		-v $(shell pwd):/project/ \
		-w /project \
		--net host \
		finrep-env \
		/bin/bash 

prepare-data:
	cd finrep; ./prepare.sh
