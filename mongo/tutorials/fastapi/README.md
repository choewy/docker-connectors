# MongoDB Connection With FastAPI

## create `.venv`

```
$ python3.10 -m venv .venv
```

## avtivate `.venv`

```
$ source ./.venv/bin/activate
```

## install packages

```
$ pip install -r requirements.txt
```

> create `requirements.txt`
>
> ```
> $ pip freeze > requirements.txt
> ```

## run application

```
$ uvicorn main:app --reload --host=0.0.0.0 --port=5000
```
