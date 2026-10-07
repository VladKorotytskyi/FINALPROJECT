export function MainForm() {
    const today = new Date().toLocaleDateString("pl-PL")

    return (
        <div>
            <h2>MainForm</h2>
            <p>{today}</p>
        </div>
    );
}