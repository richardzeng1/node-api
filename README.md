# node-api
A boilerplate template for a REST API containing CRUD operations for a MongoDB database. The stack consists of
an Express framework and a MongoDB database.


#### **Table of Contents**
1. Setup
2. Usage
3. Upcoming Updates


### **Setup**
Note: this repository uses port 8000.
1. Clone this repository into your user directory
2. $npm run dev
3. Use Postman to send requests to the server for localhost:8000/notes
To send PUT, GET and DELETE requests using Postman, the id for the data needs to be known.

Now you can run the command whois. See usage for details

## **Usage**

# *POST*
* Send a POST request using Postman to localhost:8000/notes with parameters title and body. You can specify 
any values for the keys title and body.

# *GET*
* Send a GET request using Postman to localhost:8000/notes/<id>. The id is the id of the data you are trying to
access

# *PUT*
* Send a PUT request using Postman to localhost:8000/notes/<id> with parameters title and body.

# *DELETE*
* Send a delete request using Postman to localhost:8000/notes/<id>

## **Upcoming Updates**

Check for null values for title and body keys for requests.
