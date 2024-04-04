import psycopg2

def connect_to_database():
    try:
        connection = psycopg2.connect(
            user="postgres",
            password="fulful89",
            host="localhost",
            port="5432",
            database="TestBot"
        )
        print("Успешное подключение к PostgreSQL")
        return connection
    except (Exception, psycopg2.Error) as error:
        print("Ошибка при работе с PostgreSQL", error)
        return None


def execute_query(query):
    connection = connect_to_database()
    if connection is not None:
        try:
            cursor = connection.cursor()
            cursor.execute(query)
            connection.commit()  # Применяем изменения
            cursor.close()
        except psycopg2.Error as error:
            print("Ошибка при выполнении SQL-запроса:", error)
            connection.rollback()  # Откатываем транзакцию в случае ошибки
        finally:
            if connection:
                connection.close()
                print("Соединение с PostgreSQL закрыто")
    else:
        print("Не удалось установить соединение с базой данных.")
