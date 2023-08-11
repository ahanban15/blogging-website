create table blog(
	title varchar(50) unique,
    email varchar(50),
    blogcontent longtext
);

insert into blog
values
('Internship', 'ahan@gmail.com', 'sdfvgbhdbsads');
    
select * from blog;

SELECT title, email, blogcontent FROM blog WHERE email = "ahan@gmail.com" and title = "Internship";