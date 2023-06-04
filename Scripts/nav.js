window.onload = () => {
  let button = '';
  let userId = sessionStorage.getItem('user_id');
  if (userId) {
    button = `<a href="./account.html?userId=${userId}" class="btn btn-outline-primary" type="button">Account</a>`;
  } else {
    button = `<a href="./login.html" class="btn btn-outline-success" type="button">Login</a>`;
  }
  document.write(`
<head>
 <!--Bootstrap-->
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  />
  <style>
    .navbar-custom{
      /* Can change to other color*/
      background-color:rgb(211, 211, 211);
    }
  </style>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Your Name Here (nav.js-17)</span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="./index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./contact.html">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./donate_form.html">Donate</a>
          </li>
        </ul>
        ${button}
      </div>
    </div>    
</nav>
<!--Bootstrap-->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
</body>

`);
};
