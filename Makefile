test-assertion:
	@./test

clean:
	@rm output.csv 2> /dev/null

docker-go:
	@docker build -t golang-solution -f Dockerfile.Golang .
	@docker create --name solution golang-solution
	@docker cp solution:/app/data/output.csv ${PWD}
	@docker rm -f solution
	@docker build -t tester -f Dockerfile.Tester .
	@docker run tester

docker-py:
	@docker build -t python-solution -f Dockerfile.Python .
	@docker create --name solution python-solution
	@docker cp solution:/app/data/output.csv ${PWD}
	@docker rm -f solution
	@docker build -t tester -f Dockerfile.Tester .
	@docker run tester

docker-js:
	@docker build -t javascript-solution -f Dockerfile.JavaScript .
	@docker create --name solution javascript-solution
	@docker cp solution:/app/data/output.csv ${PWD}
	@docker rm -f solution
	@docker build -t tester -f Dockerfile.Tester .
	@docker run tester
