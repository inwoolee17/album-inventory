DROP TABLE IF EXISTS album;

CREATE TABLE IF NOT EXISTS album (
    id SERIAL PRIMARY KEY,
    name TEXT,
    url TEXT
);

insert into album (name, url) 
VALUES
    ('Photo_01', 'https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1'),
    ('Photo_02', 'https://images.dwell.com/photos/6328431439726800896/6445880622670512128/large.jpg'),
    ('Photo_03', 'https://cdnimages.familyhomeplans.com/plans/75977/75977-b1200.jpg');