-- SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
-- SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
-- SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- CREATE SCHEMA IF NOT EXISTS `Zeus_User_Registration` ;
-- CREATE SCHEMA IF NOT EXISTS `WalkInPortal` ;
-- USE `mydb` ;

-- -- -----------------------------------------------------
-- -- Table `mydb`.`timestamps`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `mydb`.`timestamps` (
--   `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
--   `update_time` TIMESTAMP NULL);


-- -- -----------------------------------------------------
-- -- Table `mydb`.`category`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `mydb`.`category` (
--   `category_id` INT NOT NULL,
--   `name` VARCHAR(255) NOT NULL,
--   PRIMARY KEY (`category_id`));

-- USE `Zeus_User_Registration` ;


-- CREATE TABLE IF NOT EXISTS `Zeus_User_Registration`.`Qualification` (
--   `Qualification` VARCHAR(100) NOT NULL,
--   `QualificationId` INT NOT NULL AUTO_INCREMENT,
--   PRIMARY KEY (`QualificationId`))
-- ENGINE = InnoDB;

-- CREATE TABLE IF NOT EXISTS `Zeus_User_Registration`.`Stream` (
--   `Qualification_Stream` VARCHAR(100) NOT NULL,
--   `StreamId` INT NOT NULL AUTO_INCREMENT,
--   PRIMARY KEY (`StreamId`))
-- ENGINE = InnoDB;

-- CREATE TABLE IF NOT EXISTS `Zeus_User_Registration`.`College` (
--   `CollegeName` VARCHAR(100) NOT NULL,
--   `CollegeId` INT NOT NULL AUTO_INCREMENT,
--   PRIMARY KEY (`CollegeId`))
-- ENGINE = InnoDB;

-- CREATE TABLE IF NOT EXISTS `Zeus_User_Registration`.`Educational` (
--   `Persentage` FLOAT NOT NULL,
--   `Yearpassing` VARCHAR(4) NOT NULL,
--   `UserId` INT NOT NULL,
--   `City` VARCHAR(45) NOT NULL,
--   `Qualification_QualificationId` INT NOT NULL,
--   `Stream_StreamId` INT NOT NULL,
--   `College_CollegeId` INT NOT NULL,
--   `College` VARCHAR(100) NULL DEFAULT NULL,
--   PRIMARY KEY (`UserId`),
--   INDEX `fk_Educational_Qualification1_idx` (`Qualification_QualificationId` ASC) VISIBLE,
--   INDEX `fk_Educational_Stream1_idx` (`Stream_StreamId` ASC) VISIBLE,
--   INDEX `fk_Educational_College1_idx` (`College_CollegeId` ASC) VISIBLE,
--   CONSTRAINT `fk_Educational_Qualification1`
--     FOREIGN KEY (`Qualification_QualificationId`)
--     REFERENCES `Zeus_User_Registration`.`Qualification` (`QualificationId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION,
--   CONSTRAINT `fk_Educational_Stream1`
--     FOREIGN KEY (`Stream_StreamId`)
--     REFERENCES `Zeus_User_Registration`.`Stream` (`StreamId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION,
--   CONSTRAINT `fk_Educational_College1`
--     FOREIGN KEY (`College_CollegeId`)
--     REFERENCES `Zeus_User_Registration`.`College` (`CollegeId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;


-- CREATE TABLE IF NOT EXISTS `Zeus_User_Registration`.`personalInformation` (
--   `FirstName` VARCHAR(23) NOT NULL,
--   `LastName` VARCHAR(23) NOT NULL,
--   `Email` VARCHAR(45) NOT NULL,
--   `PhoneNo` VARCHAR(15) NOT NULL,
--   `Portfolio` VARCHAR(100) NULL DEFAULT NULL,
--   `Resume` VARCHAR(100) NULL DEFAULT NULL,
--   `Photo` VARCHAR(100) NULL DEFAULT NULL,
--   `Notification` TINYINT NOT NULL DEFAULT 1,
--   `Refferal` INT NULL DEFAULT NULL,
--   `UserId` INT NOT NULL AUTO_INCREMENT,
--   `Password` VARCHAR(45) NOT NULL,
--   PRIMARY KEY (`UserId`),
--   CONSTRAINT `fk_personalInformation_Educational1`
--     FOREIGN KEY (`UserId`)
--     REFERENCES `Zeus_User_Registration`.`Educational` (`UserId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;

-- CREATE TABLE IF NOT EXISTS `Zeus_User_Registration`.`JobRoles` (
--   `JobRoll` VARCHAR(20) NOT NULL,
--   `JobId` INT NOT NULL,
--   PRIMARY KEY (`JobId`))
-- ENGINE = InnoDB;


-- CREATE TABLE IF NOT EXISTS `Zeus_User_Registration`.`personalInformation_has_JobRoles` (
--   `personalInformation_UserId` INT NOT NULL,
--   `JobRoles_JobId` INT NOT NULL,
--   PRIMARY KEY (`personalInformation_UserId`, `JobRoles_JobId`),
--   INDEX `fk_personalInformation_has_JobRoles_JobRoles1_idx` (`JobRoles_JobId` ASC) VISIBLE,
--   INDEX `fk_personalInformation_has_JobRoles_personalInformation_idx` (`personalInformation_UserId` ASC) VISIBLE,
--   CONSTRAINT `fk_personalInformation_has_JobRoles_personalInformation`
--     FOREIGN KEY (`personalInformation_UserId`)
--     REFERENCES `Zeus_User_Registration`.`personalInformation` (`UserId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION,
--   CONSTRAINT `fk_personalInformation_has_JobRoles_JobRoles1`
--     FOREIGN KEY (`JobRoles_JobId`)
--     REFERENCES `Zeus_User_Registration`.`JobRoles` (`JobId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;


-- CREATE TABLE IF NOT EXISTS `Zeus_User_Registration`.`ProfessionalDetails` (
--   `UserId` INT NOT NULL,
--   `PreviousApply` TINYINT NOT NULL,
--   `ProfessionalDetailId` INT NOT NULL,
--   PRIMARY KEY (`ProfessionalDetailId`),
--   INDEX `UserId_idx` (`UserId` ASC) VISIBLE,
--   CONSTRAINT `UserId`
--     FOREIGN KEY (`UserId`)
--     REFERENCES `Zeus_User_Registration`.`personalInformation` (`UserId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;


-- CREATE TABLE IF NOT EXISTS `Zeus_User_Registration`.`Technologies` (
--   `TechnologyName` VARCHAR(10) NOT NULL,
--   `TechnologyId` INT NOT NULL AUTO_INCREMENT,
--   PRIMARY KEY (`TechnologyId`))
-- ENGINE = InnoDB;

-- CREATE TABLE IF NOT EXISTS `Zeus_User_Registration`.`Experienced` (
--   `ExperienceYear` VARCHAR(5) NOT NULL,
--   `CurrentCTC` VARCHAR(10) NOT NULL,
--   `ExpectedCTC` VARCHAR(10) NOT NULL,
--   `NoticePeriod` TINYINT NOT NULL,
--   `NoticePeriodID` INT NOT NULL,
--   `ProfessoinalId` INT NOT NULL,
--   `ExperiencedID` INT NOT NULL,
--   PRIMARY KEY (`ExperiencedID`),
--   INDEX `ProfessionalId_idx` (`ProfessoinalId` ASC) VISIBLE,
--   CONSTRAINT `ProfessionalId`
--     FOREIGN KEY (`ProfessoinalId`)
--     REFERENCES `Zeus_User_Registration`.`ProfessionalDetails` (`ProfessionalDetailId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;


-- CREATE TABLE IF NOT EXISTS `Zeus_User_Registration`.`Experienced_has_Technologies` (
--   `Experienced_ExperiencedID` INT NOT NULL,
--   `Technologies_TechnologyId` INT NOT NULL,
--   PRIMARY KEY (`Experienced_ExperiencedID`, `Technologies_TechnologyId`),
--   INDEX `fk_Experienced_has_Technologies_Technologies1_idx` (`Technologies_TechnologyId` ASC) VISIBLE,
--   INDEX `fk_Experienced_has_Technologies_Experienced1_idx` (`Experienced_ExperiencedID` ASC) VISIBLE,
--   CONSTRAINT `fk_Experienced_has_Technologies_Experienced1`
--     FOREIGN KEY (`Experienced_ExperiencedID`)
--     REFERENCES `Zeus_User_Registration`.`Experienced` (`ExperiencedID`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION,
--   CONSTRAINT `fk_Experienced_has_Technologies_Technologies1`
--     FOREIGN KEY (`Technologies_TechnologyId`)
--     REFERENCES `Zeus_User_Registration`.`Technologies` (`TechnologyId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;


-- CREATE TABLE IF NOT EXISTS `Zeus_User_Registration`.`ProfessionalDetails_has_Technologies` (
--   `ProfessionalDetails_ProfessionalDetailId` INT NOT NULL,
--   `Technologies_TechnologyId` INT NOT NULL,
--   PRIMARY KEY (`ProfessionalDetails_ProfessionalDetailId`, `Technologies_TechnologyId`),
--   INDEX `fk_ProfessionalDetails_has_Technologies_Technologies1_idx` (`Technologies_TechnologyId` ASC) VISIBLE,
--   INDEX `fk_ProfessionalDetails_has_Technologies_ProfessionalDetails_idx` (`ProfessionalDetails_ProfessionalDetailId` ASC) VISIBLE,
--   CONSTRAINT `fk_ProfessionalDetails_has_Technologies_ProfessionalDetails1`
--     FOREIGN KEY (`ProfessionalDetails_ProfessionalDetailId`)
--     REFERENCES `Zeus_User_Registration`.`ProfessionalDetails` (`ProfessionalDetailId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION,
--   CONSTRAINT `fk_ProfessionalDetails_has_Technologies_Technologies1`
--     FOREIGN KEY (`Technologies_TechnologyId`)
--     REFERENCES `Zeus_User_Registration`.`Technologies` (`TechnologyId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;



-- USE `WalkInPortal` ;

-- CREATE TABLE IF NOT EXISTS `WalkInPortal`.`WalkInExamDetails` (
--   `GeneralInstruction` VARCHAR(1000) NULL DEFAULT NULL,
--   `InstructionForExam` VARCHAR(1000) NULL DEFAULT NULL,
--   `SystemRequirements` VARCHAR(1000) NULL DEFAULT NULL,
--   `Process` VARCHAR(1000) NULL DEFAULT NULL,
--   `WalkInId` INT NOT NULL,
--   PRIMARY KEY (`WalkInId`))
-- ENGINE = InnoDB;


-- CREATE TABLE IF NOT EXISTS `WalkInPortal`.`WalkInOverview` (
--   `WalkInHeading` VARCHAR(100) NOT NULL,
--   `StartDate` VARCHAR(45) NOT NULL,
--   `EndDate` VARCHAR(45) NOT NULL,
--   `Location` VARCHAR(45) NOT NULL,
--   `WalkInId` INT NOT NULL AUTO_INCREMENT,
--   PRIMARY KEY (`WalkInId`),
--   CONSTRAINT `fk_WalkInOverview_WalkInExamDetails1`
--     FOREIGN KEY (`WalkInId`)
--     REFERENCES `WalkInPortal`.`WalkInExamDetails` (`WalkInId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;

-- CREATE TABLE IF NOT EXISTS `WalkInPortal`.`JobRolesDetails` (
--   `JobRolesId` INT NOT NULL,
--   `RoleDiscription` VARCHAR(1000) NULL DEFAULT NULL,
--   `RoleRequirements` VARCHAR(1000) NULL DEFAULT NULL,
--   `Compensation` INT NOT NULL DEFAULT 0,
--   PRIMARY KEY (`JobRolesId`))
-- ENGINE = InnoDB;

-- CREATE TABLE IF NOT EXISTS `WalkInPortal`.`JobRoles` (
--   `JobRoles` VARCHAR(50) NOT NULL,
--   `JobRolesId` INT NOT NULL AUTO_INCREMENT,
--   PRIMARY KEY (`JobRolesId`),
--   CONSTRAINT `fk_JobRoles_JobRolesDetails1`
--     FOREIGN KEY (`JobRolesId`)
--     REFERENCES `WalkInPortal`.`JobRolesDetails` (`JobRolesId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;

-- CREATE TABLE IF NOT EXISTS `WalkInPortal`.`WalkInOverview_has_JobRoles` (
--   `WalkInOverview_WalkInId` INT NOT NULL,
--   `JobRoles_JobRolesId` INT NOT NULL,
--   `WalkInJobId` INT NOT NULL AUTO_INCREMENT,
--   INDEX `fk_WalkInOverview_has_JobRoles_JobRoles1_idx` (`JobRoles_JobRolesId` ASC) VISIBLE,
--   INDEX `fk_WalkInOverview_has_JobRoles_WalkInOverview_idx` (`WalkInOverview_WalkInId` ASC) VISIBLE,
--   PRIMARY KEY (`WalkInJobId`),
--   CONSTRAINT `fk_WalkInOverview_has_JobRoles_WalkInOverview`
--     FOREIGN KEY (`WalkInOverview_WalkInId`)
--     REFERENCES `WalkInPortal`.`WalkInOverview` (`WalkInId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION,
--   CONSTRAINT `fk_WalkInOverview_has_JobRoles_JobRoles1`
--     FOREIGN KEY (`JobRoles_JobRolesId`)
--     REFERENCES `WalkInPortal`.`JobRoles` (`JobRolesId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;

-- CREATE TABLE IF NOT EXISTS `WalkInPortal`.`TimeForWalkIn` (
--   `TimeID` INT NOT NULL,
--   `Time` VARCHAR(45) NOT NULL,
--   PRIMARY KEY (`TimeID`))
-- ENGINE = InnoDB;

-- CREATE TABLE IF NOT EXISTS `WalkInPortal`.`WalkInOverview_has_TimeForWalkIn` (
--   `WalkInOverview_WalkInId` INT NOT NULL,
--   `TimeForWalkIn_TimeID` INT NOT NULL,
--   `WalkingTimeId` INT NOT NULL,
--   INDEX `fk_WalkInOverview_has_TimeForWalkIn_TimeForWalkIn1_idx` (`TimeForWalkIn_TimeID` ASC) VISIBLE,
--   INDEX `fk_WalkInOverview_has_TimeForWalkIn_WalkInOverview1_idx` (`WalkInOverview_WalkInId` ASC) VISIBLE,
--   PRIMARY KEY (`WalkingTimeId`),
--   CONSTRAINT `fk_WalkInOverview_has_TimeForWalkIn_WalkInOverview1`
--     FOREIGN KEY (`WalkInOverview_WalkInId`)
--     REFERENCES `WalkInPortal`.`WalkInOverview` (`WalkInId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION,
--   CONSTRAINT `fk_WalkInOverview_has_TimeForWalkIn_TimeForWalkIn1`
--     FOREIGN KEY (`TimeForWalkIn_TimeID`)
--     REFERENCES `WalkInPortal`.`TimeForWalkIn` (`TimeID`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;

-- CREATE TABLE IF NOT EXISTS `WalkInPortal`.`User` (
--   `UserID` INT NOT NULL AUTO_INCREMENT,
--   `UserEmail` VARCHAR(100) NOT NULL,
--   `UserPassword` VARCHAR(45) NOT NULL,
--   `WalkInOverview_has_TimeForWalkIn_WalkingTimeId` INT NOT NULL,
--   PRIMARY KEY (`UserID`),
--   INDEX `fk_User_WalkInOverview_has_TimeForWalkIn1_idx` (`WalkInOverview_has_TimeForWalkIn_WalkingTimeId` ASC) VISIBLE,
--   CONSTRAINT `fk_User_WalkInOverview_has_TimeForWalkIn1`
--     FOREIGN KEY (`WalkInOverview_has_TimeForWalkIn_WalkingTimeId`)
--     REFERENCES `WalkInPortal`.`WalkInOverview_has_TimeForWalkIn` (`WalkingTimeId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;

-- CREATE TABLE IF NOT EXISTS `WalkInPortal`.`WalkInOverview_has_User` (
--   `WalkInOverview_WalkInId` INT NOT NULL,
--   `User_UserID` INT NOT NULL,
--   `WalkInUserId` INT NOT NULL,
--   INDEX `fk_WalkInOverview_has_User_User1_idx` (`User_UserID` ASC) VISIBLE,
--   INDEX `fk_WalkInOverview_has_User_WalkInOverview1_idx` (`WalkInOverview_WalkInId` ASC) VISIBLE,
--   PRIMARY KEY (`WalkInUserId`),
--   CONSTRAINT `fk_WalkInOverview_has_User_WalkInOverview1`
--     FOREIGN KEY (`WalkInOverview_WalkInId`)
--     REFERENCES `WalkInPortal`.`WalkInOverview` (`WalkInId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION,
--   CONSTRAINT `fk_WalkInOverview_has_User_User1`
--     FOREIGN KEY (`User_UserID`)
--     REFERENCES `WalkInPortal`.`User` (`UserID`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;


-- CREATE TABLE IF NOT EXISTS `WalkInPortal`.`WalkInOverview_has_JobRoles_has_User` (
--   `WalkInOverview_has_JobRoles_WalkInJobId` INT NOT NULL,
--   `User_UserID` INT NOT NULL,
--   PRIMARY KEY (`WalkInOverview_has_JobRoles_WalkInJobId`, `User_UserID`),
--   INDEX `fk_WalkInOverview_has_JobRoles_has_User_User1_idx` (`User_UserID` ASC) VISIBLE,
--   INDEX `fk_WalkInOverview_has_JobRoles_has_User_WalkInOverview_has__idx` (`WalkInOverview_has_JobRoles_WalkInJobId` ASC) VISIBLE,
--   CONSTRAINT `fk_WalkInOverview_has_JobRoles_has_User_WalkInOverview_has_Jo1`
--     FOREIGN KEY (`WalkInOverview_has_JobRoles_WalkInJobId`)
--     REFERENCES `WalkInPortal`.`WalkInOverview_has_JobRoles` (`WalkInJobId`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION,
--   CONSTRAINT `fk_WalkInOverview_has_JobRoles_has_User_User1`
--     FOREIGN KEY (`User_UserID`)
--     REFERENCES `WalkInPortal`.`User` (`UserID`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB;


-- SET SQL_MODE=@OLD_SQL_MODE;
-- SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
-- SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;








