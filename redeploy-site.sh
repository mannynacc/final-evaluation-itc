#!/bin/bash

git fetch && git reset origin/main --hard
docker-compose -f ./src/docker-compose.yml down
docker-compose -f ./src/docker-compose.yml up -d --build

exit 0
