CREATE TYPE user_role AS ENUM ('admin','seller','storage_manager');
CREATE TYPE payment_method AS ENUM ('cash','card','online_payment')

CREATE TABLE users(   -- I use users as name cause user is a special word and even if i use "user" it could give me problems later
    user_id SERIAL PRIMARY_KEY,
    user_name VARCHAR(255) NOT NULL,
    role user_role NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    email VARCHAR(255),
    hired_date DATE,
    password_hash TEXT, -- I use text 'cause later ill have to hash the password for security and the hash could be really long 
    url_image TEXT -- The url of the profile picture
);

CREATE TABLE book(
    book_id SERIAL PRIMARY KEY,
    book_name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    release_date DATE,
    edition_number INT NOT NULL,
    editorial VARCHAR(255) NOT NULL,
    stock INT NOT NULL,
    price INT NOT NULL,
    url_image TEXT
);

CREATE TABLE sale(
    sale_id SERIAL PRIMARY KEY,
    sale_date DATE NOT NULL,
    total INT(50) NOT NULL,
    method payment_method NOT NULL,
    seller_id INT NOT NULL,
        CONSTRAINT fk_seller
            FOREIGN KEY(seller_id)
                REFERENCES users(user_id)
);

CREATE TABLE saleitem(
    sale_id INT NOT NULL,
        CONSTRAINT fk_sale
            FOREIGN KEY(sale_id)
                REFERENCES sale(sale_id)
    book_id INT NOT NULL,
        CONSTRAINT fk_book
            FOREIGN KEY(book_id)
                REFERENCES book(book_id)
    quantity INT NOT NULL,
    price INT NOT NULL
);