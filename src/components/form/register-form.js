{/* <form class="form">
    <h2>Reset Password</h2>
    <p>
    Please enter your email to receive a link to create a new password via email</p>
    <input placeholder="email" />
    <input type="submit" />
    </form> */}

export function createRegisterForm() {
const button=document.createElement("button");
button.innerText="Register";
button.className="btn btn-border";

function register(){
    alert("Registered");
}

button.addEventListener("click", register);

return button;
}