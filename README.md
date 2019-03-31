This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### React FrontEnd: E-Commerce Website 
This website is an illustration of how React is used to develop a e-commerce website. It is based on React and its eco-system. 

### Running it
`npm start` runs the project in dev environment. 


## Architecture 
Project is divied into 2 tiers- backend and frontend. Backend provides functionalities and Front-end renders those functionalities. 

1. Services such as CartService, ProductService exposes the API to interact with the state of the application. It is made reactive using the MobX library. 
2. Front-End is built using React. They simply are the components that subscribe to the data exposed by the Service APIs. 

![image](https://user-images.githubusercontent.com/8319308/55294939-c208b200-53d5-11e9-9295-12bbc2e83c15.png)



## ScreenShots
1. HomePage 
![image](https://user-images.githubusercontent.com/8319308/55294693-178f8f80-53d3-11e9-92ba-fdb18a0a7672.png)
![image](https://user-images.githubusercontent.com/8319308/55294779-0dba5c00-53d4-11e9-85cb-209fe7cdc6ec.png)

2. Cart 
![image](https://user-images.githubusercontent.com/8319308/55294766-e5326200-53d3-11e9-82af-fffd20c2b785.png)
![image](https://user-images.githubusercontent.com/8319308/55294804-4fe39d80-53d4-11e9-8975-cf5ca44946f7.png)



