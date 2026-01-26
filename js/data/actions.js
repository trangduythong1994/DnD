const data_actions = [
    {
        id: "action_common_attack"
        , category: "Hành Động"
        , type: "Cơ Bản"
        , name: "Tấn Công"
        , description: `<p>Tấn công bằng vũ khí hoặc Tay Không.</p>
        <p-1>● Bạn có thể thay đổi vũ khí 1 lần.</p-1>
        <p-1>● Bạn có thể di chuyển cả trước hoặc sau khi tấn công, hay giữa những lần tấn công nếu bạn được phép tấn công nhiều lần, miễn sao không vượt quá Tốc Độ.</p-1>
        <p><b>Tay Không</b> — Thay vì tấn công bằng vũ khí cận chiến, bạn có thể đấm, đá, cụng đầu... hay bất kỳ bộ phận nào trên cơ thể để gây sát thương<p-i>, bắt giữ hoặc xô (chọn 1) mục tiêu trong phạm vi 5 feet</p-i>.</p>
        <p-1>● Gây sát thương: Bạn tấn công mục tiêu với <c-2>Tung tấn công = 1d20 + STR-mod + TT</c-2>. Nếu đánh trúng, mục tiêu nhận <c-2>ST Đập = 1 + STR-mod</c-2>.</p-1>
        <p-i><p-1>● Bắt giữ: Mục tiêu phải chọn và thực hiện kháng cự bằng Strength hoặc Dexterity với <c-2>Độ khó = 8 + STR-mod + TT</c-2>. Nếu thất bại sẽ bị Tóm.</p-1>
        <p-1>● Xô: Mục tiêu phải chọn và thực hiện kháng cự bằng Strength hoặc Dexterity với <c-2>Độ khó = 8 + STR-mod + TT</c-2>. Nếu thất bại sẽ bị đẩy đi 5 feet hoặc bị Ngã.</p-1>
        <p-1>Bạn không thể Tóm hay Xô mục tiêu nếu họ to hơn bạn 2+ Kích Cỡ.</p-1></p-i>
        <p>Xem thêm: Di Chuyển</p>`
    }
    , {
        id: "action_common_dash"
        , category: "Hành Động"
        , type: "Cơ Bản"
        , name: "Lướt"
        , description: `<p>Cho đến hết lượt, bạn có thể di chuyển gấp đôi so với Tốc Độ.</p>
        <p-i><p>Nếu bạn có các loại di chuyển đặc biệt như bay hay bơi, bạn có thể sử dụng chúng bằng hành động này.</p></p-i>
        <p>Xem thêm: Di Chuyển</p>`
    }
    , {
        id: "action_common_disengage"
        , category: "Hành Động"
        , type: "Cơ Bản"
        , name: "Rút Lui"
        , description: `<p>Cho đến hết lượt, bạn có thể di chuyển mà không bị Phản Công.</p>`
    }
    , {
        id: "action_common_dodge"
        , name: "Né"
        , category: "Hành Động"
        , type: "Cơ Bản"
        , description: `<p>Cho đến lúc bắt đầu lượt tiếp theo của bạn, các tung tấn công vào bạn bị Bất Lợi, và bạn được Lợi Thế khi thực hiện kháng cự bằng Dexterity.</p>
        <p>Bạn mất hiệu ứng này nếu bạn bị Bất Lực hoặc Tốc Độ bằng 0.</p>`
    }
    , {
        id: "action_common_hide"
        , name: "Núp"
        , category: "Hành Động"
        , type: "Cơ Bản"
        , description: `<p>Bạn cố gắng che giấu sự hiện diện của bản thân bằng cách tiến hành kiểm tra kỹ năng Lén Lút với độ khó 15 khi đang ở trong Vùng Đặc Khuất hoặc đằng sau vật thể có độ Che Chắn 75% trở lên, và bạn phải khuất tầm nhìn của đối phương. Nếu thành công, bạn trở nên Tàng Hình.</p>
        <p>Sinh vật có thể tìm thấy bạn với hành động Tìm Hiểu bằng cách tiến hành kiểm tra kỹ năng Quan Sát, với độ khó là kết quả việc kiểm tra kỹ năng Lén Lút của bạn.</p>
        <p>Bạn bị lộ ngay sau khi: tạo ra tiếng ồn lớn hơn thì thầm, bị địch tìm thấy, tung tấn công hoặc thi triển phép thuật yêu cầu Niệm.</p>
        <p>Xem thêm: Tầm Nhìn & Ánh Sáng</p>`
    }
    , {
        id: "action_common_utilize"
        , name: "Tương tác"
        , category: "Hành Động"
        , type: "Cơ Bản"
        , description: `<p>Bạn luôn có thể tương tác với 1 vật thể trong khi thực hiện 1 Hành Động khác. Tuy nhiên, khi vật thể yêu cầu 1 Hành Động hoặc tương tác nhiều hơn 1 vật thể, bạn buộc dùng Hành Động Tương tác.</p>
        <p-2>○ Ví dụ 1: Uống bình thuốc là 1 Hành Động Tương Tác.</p-2>
        <p-2>○ Ví dụ 2: Đặt bẫy hay đóng mở cửa 2 cánh là 1 Hành Động Tương Tác.</p-2>
        <p-1>● Ngoại lệ, bạn có thể thay đổi vũ khí 1 lần khi thực hiện Hành Động Tấn Công. (dù là cất 1 vũ khí, và rút 1 vũ khí khác)</p-1>
        <p-1>● Đặc biệt: Mang vào hoặc cất Khiên đi tốn 1 Hành Động Tương Tác.</p-1>
        <p-i><p><b>Vũ Khí Ứng Biến</b> — Bạn có thể tấn công bằng các vật thể được xem là vũ khí tạm thời, như mảnh gương vỡ, cục đá hay cái chảo.</p>
        <p-1>● Không tính Điểm Thông Thạo.</p-1>
        <p-1>● Khi đánh trúng gây <c-2>ST = 1d4 + STR-mod</c-2> nếu cận chiến, hoặc <c-2>ST = 1d4 + DEX-mod</c-2> nếu bạn quăng nó (tầm bắn 20 ~ 60 feet), với loại sát thương mà DM nghĩ là hợp lý.</p-1>
        <p-1>● Nếu bạn sử dụng một vũ khí Đơn Giản hoặc Chuyên Dụng sai cách, nó trở thành Vũ Khí Ứng Biến.</p-1>
        <p-1>● Vũ Khí Ứng Biến có thể được sử dụng như 1 vũ khí Đơn Giản hoặc Chuyên Dụng nếu DM cảm thấy nó có cấu trúc tương đồng.</p-1></p-i>`
    }
    , {
        id: "action_common_magic"
        , name: "Ma Thuật"
        , category: "Hành Động"
        , type: "Cơ Bản"
        , description: `<p>Thi triển phép thuật, sử dụng vật phẩm ma thuật, hay triển khai tính năng yêu cầu 1 Hành Động Ma Thuật.</p>`
    }
    , {
        id: "action_common_help"
        , name: "Giúp Đỡ"
        , category: "Hành Động"
        , type: "Cơ Bản"
        , description: `<p>Chọn 1 để thực hiện:</p>
        <p-1>● Bạn hỗ trợ 1 sinh vật trong phạm vi 5 feet hoàn thành một nhiệm vụ. Trước khi lượt kế tiếp của bạn bắt đầu, nó có Lợi Thế khi thực hiện kiểm tra kỹ năng tiếp theo.</p-1>
        <p-1>● Bạn gây nhiễu 1 sinh vật trong phạm vi 5 feet. Trước khi lượt kế tiếp của bạn bắt đầu, tung tấn công tiếp theo lên nó nhận được Lợi Thế.</p-1>
        <p-1>● Bạn thực hiện sơ cứu một sinh vật trong phạm vi 5 feet đang Hấp Hối bằng cách tiến hành kiểm tra kỹ năng Y Thuật với độ khó 10. Nếu thành công, sinh vật đó sẽ được Ổn Định.</p-1>`
    }
    , {
        id: "action_common_influence"
        , name: "Thể Hiện"
        , category: "Hành Động"
        , type: "Cơ Bản"
        , description: `<p>Bạn cố gắng tương tác với các sinh vật để mong muốn chúng thay đổi ý định hay làm gì đó.</p>
        <p-1>● Nếu đó là điều mà sinh vật đó mong muốn, kỹ năng tự động thành công.</p-1>
        <p-1>● Nếu đó là điều mà sinh vật đó không mong muốn, kỹ năng tự động thất bại.</p-1>
        <p-1>● Nếu đó là điều mà sinh vật đó lưỡng lự, bạn phải thực hiện kiểm tra 1 kỹ năng bằng chỉ số Charisma với độ khó là chỉ số Intelligence của sinh vật đó, tối thiểu 15. Việc kiểm tra bị ảnh hưởng bởi thái độ của sinh đó là Trung Lập, Thân Thiện (được Lợi Thế) hay Thù Địch (bị Bất Lợi).</p-1>
        <p-2>○ <b>Đe Dọa</b> — Uy hiếp sinh vật khác bằng bạo lực, ánh nhìn dữ tợn hay lớn tiếng dọa nạt...</p-2>
        <p-2>○ <b>Lừa Dối</b> — Nói dối, giả vờ, hoặc giả lập hành vi...</p-2>
        <p-2>○ <b>Thuyết Phục</b> — Dùng lời nói chân thành, logic cùng với hành vi, biểu hiện thân thiện.</p-2>
        <p-2>○ <b>Trình Diễn</b> — Thể hiện kỹ năng nghệ thuật hoặc trình diễn nhằm gây ấn tượng.</p-2>
        <p-2>○ <b>Thuần Hóa</b> — Trấn an, huấn luyện hay ra lệnh cho động vật.</p-2>`
    }
    , {
        id: "action_common_ready"
        , name: "Chuẩn Bị"
        , category: "Hành Động"
        , type: "Cơ Bản"
        , description: `<p>Bạn dự đoán tình huống sắp diễn ra và đặt ra điều kiện để triển khai 1 Hành Động (bao gồm di chuyển). Khi điều kiện được đáp ứng trước khi lượt tiếp theo của bạn bắt đầu, bạn có thể sử dụng Phản Ứng để Hành Động đó được thực thi.</p>
        <p>Ví dụ: "Khi 1 Thây Ma di chuyển vào tầm tấn công của tôi, tôi sẽ bắn nó bằng Cung Dài rồi di chuyển xa nó nhất có thể."</p>`
    }
    , {
        id: "action_common_search"
        , name: "Tìm Hiểu"
        , category: "Hành Động"
        , type: "Cơ Bản"
        , description: `<p>Bạn thực hiện kiểm tra 1 kỹ năng bằng chỉ số Wisdom với mục đích phân biệt những thứ không rõ ràng. Độ khó phụ thuộc vào DM.</p>
        <p-2>○ <b>Nhìn Thấu</b> — Tâm trí của sinh vật.</p-2>
        <p-2>○ <b>Y Thuật</b> — Nguồn dịch bệnh hay nguyên nhân tử vong.</p-2>
        <p-2>○ <b>Quan Sát</b> — Sinh vật hay vật thể đang ẩn giấu.</p-2>
        <p-2>○ <b>Sinh Tồn</b> — Truy tìm dấu vết hoặc thực phẩm.</p-2>`
    }
    , {
        id: "action_common_study"
        , name: "Nghiên Cứu"
        , category: "Hành Động"
        , type: "Cơ Bản"
        , description: `<p>Bạn thực hiện kiểm tra 1 kỹ năng bằng chỉ số Intelligence để lục tìm trí nhớ về những kí ức, thông tin, kiến thức quan trọng. Độ khó phụ thuộc vào DM.</p>
        <p-2>○ <b>Huyền Bí</b> — Hiểu biết về phép thuật, vật phẩm ma pháp, biểu tượng kỳ quái, sự tồn tại của thế giới khác, hành tinh khác, và các loài Kỳ Quái, Vật Thể Sống, Nguyên Tố, Tiên, Biến Dị.</p-2>
        <p-2>○ <b>Lịch Sử</b> — Hiểu biết về các sự kiện lịch sử, các nền văn minh cổ đại của loài Khổng Lồ và loài Người.</p-2>
        <p-2>○ <b>Điều Tra</b> — Hiểu biết về các loại bẫy, mật mã, câu đố và các vật dụng.</p-2>
        <p-2>○ <b>Thiên Nhiên</b> — Hiểu biết về địa hình, thực vật, thời tiết và các loài Thú, Rồng, Quái Nhớt, Thực Vật.</p-2>
        <p-2>○ <b>Tôn Giáo</b> — Hiểu biết về các vị thần, hệ thống tôn giáo, nghi lễ, biểu tượng thánh, giáo phái và các loài Thượng Nhân, Quỷ và Xác Sống.</p-2>`
    }
    , {
        id: "reaction_common_opportunity_attack"
        , name: "Phản Công"
        , category: "Phản Ứng"
        , type: "Cơ Bản"
        , description: `<p>Ngay trước khi sinh vật tự rời khỏi tầm với của bạn, bạn có thể tung 1 đòn tấn công cận chiến lên nó.</p>`
    }
    , {
        id: "trait_class_cleric_spellcasting"
        , name: "Spellcasting"
        , category: "Trait"
        , type: "Class"
        // , category: "Hành Động"
        // , type: "Cơ Bản"
        , subtype: "cleric"
        , required_class_level: "1"
        , description: `
            <p>Bạn học được cách thi triển phép thuật thông qua cầu nguyện và thiền định.
            <p><b>Cantrips.</b> Bạn học được 3 cantrips. Mỗi khi nhân vật lên Level, bạn có thể thay đổi 1 cantrip. Khi đạt Cleric Level 4 và 10, bạn học thêm 1 cantrip.
            <p><b>Spell Slots.</b> Bạn hồi lại toàn bộ Spell Slots sau khi Nghỉ Dài.
            <p><b>Chuẩn Bị Spells.</b> Bạn phải chuẩn bị Spells có Level 1+ trước khi thi triển. Số lượng Spells chuẩn bị tối đa bằng với 4 cộng với Cleric Level. Bạn có thể chuẩn bị lại Spells sau khi Nghỉ Dài.
            <p><b>Tập Trung Thi Triển.</b> Bạn có thể dùng Holy Symbol để Tập Trung Thi Triển.`
        , VN_Name: "Phép Thuật"
        ,
    }
]; 