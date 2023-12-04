INSERT INTO ingredientinrecipe (recipeid, ingredientid)
VALUES (3, 14);

INSERT INTO ingredientinrecipe (recipeid, ingredientid)
SELECT a.id, b.id
FROM recipe a
JOIN ingredient b ON a.recipename = 'Pumpkin Pasties' AND b.ingredientname = 'nutmeg';

SELECT a.recipename, b.ingredientname 
FROM recipe a 
INNER JOIN ingredientinrecipe c ON a.id = c.recipeid
INNER JOIN ingredient b ON b.id = c.ingredientid