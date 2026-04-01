USE RozgarDB;
GO

CREATE OR ALTER PROCEDURE sp_LoginUser
    @Email VARCHAR(100),
    @Password VARCHAR(100)
AS
BEGIN
    SELECT UserID, FullName
    FROM Users
    WHERE Email = @Email AND PasswordHash = @Password;
END
GO
