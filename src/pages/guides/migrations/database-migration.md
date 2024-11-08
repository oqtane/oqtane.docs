# Database Migrations

Database migrations are essential in Oqtane to ensure that the database schema aligns with the application's version. These migrations help to safely apply changes to the database structure, such as adding new tables, modifying columns, or altering indexes, and are executed as part of the upgrade process.

This guide explains how to use the migration scripts, troubleshoot common issues, and resolve database-related problems during upgrades.

## Overview

Oqtane uses migration scripts to handle changes to the database schema between versions. When upgrading from one version to another, migration scripts are applied to bring the database up to date with the new code changes.

The migration process typically involves:
- Running pre-defined SQL scripts that modify the database structure.
- Ensuring that database schema changes are consistent with the code's expectations.
- Handling version-specific database changes (i.e., adding, altering, or removing columns or tables).

## Running Database Migrations

To apply migrations, follow these steps:

1. **Backup the Database:**  
   Before applying any migrations, ensure that you have a recent backup of your database to prevent data loss in case of errors.

2. **Verify the Database Version:**  
   Ensure that you are upgrading from a compatible database version. Check your current database schema version and compare it with the version you're upgrading to.

3. **Run Migration Scripts:**  
   Oqtane provides migration scripts that can be executed on your database to bring it up to date. These scripts can typically be run using the Oqtane Admin interface or manually using SQL tools like SQL Server Management Studio (SSMS) for SQL Server or MySQL Workbench for MySQL.

4. **Check for Errors:**  
   If the migration fails, check the error messages for specific details. Look for issues such as:
   - Missing columns or tables
   - Foreign key constraints
   - Compatibility issues between the database version and the schema
   - Scripts that were not executed properly

   For most issues, detailed error messages will help guide you to the specific cause of the failure.

5. **Confirm Successful Migration:**  
   After the migration scripts are successfully executed, verify that the database schema matches the expected version. You may need to check specific tables or views to ensure that all changes were applied.

## Common Migration Issues and Solutions

### 1. Migration Fails Due to Missing or Incompatible Columns

**Symptom:**  
The migration fails with an error message stating that certain columns or tables are missing.

**Solution:**  
- Verify that the migration script is correctly applied. Sometimes, manual changes to the database schema (e.g., column removals or modifications) can cause incompatibilities.
- Review the SQL script that was supposed to add the missing columns or tables and try to apply it manually.
- If a column or table was removed intentionally, ensure that your migration script accounts for these changes.

### 2. Error During Database Schema Comparison

**Symptom:**  
There is a mismatch between the current database schema and the new version after running migration scripts.

**Solution:**  
- Check if the database schema was altered manually before applying migrations. If manual changes were made, you may need to reverse them to allow the migration script to apply properly.
- Compare the expected schema version with the current one and make necessary adjustments. Refer to the [Database Schema Documentation](../database-management/database-schema.md) for more details.

### 3. Migration Script Fails to Run on Production Database

**Symptom:**  
Migration scripts run successfully in the development environment but fail in the production environment.

**Solution:**  
- Double-check that the correct database (development vs. production) is being used for the migration.
- Ensure that the production database has the necessary permissions for applying migrations.
- Review any environment-specific configurations that might be preventing the migration from executing properly on the production system.

### 4. Rollback Migration Script

**Symptom:**  
The migration caused unintended changes to the database, and you need to revert to the previous version.

**Solution:**  
- If the migration supports rollback, use the `rollback` or `revert` command provided by Oqtane.
- If rollback is not supported, you will need to manually revert the database schema using backup files or reverse-engineer the changes made during the migration.

## Best Practices for Database Migrations

1. **Test in Development First:**  
   Always test the migration on a development or staging environment before applying it to production. This ensures that any issues with the migration scripts are caught early.

2. **Backup Your Database:**  
   Always take a full backup of the database before running any migrations. This protects your data in case something goes wrong.

3. **Review Release Notes:**  
   Check the release notes for the specific Oqtane version you're upgrading to. There may be migration-specific instructions or known issues that need to be addressed.

4. **Ensure Database Compatibility:**  
   Make sure the database server you're using is compatible with the version of Oqtane you're upgrading to. Database version upgrades may be required to fully support new schema changes.

---

## Conclusion

Database migrations are an essential part of maintaining an up-to-date Oqtane application. While they help automate database updates, it is important to monitor the migration process closely for any errors and follow best practices to ensure a smooth transition.

For additional information or troubleshooting, refer to the [Migration Troubleshooting Guide](../troubleshooting/troubleshooting-migrations.md) or consult the Oqtane documentation for more details.
