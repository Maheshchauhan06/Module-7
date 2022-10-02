import React from 'react'
import './Navbar.css'

const Navbar = ({count}) => {
  return (
    <>  <div className="navbar-container">
          <h3>AccioJob</h3>
          <div className="navbar-pages">
             <ul>Home</ul>
             <ul>Shop</ul>
             <ul>About</ul>
             <ul>Blog</ul>
             <ul>Contact</ul>
             <ul>Pages</ul>
          </div>
 
  { /*   left side icons */}

          <div className="navbar-rightside">
           <div className="login box">  <div className="personicon">
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.99969 6C6.79534 6 7.55841 5.68393 8.12102 5.12132C8.68362 4.55871 8.99969 3.79565 8.99969 3C8.99969 2.20435 8.68362 1.44129 8.12102 0.87868C7.55841 0.316071 6.79534 0 5.99969 0C5.20405 0 4.44098 0.316071 3.87837 0.87868C3.31577 1.44129 2.99969 2.20435 2.99969 3C2.99969 3.79565 3.31577 4.55871 3.87837 5.12132C4.44098 5.68393 5.20405 6 5.99969 6ZM7.99969 3C7.99969 3.53043 7.78898 4.03914 7.41391 4.41421C7.03884 4.78929 6.53013 5 5.99969 5C5.46926 5 4.96055 4.78929 4.58548 4.41421C4.21041 4.03914 3.99969 3.53043 3.99969 3C3.99969 2.46957 4.21041 1.96086 4.58548 1.58579C4.96055 1.21071 5.46926 1 5.99969 1C6.53013 1 7.03884 1.21071 7.41391 1.58579C7.78898 1.96086 7.99969 2.46957 7.99969 3ZM11.9997 11C11.9997 12 10.9997 12 10.9997 12H0.999695C0.999695 12 -0.000305176 12 -0.000305176 11C-0.000305176 10 0.999695 7 5.99969 7C10.9997 7 11.9997 10 11.9997 11ZM10.9997 10.996C10.9987 10.75 10.8457 10.01 10.1677 9.332C9.51569 8.68 8.28869 8 5.99969 8C3.70969 8 2.48369 8.68 1.83169 9.332C1.15369 10.01 1.00169 10.75 0.999695 10.996H10.9997Z" fill="#23A6F0"/>
</svg> </div>    <h3>Login / Register</h3>
           </div>
            
           <div className="search box">
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7426 10.3439C12.7109 9.02264 13.1446 7.38444 12.9569 5.7571C12.7692 4.12976 11.974 2.63329 10.7304 1.56708C9.48671 0.500869 7.88634 -0.0564485 6.24943 0.00662462C4.61252 0.0696978 3.05978 0.74851 1.90186 1.90726C0.743944 3.066 0.0662432 4.61922 0.00434136 6.25618C-0.0575605 7.89314 0.500902 9.49311 1.568 10.736C2.6351 11.9789 4.13214 12.773 5.75961 12.9595C7.38709 13.1461 9.02497 12.7112 10.3456 11.7419H10.3446C10.3746 11.7819 10.4066 11.8199 10.4426 11.8569L14.2926 15.7069C14.4801 15.8946 14.7345 16.0001 14.9997 16.0001C15.265 16.0002 15.5195 15.895 15.7071 15.7074C15.8947 15.5199 16.0002 15.2656 16.0003 15.0003C16.0004 14.735 15.8951 14.4806 15.7076 14.2929L11.8576 10.4429C11.8218 10.4068 11.7834 10.3733 11.7426 10.3429V10.3439ZM12.0006 6.49995C12.0006 7.22222 11.8583 7.93742 11.5819 8.60471C11.3055 9.272 10.9004 9.87831 10.3897 10.389C9.87896 10.8998 9.27264 11.3049 8.60535 11.5813C7.93806 11.8577 7.22286 11.9999 6.50059 11.9999C5.77832 11.9999 5.06312 11.8577 4.39583 11.5813C3.72854 11.3049 3.12223 10.8998 2.61151 10.389C2.10078 9.87831 1.69566 9.272 1.41926 8.60471C1.14285 7.93742 1.00059 7.22222 1.00059 6.49995C1.00059 5.04126 1.58006 3.64231 2.61151 2.61086C3.64296 1.57941 5.0419 0.999948 6.50059 0.999948C7.95928 0.999948 9.35823 1.57941 10.3897 2.61086C11.4211 3.64231 12.0006 5.04126 12.0006 6.49995Z" fill="#23A6F0"/>
</svg>
           </div>
           <div className="cart box">
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.000305176 0.5C0.000305176 0.367392 0.0529836 0.240215 0.146752 0.146447C0.24052 0.0526784 0.367697 0 0.500305 0H2.00031C2.11184 3.08115e-05 2.22016 0.0373507 2.30804 0.106025C2.39592 0.174699 2.45831 0.270784 2.48531 0.379L2.89031 2H14.5003C14.5737 2.00007 14.6462 2.0163 14.7127 2.04755C14.7791 2.0788 14.8378 2.12429 14.8847 2.1808C14.9316 2.23731 14.9654 2.30345 14.9838 2.37452C15.0023 2.44558 15.0048 2.51984 14.9913 2.592L13.4913 10.592C13.4699 10.7066 13.409 10.8101 13.3194 10.8846C13.2297 10.9591 13.1169 10.9999 13.0003 11H4.00031C3.88374 10.9999 3.77087 10.9591 3.68122 10.8846C3.59156 10.8101 3.53075 10.7066 3.50931 10.592L2.01031 2.607L1.61031 1H0.500305C0.367697 1 0.24052 0.947322 0.146752 0.853553C0.0529836 0.759785 0.000305176 0.632608 0.000305176 0.5ZM3.10231 3L4.41531 10H12.5853L13.8983 3H3.10231ZM5.00031 11C4.46987 11 3.96116 11.2107 3.58609 11.5858C3.21102 11.9609 3.00031 12.4696 3.00031 13C3.00031 13.5304 3.21102 14.0391 3.58609 14.4142C3.96116 14.7893 4.46987 15 5.00031 15C5.53074 15 6.03945 14.7893 6.41452 14.4142C6.78959 14.0391 7.00031 13.5304 7.00031 13C7.00031 12.4696 6.78959 11.9609 6.41452 11.5858C6.03945 11.2107 5.53074 11 5.00031 11ZM12.0003 11C11.4699 11 10.9612 11.2107 10.5861 11.5858C10.211 11.9609 10.0003 12.4696 10.0003 13C10.0003 13.5304 10.211 14.0391 10.5861 14.4142C10.9612 14.7893 11.4699 15 12.0003 15C12.5307 15 13.0394 14.7893 13.4145 14.4142C13.7896 14.0391 14.0003 13.5304 14.0003 13C14.0003 12.4696 13.7896 11.9609 13.4145 11.5858C13.0394 11.2107 12.5307 11 12.0003 11ZM5.00031 12C5.26552 12 5.51988 12.1054 5.70741 12.2929C5.89495 12.4804 6.00031 12.7348 6.00031 13C6.00031 13.2652 5.89495 13.5196 5.70741 13.7071C5.51988 13.8946 5.26552 14 5.00031 14C4.73509 14 4.48073 13.8946 4.2932 13.7071C4.10566 13.5196 4.00031 13.2652 4.00031 13C4.00031 12.7348 4.10566 12.4804 4.2932 12.2929C4.48073 12.1054 4.73509 12 5.00031 12ZM12.0003 12C12.2655 12 12.5199 12.1054 12.7074 12.2929C12.8949 12.4804 13.0003 12.7348 13.0003 13C13.0003 13.2652 12.8949 13.5196 12.7074 13.7071C12.5199 13.8946 12.2655 14 12.0003 14C11.7351 14 11.4807 13.8946 11.2932 13.7071C11.1057 13.5196 11.0003 13.2652 11.0003 13C11.0003 12.7348 11.1057 12.4804 11.2932 12.2929C11.4807 12.1054 11.7351 12 12.0003 12Z" fill="#23A6F0"/>
</svg> <p className='counter'>{count}</p>
           </div>
           <div className="like box">
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.0002 2.74805L7.2832 2.01105C5.6002 0.281049 2.5142 0.878049 1.4002 3.05305C0.8772 4.07605 0.7592 5.55305 1.7142 7.43805C2.6342 9.25305 4.5482 11.427 8.0002 13.795C11.4522 11.427 13.3652 9.25305 14.2862 7.43805C15.2412 5.55205 15.1242 4.07605 14.6002 3.05305C13.4862 0.878049 10.4002 0.280049 8.7172 2.01005L8.0002 2.74805ZM8.0002 15C-7.3328 4.86805 3.2792 -3.03995 7.8242 1.14305C7.8842 1.19805 7.9432 1.25505 8.0002 1.31405C8.05662 1.2551 8.11533 1.19839 8.1762 1.14405C12.7202 -3.04195 23.3332 4.86705 8.0002 15Z" fill="#23A6F0"/>
</svg>  <p className='counter'>1</p>
           </div>

          </div>
    </div>
    </>
  )
}

export default Navbar