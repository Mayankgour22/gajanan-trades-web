import "./page.css";

export default function CompanyProfile() {
  return (
    <div className="company-profile-wrapper">
      <section className="profile-header-section">
        <div className="container">
          <h1 className="section-title">Company Profile</h1>
        </div>
      </section>

      <section className="profile-content-section">
        <div className="container">
          <div className="profile-table-container glass-panel">
            <table className="profile-table">
              <tbody>
                <tr>
                  <th>Legal Name of Business</th>
                  <td><strong>MAHENDRA KUMAR DUBEY</strong></td>
                </tr>
                <tr>
                  <th>Trade Name</th>
                  <td>Gajanan Traders</td>
                </tr>
                <tr>
                  <th>Business Type</th>
                  <td>Proprietorship — Dealer, Supplier, and Service Provider</td>
                </tr>
                <tr>
                  <th>Location of the Company</th>
                  <td>Harda, Madhya Pradesh, India</td>
                </tr>
                <tr>
                  <th>Year of Establishment</th>
                  <td>2006</td>
                </tr>
                <tr>
                  <th>No. of Employees</th>
                  <td>10</td>
                </tr>
                <tr>
                  <th>GST No.</th>
                  <td>23AHLPD5451C1ZU</td>
                </tr>
                <tr>
                  <th>Annual Turnover</th>
                  <td>INR 5 Crore</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
