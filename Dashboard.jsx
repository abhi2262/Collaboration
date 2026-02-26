// Dashboard.jsx

import React from 'react'
import Layout from '../Layout/Layout'

const Dashboard = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-sm-10 mx-auto mt-2">
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ravi</td>
                <td>9876543210</td>
              </tr>
              <tr>
                <td>2</td>
                <td>raj</td>
                <td>8765432345676</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard;