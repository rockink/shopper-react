This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

If you are looking to see a standalone demo of the app, 
*which does not connect to the server*, checkout the [`v1 tag`](https://github.com/rockink/shopper-react/tree/v1.0). 

`git checkout v1.0`

## DEMO for v1
Checkout at a site hosted in Firebase:
https://shopping-4cc5e.firebaseapp.com 


For the current version which connects to the server is explained below. 

### React FrontEnd: E-Commerce Website 
This website is an illustration of how React is used to develop a e-commerce website. It is based on React and its eco-system. 

### Running it
`npm start` runs the project in dev environment. 


## Architecture 
Project is divied into 2 tiers- backend and frontend. Backend provides functionalities and Front-end renders those functionalities. 

1. Front-End is built using React. They simply are the components that subscribe to the data exposed by the Service APIs. 
2. Services such as CartService, ProductService exposes the API to interact with the state of the application. It is made reactive using the MobX library. 
3. ProductService calls the Api-Gateway to populate the products. 

![image](https://user-images.githubusercontent.com/8319308/55368160-70882200-54be-11e9-9dad-938197f97fb1.png)



## ScreenShots
1. HomePage 
![image](https://user-images.githubusercontent.com/8319308/55294693-178f8f80-53d3-11e9-92ba-fdb18a0a7672.png)
![image](https://user-images.githubusercontent.com/8319308/55294779-0dba5c00-53d4-11e9-85cb-209fe7cdc6ec.png)

2. Cart 
![image](https://user-images.githubusercontent.com/8319308/55294766-e5326200-53d3-11e9-82af-fffd20c2b785.png)
![image](https://user-images.githubusercontent.com/8319308/55294804-4fe39d80-53d4-11e9-8975-cf5ca44946f7.png)



# Building and running in Docker 
##### First Build the project 
`npm run build` 
which updates the build folder with the new build. 

##### Create Docker image 
`docker build -t rockink/shopper:v2 .`

##### Run the Image 
Ensure that network is present. If not create a new one 
`docker network create -d bridge mynetwork` 

Now create the image/run container 
`docker run -d -p 80:80 --name static --network mynetwork  rockink/shopper:v2 `


# Run with Complete Microservice 
With this architecture, it is expected to run all the dependent components as well. 

![image](https://user-images.githubusercontent.com/8319308/55299897-16765680-5403-11e9-8bab-a471f58fa42a.png)

### API-Gateway 
Run the api-gateway 

`docker run -e "JAVA_TOOL_OPTIONS=-Xms200m -Xmx200m" -p 8080:8080 --name product --network mynetwork rockink/product:v1`

Run Static content 

`docker run -d -p 80:80 --name static --network mynetwork  rockink/shopper:v2`



Run Product Service 

`docker run -d -p 8080:8080 --name product --network mynetwork rockink/product:v1`


Now test in http://localhost:8090

