document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordModalBtn = document.getElementById("forgot-password");
    const forgotPasswordModal = document.getElementById("forgot-password-modal");
    const signupModalBtn = document.getElementById("signup");
    const signupModal = document.getElementById("signup-modal");

    function openForgotPasswordModal() {
        forgotPasswordModal.style.display = "flex";
    }
    function openSignupModal() {
        signupModal.style.display = "flex";
    }

    function closeModal(modal) {
        modal.style.display = "none";
    }
  
    forgotPasswordModalBtn.addEventListener("click", openForgotPasswordModal);
    signupModalBtn.addEventListener("click", openSignupModal);

    forgotPasswordModal.querySelector(".close").addEventListener("click", () => {
        closeModal(forgotPasswordModal);
    });
    signupModal.querySelector(".close").addEventListener("click", () => {
        closeModal(signupModal);
    })

    window.addEventListener("click", function(event) {
        if (event.target === forgotPasswordModal) {
            closeModal(forgotPasswordModal);
        }
        if (event.target === signupModal) {
            closeModal(signupModal);
        }
    });
});

