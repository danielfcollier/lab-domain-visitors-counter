# Domain Visitors Counter

## Tests

After running a specific solution, go to the project root directory and run:

```sh
python test
```

OR, on Linux/Unix systems:

```bash
make test-assertion
```

## Golang Solution

Go to the project directory with:

```bash
cd golang-solution
```

Run the program:

```bash
go run main.go
```

It will generate an `ouptput.csv` file in the home directory.

> Run with Docker:

```bash
docker build -t golang-solution -f Dockerfile.Golang .
docker create --name solution golang-solution
docker cp solution:/app/data/output.csv ${PWD}
docker rm -f solution
docker build -t tester -f Dockerfile.Tester .
docker run tester
```

OR, on Linux/Unix systems:

```bash
make docker-go
```

## Python Solution

Go to the project directory with:

```bash
cd python-solution
```

Run the program:

```bash
python main.py
```

It will generate an `ouptput.csv` file in the home directory.

> Run with Docker:

```bash
docker build -t python-solution -f Dockerfile.Python .
docker create --name solution python-solution
docker cp solution:/app/data/output.csv ${PWD}
docker rm -f solution
docker build -t tester -f Dockerfile.Tester .
docker run tester
```

OR, on Linux/Unix systems:

```bash
make docker-py
```

## JavaScript Solution

Go to the project directory with:

```bash
cd javascript-solution
```

And, install the npm packages:

```bash
npm install
```

Then, run the program:

```bash
npm start
```

It will generate an `ouptput.csv` file in the home directory.

> Run with Docker:

```bash
docker build -t javascript-solution -f Dockerfile.JavaScript .
docker create --name solution javascript-solution
docker cp solution:/app/data/output.csv ${PWD}
docker rm -f solution
docker build -t tester -f Dockerfile.Tester .
docker run tester
```

OR, on Linux/Unix systems:

```bash
make docker-py
```
