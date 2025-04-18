/* --- General Styles --- */
:root {
    --primary-color: #4CAF50; /* A nice green */
    --secondary-color: #FF9800; /* An orange accent */
    --text-color: #333;
    --light-text-color: #555;
    --background-color: #e8f5e9; /* Very light green background */
    --card-background: #ffffff;
    --border-color: #ddd;
    --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
    --padding-medium: 20px;
    --padding-large: 30px;
}

* {
    box-sizing: border-box; /* Include padding and border in element's total width and height */
}

html {
    scroll-behavior: smooth; /* Optional: Smooth scrolling */
}

body {
    font-family: 'Roboto', sans-serif; /* Primary font */
    line-height: 1.7; /* Improved readability */
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--text-color);
    min-height: 100vh; /* Ensure body takes at least full viewport height */
    display: flex; /* Use flexbox to push footer down if content is short */
    flex-direction: column;
}

.container {
    max-width: 960px; /* Increased max width */
    margin: 0 auto; /* Center container */
    padding: 0 var(--padding-medium);
    width: 100%; /* Ensure it uses available width */
}

main.container {
    flex-grow: 1; /* Allow main content to take up available space */
    padding-top: var(--padding-medium);
    padding-bottom: var(--padding-medium);
}

h1, h2, h3, h4 {
    font-family: 'Lora', serif; /* Serif font for headings */
    color: var(--text-color);
    margin-top: 1em;
    margin-bottom: 0.5em;
}

h1 {
    font-size: 2.5em;
    text-align: center;
    margin-bottom: var(--padding-medium);
    color: var(--primary-color);
}

h2 {
    font-size: 1.8em;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 10px;
    margin-bottom: var(--padding-medium);
}

h3 {
    font-size: 1.4em;
    margin-bottom: 0.8em;
}

p {
    margin-bottom: 1em;
}

a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.2s ease;
}

a:hover {
    color: darken(var(--primary-color), 15%); /* Darker shade on hover */
    text-decoration: underline;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--secondary-color);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease, opacity 0.3s ease;
    text-align: center;
}

.btn:hover:not(:disabled) {
    background-color: darken(var(--secondary-color), 10%);
}

.btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    opacity: 0.7;
}

.card {
    background-color: var(--card-background);
    padding: var(--padding-medium);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    margin-bottom: var(--padding-large);
    border: 1px solid var(--border-color); /* Subtle border */
}

.note {
    font-size: 0.9em;
    color: var(--light-text-color);
    margin-top: 15px;
    padding-top: 10px;
    border-top: 1px dashed #eee; /* Visual separation for notes */
}

.sr-only { /* For accessibility - visually hidden elements */
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}


/* --- Header & Navigation --- */
.site-header {
    background-color: var(--primary-color);
    color: white;
    padding: 10px 0;
    box-shadow: var(--shadow);
    position: sticky; /* Make header sticky */
    top: 0;
    z-index: 100; /* Ensure header is above other content */
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* Allow wrapping */
}

.site-title {
    color: white;
    text-decoration: none;
    font-size: 1.8em; /* Larger title */
    font-weight: bold;
    margin-right: var(--padding-medium);
    flex-shrink: 0; /* Prevent shrinking */
}

.nav-links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px; /* Space between nav items */
}

.nav-links a {
    color: white;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.nav-links a:hover,
.nav-links a.active {
    background-color: rgba(0, 0, 0, 0.1); /* Subtle hover effect */
    text-decoration: none;
}

/* Dropdown Navigation */
.dropdown {
    position: relative;
    display: inline-block;
}

.dropbtn {
    background-color: transparent;
    color: white;
    padding: 8px 12px;
    font-size: 1em;
    border: none;
    cursor: pointer;
    font-family: inherit;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.dropbtn:hover {
     background-color: rgba(0, 0, 0, 0.1);
}


.dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--card-background);
    min-width: 200px;
    box-shadow: var(--shadow);
    z-index: 101; /* Ensure dropdown is above other content */
    border-radius: 5px;
    overflow: hidden;
    top: 100%; /* Position below button */
    left: 0;
    border: 1px solid var(--border-color);
}

.dropdown-content a {
    color: var(--text-color);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: background-color 0.2s ease;
}

.dropdown-content a:hover {
    background-color: #f0f0f0; /* Light grey hover */
}

.dropdown-separator {
    height: 1px;
    background-color: var(--border-color);
    margin: 5px 0;
}

.dropdown:hover .dropdown-content {
    display: block;
}

/* Search Bar */
.search-container {
    display: flex;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.5); /* Subtle border */
    border-radius: 5px;
    overflow: hidden; /* Ensure input/button corners match container */
    background-color: white; /* White background for search */
}

.search-container input[type=search] {
    padding: 8px 10px;
    border: none;
    font-size: 0.9em;
    outline: none; /* Remove default outline */
    flex-grow: 1; /* Allow input to fill space */
}

.search-container input[type=search]:focus {
     outline: 2px solid var(--secondary-color); /* Highlight on focus */
     outline-offset: -2px; /* Draw outline inside border */
}

.search-container button {
    padding: 8px 15px;
    background-color: var(--secondary-color);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.3s ease;
    flex-shrink: 0; /* Prevent shrinking */
}

.search-container button:hover {
    background-color: darken(var(--secondary-color), 10%);
}


/* --- Article / Book Content --- */
.book-article {
    /* Styles specific to the main book content area if needed */
}

.introduction {
    text-align: center;
    padding: var(--padding-large) var(--padding-medium); /* More padding */
    background: linear-gradient(135deg, var(--background-color) 0%, rgba(255,255,255,0.8) 100%); /* Subtle gradient */
}

.book-image {
    margin: var(--padding-medium) auto;
    max-width: 600px; /* Control image size */
    overflow: hidden;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

.book-image img {
    display: block;
    width: 100%; /* Make image responsive within container */
    height: auto;
}

.book-image figcaption {
    font-size: 0.9em;
    color: var(--light-text-color);
    margin-top: 10px;
    padding: 0 10px;
}


.summary-content ul,
.outline ul,
.character-list ul {
    padding-left: 25px;
    margin-bottom: 1em;
}

.summary-content li,
.outline li,
.character-list li {
    margin-bottom: 8px;
    line-height: 1.6;
}

.outline {
    margin-top: var(--padding-medium);
    padding: var(--padding-medium);
    background-color: #f9f9f9; /* Light background for outline */
    border-left: 4px solid var(--primary-color); /* Colored border */
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

.outline h4 {
    margin-top: 0;
    color: var(--primary-color);
    font-size: 1.2em;
    margin-bottom: 10px;
}

.outline ul {
    list-style-type: disc;
    padding-left: 20px;
}

.callout {
    margin: var(--padding-medium) 0;
    padding: var(--padding-medium);
    background-color: #fffde7; /* Light yellow */
    border-left: 4px solid var(--secondary-color); /* Orange border */
    border-radius: var(--border-radius);
    font-style: italic;
}


/* --- Historical Context --- */
.historical-context .context-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
    gap: var(--padding-medium);
}

.historical-context .context-item {
    border: 1px solid var(--border-color);
    padding: 15px;
    border-radius: var(--border-radius);
    background-color: #fcfcfc; /* Slightly different background */
}

.historical-context .context-item h3 {
    margin-top: 0;
    display: flex;
    align-items: center;
    font-size: 1.3em;
    color: var(--primary-color);
}

/* Placeholder for icons - replace with actual icon font or SVGs */
.historical-context .context-item h3 i {
    font-size: 1.2em;
    margin-right: 10px;
    color: var(--secondary-color); /* Accent color for icons */
}
/* Example: .icon-pencil::before { content: '\f040'; font-family: 'Font Awesome 5 Free'; } */


/* --- Quotes --- */
.key-quotes .quotes-list {
    margin-top: var(--padding-medium);
}

blockquote.bible-quote {
    background-color: #e3f2fd; /* Light blue */
    border-left: 5px solid #2196f3; /* Blue border */
    margin: 15px 0;
    padding: 15px var(--padding-medium);
    font-style: italic;
    cursor: pointer; /* Indicate clickability */
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
    border-radius: 0 var(--border-radius) var(--border-radius) 0; /* Rounded on right side */
}

blockquote.bible-quote:hover {
    background-color: #bbdefb; /* Lighter blue on hover */
    box-shadow: 0 0 10px rgba(33, 150, 243, 0.2); /* Subtle glow */
}

blockquote.bible-quote p {
    margin: 0 0 8px 0;
    font-style: normal; /* Reset italic */
    font-size: 1.1em;
}

blockquote.bible-quote cite {
    display: block;
    text-align: right;
    font-size: 0.9em;
    color: var(--light-text-color);
}

.quote-context {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px dashed #90caf9; /* Dashed blue border */
    font-size: 0.95em;
    color: var(--text-color);
    display: none; /* Initially hidden - JS toggles this */
}

.quote-context p {
    margin-bottom: 5px;
}


/* --- Quiz Styling --- */
.interactive-quiz form {
    margin-top: var(--padding-medium);
}

.quiz-question {
    margin-bottom: var(--padding-medium);
    padding: var(--padding-medium);
    background-color: #fff9c4; /* Light yellow */
    border: 1px solid #fbc02d; /* Darker yellow border */
    border-radius: var(--border-radius);
    transition: border-color 0.3s ease; /* Smooth border change on result */
}

.quiz-question.correct {
    border-color: #8bc34a; /* Green border for correct */
}

.quiz-question.incorrect {
    border-color: #f44336; /* Red border for incorrect */
}


.quiz-question p {
    margin-top: 0;
    font-weight: bold;
    margin-bottom: 15px;
}

.quiz-question label {
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 1em;
    padding-left: 25px; /* Space for custom radio button if desired */
    position: relative;
}

.quiz-question label input[type="radio"] {
    margin-right: 8px;
    position: absolute;
    left: 0;
    top: 3px; /* Adjust vertical alignment */
}

.quiz-results {
    margin-top: var(--padding-medium);
    padding: var(--padding-medium);
    border-radius: var(--border-radius);
    min-height: 1.5em;
    text-align: center;
    font-weight: bold;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

.quiz-results.correct {
    background-color: #dcedc8; /* Light green */
    border: 1px solid #8bc34a; /* Green border */
    color: #33691e; /* Dark green text */
}

.quiz-results.incorrect {
     background-color: #ffcdd2; /* Light red */
    border: 1px solid #f44336; /* Red border */
     color: #b71c1c; /* Dark red text */
}

.quiz-results ul { /* Styling for correct answers list */
    list-style: none;
    padding: 0;
    margin-top: 15px;
    text-align: left;
    font-weight: normal;
    font-size: 0.95em;
    color: var(--text-color);
}
.quiz-results ul li {
    margin-bottom: 5px;
    padding-left: 20px;
    position: relative;
}
.quiz-results ul li::before {
    content: '\2713'; /* Checkmark icon */
    color: #388E3C; /* Green checkmark */
    font-weight: bold;
    position: absolute;
    left: 0;
}


/* --- Lesson Plans & Resources --- */
.lesson-plans ul.resource-list,
.related-resources ul.resource-list {
    list-style: none; /* Remove default bullets */
    padding: 0;
}

.lesson-plans ul.resource-list li,
.related-resources ul.resource-list li {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: #fefefe;
    transition: background-color 0.2s ease;
}

.lesson-plans ul.resource-list li:hover,
.related-resources ul.resource-list li:hover {
     background-color: #f0f0f0;
}


.resource-link {
    display: flex;
    align-items: center;
    font-size: 1.1em;
    color: #0288d1; /* Blue links */
}

.resource-link i { /* Placeholder for icons */
    margin-right: 10px;
    color: #0288d1; /* Match link color */
}
/* Example: .icon-download::before { content: '\f019'; font-family: 'Font Awesome 5 Free'; } */


/* --- Discussion/Comments --- */
#comment-section {
    margin-top: var(--padding-medium);
}

#comment-section textarea {
    width: 100%; /* Full width */
    margin-bottom: 15px;
    padding: 12px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    font-family: inherit;
    font-size: 1em;
    min-height: 120px; /* Larger text area */
    resize: vertical; /* Allow vertical resize */
    outline: none;
    transition: border-color 0.2s ease;
}

#comment-section textarea:focus {
     border-color: var(--primary-color);
     box-shadow: 0 0 5px rgba(76, 175, 80, 0.3); /* Green focus glow */
}

#comment-section .btn:disabled {
    background-color: #b0b0b0; /* Grey for disabled */
    cursor: not-allowed;
    opacity: 0.8;
}


/* --- Footer --- */
.site-footer {
    background-color: #222; /* Darker footer */
    color: white;
    text-align: center;
    padding: var(--padding-medium) 0;
    margin-top: var(--padding-large);
    font-size: 0.9em;
}

.site-footer a {
    color: #aaa;
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.2s ease;
}

.site-footer a:hover {
    color: white;
    text-decoration: underline;
}


/* --- Responsive Design --- */
@media (max-width: 768px) {
    h1 {
        font-size: 2em;
    }
    h2 {
        font-size: 1.5em;
    }

    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .site-title {
         margin-bottom: 10px;
    }

    .nav-links {
         flex-direction: column;
         align-items: flex-start;
         width: 100%;
         margin-top: 10px;
         gap: 10px; /* Adjust gap for column layout */
    }

     .nav-links a, .dropbtn {
         width: 100%; /* Full width for nav items */
         text-align: left;
     }

     .dropdown {
         width: 100%;
     }

     .dropdown-content {
         position: static; /* Make dropdown static on smaller screens */
         box-shadow: none;
         min-width: auto;
         width: 100%;
         border: none;
         border-radius: 0;
         background-color: #f0f0f0; /* Slightly darker background for nested items */
     }

     .dropdown-content a {
         padding-left: 30px; /* Indent dropdown items */
     }

     .search-container {
         width: 100%;
         margin-top: 10px;
         border: none; /* Remove border */
         background-color: transparent; /* Transparent background */
     }
      .search-container input[type=search] {
          border: 1px solid var(--border-color); /* Add border back to input */
          border-radius: 5px 0 0 5px;
      }
       .search-container button {
           border-radius: 0 5px 5px 0;
       }


    .container {
        padding: 0 15px; /* Reduced padding */
    }

     .card {
         padding: 15px;
     }

    .historical-context .context-details {
        grid-template-columns: 1fr; /* Stack items */
    }

    .quote-context {
        padding-left: 15px; /* Adjust padding */
        padding-right: 15px;
    }

     .quiz-question {
         padding: 15px;
     }

    .quiz-question label {
        padding-left: 20px; /* Adjust radio button space */
    }
}

/* --- Optional: Styles for Full Height Sections (If desired, e.g., on homepage) --- */
/* .full-height-section {
    min-height: calc(100vh - [header/footer height]);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
} */
