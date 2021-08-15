# server-deployment-practice
LAB - 01
Deployment Test
* Author: Maram Abu Murad
* [tests report](https://github.com/Maram-997/server-deployment-practice/actions/runs/1133039333)
* Setup
.env requirements
PORT - 3000
* Running the app
npm index.js
1. Endpoint: /
Returns string
HELLO WORLD!
2. Endpoint : /data
Returns Object
{
    name : 'Maram',
    age : 24,
    major : 'Business Administration'
}
3. Endpoint : '*'
returns ERROR 
'Page NOT FOUND.'
4. Endpoint : /badConnection
Returns Object 
{
"error": 500,
"path": "/badConnection",
"message": "Something WENT WRONG Internal Server Error"
}

* Tests
 npm test
* UML Diagram
[UML Diagram](https://drive.google.com/file/d/1K3dZ_LLXoONWoKze6aMQIzADAFLzHyTG/view?usp=sharing)
