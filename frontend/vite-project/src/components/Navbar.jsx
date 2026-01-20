import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 sticky-top">


      <span className="navbar-brand fw-bold fs-5">
        IMS
      </span>

      {/* Right-side actions */}
      <div className="ms-auto d-flex align-items-center gap-3 text-light small">

        <span className="nav-item" role="button">Inventory</span>
        <span className="opacity-50">|</span>

        <span className="nav-item" role="button">Reports</span>
        <span className="opacity-50">|</span>

        <button className="btn btn-outline-light btn-sm px-3">
          Login
        </button>
      </div>

    </nav>
  );
}
