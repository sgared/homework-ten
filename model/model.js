var MODEL = (function(){
     
    var _homeContent=` <div class="home">
    <section class="hero">
      <div class="center-note">
        <div class="travel-fly">travel-fly</div>
        <div class="intro-paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          natus voluptate veniam repudiandae odit.
        </div>
        <div class="read-more">READ MORE</div>
      </div>
    </section>
    <div class="promo-holder">
      <section class="promo-trips">
        <div class="promos isreal">
          <div class="title">ISREAL</div>
          <div class="price">from $1000</div>
          <div class="learn-more">LEARN MORE</div>
        </div>

        <div class="promos usa">
          <div class="title">U.S.A</div>
          <div class="price">from $1500</div>
          <div class="learn-more">LEARN MORE</div>
        </div>
        <div class="promos austrailia">
          <div class="title">AUSTRAILIA</div>
          <div class="price">from $1800</div>
          <div class="learn-more">LEARN MORE</div>
        </div>
      </section>
    </div>
    <section class="booking">
      <div class="booking-wrapper">
        <h1>Booking Form</h1>
        <div class="first-two">
          <input type="text" placeholder="  name..." />

          <input type="text" placeholder="  email..." />
        </div>
        <div class="second-two">
          <input type="text" placeholder="  country..." />

          <input type="text" placeholder="  hotel..." />
        </div>
        <div class="check-in">
          <label for="check-in">check-in</label>
          <input type="date" />
        </div>
        <div class="check-out">
          <label for="check-out">check-out</label>
          <input type="date" />
        </div>
        <div class="people-amount">
          <label for="Adult">Adult</label>
          <input type="number" />
          <label for="Adult">Children</label>
          <input type="number" />
          <label for="Adult">Rooms</label>
          <input type="number" />
        </div>
        <textarea placeholder="message..."> </textarea>

        <input class="booking-submit" type="submit" value="Submit" />
      </div>
    </section>
  </div><footer>
  <div class="footer-logo"></div>
  <div class="copyright">
    &copy;Copyright 2019 travel-fly. All rights reserved
  </div>
  <div class="social-medias">
    <div class="facebook"></div>
    <div class="instagram"></div>
    <div class="twitter"></div>
  </div>
</footer>`;
    var _aboutContent=`<div class="about-wrapper"></div><div class="title_h1">ABOUT:</div>
    <hr class="underline-about" />
    <div class="intro_p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nemo,
      quidem labore, sit, reiciendis nostrum officia aperiam dolorem enim
      repudiandae facere quod. Deserunt aspernatur ab consequuntur cupiditate
      libero velit sed aperiam molestiae, tenetur deleniti suscipit explicabo
      ipsam, quae odit ex blanditiis id odio minus similique beatae.
    </div>

    <div class="title_h2">CLIENT QUOTES:</div>
    <hr class="underline-quotes" />
    <div class="about-person">
      <div class="person-picture one"></div>
      <div class="quote">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa
          maxime sint possimus voluptatibus explicabo voluptas, eveniet nobis
          minus, impedit, aperiam beatae.
        </p>
      </div>
      <div class="author">- Miranda Brown</div>
    </div>
    <div class="about-person">
      <div class="person-picture two"></div>
      <div class="quote">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa
          maxime sint possimus voluptatibus explicabo voluptas, eveniet nobis
          minus, impedit, aperiam beatae.
        </p>
      </div>
      <div class="author">- Miranda Brown</div>
    </div>
    </div><footer>
    <div class="footer-logo"></div>
    <div class="copyright">
      &copy;Copyright 2019 travel-fly. All rights reserved
    </div>
    <div class="social-medias">
      <div class="facebook"></div>
      <div class="instagram"></div>
      <div class="twitter"></div>
    </div>
  </footer>`;
    var _toursContent=`<h1>tours</h1><footer>
    <div class="footer-logo"></div>
    <div class="copyright">
      &copy;Copyright 2019 travel-fly. All rights reserved
    </div>
    <div class="social-medias">
      <div class="facebook"></div>
      <div class="instagram"></div>
      <div class="twitter"></div>
    </div>
  </footer>`;
    var _special_offersContent = `<div class="header"><h1>SPECIAL OFFER(S):</h1></div>
    <hr />
    <div class="special-offer">
      <div class="place-picture first"></div>
      <div class="quote">
        <h2>BARCELONA, SPAIN<span> (20% off!)</span></h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae vero
          nam, doloremque quas suscipit tempore animi sed!
        </p>
      </div>
      <div class="learn-more">LEARN MORE</div>
    </div>
    <div class="special-offer">
      <div class="place-picture second"></div>
      <div class="quote">
        <h2>BANGKOK, THAILAND <span> (10% off!)</span></h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae vero
          nam, doloremque quas suscipit tempore animi sed!
        </p>
      </div>
      <div class="learn-more">LEARN MORE</div>
    </div>
  </div><footer>
  <div class="footer-logo"></div>
  <div class="copyright">
    &copy;Copyright 2019 travel-fly. All rights reserved
  </div>
  <div class="social-medias">
    <div class="facebook"></div>
    <div class="instagram"></div>
    <div class="twitter"></div>
  </div>
</footer>`;
    var _blogContent = `<div class="header"><h1>BLOG:</h1></div> 
    <div class="wrapper"> 
     <div class="blog-holder">
      <div class="calendar">06 JUN</div>
      <div class="imageAndquote">
        <div class="blog-picture"></div>
        <div class="blog-quote">
          <h2>Sed et persipiatis unde</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil facilis laborum quod, iure saepe, autem consectetur earum vero dolor esse sed quia quasi atque.
          </p>
        </div>
        </div>
    </div>
    <div class="blog-holder">
        <div class="calendar">23 JUL</div>
        <div class="imageAndquote">
        <div class="blog-picture"></div>
        
        <div class="blog-quote">
          <h2>Sed et persipiatis unde</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil facilis laborum quod, iure saepe, autem consectetur earum vero dolor esse sed quia quasi atque.
          </p>
          </div>
         </div>
        </div>
    </div><footer>
    <div class="footer-logo"></div>
    <div class="copyright">
      &copy;Copyright 2019 travel-fly. All rights reserved
    </div>
    <div class="social-medias">
      <div class="facebook"></div>
      <div class="instagram"></div>
      <div class="twitter"></div>
    </div>
  </footer>`;
    var _contactContent = `<div class="wrapper">
    <div class="header"><h1>CONTACT US:</h1></div>
    <div class="contact-holder">
      <div class="contact-map"></div>
      <div class="form-input">
        <input type="text" placeholder="Your name..." />
        <input type="text" placeholder="Email Address..." />
        <input type="text" placeholder="Company..." />
        <textarea></textarea>
        <div class="submit-button">
          <input type="submit" value="SEND MESSAGE" />
        </div>
      </div>
      <div class="address">
        Travel-fly Inc.<br />
        8901 Marmors Road, <br />
        Glasgow, D04 89GR.<br />
        Freephone:+1 800 559 6580<br />

        telephone:+1 800 603 6035 <br />
        FAX: +1 800 889 9898<br />
        E-mail: mail@travelfly.org
      </div>
    </div>
  </div><footer>
  <div class="footer-logo"></div>
  <div class="copyright">
    &copy;Copyright 2019 travel-fly. All rights reserved
  </div>
  <div class="social-medias">
    <div class="facebook"></div>
    <div class="instagram"></div>
    <div class="twitter"></div>
  </div>
</footer>`;
      
    var _changePageContent = function(pageName){
        var pageContent ="_" + pageName;
           $("#app").html(eval(pageContent));
    }

    return {
        changePageContent:_changePageContent,
    };

})();