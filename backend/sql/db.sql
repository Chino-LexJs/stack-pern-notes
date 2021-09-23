create database pernstack;

-- \l visualiza todas las BD creadas
-- \c pernstack se conecta a la base de datos pernstack
-- \dt lista las tablas creadas
-- select * from users; para ver los datos de la tabla

create table users(
    id serial primary key,
    name varchar(40)
);

create table notes(
    id serial primary key,
    title varchar(40),
    content varchar(40),
    users_id integer references users (id)
);

insert into users (name) values 
    ('joe'),
    ('ryan');