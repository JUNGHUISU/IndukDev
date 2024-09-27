// 요소들 가져오기
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// 새로운 할 일을 추가하는 함수
function addTodo() {
    const todoText = todoInput.value.trim();
    
    if (todoText === "") {
        alert("할 일을 입력하세요!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `${todoText} <button class="delete-btn">Delete</button>`;
    
    // 삭제 버튼 클릭 이벤트
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    todoList.appendChild(li);
    todoInput.value = "";
}

// 버튼 클릭 시 할 일 추가
addTodoBtn.addEventListener('click', addTodo);

// Enter 키로도 할 일 추가
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
