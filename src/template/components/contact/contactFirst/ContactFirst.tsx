import React from "react";

function ContactFirst() {
  return (
    <section class="topbar plr-100 bg-black">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="topbar-left-area">
              <ul>
                <li>
                  <a href="mailto:support@medzo.com">
                    <i class="fas fa-envelope"></i> support@medzo.com
                  </a>
                </li>
                <li>
                  <a href="https://goo.gl/maps/T3S78DrzqMegjsLy6">
                    <i class="fas fa-map-marker-alt"></i> 2364 FL 34620, New
                    York, USA
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="topbar-right-area">
              <ul>
                <li>
                  <a href="profile-authentication.html">
                    <i class="fas fa-user"></i> Login
                  </a>
                </li>
                <li>
                  <div class="language-select option-select-area">
                    <i class="fas fa-globe"></i>
                    <select>
                      <option value="1">English</option>
                      <option value="2">العربيّة</option>
                      <option value="3">Dutch</option>
                      <option value="4">Thai</option>
                      <option value="5">简体中</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFirst;
