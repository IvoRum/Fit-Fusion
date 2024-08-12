insert into subscription(id, name, price, duration)
VALUES(1,'Standard morning monthly plan',65,1);

insert into subscription(id, name, price, duration)
VALUES(2,'Standard evening monthly plan',65,1);

insert into subscription(id, name, price, duration)
VALUES(3,'Standard monthly plan',85,1);

insert into subscription(id, name, price, duration)
VALUES(4,'Premium morning monthly plan',85,1);

insert into subscription(id, name, price, duration)
VALUES(5,'Premium evening monthly plan',85,1);

insert into subscription(id, name, price, duration)
VALUES(6,'Premium monthly plan',95,1);

insert into subscription(id, name, price, duration)
VALUES(7,'Standard morning personal trainer plan',85,1);

insert into subscription(id, name, price, duration)
VALUES(8,'Standard evening personal trainer plan',85,1);

insert into subscription(id, name, price, duration)
VALUES(9,'Standard personal trainer plan',95,1);

insert into subscription(id, name, price, duration)
VALUES(10,'Premium morning personal trainer plan',105,1);

insert into subscription(id, name, price, duration)
VALUES(11,'Premium evening personal trainer plan',105,1);

insert into subscription(id, name, price, duration)
VALUES(12,'Premium personal trainer plan',115,1);

/* quoter plans are -20%*/

insert into subscription(id, name, price, duration)
VALUES(13,'Standard morning quoter plan',159,3);

insert into subscription(id, name, price, duration)
VALUES(14,'Standard evening quoter plan',159,3);

insert into subscription(id, name, price, duration)
VALUES(15,'Standard quoter plan',204,3);

insert into subscription(id, name, price, duration)
VALUES(16,'Premium quoter plan',228,3);

/*
    CLIENTS
*/

insert into Client(id, first_name, last_name, sub_from, sub_to, sub_type, added_at, number_renewing, email, phone_number)
VALUES (1,'Ivan','Ivanov','2023-10-28','2023-11-28',1,'2023-03-28',4,'Vanko43@mail.com','0897674673');

insert into Client(id, first_name, last_name, sub_from, sub_to, sub_type, added_at, number_renewing, email, phone_number)
VALUES (2,'Maria','Ilieva','2023-11-22','2023-12-22',3,'2022-01-22',24,'Mariika@mail.com','089743243');

insert into Client(id, first_name, last_name, sub_from, sub_to, sub_type, added_at, number_renewing, email, phone_number)
VALUES (3,'Zaro','Panov','2023-11-12','2023-12-12',2,'2023-03-12',9,'ZaroEgotin@mail.com','089234343');

insert into Client(id, first_name, last_name, sub_from, sub_to, sub_type, added_at, number_renewing, email, phone_number)
VALUES (4,'Ivanka','Yordanova','2023-12-03','2024-01-03',4,'2022-01-03',25,'QkaVanka@mail.com','089795343');

insert into Client(id, first_name, last_name, sub_from, sub_to, sub_type, added_at, number_renewing, email, phone_number)
VALUES (5,'Yuri','Boika','2023-10-15','2024-01-15',13,'2023-10-15',2,'Turikata@mail.com','086423424');

insert into Client(id, first_name, last_name, sub_from, sub_to, sub_type, added_at, number_renewing, email, phone_number)
VALUES (6,'Kamila','Yurdanova','2022-10-28','2023-01-28',16,'2022-10-28',4,'KamilaNaMogila@mail.com','084236743');

insert into Client(id, first_name, last_name, sub_from, sub_to, sub_type, added_at, number_renewing, email, phone_number)
VALUES (7,'Ceco','Kokumarov','2023-09-21','2023-12-21',13,'2023-09-21',4,'CecoBoreco23@mail.com','089483734');

/*
    Role
*/

insert into Role(id, title) VALUES (1,'Boss');
insert into Role(id, title) VALUES (2,'Trainer');
insert into Role(id, title) VALUES (3,'Cashier');

insert into worker(id, first_name, last_name, first_work_day_date, month_salary, role)
VALUES (1,'Ivaylo','Rumenov','2022-01-01',3300,1);

insert into worker(id, first_name, last_name, first_work_day_date, month_salary, role)
VALUES (2,'Damqn','Mihailov','2022-01-01',1300,3);

insert into worker(id, first_name, last_name, first_work_day_date, month_salary, role)
VALUES (3,'Mihail','Hristov','2022-01-01',1900,2);

insert into worker(id, first_name, last_name, first_work_day_date, month_salary, role)
VALUES (4,'Ivanka','Milanova','2022-03-03',1900,2);

insert into worker(id, first_name, last_name, first_work_day_date, month_salary, role)
VALUES (5,'Ivan','Zlatareb','2022-10-01',1400,2);

insert into worker(id, first_name, last_name, first_work_day_date, month_salary, role)
VALUES (6,'Cvetelina','Georgieva','2022-10-01',1800,2);

insert into worker(id, first_name, last_name, first_work_day_date, month_salary, role)
VALUES (7,'Manolo','Yordanov','2022-11-11',1960,2);

insert into worker(id, first_name, last_name, first_work_day_date, month_salary, role)
VALUES (8,'Monika','Peneva','2023-01-01',1300,2);

insert into Salary(id, worker, date, amount) values (1,1,'2023-12-01',3300);
insert into Salary(id, worker, date, amount) values (2,2,'2023-12-01',1300);
insert into Salary(id, worker, date, amount) values (3,3,'2023-12-01',1900);
insert into Salary(id, worker, date, amount) values (4,4,'2023-12-01',1900);
insert into Salary(id, worker, date, amount) values (5,5,'2023-12-01',1400);
insert into Salary(id, worker, date, amount) values (6,6,'2023-12-01',1800);
insert into Salary(id, worker, date, amount) values (7,7,'2023-12-01',1960);
insert into Salary(id, worker, date, amount) values (8,8,'2023-12-01',1300);

/*
    Products
*/

insert into Product_group(id, name) VALUES (1,'Protein');
insert into Product_group(id, name) VALUES (2,'Vitamin');
insert into Product_group(id, name) VALUES (3,'Drink');
insert into Product_group(id, name) VALUES (4,'Coffee');
insert into Product_group(id, name) VALUES (5,'Merchandise');

insert into Product(id, name, amount, barcode, product_group, last_delivery_date, future_delivery_date)
VALUES(1,'Super Humen Protein',10,834765865734,1,'2023-09-10','2024-02-10');
insert into Product(id, name, amount, barcode, product_group, last_delivery_date, future_delivery_date)
VALUES(2,'Vitamin A to Z',2,84234234,2,'2023-09-10','2024-02-10');
insert into Product(id, name, amount, barcode, product_group, last_delivery_date, future_delivery_date)
VALUES(3,'Coka cola',32,908263946,3,'2023-11-20','2023-12-28');
insert into Product(id, name, amount, barcode, product_group, last_delivery_date, future_delivery_date)
VALUES(4,'Lavasa Gold',1,23423423,4,'2023-12-01','2023-12-15');
insert into Product(id, name, amount, barcode, product_group, last_delivery_date, future_delivery_date)
VALUES(5,'Mens tank top',8,48568739448736,5,'2023-06-10','2024-06-10');

/*
    Supplier
*/

insert into supplier(id, name, address, phone_number, email)
VALUES (1,'Ivan Gym supplies','Hristobotel23 Sofiq','089865785','IvanGymSupplies@mail.com');

insert into supplier(id, name, address, phone_number, email)
VALUES (2,'Roshkov','Kapintan Marian Zlatov 23 Sofiq','08842394','Roshkov@mail.com');

insert into supplier(id, name, address, phone_number, email)
VALUES (3,'Tim','General Parensov Varna','089423425','Tim@mail.com');

/*
    Product delivery
*/
insert into Delivery(id, date, price, amount, supplier)
VALUES(1,'2023-09-10',2100,20,1);
insert into Delivery(id, date, price, amount, supplier)
VALUES(2,'2023-09-10',320,20,1);
insert into Delivery(id, date, price, amount, supplier)
VALUES(3,'2023-11-20',40,42,3);
insert into Delivery(id, date, price, amount, supplier)
VALUES(4,'2023-12-01',43,4,3);
insert into Delivery(id, date, price, amount, supplier)
VALUES(5,'2023-06-10',240,20,2);

/*
   equipment delivery
*/

insert into Delivery(id, date, price, amount, supplier)
VALUES(6,'2022-02-01',310,4,1);
insert into Delivery(id, date, price, amount, supplier)
VALUES(7,'2022-02-01',220,4,1);
insert into Delivery(id, date, price, amount, supplier)
VALUES(8,'2022-02-01',40,1,1);
insert into Delivery(id, date, price, amount, supplier)
VALUES(9,'2022-02-01',1300,1,1);
insert into Delivery(id, date, price, amount, supplier)
VALUES(10,'2022-02-01',540,1,1);

insert into equipment(id, name, amount, last_delivered_date, repaid, shelf_life, replacement_date, price_at_last_delivery, dilivery)
VALUES(1,'Dumbell 20kg',4,'2022-02-01',0,'2037-02-01','2032-02-01',310,6);
insert into equipment(id, name, amount, last_delivered_date, repaid, shelf_life, replacement_date, price_at_last_delivery, dilivery)
VALUES(2,'Dumbell 5kg',4,'2022-02-01',0,'2037-02-01','2032-02-01',220,7);
insert into equipment(id, name, amount, last_delivered_date, repaid, shelf_life, replacement_date, price_at_last_delivery, dilivery)
VALUES(3,'Barbell 20kg',1,'2022-02-01',0,'2037-02-01','2032-02-01',143,8);
insert into equipment(id, name, amount, last_delivered_date, repaid, shelf_life, replacement_date, price_at_last_delivery, dilivery)
VALUES(4,'Skrepec',1,'2022-02-01',2,'2027-02-01','2028-02-01',1300,9);
insert into equipment(id, name, amount, last_delivered_date, repaid, shelf_life, replacement_date, price_at_last_delivery, dilivery)
VALUES(5,'Bench press',1,'2022-02-01',1,'2037-02-01','2032-02-01',540,10);

/*
    balance
*/

insert into balance_type(id, name) VALUES (1,'Positive');
insert into balance_type(id, name) VALUES (2,'Negative');

insert into balance(id, date, type) VALUES(1,'2022-02-01',1);
insert into balance(id, date, type) VALUES(2,'2022-02-02',1);
insert into balance(id, date, type) VALUES(3,'2022-02-03',1);
insert into balance(id, date, type) VALUES(4,'2022-02-04',1);
insert into balance(id, date, type) VALUES(5,'2022-02-05',1);
insert into balance(id, date, type) VALUES(6,'2022-02-06',1);
insert into balance(id, date, type) VALUES(7,'2022-02-07',1);
insert into balance(id, date, type) VALUES(8,'2022-02-08',2);

/*
    work_schedule
*/

insert into shift(id, name) VALUES (1,'Morning');
insert into shift(id, name) values (2,'Evening');

INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (1,1,1,8,'2022-02-01');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (2,2,1,8,'2022-02-01');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (3,3,1,8,'2022-02-01');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (4,4,2,8,'2022-02-01');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (5,5,2,8,'2022-02-01');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (6,5,2,8,'2022-02-01');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (7,6,2,8,'2022-02-01');

INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (8,1,1,8,'2022-02-02');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (9,2,1,8,'2022-02-02');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (10,3,1,8,'2022-02-02');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (11,4,2,8,'2022-02-02');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (12,5,2,8,'2022-02-02');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (13,5,2,8,'2022-02-02');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (14,6,2,8,'2022-02-02');

INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (15,1,1,8,'2022-02-03');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (16,2,1,8,'2022-02-03');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (17,3,1,8,'2022-02-03');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (18,4,2,8,'2022-02-03');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (19,5,2,8,'2022-02-03');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (20,5,2,8,'2022-02-03');
INSERT INTO work_schedule(id, worker, shift, work_hours, date)
VALUES (21,6,2,8,'2022-02-03');
