
INSERT INTO users (email, name)
VALUES ('user1@mail.com', 'Usuario 1'), ('user2@mail.com', 'Usuario 2'),
       ('user3@mail.com', 'Usuario 3'), ('user4@mail.com', 'Usuario 4');

INSERT INTO items (name, price)
VALUES ('item 1', 17),  ('item 2', 28), ('item 3', 28), ('item 4', 32);

INSERT into wishes (completed, user_id, item_id)
VALUES (false, 1, 1), (false, 1, 2), (true, 1, 3), (false, 4, 1), (true, 3, 2), (false, 2, 2);

INSERT INTO follows (follower_id, followed_id)
VALUES (1,1), (1,3), (3,2);

INSERT INTO comments (comment, wisher_id, wished_item_id, commenter_id)
VALUES ('come on', 1, 1, 2)
