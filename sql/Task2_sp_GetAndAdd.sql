USE RozgarDB;
GO

CREATE OR ALTER PROCEDURE sp_GetExperience
    @UserID INT
AS
BEGIN
    SELECT ExpID, JobTitle, CompanyName, YearsWorked, IsCurrentJob
    FROM Experience
    WHERE UserID = @UserID;
END
GO

CREATE OR ALTER PROCEDURE sp_AddExperience
    @UserID INT,
    @JobTitle VARCHAR(100),
    @CompanyName VARCHAR(100),
    @YearsWorked INT
AS
BEGIN
    INSERT INTO Experience (UserID, JobTitle, CompanyName, YearsWorked, IsCurrentJob)
    VALUES (@UserID, @JobTitle, @CompanyName, @YearsWorked, 0);
END
GO
