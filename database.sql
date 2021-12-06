create TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    status VARCHAR(5)
);

create TABLE reviews(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    name VARCHAR(255),
    type VARCHAR(255),
    description VARCHAR(255),
    rating INTEGER,
    ganre VARCHAR(255)
);