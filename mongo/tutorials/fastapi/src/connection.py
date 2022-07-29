from typing import List
from enum import Enum
from pymongo import MongoClient

class Protocol(str, Enum):
  general = 'mongodb'
  srv = 'mongodb+srv'


def create_mongo_uri(
  protocol: Protocol = Protocol.srv, 
  host:str = '127.0.0.1',
  port: int = 27017,
  username: str = '',
  password: str = '',
  admin_path: str = 'admin'
) -> str:
  return f"{protocol}://{username}:{password}@{host}:{port}/{admin_path}"


class Connection:
  uri = create_mongo_uri(
    protocol=Protocol.general, 
    host='127.0.0.1', 
    port=5002,
    username='root',
    password='password',
    admin_path='admin'
  )

  def __init__(self) -> None:
    self.client = MongoClient(self.uri)

  def show_databases(self) -> List[str]:
    return self.client.list_database_names()