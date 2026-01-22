Database Relationship:
It defines how two or multiple tables are connected logings using keys like primary key or foriegn key.This helps to avoid duplications,and real-world connections between entities.
Types of Database relationships:
1.One-to-One (1:1)
2.One-to-Many(1:M)
3.Many-to-Many(M:N)

1.One-to-One(1:1) relationships:
One record in tableA related to only record in tableB and viceversa.
E-commerce example:
.User to USer_profile:
i.e each user as one profile and each profile belongs to one user.
https://www.beekeeperstudio.io/assets/img/database-relationships/one-to-one-59751b752058a5d378adc3a9a5ab4f1a7c0b7f2a1bede234aa9a8c2bfb91ee41f7c6c06208d7ae7a00257965313f9a0031578bb8e46bc5d5cbbcded30d5fc454.svg

2.One-to-Many(1:M) relationships:
One record in tableA related to many records in another tableB.But tableB records are related to only one record in tableA.
E-commerce exmaple:
.Customer-Orders:
i.e a customer can place many orders but each order belong to one customer
https://database.guide/wp-content/uploads/2024/09/one-to-many-relationship-1024x357.png

3.Many-to-Many(M:N) relationships:
One record in tableA related to many records in the tableB.And also one record in tableB related to many records in the tableA.
E-commerce example:
.Orders--Products
i.e One order can have many products and one product can appear in many orders.
https://database.guide/wp-content/uploads/2024/09/many-to-many-relationship-1024x350.png