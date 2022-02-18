-> npm install 
-> npm start

endpoints:


/auth/register - POST - register a new user
format ->
{
    "email":"test@gail.cm"
    "password":"test"
}


/auth/login - POST - login a user
format ->
{
    "email:"email@a.com",
    "password":"password"
}

for show profile:
/auth/profile - GET - get user profile
format->
{
    "token":"token"
}


OR
go to -> localhost:3001
