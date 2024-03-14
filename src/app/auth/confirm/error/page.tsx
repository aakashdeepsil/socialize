export default function AuthConfirmationErrorPage() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div>
                <h1>Oops! Something went wrong while trying to confirm your email.</h1>
                <p>We apologize for the inconvenience. Please try again later.</p>
            </div>
        </div>
    );
}