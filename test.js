function clickButtonInShadowRoot(text = "Phantom") {
    function searchShadow(root) {
        let buttons = root.querySelectorAll("button");
        
        // Kiểm tra các button trong Shadow DOM
        for (let button of buttons) {
            if (button.textContent.includes(text)) {
                console.log("Đã tìm thấy và click:", button);
                button.click(); // Click vào nút
                return true; // Dừng lại ngay khi tìm thấy
            }
        }

        // Kiểm tra tiếp trong các shadowRoot lồng nhau
        for (let el of root.querySelectorAll("*")) {
            if (el.shadowRoot) {
                if (searchShadow(el.shadowRoot)) return true; // Nếu tìm thấy thì dừng lại
            }
        }

        return false;
    }

    // Tìm trong tất cả các phần tử có shadowRoot trong trang
    let shadowHosts = document.querySelectorAll("*");
    for (let host of shadowHosts) {
        if (host.shadowRoot) {
            if (searchShadow(host.shadowRoot)) return; // Nếu tìm thấy thì dừng lại ngay
        }
    }
    
    console.log("Không tìm thấy nút 'Phantom' trong Shadow DOM.");
}

// Chạy script để tự động tìm và click vào button trong Shadow DOM
clickButtonInShadowRoot();