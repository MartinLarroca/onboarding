
INSERT INTO users (email, name)
VALUES ('user1@mail.com', 'Usuario 1'), ('user2@mail.com', 'Usuario 2'),
       ('user3@mail.com', 'Usuario 3'), ('user4@mail.com', 'Usuario 4'),
       ('user5@mail.com', 'Usuario 5'), ('user6@mail.com', 'Usuario 6'),
       ('user7@mail.com', 'Usuario 7'), ('user8@mail.com', 'Usuario 8');

INSERT INTO items (name, price)
VALUES ('item 1', 17),  ('item 2', 28), ('item 3', 28), ('item 4', 32);

INSERT into wishes (completed, user_id, item_id)
VALUES (false, 1, 1), (false, 1, 2), (true, 1, 3), (false, 4, 1), (true, 3, 2);

INSERT INTO follows (follower_id, followed_id)
VALUES (1,3), (3,2), (2,1), (3,1), (4,1), (5,1), (6,1), (7,1), (8,1);

INSERT INTO comments (comment, wisher_id, wished_item_id, commenter_id)
VALUES ('come on', 1, 1, 2)
