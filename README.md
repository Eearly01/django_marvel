## Marvel Django

![](https://i.imgur.com/QprQVNJ.jpg)


## User Stories for CRUD functionality

### READ
- This is a React front end app that connects to a Django backend that uses python
- The frontend is unpolished and this project is mainly used to demonstrate an understanding in both python and Django
- Users will be able to specify a characters Name, Age, Power, and Team at the top. When the user presses the submit button the character will be added to the marvel api.

### Run
- To run this app in the frontend enter the marvel_frontend and npm start to open localhost:3000. In order to successfully add the characters, run the env using "source myenv/bin/activate". If pip packages are not correctly installed, run "pip install -r requirements.txt".
- Begin a Postgresql server using sudo service postgresql start.
- Finally, run the backend using python3 manage.py runserver.