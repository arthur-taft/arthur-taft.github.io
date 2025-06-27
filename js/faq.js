// Interactively hiding/showing content code

document.addEventListener('DOMContentLoaded', function() {
    var questions = document.querySelectorAll('.accordion-question');

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            // Find the next sibling element which should be the answer
            var answer = this.nextElementSibling;

            if (answer && answer.classList.contains('accordion-answer')) {
                // Toggle the 'active' class on the answer to show/hide it
                answer.classList.toggle('active');

                // Optional: Toggle a class on the question itself if you want to style it differently when active
                this.classList.toggle('active-q');
            }
        });
    });
});