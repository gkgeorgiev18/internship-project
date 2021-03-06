USE [master]
GO
/****** Object:  Database [Omne enim blog]    Script Date: 7/14/2021 20:53:04 ******/
CREATE DATABASE [Omne enim blog]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Omne enim blog', FILENAME = N'D:\Programs\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Omne enim blog.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Omne enim blog_log', FILENAME = N'D:\Programs\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Omne enim blog_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Omne enim blog].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Omne enim blog] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Omne enim blog] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Omne enim blog] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Omne enim blog] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Omne enim blog] SET ARITHABORT OFF 
GO
ALTER DATABASE [Omne enim blog] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Omne enim blog] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Omne enim blog] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Omne enim blog] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Omne enim blog] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Omne enim blog] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Omne enim blog] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Omne enim blog] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Omne enim blog] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Omne enim blog] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Omne enim blog] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Omne enim blog] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Omne enim blog] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Omne enim blog] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Omne enim blog] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Omne enim blog] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Omne enim blog] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Omne enim blog] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Omne enim blog] SET  MULTI_USER 
GO
ALTER DATABASE [Omne enim blog] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Omne enim blog] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Omne enim blog] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Omne enim blog] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Omne enim blog] SET DELAYED_DURABILITY = DISABLED 
GO
USE [Omne enim blog]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 7/14/2021 20:53:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](50) NOT NULL,
	[email] [varchar](250) NOT NULL,
	[firstName] [varchar](50) NOT NULL,
	[lastName] [varchar](50) NOT NULL,
	[passwordHash] [nvarchar](256) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [username], [email], [firstName], [lastName], [passwordHash]) VALUES (1, N'Gegata', N'GSKalchev18@codingburgas.bg', N'Georgi', N'Kalchev', N'verysecurepassword')
INSERT [dbo].[Users] ([Id], [username], [email], [firstName], [lastName], [passwordHash]) VALUES (2, N'Qnko', N'qnko@qnkov.123', N'Georgi', N'Georgiev', N'lifeplaysmc8@gmail.com')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
USE [master]
GO
ALTER DATABASE [Omne enim blog] SET  READ_WRITE 
GO
