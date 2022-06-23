create database provaheroi;

use provaheroi;

create table TB_HEROI(
ID_HEROI		int primary key auto_increment,
NM_HEROI        VARCHAR(50),
DS_PODER		VARCHAR(100),
BT_VOA			bool
);