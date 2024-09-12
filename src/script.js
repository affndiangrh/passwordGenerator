document.getElementById('save-checkbox').addEventListener('change', function() {
    const checkbox = document.getElementById('save-checkbox');
    const button = document.getElementById('generate');
    button.disabled = !checkbox.checked;
});

document.getElementById('generate').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value);
    const password = generatePassword(length);
    document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});

function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
