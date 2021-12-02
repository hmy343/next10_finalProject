import cx_Oracle 

# conn = cx_Oracle.connect('접속이름/비밀번호@호스트이름:포트번호/SID)
conn = cx_Oracle.connect('njoo/1234@192.168.0.6:1521/xe')
cursor = conn.cursor() # 커서 생성

sql =   """
        insert into weight_value values(:1,:2,:3,:4,:5,:6,:7)
        """
data=(0.1072,0.0862,0.0746,0.1461,0.0872,0.2942,0.2045)

cursor.execute(sql,data)

# for row in cursor:
#         print(row)
cursor.close()
conn.commit()
# conn.rollback()
conn.close()
