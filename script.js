document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });

    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }
});

(function() { emailjs.init("Otajak3CghIh0mM3m"); })();

let cart = [];
let total = 0;

function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

function addItem(name, price) {
  cart.push({ name, price });
  total += price;
  toggleButtons(name, true);
  updateCart();
}

function removeItem(index) {
  const name = cart[index].name;
  total -= cart[index].price;
  cart.splice(index, 1);
  toggleButtons(name, false);
  updateCart();
}

function removeItemByName(name) {
  const index = cart.findIndex(item => item.name === name);
  if (index !== -1) removeItem(index);
}

function toggleButtons(name, added) {
  const addBtn = document.getElementById(`add-${name}`);
  const removeBtn = document.getElementById(`remove-${name}`);
  if (added) {
    addBtn.style.display = "none";
    removeBtn.style.display = "inline-block";
  } else {
    addBtn.style.display = "inline-block";
    removeBtn.style.display = "none";
  }
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalAmount = document.getElementById("totalAmount");
  cartItems.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
  totalAmount.textContent = total;
}

function bookNow() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!fullName || !email || !phone || cart.length === 0) {
    alert("Please fill all fields and add items to cart.");
    return;
  }

  const orderDetails = cart.map(item => `${item.name} - ₹${item.price}`).join(", ");
  const params = { name: fullName, email, phone, order: orderDetails, total };

  emailjs.send("service_gmx6bps", "template_vonuz1t", params)
    .then(() => {
      alert("Booking confirmed! A confirmation email has been sent.");
      cart = [];
      total = 0;
      updateCart();
      document.getElementById("fullName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      ["Shirt Wash","Pant Wash","Dry Cleaning"].forEach(name => toggleButtons(name, false));
    }, error => {
      alert("Failed to send email: " + JSON.stringify(error));
    });
}
