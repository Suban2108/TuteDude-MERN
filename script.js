// Initialize EmailJS
(function() {
  emailjs.init("Otajak3CghIh0mM3m"); // Replace with your EmailJS user ID
})();

let cart = [];
let total = 0;

// Scroll to booking section
function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

// Add item to cart
function addItem(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

// Update cart display
function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalAmount = document.getElementById("totalAmount");
  
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => removeItem(index);
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });
  
  totalAmount.textContent = total;
}

// Remove item
function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

// Book Now (send email)
function bookNow() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!fullName || !email || !phone || cart.length === 0) {
    alert("Please fill in all fields and add items to cart.");
    return;
  }

  const orderDetails = cart.map(item => `${item.name} - ₹${item.price}`).join(", ");

  const params = {
    name: fullName,
    email: email,
    phone: phone,
    order: orderDetails,
    total: total
  };

  emailjs.send("service_gmx6bps", "template_vonuz1t", params)
    .then(() => {
      alert("Booking confirmed! A confirmation email has been sent.");
      cart = [];
      total = 0;
      updateCart();
      document.getElementById("fullName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
    }, (error) => {
      alert("Failed to send email: " + JSON.stringify(error));
    });
}
