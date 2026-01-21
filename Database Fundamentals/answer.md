1. Why is db.json not suitable as a database for real projects?
If multiple users use the app at a time the data may corrupted and there is no authentication or encryption.Searching large data is diccult.

2. What are the ideal characteristics of a database system (apart from just storage)?
It has high performance as it uses indexes and queries.Here data is encrypted and authorized.Allows multiple users to access and modify the data at a time.Data is accurate that means prevents duplicates.


3. How many types of databases are there? What are their use cases or applications?
Databases are classified into 2types:
a.Relational Database(SQL)
b.Non-Relational Database(No SQL)

a.Relational Database:
..In this database data is stored in tables(rows&columns)
.Uses SQL(Structured Query Languages)
.Has fixed schema
Ex:My SQL,PostgreSQL,Oracle
 real-world use cases:
.Banking systems,
.e-commerce applications

b.Non-Relational Database:
.In this database data is stored in flexible formats.
.It is schemaless
Ex:MangoDB,Redis,Cassandra
 real-world use cases:
.Social media applications,
Iot systems