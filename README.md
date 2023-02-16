<img src='https://www.home.llc/guide/nikfiles/uploads/2021/07/homellc-Logo.png' />

## Tech Stack

### Backend
<ul>
<li>Node.js</li>
<li>Express</li>
<li>MongoDB</li>
</ul>

### Frontend
<ul>
<li>React</li>
<li>Redux</li>
<li>ChakraUI</li>
</ul>

## Getting Started
### Folder Structure
![image](https://user-images.githubusercontent.com/60300103/219317830-b7267fc3-5be6-448a-b3d9-0ca571e2db20.png)


### Backend

Run the following commands to start the backend server
```sh 
cd backend
npm install
npm run server
```
* The configs folder in backend contains the database configuration.
* The middleware folder in backend contains the validation middleware.
* The model folder in backend contains the User model and schema.
* The routes folder contains all the routes related to login and registration.

### Frontend

Run the following commands to start the React App
```sh
cd homellc
npm install
npm start
```
* The homellc folder contains the whole react application.
* The src folder contains all pages and components.
* All the redux configuration is present in the redux folder inside src folder.
* All routes are present in the components folder.

## Routes

### '/login' - Login/Sign In
![image](https://user-images.githubusercontent.com/60300103/219318187-f2e1cdbf-16fc-434b-a91e-a71bc17af0cd.png)

### '/register' - Register/Sign Up
![image](https://user-images.githubusercontent.com/60300103/219318353-1e89ced2-d2df-4b8a-9e11-eda22949b636.png)

### '/' - Home (Protected Route: Can only be visited if authenticated)
![image](https://user-images.githubusercontent.com/60300103/219318650-221c3e30-aefc-4783-a609-515cbdb3e980.png)


