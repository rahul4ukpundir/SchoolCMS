
CREATE DATABASE SchoolDatabase
GO
USE SchoolDatabase
GO
CREATE TABLE StudentClass(
  ClassId INT  IDENTITY(1,1)  PRIMARY KEY  NOT NULL,
  ClassName VARCHAR(32),
  IsActive BIT,
  CreatedDate DATETIME DEFAULT GETDATE() NOT NULL,
  ModifiedDate DATETIME DEFAULT GETDATE() NOT NULL,
)


GO

INSERT INTO StudentClass(ClassName, IsActive) VALUES('Pre-Nursery', 1)
INSERT INTO StudentClass(ClassName, IsActive) VALUES('Nursery', 1)
INSERT INTO StudentClass(ClassName, IsActive) VALUES('First', 1)
INSERT INTO StudentClass(ClassName, IsActive) VALUES('Second', 1)
INSERT INTO StudentClass(ClassName, IsActive) VALUES('Third', 1)
INSERT INTO StudentClass(ClassName, IsActive) VALUES('Fourth', 1)
INSERT INTO StudentClass(ClassName, IsActive) VALUES('Fifith', 1)

GO

CREATE TABLE Section(
  SectionId INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
  ClassId INT FOREIGN KEY REFERENCES  StudentClass(ClassId),
  SectionName VARCHAR(32),
  IsActive BIT,
  CreatedDate DATETIME DEFAULT GETDATE() NOT NULL,
  ModifiedDate DATETIME DEFAULT GETDATE() NOT NULL,
)

GO

INSERT INTO Section(ClassId,SectionName,IsActive) VALUES(1,'A', 1)
INSERT INTO Section(ClassId,SectionName,IsActive) VALUES(2,'A', 1)
INSERT INTO Section(ClassId,SectionName,IsActive) VALUES(3,'A', 1)
INSERT INTO Section(ClassId,SectionName,IsActive) VALUES(4,'A', 1)
INSERT INTO Section(ClassId,SectionName,IsActive) VALUES(5,'A', 1)
INSERT INTO SECTION(ClassId,SectionName,IsActive) VALUES(6,'A', 1)
INSERT INTO Section(ClassId,SectionName,IsActive) VALUES(7,'A', 1)

GO

CREATE TABLE Student(
  RollNo INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
  ClassId INT FOREIGN KEY REFERENCES  StudentClass(ClassId),
  SectionId INT FOREIGN KEY REFERENCES  Section(SectionId),
  StudentName VARCHAR(32),
  FatherName VARCHAR(32),
  MotherName VARCHAR(32),
  DOB DATE,
  Gender BIT,
  Photo VARCHAR(512),
  PhoneNO VARCHAR(10),
  Address VARCHAR(64),
  IsActive BIT,
  CreatedDate DATETIME DEFAULT GETDATE() NOT NULL,
  ModifiedDate DATETIME DEFAULT GETDATE() NOT NULL,
)
select * from StudentClass
select * from Section
select *  from Student

GO


CREATE TABLE Fees(
  FeesId INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
  RollNo INT FOREIGN KEY REFERENCES  Student(RollNo),
  ClassId INT FOREIGN KEY REFERENCES  StudentClass(ClassId),
  SectionId INT FOREIGN KEY REFERENCES  Section(SectionId),
  MonthName VARCHAR(16),
  YearName VARCHAR(16),
  FeesAmount INT,
  CreatedDate DATETIME DEFAULT GETDATE() NOT NULL,
  ModifiedDate DATETIME DEFAULT GETDATE() NOT NULL,
)

go

CREATE TABLE CustomerQuery(
  CustomerQueryId INT  IDENTITY(1,1)  PRIMARY KEY  NOT NULL,
  Name VARCHAR(32),
  PhoneNo VARCHAR(16),
  Email VARCHAR(32),
  Query  VARCHAR(512),
  IsActive BIT,
  CreatedDate DATETIME DEFAULT GETDATE() NOT NULL,
  ModifiedDate DATETIME DEFAULT GETDATE() NOT NULL,
)

DROP TABLE Fees
DROP TABLE Student
DROP TABLE Section
DROP TABLE StudentClass
DROP TABLE CustomerQuery
select * from CustomerQuery


ALTER TABLE Student
ALTER COLUMN Photo NVARCHAR(512);