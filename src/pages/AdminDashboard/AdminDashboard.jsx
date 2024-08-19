// import React from 'react'
import NavbarAdmin from "../../components/Navbar2/NavbarAdmin";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <main className="admin_main">
      <NavbarAdmin />
      <section className="admin_section_1">
        <article>
          <div className="admin_top">
            <div>
              <p>Total number of courses</p>
              <h3>54</h3>
            </div>
            <div>
              <p>Number of tutors</p>
              <h3>2</h3>
            </div>
            <div>
              <p>Number of students enrolled</p>
              <h3>10</h3>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default AdminDashboard;
