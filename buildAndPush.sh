#!/bin/sh

# Arguments
# $1: version

az acr login --name coachesclassfrontend
docker build --build-arg APP_VERSION=$1 -t coachesclassfrontend:$1 .
docker tag coachesclassfrontend:$1 coachesclassfrontend.azurecr.io/coachesclassfrontend:$1
docker push coachesclassfrontend.azurecr.io/coachesclassfrontend:$1
