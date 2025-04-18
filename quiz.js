document.addEventListener('DOMContentLoaded', () => {
    // --- Quiz Functionality ---
    const quizForm = document.getElementById('matthew-quiz-form');
    const quizResultsDiv = document.getElementById('quiz-results');

    if (quizForm && quizResultsDiv) {
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            let score = 0;
            const totalQuestions = quizForm.querySelectorAll('.quiz-question').length;
            const formData = new FormData(quizForm);
            const results = [];
            const correctAnswersList = document.createElement('ul'); // To list correct answers

            // Clear previous results and reset question styling
            quizResultsDiv.innerHTML = '';
            quizResultsDiv.className = 'quiz-results'; // Reset classes
            quizForm.querySelectorAll('.quiz-question').forEach(q => {
                q.classList.remove('correct', 'incorrect');
                 // Remove previous individual feedback if any
                 const feedback = q.querySelector('.feedback');
                 if(feedback) feedback.remove();
            });


            // Process each question
            quizForm.querySelectorAll('.quiz-question').forEach((questionElement, index) => {
                const questionName = `q${index + 1}`; // Assumes questions are named q1, q2, etc.
                const userAnswer = formData.get(questionName);
                const correctAnswer = questionElement.getAttribute('data-correct'); // Get correct answer from data attribute

                let isCorrect = false;
                if (userAnswer) { // Check if an answer was selected
                    if (userAnswer === correctAnswer) {
                        score++;
                        isCorrect = true;
                        questionElement.classList.add('correct');
                    } else {
                        questionElement.classList.add('incorrect');
                    }
                } else {
                    // Handle unanswered questions (optional - can count as incorrect)
                     questionElement.classList.add('incorrect'); // Mark unanswered as incorrect
                }

                // Store result for feedback
                results.push({
                    questionNumber: index + 1,
                    userAnswer: userAnswer,
                    correctAnswer: correctAnswer,
                    isCorrect: isCorrect,
                    questionText: questionElement.querySelector('p strong').innerText // Get the question text
                });

                 // Add correct answer to the list if incorrect or unanswered
                 if (!isCorrect) {
                     const correctChoiceText = questionElement.querySelector(`input[value="${correctAnswer}"]`)?.parentElement.innerText || `Answer: ${correctAnswer}`;
                     const listItem = document.createElement('li');
                     listItem.innerHTML = `<strong>Q${index + 1}:</strong> ${questionElement.querySelector('p strong').innerText} <br> Correct Answer: ${correctChoiceText}`;
                     correctAnswersList.appendChild(listItem);
                 }
            });

            // Display overall results
            const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
            let feedbackText = '';

            if (totalQuestions === 0) {
                feedbackText = 'No quiz questions found.';
                 quizResultsDiv.classList.add('incorrect');
            } else {
                if (percentage === 100) {
                    feedbackText = `Excellent! You got all ${totalQuestions} questions correct!`;
                    quizResultsDiv.classList.add('correct');
                } else if (percentage >= 70) {
                    feedbackText = `Great job! You got ${score} out of ${totalQuestions} correct.`;
                     quizResultsDiv.classList.add('correct');
                     quizResultsDiv.style.borderColor = '#fbc02d'; // Yellowish border for partial success
                } else {
                    feedbackText = `You got ${score} out of ${totalQuestions} correct. Review the summary and try again!`;
                    quizResultsDiv.classList.add('incorrect');
                }

                const scoreParagraph = document.createElement('p');
                scoreParagraph.innerHTML = `<strong>${feedbackText}</strong>`;
                quizResultsDiv.appendChild(scoreParagraph);

                // Display correct answers if not all were correct
                if (score < totalQuestions) {
                    const answersHeader = document.createElement('h3');
                    answersHeader.innerText = 'Correct Answers:';
                    quizResultsDiv.appendChild(answersHeader);
                    quizResultsDiv.appendChild(correctAnswersList);
                }
            }

             // Optional: Scroll to results
             quizResultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

        });
    } else {
        console.warn("Quiz form or results div not found on this page.");
    }

});
