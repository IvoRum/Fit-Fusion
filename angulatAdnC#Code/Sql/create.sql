/*
    Creation script for fit_fusion
*/

create table Client
(
    id              BIGINT       NOT NULL,
    first_name      VARCHAR(255) NOT NULL,
    last_name       VARCHAR(255) NOT NULL,
    sub_from        DATE         NOT NULL,
    sub_to          DATE         NOT NULL,
    sub_type        BIGINT       NOT NULL,
    added_at        DATE         NOT NULL,
    number_renewing BIGINT       NOT NULL,
    email           VARCHAR(255) NOT NULL,
    phone_number    VARCHAR(16)  NOT NULL,
    PRIMARY KEY (id)
);

create table Role
(
    id    BIGINT       NOT NULL,
    title VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

create table Salary
(
    id     BIGINT NOT NULL,
    worker BIGINT NOT NULL,
    date   DATE   NOT NULL,
    amount BIGINT NOT NULL,
    PRIMARY KEY (id)
);

create table Worker
(
    id                  BIGINT       NOT NULL,
    first_name          VARCHAR(255) NOT NULL,
    last_name           VARCHAR(255) NOT NULL,
    first_work_day_date DATE         NOT NULL,
    month_salary        BIGINT       NOT NULL,
    role                BIGINT       NOT NULL,
    PRIMARY KEY (id)
);

create table Product_group
(
    id   BIGINT       NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

create table Product
(
    id                   BIGINT       NOT NULL,
    name                 VARCHAR(255) NOT NULL,
    amount               BIGINT       NOT NULL,
    barcode              BIGINT       NOT NULL,
    product_group        BIGINT       NOT NULL,
    last_delivery_date   DATE         NOT NULL,
    future_delivery_date DATE         NOT NULL,
    PRIMARY KEY (id)
);

/*
    The duration is in moths
*/
create table Subscription
(
    id       BIGINT       NOT NULL,
    name     VARCHAR(255) NOT NULL,
    price    BIGINT       NOT NULL,
    duration BIGINT       NOT NULL,
    PRIMARY KEY (id)
);

create table Delivery
(
    id       BIGINT NOT NULL,
    provider BIGINT NOT NULL,
    date     DATE   NOT NULL,
    price    BIGINT NOT NULL,
    amount   BIGINT NOT NULL,
    PRIMARY KEY (id)
);

create table Supplier
(
    id           BIGINT       NOT NULL,
    name         VARCHAR(255) NOT NULL,
    address      VARCHAR(255) NOT NULL,
    phone_number VARCHAR(16)  NOT NULL,
    email        VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

create table Shift
(
    id   BIGINT       NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

create table Work_schedule
(
    id         BIGINT NOT NULL,
    worker     BIGINT NOT NULL,
    shift      BIGINT NOT NULL,
    work_hours BIGINT NOT NULL,
    date       DATE   NOT NULL,
    PRIMARY KEY (id)
);

create table Balance_type
(
    id   BIGINT       NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

/*
    Daly otchet madatory
*/
create table Balance
(
    id   BIGINT NOT NULL,
    date DATE   NOT NULL,
    type BIGINT NOT NULL,
    PRIMARY KEY (id)
);

create table Equipment
(
    id                     BIGINT       NOT NULL,
    name                   VARCHAR(255) NOT NULL,
    amount                 BIGINT       NOT NULL,
    last_delivered_date    DATE         NOT NULL,
    repaid                 BIGINT       NOT NULL,
    shelf_life             DATE         NOT NULL,
    replacement_date       DATE         NOT NULL,
    price_at_last_delivery BIGINT       NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE
    Client ADD CONSTRAINT fk_client_sub_type FOREIGN KEY(sub_type) REFERENCES Subscription(id);

ALTER TABLE
    Worker ADD CONSTRAINT fk_worker_month_salary FOREIGN KEY(month_salary) REFERENCES Salary(id);

ALTER TABLE
    Worker ADD CONSTRAINT kf_worker_role FOREIGN KEY(role) REFERENCES Role(id);

ALTER TABLE
    Product ADD CONSTRAINT fk_product_product_group FOREIGN KEY(product_group) REFERENCES Product_group(id);

ALTER TABLE
    Work_schedule ADD CONSTRAINT fk_worker_schedule_shift FOREIGN KEY(shift) REFERENCES Shift(id);

ALTER TABLE
    Balance ADD CONSTRAINT fk_worker_schedule_shift FOREIGN KEY(type) REFERENCES Balance_type(id);

