# Administration Troubleshooting Guide

This document provides troubleshooting tips for common issues encountered in the Oqtane Framework.

## Troubleshooting Login Issues

### Issue: Unable to log into a production website.

**Potential Cause:** An expired or improperly configured SSL certificate.

### Resolution Steps:

1. **Check SSL Certificate:**
   - Verify if the SSL certificate for the website is expired. You can check this by clicking on the padlock icon in the browser's address bar, which will display certificate details.
   - If the certificate is expired, you will need to renew it through your certificate authority (CA).

2. **Validate SSL Configuration:**
   - Ensure that the SSL certificate is correctly installed and configured on the web server. Misconfigurations can lead to failed login attempts.
   - Use online tools (like SSL Labs) to test the SSL configuration and identify any issues.

3. **Update Certificate:**
   - If the certificate is not properly set up, re-install or configure the certificate as per the guidelines provided by your CA or hosting provider.

4. **Test Login Again:**
   - After resolving any SSL issues, attempt to log in to the website again.

---

## Troubleshooting Self-Registration Email Verification

### Issue: A user registers but is unable to verify their account.

**Potential Cause:** SMTP server issues or email lost in junk mail.

### Resolution Steps:

1. **Manually Update Email Confirmation:**
   - If you know the user and trust their registration, you can manually update the `EmailConfirmed` field in the `AspNetUsers` database to `true`. This will allow the user to log in without verifying their email address.
   - Execute an SQL command similar to the following:
     ```sql
     UPDATE AspNetUsers SET EmailConfirmed = 1 WHERE Email = 'user@example.com';
     ```
   - Replace `user@example.com` with the actual email address of the user.

2. **Check Email Configuration:**
   - Ensure that your SMTP server is correctly configured. Check the SMTP settings in your application to confirm that emails can be sent.

3. **Consider Deleting the User:**
   - If the SMTP issue has been resolved, you may consider deleting the user and asking them to register again. This can help ensure that the user receives the verification email correctly.

4. **Feature Request:**
   - A feature request to add an administrative function for confirming the email addresses of self-registered users has been made. You can track the progress of this request [here](https://github.com/oqtane/oqtane.framework/issues/4789). If accepted, this feature may be included in version 6.0.0 or later.

---

## Additional Considerations

- This troubleshooting guide will expand over time as new issues arise and are documented.
- Regularly monitor the health of your SSL certificates and SMTP configuration to avoid future issues.
