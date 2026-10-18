# SkillConnect — Peer-to-Peer Skill Exchange Platform

SkillConnect is a web application designed to help people connect, share their knowledge, and learn new skills from one another. The platform aims to make skill exchange accessible by allowing users to create profiles, list the skills they can teach, and identify skills they want to learn.

The project combines a web frontend with a cloud-hosted backend and database, with scope for future intelligent skill-matching and recommendation features.

## Project Overview

Many people want to learn new skills but may not know where to find someone who can guide them. SkillConnect aims to address this problem through a platform where users can showcase their abilities and discover learning opportunities within a community.

### Key Features

- **User Registration:** Create an account using an email address and password.
- **Email Verification:** Confirm a registered email address before logging in.
- **User Profiles:** Store profile information such as name, city, and bio.
- **Skill Management Data:** Store skills users can teach and skills they want to learn.
- **Skill Search Interface:** Search and filter the skill cards displayed on the search page.
- **Cloud-Hosted Backend:** Use Supabase Authentication and PostgreSQL for account management and structured data storage.
- **Extensible Database Design:** Prepare database tables for skill-exchange requests, conversations, and messages.

Some database capabilities are prepared for future integration into the frontend.

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Web page structure |
| CSS3 | Styling and responsive interface design |
| JavaScript | Frontend interactions and Supabase integration |
| Supabase Authentication | User registration, login, and email verification |
| PostgreSQL | Structured storage of profiles, skills, and other application data |
| Supabase Row Level Security (RLS) | Database access policies |
| Git and GitHub | Source control and project hosting |

## Current Architecture

1. **Frontend:** HTML, CSS, and JavaScript provide the user interface.
2. **Authentication:** Supabase Authentication manages user accounts and login.
3. **Database:** PostgreSQL stores user profiles and skill information.
4. **Access Control:** Row Level Security policies help control which authenticated users can access or modify database records.

## Database Design

The database includes tables for:

- `profiles` — user profile information
- `skills` — skills users can teach or want to learn
- `exchange_requests` — proposed skill exchanges
- `conversations` — conversation records between users
- `messages` — messages associated with conversations

The exchange-request and messaging tables are part of the database foundation; their complete integration into the user interface is future work.

## Getting Started

### Prerequisites

- A modern web browser
- Visual Studio Code or another code editor
- VS Code Live Server or another local static web server
- A Supabase project

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DHRUU14/skillconnect.git
   ```

2. Open the project folder in Visual Studio Code.

3. Open `jss/supabase.js` and configure the Supabase project URL and publishable key.

4. Ensure the project includes the required Supabase JavaScript client script.

5. Run the website using Live Server or another local web server.

6. Open the signup page, create an account, verify your email, and test the login page.

**Security note:** Use only the Supabase publishable key in browser code. Never commit service-role keys, passwords, or other private credentials to GitHub.

## Future Improvements

- Connect all skill listings and search results to live database records.
- Complete skill-exchange request workflows.
- Implement real-time messaging between users.
- Add dashboard authentication checks and session management.
- Develop a Python-based recommendation service using Flask and scikit-learn.
- Explore intelligent matching based on skills users can teach and skills they want to learn.
- Deploy the application to a suitable hosting platform.
- Add automated testing, improved error handling, and further security hardening.

These items represent planned development, not features currently claimed as complete.

## Learning Outcomes

This project provides practical experience with:

- Frontend development using HTML, CSS, and JavaScript
- Integrating a web application with a hosted backend
- Authentication and email verification workflows
- Relational database design and SQL
- Row Level Security concepts
- Git and GitHub-based project management

## Project Status

**Status:** In development

SkillConnect is being developed incrementally, starting with the frontend, authentication, and database foundation before expanding into complete skill-exchange workflows and intelligent recommendations.

## Repository

GitHub: https://github.com/DHRUU14/skillconnect
