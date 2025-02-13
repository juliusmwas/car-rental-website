let menulist = document.getElementById("menulist");

// Ensure the menu resets properly when resizing the screen
function checkScreenSize() {
  if (window.innerWidth > 600) {
    // Larger screens: Make the menu always visible
    menulist.style.maxHeight = "none";
  } else {
    // Smaller screens: Ensure the menu is hidden by default
    menulist.style.maxHeight = "0px";
  }
}

// Add event listener to handle window resizing
window.addEventListener("resize", checkScreenSize);

// Initialize menu state based on current screen size
checkScreenSize();

// Toggle menu visibility for smaller screens
function toggleMenu() {
  if (menulist.style.maxHeight === "0px") {
    menulist.style.maxHeight = "300px";
  } else {
    menulist.style.maxHeight = "0px";
  }
}


document.getElementById("filter").addEventListener("change", function () {
  const filterValue = this.value;
  const cars = document.querySelectorAll(".car-card");

  cars.forEach((car) => {
    car.style.display =
      filterValue === "all" || car.dataset.type === filterValue ? "block" : "none";
  });
});

document.getElementById("sort").addEventListener("change", function () {
  const sortValue = this.value;
  const container = document.querySelector(".cars-container");
  const cars = Array.from(container.children);

  const sortedCars = cars.sort((a, b) => {
    const priceA = parseInt(a.dataset.price);
    const priceB = parseInt(b.dataset.price);

    if (sortValue === "price-low-high") return priceA - priceB;
    if (sortValue === "price-high-low") return priceB - priceA;
    if (sortValue === "availability")
      return a.dataset.availability.localeCompare(b.dataset.availability);
  });

  container.innerHTML = "";
  sortedCars.forEach((car) => container.appendChild(car));
});


// Show the form when the "Rent" button is clicked
const rentButtons = document.querySelectorAll(".rent-btn");
const bookingForm = document.getElementById("carBookingForm");

rentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    bookingForm.style.display = "block";
    window.scrollTo(0, bookingForm.offsetTop); // Scroll to form
  });
});

// Handle form submission
document.getElementById("carBookingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the page from refreshing

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const carModel = document.getElementById("carModel").value;
  const pickupLocation = document.getElementById("pickupLocation").value;
  const rentalStartDate = document.getElementById("rentalStartDate").value;
  const rentalEndDate = document.getElementById("rentalEndDate").value;
  const paymentMethod = document.getElementById("paymentMethod").value;
  const totalAmount = document.getElementById("totalAmount").value;
  const specialRequests = document.getElementById("specialRequests").value;

  // Display or send data (this could be replaced with an AJAX call to the backend)
  console.log(`
    Booking Details:
    - Full Name: ${fullName}
    - Email: ${email}
    - Phone: ${phone}
    - Car Model: ${carModel}
    - Pickup Location: ${pickupLocation}
    - Rental Start Date: ${rentalStartDate}
    - Rental End Date: ${rentalEndDate}
    - Payment Method: ${paymentMethod}
    - Total Amount: ${totalAmount}
    - Special Requests: ${specialRequests}
  `);

  alert("Booking Confirmed! We'll contact you shortly.");
  bookingForm.style.display = "none"; // Hide form after submission
});
// Open modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

// Close modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Handle login form submission
function handleLogin(event) {
  event.preventDefault();
  alert('Login successful!');
  closeModal('login-modal');
}

// Handle signup form submission
function handleSignup(event) {
  event.preventDefault();
  alert('Signup successful!');
  closeModal('signup-modal');
}