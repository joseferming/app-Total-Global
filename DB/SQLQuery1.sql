create database catalogo
go
use catalogo
go
create table logins
(
	name varchar (18) primary key,
	pass varchar (20)
)
go
insert into logins values('ad' , 'ad')
go
select * from logins
