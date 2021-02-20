-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "Customer" (
    "CustomerId" int   NOT NULL,
    "Name" string   NOT NULL,
    "Password" varchar   NOT NULL,
    "CustomerLocation" varchar   NOT NULL,
    "CreatedAt" timestamp   NOT NULL,
    CONSTRAINT "pk_Customer" PRIMARY KEY (
        "CustomerId"
     )
);

CREATE TABLE "Places" (
    "PlaceId" int   NOT NULL,
    "PlaceName" string   NOT NULL,
    "PlaceImg" varchar   NOT NULL,
    "Location" varchar   NOT NULL,
    "Duration" int   NOT NULL,
    "CustomerLocation" varchar   NOT NULL,
    "CreatedAt" timestamp   NOT NULL,
    CONSTRAINT "pk_Places" PRIMARY KEY (
        "PlaceId"
     )
);

CREATE TABLE "StayType" (
    "StayTypeId" int   NOT NULL,
    "StayTypeName" varchar   NOT NULL,
    "StayTypeImg" varchar   NOT NULL,
    CONSTRAINT "pk_StayType" PRIMARY KEY (
        "StayTypeId"
     )
);

CREATE TABLE "OnlineExperience" (
    "OnlineExperienceId" int   NOT NULL,
    "OnlineExperienceName" varchar   NOT NULL,
    "OnlineExperienceImg" varchar   NOT NULL,
    CONSTRAINT "pk_OnlineExperience" PRIMARY KEY (
        "OnlineExperienceId"
     )
);

CREATE TABLE "Hosts" (
    "HostID" int   NOT NULL,
    "HostName" varchar   NOT NULL,
    "HostImg" varchar   NOT NULL,
    CONSTRAINT "pk_Hosts" PRIMARY KEY (
        "HostID"
     )
);

CREATE TABLE "StayLocation" (
    "StayLocationId" int   NOT NULL,
    "StayLocationImg" varchar   NOT NULL,
    "StayLocationName" varchar   NOT NULL,
    "PlaceId" int   NOT NULL,
    "PlaceType" Boolean   NOT NULL,
    "Price" int   NOT NULL,
    "Facilities" varchar   NOT NULL,
    "Ratings" int   NOT NULL,
    "Address" varchar   NOT NULL,
    CONSTRAINT "pk_StayLocation" PRIMARY KEY (
        "StayLocationId"
     )
);

CREATE TABLE "CustomerReview" (
    "CustomerId" int   NOT NULL,
    "CustomerImg" varchar   NOT NULL,
    "Review" varchar   NOT NULL,
    "Ratings" int   NOT NULL,
    "StayLocationName" varchar   NOT NULL,
    "CreatedAt" timestamp   NOT NULL
);

CREATE TABLE "CustomerMap" (
    "Mapid" int   NOT NULL,
    "StayLocationId" int   NOT NULL,
    "CustomerLocation" varchar   NOT NULL,
    CONSTRAINT "pk_CustomerMap" PRIMARY KEY (
        "Mapid"
     )
);

CREATE TABLE "Destinations" (
    "DestinationId" int   NOT NULL,
    "DestinationImg" varchar   NOT NULL,
    CONSTRAINT "pk_Destinations" PRIMARY KEY (
        "DestinationId"
     )
);

ALTER TABLE "Places" ADD CONSTRAINT "fk_Places_CustomerLocation" FOREIGN KEY("CustomerLocation")
REFERENCES "Customer" ("CustomerLocation");

ALTER TABLE "StayLocation" ADD CONSTRAINT "fk_StayLocation_PlaceId" FOREIGN KEY("PlaceId")
REFERENCES "Places" ("PlaceId");

ALTER TABLE "CustomerReview" ADD CONSTRAINT "fk_CustomerReview_CustomerId" FOREIGN KEY("CustomerId")
REFERENCES "Customer" ("CustomerId");

ALTER TABLE "CustomerMap" ADD CONSTRAINT "fk_CustomerMap_StayLocationId" FOREIGN KEY("StayLocationId")
REFERENCES "StayLocation" ("StayLocationId");

ALTER TABLE "CustomerMap" ADD CONSTRAINT "fk_CustomerMap_CustomerLocation" FOREIGN KEY("CustomerLocation")
REFERENCES "Customer" ("CustomerLocation");

CREATE INDEX "idx_Customer_Name"
ON "Customer" ("Name");

CREATE INDEX "idx_Places_PlaceName"
ON "Places" ("PlaceName");

