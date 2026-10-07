import { Link } from "react-router-dom"

export function NotFoundPage() {
  return (
    <div className="container">
      <h2>404 - Page Not Found</h2>
      <Link to="/main">Go to Main Page</Link>
    </div>
  );
}
