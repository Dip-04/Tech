import React from 'react';
import './Home.css';

function Pricing() {
  return (
    <>
    <div className="d-flex flex-column align-items-center p-3" style={{backgroundColor:'rgba(231, 232, 236, 1'}}>
      <div className="first-box d-flex flex-column align-items-center justify-content-center mb-4 mt-4 p-4" >
        <span className="text-center     fs-1">Comparison with Competitors'<br/> Features and Pricing</span>
        
      </div>
    </div>
    <div class="container mt-5 mb-5" style={{width:'1152px'}}>
   

    <div className="row justify-content-center">
  <div className="custom-heading">
    <h1 style={{ fontSize: '40px' }}>Feature Comparison</h1>
  </div>
  <div className="table-responsive">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col" style={{ backgroundColor: 'rgba(231, 232, 236, 1)' }}>Features</th>
          <th scope="col" style={{ backgroundColor: 'rgba(231, 232, 236, 1)' }}>Our Solution</th>
          <th scope="col" style={{ backgroundColor: 'rgba(231, 232, 236, 1)' }}>Competitor A</th>
          <th scope="col" style={{ backgroundColor: 'rgba(231, 232, 236, 1)' }}>Competitor B</th>
          <th scope="col" style={{ backgroundColor: 'rgba(231, 232, 236, 1)' }}>Competitor C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Efficient Resource Management</td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
        </tr>
        <tr>
          <td>Streamlined Team Collaboration</td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
        </tr>
        <tr>
          <td>Integrated Technology Solutions</td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
        </tr>
        <tr>
          <td>Cost-Effective Solutions</td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
        </tr>
        <tr>
          <td>Customizable Workflows</td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
        </tr>
        <tr>
          <td>Scalability</td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
        </tr>
        <tr>
          <td>User-Friendly Interface</td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
        </tr>
        <tr>
          <td>Customer Support</td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
          <td><i className="bi bi-check-lg"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

 

  <div class="row justify-content-center mt-5">
  <div className="custom-heading">
        <h1 style={{fontSize:'40px'}}>Pricing Comparison</h1>
      </div>
  <table class="table table-bordered" >
  <thead>
    <tr>
      <th scope="col" style={{backgroundColor:'rgba(231, 232, 236, 1)'}}>Package</th>
      <th scope="col" style={{backgroundColor:'rgba(231, 232, 236, 1)'}}>Our Solution</th>
      <th scope="col" style={{backgroundColor:'rgba(231, 232, 236, 1)'}}>Competitor A</th>
      <th scope="col" style={{backgroundColor:'rgba(231, 232, 236, 1)'}}>Competitor B</th>
      <th scope="col" style={{backgroundColor:'rgba(231, 232, 236, 1)'}}>Competitor C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Basic</td>
      <td>$X/month  </td>
      <td> $X/month</td>
      <td> $X/month</td>
      <td> $X/month</td>
    </tr>
    <tr>
      <td>Standard</td>
      <td>$X/month  </td>
      <td> $X/month</td>
      <td> $X/month</td>
      <td> $X/month</td>
    </tr>
    <tr>
      <td>Advanced</td>
      <td>  $X/month</td>
      <td>  $X/month</td>
      <td>  $X/month</td>
      <td>  $X/month</td>
    </tr>
    <tr>
      <td>Customized</td>
      <td>            <button type="submit" class="btn   text-light" style={{backgroundColor:'rgba(76, 175, 79, 1)',fontSize:'14px'}}>Contact for Pricing </button>
</td>
      <td>            <button type="submit" class="btn   text-light" style={{backgroundColor:'rgba(76, 175, 79, 1)',fontSize:'14px'}}>Contact for Pricing </button>
</td>
      <td>            <button type="submit" class="btn   text-light" style={{backgroundColor:'rgba(76, 175, 79, 1)',fontSize:'14px'}}>Contact for Pricing </button>
</td>
      <td>            <button type="submit" class="btn   text-light" style={{backgroundColor:'rgba(76, 175, 79, 1)',fontSize:'14px'}}>Contact for Pricing </button>
</td>
    </tr>
   
  </tbody>
</table>

  </div>  
 
  <div class="row justify-content-center mt-5">
        <h1 style={{fontSize:'24px'}}>Notes</h1>
      <ul>
        <li style={{fontSize:'14px'}}>Our solution offers comprehensive features tailored to the needs of both dream companies and smaller organizations.</li>
        <li style={{fontSize:'14px'}}>While Competitor A, B, and C offer similar features, our solution stands out with its user-friendly interface and dedicated customer support.</li>
        <li style={{fontSize:'14px'}}>Pricing may vary based on the specific needs and requirements of your organization. Contact us for customized pricing options.</li>
      </ul>
 

  </div>  
</div></>
  );
}

export default Pricing;
