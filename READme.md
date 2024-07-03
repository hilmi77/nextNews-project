# NextNews

![alt text](image.png)

NextNews is a news site developed using Next.js, designed to deliver concise and unbiased news. This project demonstrates the use of various routing systems and data fetching techniques, both from the backend and directly from the database.

## Features

- **Next.js**: Utilizes the Next.js framework for server-side rendering and static site generation.
- **Database**: Uses SQLite for managing the news articles and other data.
- **Routing Systems**: Implements parallel routing and route intercepting to enhance navigation.
- **Data Fetching**: Demonstrates methods for fetching data from the backend and directly from the database.

## Project Setup

To get the project up and running, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/nextnews.git
   cd nextnews
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Setup the Database**:

   Ensure you have SQLite installed on your machine. Create a database file and run the necessary migrations to set up the schema.

   ```bash
   sqlite3 news.db < schema.sql
   ```

4. **Environment Variables**:

   Create a `.env.local` file and add your environment-specific variables:

   ```env
   DATABASE_URL=sqlite://news.db
   ```

5. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- **Navigation**: Use the top navigation links to switch between the latest news and the archive.
- **Read Articles**: Click on "Read the latest news" to view the newest articles.

## Data Fetching

The project illustrates two primary methods of data fetching:

1. **From Backend**: Fetch data via API routes defined in the backend.
2. **Direct Database Access**: Access data directly from the SQLite database.

These methods ensure that the application remains performant and scalable.
