document.addEventListener('DOMContentLoaded', () => {

    // --- General Nav Functionality (Example: Dropdown) ---
    // You might add JS here to handle dropdowns on touch devices if :hover isn't sufficient
    const dropdownButton = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownButton && dropdownContent) {
        dropdownButton.addEventListener('click', () => {
            // Toggle the display
            const isVisible = dropdownContent.style.display === 'block';
            dropdownContent.style.display = isVisible ? 'none' : 'block';
            dropdownButton.setAttribute('aria-expanded', !isVisible); // Accessibility
        });

        // Close dropdown if clicked outside (optional but good UX)
        document.addEventListener('click', (event) => {
            if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.style.display = 'none';
                dropdownButton.setAttribute('aria-expanded', 'false');
            }
        });
         // Handle keyboard events for accessibility (Escape key to close)
         document.addEventListener('keydown', (event) => {
             if (event.key === 'Escape' && dropdownContent.style.display === 'block') {
                 dropdownContent.style.display = 'none';
                 dropdownButton.setAttribute('aria-expanded', 'false');
                 dropdownButton.focus(); // Return focus to button
             }
         });
    }


    // --- Clickable Quotes Functionality ---
    const bibleQuotes = document.querySelectorAll('.bible-quote');

    bibleQuotes.forEach(quote => {
        quote.addEventListener('click', () => {
            const contextDiv = quote.querySelector('.quote-context');

            if (contextDiv) {
                // Toggle the display of the context div
                const isVisible = contextDiv.style.display === 'block';
                contextDiv.style.display = isVisible ? 'none' : 'block';
                // You could add a class instead: contextDiv.classList.toggle('visible');
                // and manage display in CSS
            } else {
                console.warn("No .quote-context div found for this quote:", quote);
                 // Fallback for quotes without context (or if you want an alert anyway)
                 const reference = quote.getAttribute('data-reference');
                 const quoteText = quote.querySelector('p').innerText;
                 alert(`Quote: "${quoteText}" (${reference})\n\n` +
                       `Context feature to be fully implemented.`);
            }
        });
    });

    // --- Bible Version Selector Placeholder ---
    const versionSelector = document.getElementById('bible-version');
    if(versionSelector) {
        versionSelector.addEventListener('change', (event) => {
            const selectedVersion = event.target.value;
            console.log(`Bible version selected: ${selectedVersion}`);
            // This is where you would add logic to change the displayed text.
            // This likely involves fetching data from an API or a large
            // local data structure (impractical client-side for the whole Bible).
            alert(`Version "${selectedVersion}" selected.\n\n` +
                  `Note: Real-time content switching requires a backend or extensive data management.`);
             // Example: Simulate changing one quote (Requires mapping versions to text)
             // This is very basic and not scalable:
             /*
             if (selectedVersion === 'KJV') {
                 const greatCommission = document.querySelector('blockquote[data-reference="Matthew 28:19-20"] p');
                 if (greatCommission) {
                     greatCommission.innerText = "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:"; // KJV text
                 }
             } else if (selectedVersion === 'ESV') {
                 const greatCommission = document.querySelector('blockquote[data-reference="Matthew 28:19-20"] p');
                  if (greatCommission) {
                     greatCommission.innerText = "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age."; // ESV text
                 }
             }
             // ... repeat for all versions and all text elements ... => Impractical!
             */
        });
    }

     // --- Search Functionality Placeholder ---
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('site-search');

     if(searchButton && searchInput) {
         searchButton.addEventListener('click', () => {
             const searchTerm = searchInput.value.trim();
             if (searchTerm) {
                 alert(`Simulating search for "${searchTerm}"...\n\n` +
                       `Full site search requires content indexing and a backend system or dedicated search service.`);
                 console.log(`Search attempted for: "${searchTerm}"`);
                  // Real implementation would navigate to search results page
                  // or display results dynamically.
             } else {
                 alert("Please enter a search term.");
             }
         });

         // Allow pressing Enter in the search box to trigger search
         searchInput.addEventListener('keypress', (event) => {
             if (event.key === 'Enter') {
                 event.preventDefault(); // Prevent form submission if input is inside form
                 searchButton.click(); // Trigger the button click handler
             }
         });
     }

      // --- Comment Section Placeholder ---
      // The comment button is disabled by default in HTML.
      // Enabling it and handling comments requires a backend.
      console.log("Comment section requires backend implementation for full functionality.");

});
