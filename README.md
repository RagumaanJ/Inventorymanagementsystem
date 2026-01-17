📦 Inventory Management System

A simple Inventory Management System built using Spring Boot (Backend), MySQL (Database), and React + Bootstrap (Frontend).
The application allows users to manage inventory items, track stock quantity, and monitor item status (Available / Low Stock).

🚀 Features
Backend (Spring Boot)

Add new inventory items

Prevent duplicate item names (case-insensitive)

Update stock quantity

Delete inventory items

Automatic status calculation:

AVAILABLE → quantity > 10

LOW_STOCK → quantity ≤ 10

Backend validation for:

Required fields

Non-negative quantity

Frontend (React + Bootstrap)

Add item form with required field validation

Inventory table displaying:

Item name

Category

Quantity

Status badge

Stock update buttons (+ / -)

Delete item action

Responsive, centered UI with consistent layout

Error messages displayed for invalid inputs and duplicates

🛠 Tech Stack
Layer	Technology
Backend	Spring Boot, Spring Data JPA
Database	MySQL
Frontend	React, Bootstrap
ORM	Hibernate
Build Tool	Maven
Icons	Font Awesome
🗄️ Database Schema

Table: inventory

Column	Type
id	BIGINT (PK)
item_name	VARCHAR
category	VARCHAR
quantity	INT
status	ENUM (AVAILABLE, LOW_STOCK)
⚙️ Backend Setup
1️⃣ Configure Database
CREATE DATABASE inventory_db;

2️⃣ Update application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/inventory_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

3️⃣ Run Spring Boot Application
mvn spring-boot:run


Backend runs at:

http://localhost:8080

🌐 Backend APIs
Method	Endpoint	Description
POST	/api/items	Add new item
GET	/api/items	Get all inventory items
PUT	/api/items/{id}	Update item / stock
DELETE	/api/items/{id}	Delete item
🎨 Frontend Setup
1️⃣ Install Dependencies
npm install

2️⃣ Start React App
npm start


Frontend runs at:

http://localhost:3000

🧪 Dummy Data (Optional)
INSERT INTO inventory (item_name, category, quantity, status) VALUES
('Lays', 'Chips', 50, 'AVAILABLE'),
('Oreo', 'Biscuits', 5, 'LOW_STOCK'),
('Pepsi', 'Soft Drinks', 9, 'LOW_STOCK'),
('Dairy Milk', 'Chocolates', 40, 'AVAILABLE');

🔐 Validations & Edge Cases Handled

Empty item name, category, or quantity

Negative quantity not allowed

Duplicate item names not allowed

Stock cannot go below zero

Status updates automatically on stock change

Backend acts as single source of truth

📌 Project Flow

User adds an item from frontend

React sends request to Spring Boot API

Backend validates input and updates database

Database stores inventory data

Frontend fetches and displays updated inventory

🎯 Future Enhancements (Optional)

Search and filter inventory

Pagination for large data sets

Category dropdown

Authentication & role-based access

Audit logs for stock changes

👨‍💻 Author

Developed as part of learning Full Stack Development using React + Spring Boot.

✅ Conclusion

This project demonstrates:

Clean REST API design

Proper backend validation

Frontend–backend separation

Real-world inventory management logic