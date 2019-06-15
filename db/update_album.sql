SELECT * FROM album;

UPDATE album
SET name = ${name}, image = ${image}
WHERE id = ${id};