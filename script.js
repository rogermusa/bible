document.addEventListener('DOMContentLoaded', () => {
    // --- Quiz Functionality ---
    const quizForm = document.getElementById('matthew-quiz-form');
    const quizResultsDiv = document.getElementById('quiz-results');

    // Define correct answers
    // NOTE: This is client-side and easily viewable. For security/robustness,
    // answers should ideally be checked on a backend server.
    const correctAnswers = {
        q1: 'c', // Matthew (Levi)
        q2: 'true', // True
        q3: 'd' // Promised Messiah and King
    };

    if (quizForm) {
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            let score = 0;
            let totalQuestions = 0;
            const formData = new FormData(quizForm);

            quizResultsDiv.innerHTML = ''; // Clear previous results
            quizResultsDiv.className = 'quiz-results'; // Reset classes

            // Loop through expected questions
            for (const questionName in correctAnswers) {
                totalQuestions++;
                const userAnswer = formData.get(questionName);
                const correctAnswer = correctAnswers[questionName];
                const questionElement = quizForm.querySelector(`.quiz-question input[name="${questionName}"]`)?.closest('.quiz-question'); // Find the question container

                 if (questionElement) {
                     questionElement.style.border = `1px solid #fbc02d`; // Reset border color
                 }


                if (userAnswer === correctAnswer) {
                    score++;
                     if (questionElement) {
                         questionElement.style.border = `1px solid #8bc34a`; // Green border for correct
                     }
                } else {
                     if (questionElement) {
                         questionElement.style.border = `1px solid #f44336`; // Red border for incorrect
                     }
                }
            }

            // Display results
            if (totalQuestions > 0) {
                const percentage = (score / totalQuestions) * 100;
                let feedback = '';

                if (percentage === 100) {
                    feedback = 'Excellent! You got all questions correct!';
                    quizResultsDiv.classList.add('correct');
                } else if (percentage >= 70) {
                    feedback = `Great job! You got ${score} out of ${totalQuestions} correct.`;
                     quizResultsDiv.classList.add('correct'); // Still positive, maybe yellow border?
                     quizResultsDiv.style.borderColor = '#fbc02d'; // Yellowish border
                } else {
                    feedback = `You got ${score} out of ${totalQuestions} correct. Keep studying!`;
                    quizResultsDiv.classList.add('incorrect');
                }

                quizResultsDiv.innerHTML = `<p>${feedback}</p>`;
            } else {
                 quizResultsDiv.innerHTML = `<p>No questions found or answered.</p>`;
                 quizResultsDiv.classList.add('incorrect');
            }
        });
    }

    // --- Clickable Quotes Functionality ---
    const bibleQuotes = document.querySelectorAll('.bible-quote');

    bibleQuotes.forEach(quote => {
        quote.addEventListener('click', () => {
            const reference = quote.getAttribute('data-reference');
            const quoteText = quote.querySelector('p').innerText;
            const citation = quote.querySelector('cite').innerText;

            // --- Placeholder for showing more context ---
            // In a real site, you would fetch related commentary,
            // the full chapter, or cross-references and display
            // them in a modal, sidebar, or new section.
            // For this example, we'll just use console.log and an alert.

            console.log(`Quote Clicked: ${reference}`);
            console.log(`Text: ${quoteText}`);
            console.log(`Source: ${citation}`);

            // Basic alert - replace with a proper UI element (modal, popup)
            alert(`You clicked on the quote from ${reference}.\n\n` +
                  `Text: "${quoteText}"\n\n` +
                  `Implement logic here to show full context, commentary, etc.`);

             // --- Example using a simple modal (concept) ---
             // You would need HTML for the modal and CSS to style/hide it.
             /*
             const modal = document.getElementById('context-modal'); // Need to create this modal in HTML
             const modalContent = document.getElementById('modal-content'); // Need content area in modal
             if (modal && modalContent) {
                 modalContent.innerHTML = `<h3>Context for ${reference}</h3><p>${quoteText}</p>... (Load more data here) ...`;
                 modal.style.display = 'block'; // Show the modal
                 // Add event listener to close modal
             }
             */
        });
    });

    // --- Bible Version Selector Placeholder ---
    // This selector needs complex JS or a backend to actually change content.
    // The JS below only logs the selection, it does NOT change the page text.
    const versionSelector = document.getElementById('bible-version');
    if(versionSelector) {
        versionSelector.addEventListener('change', (event) => {
            console.log(`Bible version selected: ${event.target.value}`);
            alert(`Version selected: ${event.target.value}\n\n` +
                  `Implementing real-time version switching requires loading all text data or using a Bible API, which is a complex feature.`);
            // Real implementation would fetch or show text for event.target.value
        });
    }

    // --- Search Functionality Placeholder ---
    // Full search requires indexing and backend or dedicated search service.
    const searchButton = document.querySelector('.search-container button');
     if(searchButton) {
         searchButton.addEventListener('click', () => {
             const searchTerm = document.getElementById('site-search').value;
             if (searchTerm) {
                 alert(`Searching for "${searchTerm}"...\n\n` +
                       `Full site search requires indexing content and potentially a backend system.`);
                 console.log(`Search attempted for: "${searchTerm}"`);
                  // Real implementation would trigger a search process
             }
         });
     }

      // --- Comment Section Placeholder ---
      // The comment button is disabled by default in HTML.
      // Enabling it and handling comments requires a backend.
      console.log("Comment section requires backend implementation.");

});
