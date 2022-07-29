from typing import Dict, List
from src.connection import Connection
from fastapi import FastAPI

app = FastAPI()
connection = Connection()

@app.get('/')
async def mysql_connect() -> Dict[bool, List[str]]:
  return { 
    "ok": True, 
    "databases": connection.show_databases() 
  }

