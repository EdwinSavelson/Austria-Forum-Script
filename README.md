# A program I wrote as a volunteer for <a href = "austria-forum.org">Austria-Forum</a>, a project through Graz University of Technology in Styria, Austria.
## Technologies Used:
- Node.js
- Selenium
## Purpose:
This program was written to automate the removal of links to external author websites for over 1300 articles.  
Without the ability to access the database directly, I needed the script to direct the browser to:
- Login using my credentials(Login script omitted from this script for security)
- Navigate to the <a href = "https://austria-forum.org/af/Geography/About/Main_Ideas/Current_List_of_Stories">list of articles</a> and store all of the links that contain "AP" the organization from which the authors that needed removing belong.
- Navigate to each link and store the text contained in the article/editor box.
- Search the text for the author's links.
- Remove the link.
- Replace the current text with the edited text.
- Save the edits.
- Repeat for all articles.
## Additional Features:
- Stores original and edited text to a JSON file using Node File I/O.
- Returns number of successful and failed articles.
