CREATE TABLE users (
	id serial PRIMARY KEY,
	email VARCHAR (50) NOT NULL UNIQUE,
	name VARCHAR (20) NOT NULL
);

CREATE TABLE items (
	id serial PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	price SMALLINT NOT NULL
);

CREATE TABLE wishes (
	completed BOOLEAN NOT NULL, 
	user_id BIGINT UNSIGNED NOT NULL,
	item_id BIGINT UNSIGNED NOT NULL,
	CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
	CONSTRAINT fk_item FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE,
	PRIMARY KEY (user_id, item_id)
);

CREATE TABLE follows ( 
	follower_id BIGINT UNSIGNED NOT NULL,
	followed_id BIGINT UNSIGNED NOT NULL,
	CONSTRAINT fk_follower FOREIGN KEY (follower_id) REFERENCES users(id) ON DELETE CASCADE,
	CONSTRAINT fk_followed FOREIGN KEY (followed_id) REFERENCES users(id) ON DELETE CASCADE,
	PRIMARY KEY (follower_id, followed_id)
);

CREATE TABLE comments ( 
	comment TEXT NOT NULL,
	wisher_id BIGINT UNSIGNED NOT NULL,
	wished_item_id BIGINT UNSIGNED NOT NULL,
	commenter_id  BIGINT UNSIGNED NOT NULL,
	CONSTRAINT fk_wisher FOREIGN KEY (wisher_id) REFERENCES users(id) ON DELETE CASCADE,
	CONSTRAINT fk_wished_item FOREIGN KEY (wished_item_id) REFERENCES items(id) ON DELETE CASCADE,
	CONSTRAINT fk_commenter FOREIGN KEY (commenter_id) REFERENCES users(id) ON DELETE CASCADE,
	PRIMARY KEY (wisher_id, wished_item_id, commenter_id)
);
