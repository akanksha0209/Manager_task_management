from pymongo import MongoClient


app = Flask(_name_)
try:
    conn = MongoClient()
    print("Connected successfully!!!")
except:
    print("Could not connect to MongoDB")
db = conn.table

collection = db.feedback

