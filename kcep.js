<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KCEP Educational Computer</title>
    <link rel="stylesheet" href="kcep.css">
    <style>
        /* Additional styling specific to the index.html */
        /* ... (your existing styles) ... */
    </style>
    <script>
         const projectTitle = "KCEP Educational Computer";
         let userManual = "KCEP_User_Guide.pdf";
    </script>  
</head>
<body>
    <header>
        <!-- Header and navigation (your existing code) -->
    </header>

    <main>
        <!-- About, Features, Get Started sections (your existing code) -->

        <!-- Registration Form -->
        <section id="register" class="section">
            <h2>Register</h2>
            <form id="registration-form">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br>

                <button type="submit">Register</button>
            </form>
        </section>

        <!-- Contact section (your existing code) -->
    </main>

    <!-- Footer (your existing code) -->

    <!-- Load external JavaScript file -->
    <script src="kcep.js"></script>
    
    <!-- Function to register a user -->
    <script>
        function registerUser(event) {
            // ... (your registerUser function code)
        }

        // Attach the registerUser function to the form's submit event
        const registrationForm = document.getElementById('registration-form');
        registrationForm.addEventListener('submit', registerUser);
    </script>
</body>
</html>
