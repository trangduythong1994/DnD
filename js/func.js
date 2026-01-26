const $id = id => document.getElementById(id);

class c1Element extends HTMLElement {
  constructor() {
    super();
    this.style.color = "rgb(255 160 60)";
    this.style.cursor = "pointer";
  }
}

class c2Element extends HTMLElement {
  constructor() {
    super();
    this.style.color = "#ffffff";
    this.style.background = "#444444";
  }
}

class p1Element extends HTMLElement {
  constructor() {
    super();
  }
}

class p2Element extends HTMLElement {
  constructor() {
    super();
  }
}

class piElement extends HTMLElement {
  constructor() {
    super();
  }
}

function formatModifier(val) {
  if (parseInt(val) >= 0) return "+" + parseInt(val)
  else return parseInt(val);
}

function mod(val) {
  return Math.floor((val - 10) / 2);
}

function multiSort(arr, keys, customOrders = {}) {
  return arr.sort((a, b) => {
    for (const key of keys) {
      if (customOrders[key]) {
        const orderArr = customOrders[key];
        const diff = orderArr.indexOf(a[key]) - orderArr.indexOf(b[key]);
        if (diff !== 0) return diff;
      } else {
        if (typeof a[key] === 'string' && typeof b[key] === 'string') {
          const diff = a[key].localeCompare(b[key], 'vi', { sensitivity: 'base' });
          if (diff !== 0) return diff;
        } else {
          // So sánh số hoặc kiểu khác
          if (a[key] > b[key]) return 1;
          if (a[key] < b[key]) return -1;
        }
      }
    }
    return 0;
  });
}

function lengthSort(arr) {
    const collator = new Intl.Collator('vi', { sensitivity: 'base' }); 
    return arr.sort((a, b) => {
        if (a.key.length !== b.key.length) {
            return b.key.length - a.key.length;
        }
        return collator.compare(a, b);
    });
}

let toastTimeout;

function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');

    // Nếu toast đang hiện, ẩn ngay lập tức
    if (toast.style.display === 'block') {
        clearTimeout(toastTimeout);
        toast.style.display = 'none';
        toast.style.opacity = '0';
    }

    // Hiển thị toast mới
    toast.innerHTML = message;
    toast.style.display = 'block';
    toast.style.transform = 'translateX(-50%) translateY(-10px)';
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    let isHovering = false;

    // Hover để giữ lại
    toast.onmouseover = () => {
        isHovering = true;
        clearTimeout(toastTimeout);
    };

    // Rời chuột để tiếp tục đếm ngược
    toast.onmouseout = () => {
        isHovering = false;
        startHideTimer();
    };

    function startHideTimer() {
        toastTimeout = setTimeout(() => {
            if (!isHovering) {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(-50%) translateY(-10px)';
                setTimeout(() => {
                    toast.style.display = 'none';
                }, 400); // khớp với transition
            }
        }, duration);
    }

    startHideTimer();
}