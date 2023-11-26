#!/bin/sh

openapi-generator generate -g nodejs-express-server -i employees.yaml \
	--strict-spec true \
	-p legacyDiscriminatorBehavior=false
