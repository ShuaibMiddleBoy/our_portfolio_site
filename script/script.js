        // Function for progress bars (Resume page)
        function updateProgressBars() {
            const skillContainers = document.querySelectorAll('.skill-container');

            skillContainers.forEach((container) => {
                const skillValue = container.getAttribute('data-value');
                const progressBar = container.querySelector('.skill-percentage');
                progressBar.style.width = skillValue + '%';
            });
        }

        updateProgressBars();
        
