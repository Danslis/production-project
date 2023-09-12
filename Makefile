frontend:
	docker run -p 3000:3000 \
		-d \
		--rm \
		--name notes-frontend \
		-v
		notes-frontend

stop:
	docker stop mongodb notes-frontend notes-backend

dev:
	docker-compose -f docker-compose.yml up -d

build:
	docker-compose -f docker-compose.production.yml up -d

down:
	docker-compose down