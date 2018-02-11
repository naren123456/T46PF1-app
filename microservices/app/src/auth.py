from src import app
from flask import request
import re,requests,json

headers = {'Content-Type':'application/json'}

def validemail(email):
    match = re.match('^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$', email)

    if match == None:
        return False
    else:
        return True
        
def validnumber(mobile):
    if len(mobile) == 10:
        return True
    else:
        return False
        
@app.route('/login',methods=['POST'])
def login():
    if request.method=='POST':
        username=request.data['username']
        password=request.data['password']
        if '@' in username:
            data={"provider": "mobile-password", "data": {"email": username,"password": password }}
            data=json.dumps(data)
            r = requests.post('https://auth.arrowroot86.hasura-app.io/v1/login', headers=headers, data=data)
            st=r.content
            print(st)
        elif(username.isdigit()):
            data={"provider": "mobile-password", "data": {"mobile": username,"country_code": "91","password": password }}
            data=json.dumps(data)
            r = requests.post('https://auth.arrowroot86.hasura-app.io/v1/login', headers=headers, data=data)
            st=r.content
            print(st)
        else:
            data={"message": "Not a valid entry for username" }
            data=json.dumps(data)
            return data	
        return st
    
@app.route('/signup',methods=['POST','GET'])
def signup():
    if request.method=='POST':
        username=request.form['username']
        password=request.form['password']
        if '@' in username:
            if validemail(username):
                data={"provider" : "email",  "data" : {"email": username,"password": password}}
                data=json.dumps(data)
                r = requests.post('auth.arrowroot86.hasura-app.io/v1/signup', headers=headers, data=data)
                st=r.content
                print(st)
            else:
                data={"message": "Not a valid email address" }
                data=json.dumps(data)
                return data
                
        
        elif(username.isdigit()):
            if validnumber(username):
                data={"provider": "mobile-password", "data": {"mobile": username,"country_code": "91","password": password }}
                data=json.dumps(data)
                r = requests.post('https://auth.arrowroot86.hasura-app.io/v1/signup', headers=headers, data=data)
                st=r.content
                print(data)
                print(st)
            else:
                data={"message": "Not a valid mobile number" }
                data=json.dumps(data)
                print(data)
                return data
        else:
            data={"message": "Not a valid entry for username" }
            data=json.dumps(data)
            print(data)
            return data
        
        return st    
    else:
        data={"message": "get method" }
        data=json.dumps(data)
        print(data)
        return data
