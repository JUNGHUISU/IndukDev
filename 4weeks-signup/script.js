// 중복 아이디 체크를 위한 예시 데이터 (실제 서버 대체)
const existingUsernames = ['user1', 'user2', 'testuser'];

let isUsernameAvailable = false; // 아이디 중복 여부를 저장하는 변수

// 중복 체크 버튼 클릭 시 아이디 중복 체크 함수 호출
document.getElementById('check-username-btn').addEventListener('click', function() {
    checkUsername();
});

// 아이디 중복 체크 함수
function checkUsername() {
    const username = document.getElementById('username').value;
    const message = document.getElementById('username-check-message');

    if (existingUsernames.includes(username)) {
        message.textContent = "아이디가 이미 존재합니다.";
        message.style.color = "red";
        isUsernameAvailable = false; // 중복된 아이디일 경우 false
    } else {
        message.textContent = "사용 가능한 아이디입니다.";
        message.style.color = "green";
        isUsernameAvailable = true; // 사용 가능한 아이디일 경우 true
    }
}

// 비밀번호 유효성 체크
document.getElementById('password').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('password-message');

    if (validatePassword(password)) {
        message.textContent = "사용 가능한 비밀번호입니다.";
        message.style.color = "green";
    } else {
        message.textContent = "비밀번호는 약하지만 계속 진행할 수 있습니다.";
        message.style.color = "orange"; // 약한 비밀번호에 대한 경고지만, 계속 진행 가능
    }
});

// 비밀번호 정상성 체크 
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}

// 비밀번호 확인 체크 및 폼 제출 시 동작
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    checkPasswordsMatch();
});

function checkPasswordsMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const formMessage = document.getElementById('form-message');

    // 아이디 중복 체크 및 비밀번호 일치 여부 확인
    if (!isUsernameAvailable) {
        formMessage.textContent = "아이디 중복 확인을 해주세요.";
        formMessage.style.color = "red";
        return;
    }

    if (password !== confirmPassword) {
        formMessage.textContent = "비밀번호가 일치하지 않습니다.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "회원가입이 완료되었습니다!";
        formMessage.style.color = "green";
    }
}
