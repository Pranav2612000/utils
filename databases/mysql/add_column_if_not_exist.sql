-- A simple procedure to add a column to a table if the column does not exist

DELIMITER $$ 
DROP PROCEDURE IF EXISTS `add_column`;
CREATE PROCEDURE `add_column`()
BEGIN
	  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
    ALTER TABLE table_name ADD COLUMN column_name VARCHAR(64) default "";
END$$
DELIMITER ;
CALL add_column();
