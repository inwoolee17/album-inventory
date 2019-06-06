SELECT * FROM album;

UPDATE album
SET name = ${name}, url = ${url}
WHERE id = ${id};