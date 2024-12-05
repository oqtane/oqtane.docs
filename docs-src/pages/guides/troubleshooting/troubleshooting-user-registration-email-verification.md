# Troubleshooting User Registration Email Verification

## Issue: A user registers but is unable to verify their account.

**Potential Cause:** SMTP server issues or email lost in junk mail.

### Resolution Steps:

1. **Manually Update Email Confirmation:**
   - If you know the user and trust their registration, you can manually update the `EmailConfirmed` field in the `AspNetUsers` database to `true`. This will allow the user to log in without verifying their email address.
   - Execute an SQL command similar to the following:
     ```sql
     UPDATE AspNetUsers SET EmailConfirmed = `True` WHERE Email = 'user@example.com';
     ```
   - Replace `user@example.com` with the actual email address of the user.

2. **Check Email Configuration:**
   - Ensure that your SMTP server is correctly configured. Check the SMTP settings in your application to confirm that emails can be sent.

3. **Consider Deleting the User:**
   - If the SMTP issue has been resolved, you may consider deleting the user and asking them to register again. This can help ensure that the user receives the verification email correctly.

4. **Feature Request:**
   - A feature request to add an administrative function for confirming the email addresses of self-registered users has been made. You can track the progress of this request [here](https://github.com/oqtane/oqtane.framework/issues/4789). If accepted and a contribution is made, this feature may be included in version 6.0.0 or later.
