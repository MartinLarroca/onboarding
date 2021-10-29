-- 1) Fetch all wishlist items for a given user

-- Version 1 (simple y buscando por id)

SELECT * FROM wishes
WHERE user_id = 1;

-- Version 2 (muestra info de mas calidad y busca por email)

SELECT users.id AS user_id, users.email, users.name,
       items.id AS item_id, items.name, items.price, wishes.completed FROM wishes
INNER JOIN users ON wishes.user_id = users.id
INNER JOIN items ON wishes.item_id = items.id
WHERE users.email = 'user1@mail.com';

-- 2) Fetch all users together with their wishlist items, even if the user doesn't have any items

SELECT users.id AS user_id, users.email, users.name,
       items.id AS item_id, items.name, items.price, wishes.completed FROM wishes
RIGHT JOIN users ON wishes.user_id = users.id
LEFT JOIN items ON wishes.item_id = items.id;

-- 3) Get the amount of users without wishlist items

SELECT COUNT(*) FROM users
WHERE NOT EXISTS (
    SELECT * FROM wishes
    WHERE wishes.user_id = users.id
);

-- 4) Fetch the name of the users that have more than 5 followers and some unfinished wishlist items

SELECT users.name FROM users
WHERE EXISTS (
    SELECT * FROM wishes
    WHERE wishes.user_id = users.id AND wishes.completed = false
) AND ( SELECT COUNT(*) FROM follows WHERE users.id = follows.followed_id ) > 5;
