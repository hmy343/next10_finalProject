import pandas as pd
import cx_Oracle 

df_item = pd.read_csv('./관광지수_항목집계.csv', encoding='cp949')
print(df_item)

# 편차 비율 구하기
def get_pro(df):
    items = df.columns[1:].tolist()   
#     return items
    for i in items:
        mean = df[i].mean()
        df[i] = df[i].apply(lambda x:round(x/mean,4))
    return df
df_pro = get_pro(df_item)
print(df_pro)
print('-----------------편차비율 구하기-------------------')

# 지수 구하기
def get_index(df):
    items = df.columns[1:].tolist()
#     print(items)
    for i in items:
        if i == '역사문화자원':
            df[i] = df[i].apply(lambda x:round(x*0.1072,4))
        elif i == '관광시설':
            df[i] = df[i].apply(lambda x:round(x*0.0862,4))
        elif i == '관광축제':
            df[i] = df[i].apply(lambda x:round(x*0.0746,4))
        elif i == '숙박':
            df[i] = df[i].apply(lambda x:round(x*0.1461,4))
        elif i == '안전':
            df[i] = df[i].apply(lambda x:round(x*0.0872,4))    
        elif i == '관광객 수':
            df[i] = df[i].apply(lambda x:round(x*0.2942,4))
        elif i == '관광산업':
            df[i] = df[i].apply(lambda x:round(x*0.2045,4))
    df['지수합'] = df.sum(axis=1)
    return df

df_index = get_index(df_pro)
print(df_index)
print('-----------------지수 구하기-------------------')

# 파이썬-DB 연동
# conn = cx_Oracle.connect('접속이름/비밀번호@호스트이름:포트번호/SID)
conn = cx_Oracle.connect('njoo/1234@192.168.0.6:1521/xe')
cursor = conn.cursor() # 커서객체 생성

sql =   """
        insert into TEMP_INDEX values(:1,:2,:3,:4,:5,:6,:7,:8,:9)
        """
data=df_index.apply(tuple,axis=1).tolist()
print(data)
cursor.arraysize=len(data)
cursor.executemany(sql,data)

cursor.close()
conn.commit()
# conn.rollback()
conn.close()

# 지수 항목 테이블 DB에 넣기
conn = cx_Oracle.connect('njoo/1234@192.168.0.6:1521/xe')
cursor = conn.cursor()
sql =   """
        insert into INDEX_ITEM values(:1,:2,:3,:4,:5,:6,:7,:8)
        """
print('-----------------지수 항목-------------------')

df_item = pd.read_csv('./관광지수_항목집계.csv', encoding='cp949')
# print(df_item)
data2=df_item.apply(tuple,axis=1).tolist()
print(data2)
cursor.arraysize=len(data2)
cursor.executemany(sql,data2)
cursor.close()
conn.commit()
conn.close()
