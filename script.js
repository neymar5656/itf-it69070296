// ข้อมูลเมนูอาหาร 5 รายการ (รูปจาก Unsplash)
const foods = [
  {
    name: "หมูกระทะ",
    description: "หมูกระทะเยียวยาทุกสิ่ง หมูย่างหอมๆ พร้อมน้ำจิ้มรสเด็ดจัดเต็มมื้อดึก",
    price: 499,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "ขาหมู",
    description: "ข้าวหน้าขาหมูสดๆ เนื้อหวาน ชิ้นหนาเต็มคำ",
    price: 250,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "BBQ",
    description: "หม่าล่ารสชาติเผ็ดชา ซุปเข้มข้นถึงเครื่อง",
    price: 350,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "โค้ก",
    description: "โค้กเย็นไม่หวาน เติมความสดชื่นพร้อมลุยงาน",
    price: 60,
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "มาม่า",
    description: "มาม่าต้มยำเส้นเด้งๆ รสจัดจ้านร้อนๆ หยอดไข่เพิ่มเต็มอิ่มยิ่งกว่าเดิม",
    price: 40,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
  },
];

const foodCard = document.getElementById("foodCard");
const foodImage = document.getElementById("foodImage");
const foodName = document.getElementById("foodName");
const foodDescription = document.getElementById("foodDescription");
const foodPrice = document.getElementById("foodPrice");
const priceBadge = document.getElementById("priceBadge");
const randomBtn = document.getElementById("randomBtn");

let currentIndex = -1;

function renderFood(food) {
  foodImage.src = food.image;
  foodImage.alt = "รูปภาพเมนู " + food.name;
  foodName.textContent = food.name;
  foodDescription.textContent = food.description;
  foodPrice.textContent = "ราคา " + food.price + " บาท";
  priceBadge.textContent = food.price + " ฿";
}

function randomFood() {
  if (foods.length < 2) {
    renderFood(foods[0]);
    return;
  }

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * foods.length);
  } while (newIndex === currentIndex);
  currentIndex = newIndex;

  randomBtn.disabled = true;
  foodCard.classList.remove("changing");
  void foodCard.offsetWidth; // รีเซ็ต animation
  foodCard.classList.add("changing");

  renderFood(foods[currentIndex]);

  setTimeout(function () {
    randomBtn.disabled = false;
  }, 350);
}

randomBtn.addEventListener("click", randomFood);

// แสดงเมนูแรกเมื่อเปิดหน้าเว็บ
renderFood(foods[0]);
currentIndex = 0;
