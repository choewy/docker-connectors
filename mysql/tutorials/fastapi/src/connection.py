from typing import List
from pymysql import connect

class Connection:
  def __init__(self) -> None:
    self.__conn = connect(
      host='127.0.0.1',
      port=5001,
      user='root',
      passwd='password',
      database='service'
    )

  def show_databases(self) -> List[str]:
    query = 'SHOW DATABASES;'
    curs = self.__conn.cursor()
    curs.execute(query)
    data = curs.fetchall()
    curs.close()
    return [db[0] for db in data]
