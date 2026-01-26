const data_description = [
    {
        key: "Bất Lợi"
        , category: ""
        , value: `<p>Tung 2d20, lấy kết quả thấp hơn.</p>`
    }
    , {
        key: "Lợi Thế"
        , category: ""
        , value: `<p>Tung 2d20, lấy kết quả cao hơn.</p>`
    }
    , {
        key: "Bất Lực"
        , category: "Trạng Thái"
        , value: `<p>Bạn nhận các hiệu ứng sau:</p>
        <p-1>● Bạn không thể thực hiện Hành Động, Hành Động Phụ hay Phản Ứng.</p-1>
        <p-1>● Bạn không thể Tập Trung phép thuật.</p-1>
        <p-1>● Bạn không thể nói.</p-1>
        <p-1>● Bạn bị Bất Lợi khi tung Khởi Tranh.</p-1>`
    }
    , {
        key: "Tập Trung"
        , category: ""
        , value: `<p>Một số phép thuật hay hiệu ứng yêu cầu bạn phải Tập Trung để duy trì hiệu úng. Những yếu tố sau sẽ làm hiệu ứng kết thúc:</p>
        <p-1>● Chủ động dừng hiệu ứng, hoặc hiệu ứng hết thời gian.</p-1>
        <p-1>● Thi triển phép thuật hoặc hiệu ứng khác yêu cầu Tập Trung.</p-1>
        <p-1>● Nếu nhận sát thương, bạn phải thành công trong việc kháng cự bằng Constitution để giữ Tập Trung. Độ khó bằng một nửa lượng sát thương (làm tròn xuống), tối thiểu 10.</p-1>
        <p-1>● Nếu bạn bị Bất Lực hoặc chết.</p-1>`
    }
    , {
        key: "Bất Tỉnh"
        , category: "Trạng Thái"
        , value: `<p>Bạn nhận các hiệu ứng sau:</p>
        <p-1>● Bạn bị Bất Lực và bị Ngã.</p-1>
        <p-1>● Tốc Độ bằng 0 và không thể tăng.</p-1>
        <p-1>● Tấn công lên bạn có Lợi Thế. Nếu sinh vật tấn công ở trong phạm vi 5 feet, đòn tấn công trở thành Bạo Kích.</p-1>
        <p-1>● Bạn tự động thất bại kháng cự bằng Strength và Dexterity.</p-1>
        <p-1>● Bạn mất nhận thức.</p-1>`
    }
    , {
        key: "Ngã"
        , category: "Trạng Thái"
        , value: `<p>Bạn chỉ có thể di chuyển bằng cách bò. Bạn có thể tiêu thụ một nửa Tốc Độ (làm tròn xuống) để đứng dậy. Nếu Tốc Độ bằng 0, bạn không thể đứng dậy.</p>
        <p>Bạn bị Bất Lợi khi tấn công. Sinh vật ở trong phạm vi 5 feet có Lợi Thế khi tấn công bạn. Sinh vật ở ngoài phạm vi 5 feet bị Bất Lợi khi tấn công bạn.</p>
        <p>Xem thêm: Di Chuyển</p>`
    }
    , {
        key: "Bạo Kích"
        , category: ""
        , value: `<p>Nếu kết quả là 20 khi bạn tung tấn công, nó gọi là Bạo Kích. Đòn Bạo Kích bỏ qua Phòng Thủ của mục tiêu. Sát Thương Bạo Kích được tính bằng cách tung gấp đôi lượng xúc xắc, rồi sau đó mới cộng thêm chỉ số thuộc tính tấn công.</p>`
    }
    , {
        key: "Hấp Hối"
        , category: "Trạng Thái"
        , value: `<p>Khi sinh vật còn 0 Máu, nó sẽ chết ngay lập tức nếu:</p>
        <p-1>● Nó là Quái Vật (Dungeon Master có thể bỏ qua luật này).</p-1>
        <p-1>● Máu Tối Đa bằng 0.</p-1>
        <p-1>● Sát thương còn lại lớn hơn hoặc bằng Máu Tối Đa.</p-1>
        <p>Ngoài ra, sinh vật sẽ rơi vào trạng thái Bất Tỉnh cho đến khi được hồi Máu. Sinh vật đó cũng phải tiến hành Từ Chối Tử Thần lúc bắt đầu lượt của mình.</p>
        <p-1>● Tung 1d20 và kết quả không bị ảnh hưởng bởi điểm thuộc tính. Kết quả 10+ là thành công. Còn lại là thất bại. Với 3 lần thành công, sinh vật trở nên Ổn Định. Với 3 lần thất bại, sinh vật chết.</p-1>
        <p-1>● Kết quả là 1 được tính là 2 thất bại. Kết quả là 20, sinh vật hồi 1 Máu.</p-1>
        <p-1>● Mỗi lần nhận sát thương sẽ tính là 1 thất bại. Sát thương Bạo Kích được tính là 2 thất bại. Nếu lượng sát thương lớn hơn hoặc bằng Máu Tối Đa, sinh vật chết.</p-1>`
    }
    , {
        key: "Ổn Định"
        , category: "Trạng Thái"
        , value: `<p>Sinh vật đang Hấp Hối không cần phải tiến hành Từ Chối Tử Thần nhưng vẫn còn Bất Tỉnh. Nếu nó nhận sát thương, nó mất Ổn Định và tiến hành lại Từ Chối Tử Thần.</p>
        <p>Sinh vật cũng sẽ tự hồi lại 1 Máu sau 1d4 giờ.</p>`
    }
    , {
        key: "Tóm"
        , category: "Trạng Thái"
        , value: `<p>Bạn nhận các hiệu ứng sau:</p>
        <p-1>● Tốc Độ bằng 0 và không thể tăng.</p-1>
        <p-1>● Bạn gặp Bất Lợi khi tấn công những mục tiêu khác với sinh vật đang tóm bạn.</p-1>
        <p>Sinh vật đang tóm bạn có thể mang bạn theo khi nó di chuyển nhưng tốn thêm 1 foot cho mỗi foot dùng để di chuyển nếu bạn không phải là cỡ Tí Hon và bạn không nhỏ hơn chúng 2+ Kích Cỡ.</p>
        <p>Sinh vật phải có tay tự do để tóm sinh vật khác. Một số sinh vật có thể dùng những bộ phận khác như xúc tu thay thế cho tay. Mỗi tay chỉ có thể tóm 1 sinh vật, và không thể được dùng để làm gì khác cho đến khi trạng thái kết thúc.</p>
        <p>Nếu sinh vật đang tóm bạn bị Bất Lực, hoặc muốn thả bạn ra thì trạng thái kết thúc. Bạn cũng có thể dùng Hành Động để thực hiện kháng cự bằng Strength hoặc Dexterity với <c-2>Độ khó = 8 + STR-mod + TT</c-2>, nếu thành công sẽ tự giải thoát.</p>`
    }
    , {
        key: "Kích Cỡ"
        , category: ""
        , value: `<p>Dưới đây là bảng Kích Cỡ.</p>
        <table>
        <thead>
            <tr>
                <th>Kích Cỡ</th>
                <th>Không Gian (Feet)</th>
                <th>Không Gian (Ô)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tí Hon</td>
                <td>2.5x2.5</td>
                <td>1/4</td>
            </tr>
            <tr>
                <td>Nhỏ</td>
                <td>5x5</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Vừa</td>
                <td>5x5</td>
                <td>1</td>
            </tr>
            <tr>
                <td>To</td>
                <td>10x10</td>
                <td>2x2</td>
            </tr>
            <tr>
                <td>Khủng</td>
                <td>15x15</td>
                <td>3x3</td>
            </tr>
            <tr>
                <td>Khổng Lồ</td>
                <td>20x20</td>
                <td>4x4</td>
            </tr>
        </tbody>
        </table>
        <p>Trong khi di chuyển, bạn có thể di chuyển một cách bình thường xuyên qua đồng minh, sinh vật bị Bất Lực, sinh vật cỡ Tí Hon, hoặc sinh vật lớn hơn hoặc nhỏ hơn bạn 2+ Kích Cỡ. Những trường hợp còn lại sẽ được xem như Địa Hình Trắc Trở.</p>
        <p>Bạn không thể tự ý kết thúc di chuyển của mình tại 1 ô tồn tại sinh vật khác. Bằng cách nào đó mà buộc bạn phải kết thúc lượt ở ô tồn tại sinh vật khác, bạn bị Ngã nếu bạn không phải cỡ Tí Hon và không có Kích Cỡ lớn hơn sinh vật đó.</p>
        <p>Xem thêm: Di Chuyển</p>`
    }
    , {
        key: "Di Chuyển"
        , category: ""
        , value: `<p>Bạn có thể di chuyển bằng hoặc nhỏ hơn với Tốc Độ của bạn. Bạn có thể không di chuyển.</p>
        <p>Bạn tốn thêm 1 foot cho mỗi foot dùng để di chuyển trên những không gian được cho là Địa Hình Trắc Trở.</p>
        <p>Bạn không thể tự ý kết thúc di chuyển của mình tại 1 ô tồn tại sinh vật khác. Bằng cách nào đó mà buộc bạn phải kết thúc lượt ở ô tồn tại sinh vật khác, bạn bị Ngã<p-i> nếu bạn không phải cỡ Tí Hon và không có Kích Cỡ lớn hơn sinh vật đó</p-i>.</p>
        <p>Bạn có thể di chuyển bẳng cách Bò<p-i>, Trèo, Nhảy, Bơi</p-i>. Bạn có thể kết hợp chúng trong quá trình di chuyển.</p>
        <p-1>● <b>Bò</b> — Trong khi đang bò, trườn, lê lếch, ... bạn tốn thêm 1 foot cho mỗi foot dùng để di chuyển.</p-1>
        <p-i><p-1>● <b>Trèo</b> — Trong khi đang leo, trèo, ... bạn tốn thêm 1 foot cho mỗi foot dùng để di chuyển.</p-1>
        <p-1>● <b>Nhảy</b> — Bạn có thể nhảy xa, hoặc nhảy cao. Bạn phải di chuyển ít nhất 10 feet ngay trước khi nhảy, nếu không, bạn chỉ nhảy được nửa khoảng cách.</p-1>
        <p-2>○ <b>Nhảy Xa</b> — Bạn nhảy theo chiều ngang với khoảng cách tối đa bằng Tốc Độ còn lại. Nếu bạn đáp xuống Địa Hình Trắc Trở, bạn phải thành công kiểm tra kỹ năng Nhào Lộn với độ khó 10 hoặc bị Ngã. Đối với nhảy xa thì độ cao không phải vấn đề, nhưng nếu có chướng ngại vật thấp (không cao hơn 1/4 khoảng cách nhảy), bạn phải thành công kiểm tra kỹ năng Thể Lực với độ khó 10 hoặc bị dừng lại bởi chúng.</p-2>
        <p-2>○ <b>Nhảy Cao</b> — Bạn nhảy theo chiều dọc với tối đa <c-2>Khoảng cách = 3 + STR-mod</c-2> hoặc Tốc Độ còn lại. Bạn có thể vươn tay ra để với trong quá trình nhảy cao, cho rằng tầm với bằng với một nửa chiều cao của bạn.</p-2>
        <p-1>● <b>Bơi</b> — Trong khi đang bơi, lặn, ... bạn tốn thêm 1 foot cho mỗi foot dùng để di chuyển.</p-1>
        <p>Một số sinh vật có Tốc Độ đặc biệt. Bạn có thể dùng chúng thay thế cho Tốc Độ với di chuyển tương ứng.</p>
        <p-1>● <b>Tốc Độ Trèo</b> — Có thể thay thế cho Tốc Độ khi đang trèo, không tốn thêm foot.</p-1>
        <p-1>● <b>Tốc Độ Bơi</b> — Có thể thay thế cho Tốc Độ khi đang bơi, không tốn thêm foot.</p-1>
        <p-1>● <b>Tốc Độ Đào</b> — Có thể thay thế cho Tốc Độ khi đang đào xuyên qua đất, cát, bùn, băng...</p-1>
        <p-1>● <b>Tốc Độ Bay</b> — Có thể thay thế cho Tốc Độ khi đang bay. Trong khi đang bay, bạn Rơi nếu bạn bị Bất Lực hoặc Ngã hoặc Tốc Độ Bay bằng 0.</p-1></p-i>`
    }
    , {
        key: "Địa Hình Trắc Trở"
        , category: ""
        , value: `<p>Bạn tốn thêm 1 foot cho mỗi foot dùng để di chuyển trên những không gian (5x5 feet hoặc 1 ô) được cho là Địa Hình Trắc Trở.</p>`
    }
    , {
        key: "Tầm Nhìn & Ánh Sáng"
        , category: ""
        , value: `<p><b>Hạn Chế Tầm Nhìn</b></p>
        <p-1>● <b>Vùng Khuất</b> — như Ánh Sáng Mờ, sương mù, tán lá... được xem là Vùng Khuất. Bạn bị Bất Lợi khi kiểm tra kĩ năng Quan Sát lên vùng này.</p-1>
        <p-1>● <b>Vùng Đặc Khuất</b> — như Bóng Tối, sương dày, bụi rậm... được xem là Vùng Đặc Khuất. Bạn bị Mù khi đang cố gắng nhìn vào vùng này.</p-1>
        <p><b>Ánh Sáng</b></p>
        <p-1>● <b>Ánh Sáng Đẩy Đủ</b> — Hẩu hết sinh vật đều có thể nhìn thấy bình thường.</p-1>
        <p-1>● <b>Ánh Sáng Mờ</b> — Được xem là Vùng Khuất. Vùng giao thoa giữa Ánh Sáng Đầy Đủ và Bóng Tối được xem là Ánh Sáng Mờ. Ánh sáng nhẹ lúc trước bình minh hay sau hoàng hôn cũng được xem là Ánh Sáng Mờ.</p-1>
        <p-1>● <b>Bóng Tối</b> — Được xem là Vùng Đặc Khuất. Vùng không có ánh sáng như đêm tối không trăng, trong hầm ngục không thắp sáng, hoặc Bóng Tối được tạo ra bởi ma thuật.</p-1>
        <p><b>Che Chắn</b> — Tường, cây cối, sinh vật và các chướng ngại vật khác có thể tạo ra chỗ ẩn nấp, khiến mục tiêu khó bị tấn công hơn. Nếu có nhiều lớp Che Chắn, chúng không cộng dồn mà áp dụng Che Chắn có độ bảo vệ cao nhất.</p>
        <table>
            <thead>
                <tr>
                    <th>Độ Che Chắn</th>
                    <th>Lợi Ích</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>50%</td>
                    <td>+2 vào AC và thực hiện kháng cự Dexterity.</td>
                </tr>
                <tr>
                    <td>75%</td>
                    <td>+5 vào AC và thực hiện kháng cự Dexterity.</td>
                </tr>
                <tr>
                    <td>100%</td>
                    <td>Bạn và đối phương mất tầm nhìn thằng với nhau, cũng không thể chọn làm mục tiêu của nhau.</td>
                </tr>
            </tbody>
        </table>`
    }
    , {
        key: "Tàng Hình"
        , category: "Trạng Thái"
        , value: `<p>Bạn nhận các hiệu ứng sau:</p>
        <p-1>● Bạn có Lợi Thế khi tung Khởi Tranh.</p-1>
        <p-1>● Bạn và trang bị bạn đang mang không thể bị nhìn thấy.</p-1>
        <p-1>● Mục tiêu không thấy bạn bị Bất Lợi khi tung tấn công lên bạn, và bạn có Lợi Thế khi tung tấn công lên nó.</p-1>`
    }
    , {
        key: "Rơi"
        , category: ""
        , value: `<p>Sinh vật bị rơi sẽ nhận <c-2>ST Đập = 1d6 ứng với mỗi 10 feet đã rơi, tối đa 20d6</c-2>. Lúc đáp xuống, nó bị Ngã nếu nhận sát thương khi bị rơi.</p>
        <p>Sinh vật rơi xuống chất lỏng có thể dùng Phản Ứng để thực hiện kiểm tra kỹ năng Thể Lực hoặc Nhào Lộn với độ khó 15. Nếu thành công, sát thương nhận vào giảm 1 nửa (làm tròn xuống).</p>`
    }
    , {
        key: "Mù"
        , category: "Trạng Thái"
        , value: `<p>Bạn nhận các hiệu ứng sau:</p>
        <p-1>● Bạn không thể nhìn và tự động thất bại khi kiểm tra kỹ năng yêu cầu tầm nhìn.</p-1>
        <p-1>● Tung tấn công lên bạn có Lợi Thế, và bạn bị Bất Lợi khi tung tấn công.</p-1>`
    }
]