# Impulso Store

## Descripción
Impulso Store es una tienda en línea donde los usuarios pueden ver y reservar productos relacionados con ropa. Nuestra plataforma ofrece una amplia variedad de productos de moda para satisfacer las necesidades de los amantes de la moda. 

This project consists of a main folder "impulse-store" that contains the frontend created with React + Vite in the "client" folder, and the backend created with Node.js, Express and MongoDB in the "server" folder. The frontend application interacts with the backend to manage the products.

## Frontend (client)

### Previous requirements
Make sure you have Node.js installed on your system.

### Setting

1. Clone this repository:
    ```bash
    git clone https://github.com/m43c/impulso-store.git
    cd impulso-store/client
    ```
   
2. Install the dependencies:
     ```bash
     npm install
     ```

3. Start the client
     ```bash
     npm run dev
     ```
The application will be available at http://localhost:5173
    
## Backend (server)

### Previous requirements

Make sure you have Node.js and MongoDB installed on your system.

### Setting

1. Change to the server folder:
     ```bash
     cd impulso-store/server
     ```
    
2. Install the dependencies:
     ```bash
     npm install
     ```
    
3. Configure the MongoDB database in the database.js file:
     ```javascript
     mongoose.connect("mongodb://127.0.0.1:27017/impulsoStore");
     ```
    
4. Start the server
     ```bash
     npm run dev
     ```
The application will be available at http://localhost:3000
