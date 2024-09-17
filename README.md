VidZone
VidZone is a YouTube clone application that utilizes the YouTube Data API via RapidAPI to provide users with a video browsing and search experience. Built with React and Tailwind CSS, this application offers a modern and responsive interface similar to YouTube.

### Features
Search Videos: Search for videos using keywords.
Video Thumbnails: Display video thumbnails with titles and other details.
Video Details: View details such as video duration, view count, and publication time.
Responsive Design: Optimized for desktop and mobile devices.


### Installation
Prerequisites
Node.js and npm installed on your machine.
An API key from RapidAPI for the YouTube Data API.


## Getting Started
cd vidzone
Install Dependencies
npm install

## Set Up Environment Variables
Create a .env file in the root of the project with the following content:
VITE_YOUTUBE_API_KEY=your_rapidapi_key_here
Replace your_rapidapi_key_here with your actual API key from RapidAPI.

## Start the Development Server
npm run dev
Navigate to http://localhost:3000 in your browser to view the application.

## Folder Structure
src/
components/: Contains reusable React components.
hooks/: Custom React hooks.
pages/: Application pages or views.
utils/: Utility functions and API calls.
App.js: Main application component.
index.js: Entry point for the React application.
public/: Static files like index.html.

## API Integration
VidZone uses the YouTube Data API provided by RapidAPI. The API key is used to authenticate requests and retrieve data from YouTube.

## API Endpoints
Search Videos: GET /search/?q={query}
query: Search term to find videos.
For more details on API endpoints and usage, refer to the YouTube Data API documentation.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

## License
This project is licensed under the MIT License. See the LICENSE file for details.
