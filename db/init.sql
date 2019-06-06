DROP TABLE IF EXISTS album;

CREATE TABLE IF NOT EXISTS album (
	id SERIAL PRIMARY KEY,
	name TEXT,
	image TEXT
);

insert into album (name, image)
VALUES
	('Photo_01', 'https://www.wonderopolis.org/_img?img=/wp-content/uploads/2011/03/open-cluster-in-perseus_shutterstock_55193803.jpg&transform=resizeCrop,720,450'),
	('Photo_02', 'https://www.australiangeographic.com.au/wp-content/uploads/2018/06/stars1.jpg'),
	('Photo_03', 'https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2016%2F01%2FMilky_Way_at_Concordia_Camp_Karakoram_Range_Pakistan-1200x800.jpg');