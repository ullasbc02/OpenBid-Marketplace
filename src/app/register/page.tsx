export default function RegisterPage() {
    return (
        <div>
            <main
                style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '4rem',
                }}
            >
            <h1>Register</h1>
            <form>
                <div>
                    <label htmlFor="username">Full Name:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Register</button>
            </form>
            </main>
        </div>
    );
}
