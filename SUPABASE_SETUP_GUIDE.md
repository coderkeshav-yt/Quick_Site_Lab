# Supabase Authentication Setup Guide for Launchory

This guide will walk you through setting up Supabase authentication for the Launchory website.

## 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign up or log in
2. Click "New Project" to create a new project
3. Enter a name for your project (e.g., "Launchory")
4. Set a secure database password (save this somewhere safe)
5. Choose a region closest to your users
6. Click "Create new project"

## 2. Get API Keys

Once your project is created:

1. Go to the project dashboard
2. In the left sidebar, click on the "Settings" icon (gear icon)
3. Click on "API" in the settings menu
4. You'll find two important keys:
   - **URL**: Your Supabase project URL
   - **anon public key**: Your public API key for anonymous access

## 3. Configure Environment Variables

Update your `.env.development` and `.env` files with the Supabase credentials:

```
# Supabase Configuration
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 4. Create Database Tables

You'll need to create a profiles table to store user profile information:

1. Go to the "Table Editor" in your Supabase dashboard
2. Click "Create a new table"
3. Set the table name to "profiles"
4. Add the following columns:

   | Name | Type | Default Value | Primary | Is Nullable |
   |------|------|---------------|---------|-------------|
   | id | uuid | `auth.uid()` | Yes | No |
   | created_at | timestamp with time zone | `now()` | No | No |
   | updated_at | timestamp with time zone | `now()` | No | Yes |
   | full_name | text | NULL | No | Yes |
   | avatar_url | text | NULL | No | Yes |

5. Click "Save" to create the table

## 5. Set Up Row Level Security (RLS)

To secure your profiles table:

1. Go to the "Authentication" section in your Supabase dashboard
2. Click on "Policies"
3. Find your "profiles" table and click "Add Policy"
4. Create the following policies:

### Read Policy

Name: "Users can read their own profile"
Policy: `auth.uid() = id`

### Insert Policy

Name: "Users can insert their own profile"
Policy: `auth.uid() = id`

### Update Policy

Name: "Users can update their own profile"
Policy: `auth.uid() = id`

## 6. Set Up Authentication Providers

If you want to enable social login (Google, GitHub, etc.):

1. Go to "Authentication" > "Settings" in your Supabase dashboard
2. Enable the providers you want to use
3. Follow the instructions to set up each provider

## 7. Configure Email Templates

Customize the email templates for authentication:

1. Go to "Authentication" > "Email Templates"
2. Customize the templates for:
   - Confirmation email
   - Invitation email
   - Magic link email
   - Reset password email

## 8. Testing Authentication

After completing the setup, you can test the authentication flow:

1. Try signing up with a new account
2. Verify email confirmation works
3. Test login functionality
4. Test social login if configured
5. Test password reset flow

## 9. Integrating with Source Code Sales

To integrate Supabase authentication with your existing source code sales feature:

1. Modify the purchase tracking to associate purchases with user IDs
2. Update the secure download system to verify both the token and user authentication
3. Create a "purchases" table in Supabase to track user purchases
4. Add a user dashboard to display purchased items

## 10. Security Considerations

- Always use HTTPS in production
- Never expose your service role key in client-side code
- Use Row Level Security (RLS) for all tables
- Consider implementing rate limiting for authentication attempts
- Regularly audit your authentication logs

## Next Steps

After completing this setup, you'll have a fully functional authentication system integrated with your Launchory website. Users will be able to sign up, log in, and manage their profiles securely.
