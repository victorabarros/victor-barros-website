APP_NAME:=$(shell pwd | xargs basename)
APP_DIR=/${APP_NAME}/src
BASE_DOCKER_IMAGE=node:22.11.0-alpine
PORT=3000

YELLOW=$(shell printf '\033[0;1;33m')
COLOR_OFF=$(shell printf '\033[0;1;0m')

kill-containers:
ifneq ($(shell docker ps -a --filter "name=${APP_NAME}" -aq 2> /dev/null | wc -l | bc), 0)
	@echo "${YELLOW}Removing containers${COLOR_OFF}"
	@docker ps -a --filter "name=${APP_NAME}" -aq | xargs docker rm -f
endif

docker-command: kill-containers
	@docker run -it \
		-v $(shell pwd):${APP_DIR} -w ${APP_DIR} \
		--env PORT=${PORT} \
		--env API_KEY=${API_KEY} \
			-p ${PORT}:${PORT} --name ${APP_NAME} \
			${BASE_DOCKER_IMAGE} sh -c "${COMMAND}"

debug:
	@clear
	@echo "${YELLOW}Running ${APP_NAME} on port ${PORT}${COLOR_OFF}"
	@make -s docker-command COMMAND="yarn dev"
