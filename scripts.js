document.addEventListener('DOMContentLoaded', function() {
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach((btn) => {
        btn.addEventListener('click', function() {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
        });
    });
});

<script>
        let currentQuestion = 0;
        let correctAnswerIndex = 0;
        let vocabulary = [
            { word: "Abject", definition: "Of the most contemptible kind", choices: ["Abject", "Pulchritude", "Ineffable", "Equivocate"] },
            { word: "Cacophony", definition: "Loud confusing disagreeable sounds", choices: ["Garrulous", "Cacophony", "Mellifluous", "Aplomb"] },
            // Add more vocabulary words here...
        ];

        function loadQuestion() {
            if (currentQuestion < vocabulary.length) {
                let question = vocabulary[currentQuestion];
                document.getElementById("definition").innerText = question.definition;

                correctAnswerIndex = Math.floor(Math.random() * 4); // Randomly assign correct answer position
                let j = 0;
                for (let i = 0; i < 4; i++) {
                    if (i === correctAnswerIndex) {
                        document.getElementById(`choice${i}`).innerText = question.word;
                    } else {
                        if (j === correctAnswerIndex) j++; // Skip the correct answer in the choices
                        document.getElementById(`choice${i}`).innerText = question.choices[j++];
                    }
                }
            } else {
                document.getElementById("definition").innerText = "Quiz finished!";
                document.querySelector(".choices").style.display = "none";
            }
        }

        function checkAnswer(choice) {
            if (choice === correctAnswerIndex) {
                document.getElementById("feedback").innerText = "Correct!";
            } else {
                document.getElementById("feedback").innerText = "Wrong. Try again!";
            }
            currentQuestion++;
            setTimeout(loadQuestion, 2000); // Load the next question after 2 seconds
        }

        loadQuestion(); // Load the first question
    </script>
