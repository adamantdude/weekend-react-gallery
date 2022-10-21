DROP TABLE IF EXISTS "react_gallery";
CREATE TABLE "react_gallery" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(510),
    "description" VARCHAR(160),
    "likes" INTEGER
);

INSERT INTO "react_gallery" ("path", "description", "likes")
VALUES
    ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0);
