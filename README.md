Databases will be automatically created when the application starts.

User, Moderator, and Admin accounts will be created in Role table.

You need to add users manually. You can do it by using the following command:
````json
{
    "username": "UserName",
    "email": "email@address.com",
    "password" : "password",
    "role" : ["user","admin"]
}
````
NOTE: roles are still added by postman. UI doesnt have functions for that.

Run this by using the following command:
````bash
npm start
````

And run backend by using the following command:
````bash
nodemon server.js
````




[//]: # ( Path: CHANGELOG.md
## [0.0.1] (2018-05-01)
- Initial release.
- Database will be created automatically.
- User, Moderator, and Admin accounts will be created in Role table.
- You need to add users manually.