fetch('carholina_tasks.json')
    .then(response => response.json())
    .then(tasks => {
        const board = document.getElementById('task-board');
        tasks.forEach(task => {
            const card = document.createElement('div');
            card.className = 'task-card';
            card.innerHTML = `
                <strong>${task.title}</strong><br>
                <span>${task.description}</span><br>
                <b>Бюджет:</b> ${task.budget}₽
            `;
            board.appendChild(card);
        });
    });
