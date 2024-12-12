import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './Blognews.scss'
import logo from '../../assets/images/logo.png';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import fanpage from '../../assets/images/fanpage.png';
import Header_menu from './Header_menu';
import Footer from './Footer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';





// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers';
// import TextField from '@mui/material/TextField';




class Blognews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null, // Lưu trữ giá trị ngày được chọn
            date: null,
        };
    }


    render() {
        console.log("check props from ", this.props.propschosenews)


        return (


            <div class="indochinaqueen-main-blognews">
                <div className='indochinaqueen-main-blog-header'>
                    <Header_menu></Header_menu>
                    {this.props.propschosenews == "new1" && <div className='indochinaqueen-main-blog-header-navbar'>

                        <div className='blog-up'>
                            <div className='blog-up-box1'>
                                <div className='blog-up-list1'>LÊ HUỲNH THẢO NGUYÊN</div>
                                <div className='blog-up-list2'> NGÀY ĐĂNG:12/11/2024</div>
                            </div>

                            <div className='blog-up-list3'>BACK TO BLOG</div>
                        </div>
                        <div className='blog-title'>Affordable eats: 7 Michelin-recommended eateries in Da Nang</div>
                        <div className='blog-body'>Da Nang, known for its street food scene, shines with 7 affordable Michelin-recommended eateries, offering authentic flavors and exceptional value for both locals and tourists.
                            <br />

                            The Michelin Guide made its debut in Da Nang in June, listing 35 restaurants and eateries, including 7 affordable establishments highlighted below.
                            <br />
                            <br />
                            <b> 1. Ba Dieu - Mrs Dieu</b>
                            <br />
                            <br />

                            Address: 17 Tran Tong Street, Thanh Khe District
                            <br />



                            Hours: 6:00 a.m. - 11:00 a.m. daily
                            <br />


                            Specializing in bun bo or spicy beef noodle soup, this eatery is included in the Michelin Selected list. The restaurant features a simple setup and serves bowls of noodles with toppings like brisket, tongue, tendon, flank, and pork leg. The broth is rich from the meat, and mildly spicy.

                            Prices range from VND30,000 to VND50,000 (US$1.20 - $2.00) per bowl.
                            <br />


                            <strong>	  2. Banh xeo Ba Duong - Mrs Duong's crispy pancakes</strong>
                            <br />
                            <br />


                            Address: 280/23 Hoang Dieu Street, Hai Chau District
                            <br />



                            Hours: 9:30 a.m. - 9:00 p.m. daily
                            <br />
                            <br />
                            <img className='img-blog' src='https://i1-dulich.vnecdn.net/2024/11/21/ba-ng-xe-o-ba-du-o-ng-xua-n-ph-6579-4174-1732126444.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=UVDFytI7jgiEQvHIgGQL5g'></img>
                            <br />
                            <br />


                            Món bánh xèo nhân tôm thịt của quán. Ảnh: Xuân Phương
                            The pancakes feature a yellow color, thanks to the addition of turmeric. Photo by VnExpress/Xuan Phuong
                            <br />

                            This eatery, tucked in an alley, is well-known among locals and tourists. It is a well-known spot among both locals and tourists in Da Nang. The banh xeo (crispy pancakes) here are central-Vietnam-style, each measuring about 20 centimeters in diameter. Made with a rice flour batter, the pancakes are filled with shrimp, pork, and bean sprouts.

                            A portion of four pancakes costs VND80,000 ($3.20).
                            <br />
                            <br />

                            <strong>  3. Hai san Be Man - Be Man's Seafood   </strong>
                            <br />
                            <br />
                            Address: Lot 8, Vo Nguyen Giap Street, Son Tra District
                            <br />

                            Hours: 9:30 a.m. - 9:00 p.m. daily
                            <br />
                            <br />
                            <img className='img-blog' src='https://i1-dulich.vnecdn.net/2024/11/21/464834021-1079552274172637-905-4508-4299-1732126444.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=onEHa6BLw7VEamE8LS8HIw'></img>

                            <br />
                            <br />

                            Món hàu nướng mỡ hành. Ảnh: Hải sản Bé Mặn
                            Grilled oysters are topped with scallion oil. Photo courtesy of Hai san Be Man
                            <br />

                            This seafood restaurant offers a variety of options like shrimp, crab, squid, and sea urchin. Guests can choose their seafood and request cooking styles such as frying, steaming, or stir-frying. Michelin recommends the steamed squid with ginger and green onions, paired with a tangy dipping sauce.

                            Prices vary by type and preparation, averaging VND120,000 to VND400,000 ($5 - $16) per person. Seasonal items like lobster and crab are priced separately.
                            <br />
                            <br />

                            <strong>4. Mi Quang sua Hong Van - Hong Van's Quang-style noodles with jellyfish  </strong>
                            <br />

                            <br />

                            - Address: 59 Le Hong Phong Street
                            <br />

                            - Hours: 6:00 a.m. - 1:00 p.m.
                            <br />

                            Featured in the Bib Gourmand category, which highlights restaurants offering good quality and good value cooking, this eatery is known for its red-orange broth made from shrimp and pork bones. The dish includes toppings like quail eggs, pork, shrimp, meatballs, and jellyfish.

                            Prices range from VND30,000 to VND70,000 ($1.20 - $2.80) per bowl.
                            <br />
                            <br />

                            <strong> 5. Bun cha ca ba Hoa - Mrs Hoa's fish cake noodle soup</strong>
                            <br />
                            <br />


                            - Address: 27 Le Hong Phong, Hai Chau District
                            <br />

                            - Hours: 6:00 a.m. - 9:00 p.m.
                            <br />
                            <br />

                            A favorite among locals since 2009, this spot specializes in fish cake noodle soup. The broth is made with tomatoes and pumpkin, served with fresh fish cakes. Customers can choose traditional fish cakes or add slices of mackerel or tuna.

                            The restaurant sells nearly 300 bowls daily, with prices starting at VND40,000 ($1.60) per bowl.
                            <br />
                            <br />
                            <strong> 6. Quan bun bo Ba Roi - Mrs Roi's spicy beef noodle soup</strong>
                            <br />
                            <br />

                            - Address: 5 Phan Thanh Tai Street, Hai Chau District
                            <br />

                            - Hours: 6:00 a.m. - 10:00 p.m.
                            <br />
                            <br />
                            <img className='img-blog' src='https://i1-dulich.vnecdn.net/2024/11/21/464834021-1079552274172637-905-4508-4299-1732126444.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=onEHa6BLw7VEamE8LS8HIw'></img>
                            <br />
                            <br />

                            Món bún bò ở quán Bà Rơi giá 40.000 đồng một tô. Ảnh: Bún bò Bà Rơi
                            A bowl of spicy beef noodle soup features a variety cuts of beef. Photo courtesy of Bun bo Ba Roi
                            <br />
                            Listed in the Bib Gourmand category, this eatery has been serving spicy beef noodle soup since 2014. The rich broth, simmered overnight with beef bones, complements the medium-sized noodles.
                            <br />
                            Toppings include beef tendon, ribs, flank, tongue, pork leg, and crab rolls. Prices are VND40,000 ($1.60) per bowl.
                            <br />     <br />
                            <strong>   7. Banh xeo tom nhay Co Ba - Miss Ba's jumping shrimp pancakes</strong>
                            <br />

                            <br />
                            - Address: 248 Trung Nu Vuong Street, Hai Chau District
                            <br />
                            - Hours: 6:00 a.m. - 10:00 p.m.
                            <br />
                            Serving Binh Dinh-style banh xeo for the past 10 years, this eatery features crispy pancakes with shrimp and beef fillings. Binh Dinh-style crispy pancakes are smaller than regular ones, featuring a soft shell. The small pancakes (10 cm in diameter) are served with a sweet and sour fish sauce or peanut dipping sauce. Nem nuong - grilled pork skewers are also available.

                            Prices range from VND20,000 to VND40,000 ($0.80 - $1.60) per portion.</div>



                    </div>}

                    {this.props.propschosenews == "new2" && <div className='indochinaqueen-main-blog-header-navbar'>
                        <div className='blog-up'>
                            <div className='blog-up-box1'>
                                <div className='blog-up-list1'>TRẦN MINH PHƯƠNG</div>
                                <div className='blog-up-list2'>NGÀY ĐĂNG: 15/12/2024</div>
                            </div>

                            <Link to="/vn/blog">    <div className='blog-up-list3'>BACK TO BLOG</div></Link>
                        </div>

                        <div className='blog-title'>Cooking Vietnamese Classics: 5 Iconic Recipes to Try at Home</div>

                        <div className='blog-body'>
                            Vietnamese cuisine is celebrated for its balance of flavors and fresh ingredients. Below are five iconic recipes to try at home and bring the taste of Vietnam to your kitchen.
                            <br />
                            <br />

                            <b>1. Phở Bò (Beef Noodle Soup)</b>
                            <br />
                            <img src="path_to_pho_bo_image.jpg" alt="Phở Bò" style={{ width: '100%', height: 'auto' }} />
                            <br />
                            Ingredients:
                            <br />
                            - 500g beef bones
                            <br />
                            - 300g beef brisket
                            <br />
                            - 200g rice noodles
                            <br />
                            - Spices: star anise, cinnamon, cloves, cardamom
                            <br />
                            - Garnishes: bean sprouts, Thai basil, lime
                            <br />

                            Instructions:
                            <br />
                            - Simmer beef bones and brisket with spices for 4-6 hours to create a rich broth.
                            <br />
                            - Blanch rice noodles and arrange them in a bowl.
                            <br />
                            - Slice brisket thinly and add to the noodles, then pour hot broth over the top.
                            <br />
                            - Garnish with bean sprouts, basil, and a squeeze of lime.
                            <br />
                            <br />

                            <strong>2. Bún Chả (Grilled Pork with Vermicelli)</strong>
                            <br />
                            <img src="path_to_bun_cha_image.jpg" alt="Bún Chả" style={{ width: '100%', height: 'auto' }} />
                            <br />
                            Ingredients:
                            <br />
                            - 300g minced pork
                            <br />
                            - 200g pork belly slices
                            <br />
                            - Rice vermicelli, fresh herbs (mint, coriander), pickled vegetables
                            <br />
                            - Dipping sauce: fish sauce, sugar, lime juice, chili
                            <br />

                            Instructions:
                            <br />
                            - Marinate minced pork and pork belly with garlic, fish sauce, and sugar.
                            <br />
                            - Grill until golden and aromatic.
                            <br />
                            - Serve with rice vermicelli, herbs, and dipping sauce.
                            <br />
                            <br />

                            <strong>3. Gỏi Cuốn (Fresh Spring Rolls)</strong>
                            <br />
                            <img src="path_to_goi_cuon_image.jpg" alt="Gỏi Cuốn" style={{ width: '100%', height: 'auto' }} />
                            <br />
                            Ingredients:
                            <br />
                            - Rice paper wrappers
                            <br />
                            - 200g shrimp, cooked and peeled
                            <br />
                            - 100g pork belly, thinly sliced
                            <br />
                            - Vermicelli noodles, fresh herbs, lettuce
                            <br />
                            - Dipping sauce: hoisin sauce and peanut butter
                            <br />

                            Instructions:
                            <br />
                            - Soften rice paper in warm water.
                            <br />
                            - Add shrimp, pork, noodles, and herbs, then roll tightly.
                            <br />
                            - Serve with dipping sauce.
                            <br />
                            <br />

                            <strong>4. Bánh Xèo (Crispy Pancakes)</strong>
                            <br />
                            <img src="path_to_banh_xeo_image.jpg" alt="Bánh Xèo" style={{ width: '100%', height: 'auto' }} />
                            <br />
                            Ingredients:
                            <br />
                            - Pancake batter: rice flour, coconut milk, turmeric
                            <br />
                            - Fillings: shrimp, pork, bean sprouts
                            <br />
                            - Lettuce and fresh herbs for wrapping
                            <br />
                            - Dipping sauce: fish sauce, lime, garlic, chili
                            <br />

                            Instructions:
                            <br />
                            - Heat a pan and pour a thin layer of batter to form a crispy pancake.
                            <br />
                            - Add shrimp, pork, and bean sprouts, then fold the pancake in half.
                            <br />
                            - Wrap pieces of pancake in lettuce with herbs, then dip in sauce.
                            <br />
                            <br />

                            <strong>5. Chè Ba Màu (Three-Colored Dessert)</strong>
                            <br />
                            <img src="path_to_che_ba_mau_image.jpg" alt="Chè Ba Màu" style={{ width: '100%', height: 'auto' }} />
                            <br />
                            Ingredients:
                            <br />
                            - Green jelly, red kidney beans, yellow mung beans
                            <br />
                            - Coconut milk, sugar, crushed ice
                            <br />

                            Instructions:
                            <br />
                            - Prepare each layer: cook jelly, beans, and mung bean paste separately.
                            <br />
                            - Layer the ingredients in a glass: jelly, beans, mung bean paste.
                            <br />
                            - Top with sweetened coconut milk and crushed ice.
                            <br />
                            <br />
                        </div>
                    </div>}
                    {this.props.propschosenews == "new3" && <div className='indochinaqueen-main-blog-header-navbar'>
                        <div className='blog-up'>
                            <div className='blog-up-box1'>
                                <div className='blog-up-list1'>LÊ HUỲNH THẢO NGUYÊN</div>
                                <div className='blog-up-list2'>NGÀY ĐĂNG: 12/11/2024</div>
                            </div>

                            <div className='blog-up-list3'>BACK TO BLOG</div>
                        </div>
                        <div className='blog-title'>Cách Nấu Các Món Ăn Việt Nam: 5 Món Ngon và Dễ Làm Tại Nhà</div>
                        <div className='blog-body'>
                            Ẩm thực Việt Nam nổi tiếng với hương vị đặc trưng, hòa quyện giữa vị chua, ngọt, mặn và cay. Dưới đây là hướng dẫn chi tiết cách nấu 5 món ăn Việt Nam đặc sắc mà bạn có thể thử ngay tại nhà.

                            <br />
                            <br />
                            <b>1. Phở Bò (Bánh Phở Nước Bò)</b>
                            <br />
                            <br />
                            **Nguyên liệu:**
                            <br />
                            - 500g xương bò
                            <br />
                            - 300g thịt bò (chọn phần bắp hoặc gầu)
                            <br />
                            - 200g bánh phở tươi
                            <br />
                            - Các gia vị: Hồi, quế, thảo quả, đinh hương
                            <br />
                            - Các loại rau ăn kèm: Giá đỗ, húng quế, chanh, ớt
                            <br />

                            **Cách nấu:**
                            <br />
                            - Đầu tiên, bạn luộc xương bò trong nước sôi khoảng 5 phút để loại bỏ bọt. Sau đó, vớt xương ra và cho vào nồi ninh với khoảng 3-4 lít nước trong 4-6 giờ để nước dùng ngọt và đậm đà.
                            <br />
                            - Thịt bò sau khi sơ chế, bạn thái mỏng và cho vào bát.
                            <br />
                            - Khi nước dùng đã sôi, bạn nấu bánh phở qua nước sôi và cho vào bát, sau đó đổ nước dùng lên trên.
                            <br />
                            - Trang trí với giá đỗ, húng quế, thêm chanh và ớt tươi. Bạn có thể thưởng thức ngay khi còn nóng.
                            <br />
                            <br />

                            <b>2. Bánh Mì (Bánh Mì Việt Nam)</b>
                            <br />
                            <br />
                            **Nguyên liệu:**
                            <br />
                            - 4 chiếc bánh mì baguette (loại có vỏ giòn và ruột mềm)
                            <br />
                            - 200g thịt heo (hoặc gà, bò) đã chế biến sẵn (nướng hoặc xào)
                            <br />
                            - Các loại rau sống: Dưa leo, ngò, rau mùi, ớt tươi
                            <br />
                            - Các gia vị: Tương ớt, sốt mayonnaise, nước mắm
                            <br />

                            **Cách làm:**
                            <br />
                            - Đầu tiên, bạn cho thịt đã nướng hoặc xào vào trong bánh mì.
                            <br />
                            - Sau đó, cho dưa leo, rau ngò, rau mùi, ớt vào cùng. Đừng quên thêm tương ớt hoặc mayonnaise vào để tăng thêm hương vị.
                            <br />
                            - Bạn có thể dùng ngay lập tức, bánh mì Việt Nam rất phù hợp để ăn sáng hoặc ăn trưa.
                            <br />
                            <br />

                            <b>3. Bún Chả (Bún Chả Hà Nội)</b>
                            <br />
                            <br />
                            **Nguyên liệu:**
                            <br />
                            - 300g thịt ba chỉ heo
                            <br />
                            - 200g thịt nạc vai
                            <br />
                            - Bún tươi
                            <br />
                            - Các loại rau sống: Húng quế, xà lách, tía tô
                            <br />
                            - Nước chấm: Nước mắm, đường, tỏi, ớt
                            <br />

                            **Cách làm:**
                            <br />
                            - Thịt ba chỉ và nạc vai thái miếng mỏng, sau đó ướp gia vị như tỏi băm, nước mắm, đường và một chút dầu hào.
                            <br />
                            - Nướng thịt trên than hoa hoặc trong lò cho đến khi thịt chín vàng, thơm phức.
                            <br />
                            - Bún tươi được chần qua nước sôi cho nóng, sau đó cho vào bát, thêm rau sống và thịt nướng lên trên.
                            <br />
                            - Cuối cùng, bạn pha nước mắm chua ngọt và rưới lên bún. Món này ăn kèm với nem rán rất ngon.
                            <br />
                            <br />

                            <b>4. Gỏi Cuốn (Chả Giò Tươi)</b>
                            <br />
                            <br />
                            **Nguyên liệu:**
                            <br />
                            - 100g tôm tươi, luộc chín
                            <br />
                            - 100g thịt heo luộc, thái mỏng
                            <br />
                            - Bánh tráng
                            <br />
                            - Rau sống: Rau diếp, húng quế, bắp cải, giá đỗ
                            <br />
                            - Bún tươi
                            <br />
                            - Nước chấm: Nước mắm, tỏi, đường, ớt
                            <br />

                            **Cách làm:**
                            <br />
                            - Chuẩn bị nước sôi để nhúng bánh tráng cho mềm, sau đó trải ra mặt phẳng.
                            <br />
                            - Cho tôm, thịt heo, rau sống và bún vào giữa bánh tráng rồi cuốn lại.
                            <br />
                            - Để nước chấm tỏi ớt chua ngọt bên cạnh để chấm gỏi cuốn. Món này rất thích hợp làm món ăn nhẹ hoặc khai vị trong bữa ăn chính.
                            <br />
                            <br />

                            <b>5. Chè Ba Màu (Chè Thập Cẩm)</b>
                            <br />
                            <br />
                            **Nguyên liệu:**
                            <br />
                            - Đậu xanh, đậu đỏ, đậu đen
                            <br />
                            - Nước cốt dừa
                            <br />
                            - Thạch, trân châu
                            <br />
                            - Đường, đá bào
                            <br />

                            **Cách làm:**
                            <br />
                            - Đầu tiên, bạn nấu đậu xanh, đậu đỏ, đậu đen cho chín mềm. Đậu nấu xong sẽ để riêng từng loại.
                            <br />
                            - Sau đó, bạn chuẩn bị thạch và trân châu, làm cho các thành phần này thật mềm và dẻo.
                            <br />
                            - Để các nguyên liệu vào ly, lần lượt là thạch, đậu, và cuối cùng là nước cốt dừa cùng đá bào. Thêm đường nếu thích ngọt.
                            <br />
                            - Chè ba màu là món ăn giải khát lý tưởng vào những ngày hè oi ả. Bạn có thể làm tại nhà và thưởng thức cùng gia đình và bạn bè.
                        </div>
                    </div>}
                    {this.props.propschosenews == "new4" &&   <div  className='indochinaqueen-main-blog-header-navbar'>
                        <div className='blog-up'>
                            <div className='blog-up-box1'>
                                <div className='blog-up-list1'>LÊ HUỲNH THẢO NGUYÊN</div>
                                <div className='blog-up-list2'> NGÀY ĐĂNG:12/11/2024</div>
                            </div>

                            <div className='blog-up-list3'>BACK TO BLOG</div>
                        </div>
                        <div className='blog-title'>Trải Nghiệm Đặc Biệt Trên Tàu IndochinaQueen: Chuyến Du Lịch Hồ Chí Minh Đầy Ấn Tượng</div>
                        <div className='blog-body'>
                            Hồ Chí Minh không chỉ nổi tiếng với nhịp sống sôi động, mà còn là một điểm đến tuyệt vời để khám phá từ góc độ khác qua một chuyến du lịch trên tàu IndochinaQueen. Đây là một chuyến đi kết hợp giữa sự sang trọng, tiện nghi và những trải nghiệm tuyệt vời về cảnh quan cũng như dịch vụ đẳng cấp.
                            <br />
                            <br />
                            <strong>1. Tàu IndochinaQueen - Trải Nghiệm Dịch Vụ Hạng Sang</strong>
                            <br />
                            <br />
                            IndochinaQueen nổi bật với không gian rộng rãi, hiện đại nhưng vẫn giữ được vẻ đẹp truyền thống của văn hóa Việt Nam. Các khu vực trên tàu được thiết kế tinh tế với nội thất sang trọng, từ phòng nghỉ cho đến khu vực ăn uống và thư giãn. Chuyến đi mang đến không chỉ một hành trình tham quan, mà còn là một trải nghiệm đáng nhớ với các dịch vụ cao cấp.
                            <br />
                            <br />
                            <strong>2. Cảnh Quan Đẹp Mắt Trên Sông</strong>
                            <br />
                            <br />
                            Trong suốt hành trình, du khách sẽ được chiêm ngưỡng cảnh vật tươi đẹp của thành phố Hồ Chí Minh và những vùng lân cận. Các con sông, kênh rạch, và khu vực ven sông tạo nên một bức tranh tuyệt vời. Dù là ban ngày hay buổi tối, khung cảnh trên tàu vẫn luôn hấp dẫn, với ánh đèn lung linh và không khí mát mẻ.
                            <br />
                            <br />
                            <strong>3. Dịch Vụ Nhà Hàng Đẳng Cấp</strong>
                            <br />
                            <br />
                            Tàu IndochinaQueen còn nổi bật với dịch vụ ẩm thực. Nhà hàng trên tàu cung cấp các món ăn đa dạng từ các món đặc sản Việt Nam đến các món ăn quốc tế được chế biến bởi các đầu bếp chuyên nghiệp. Hương vị món ăn luôn tươi ngon và được chế biến cẩn thận, mang lại sự hài lòng tuyệt đối cho mọi thực khách.
                            <br />
                            <br />
                            <strong>4. Nhân Viên Chuyên Nghiệp Và Thân Thiện</strong>
                            <br />
                            <br />
                            Một trong những điểm cộng lớn của tàu IndochinaQueen chính là đội ngũ nhân viên. Họ luôn nhiệt tình, chu đáo và sẵn sàng đáp ứng mọi yêu cầu của khách hàng. Dù bạn cần sự hỗ trợ hay đơn giản chỉ muốn tìm một góc thư giãn yên tĩnh, nhân viên trên tàu luôn sẵn sàng mang đến sự thoải mái nhất cho bạn.
                            <br />
                            <br />
                            <strong>5. Hoạt Động Giải Trí Và Thư Giãn</strong>
                            <br />
                            <br />
                            Ngoài việc ngắm cảnh, tàu IndochinaQueen còn cung cấp nhiều hoạt động giải trí hấp dẫn. Từ các buổi biểu diễn âm nhạc, DJ, cho đến các hoạt động thư giãn trên boong tàu, du khách sẽ không bao giờ cảm thấy nhàm chán. Đây là nơi lý tưởng để thư giãn, giao lưu và tận hưởng không gian sang trọng.
                            <br />
                            <br />
                            <strong>6. Lý Do Chọn Tàu IndochinaQueen</strong>
                            <br />
                            <br />
                            Nếu bạn đang tìm kiếm một chuyến đi độc đáo, sang trọng, và đầy ấn tượng tại Hồ Chí Minh, tàu IndochinaQueen là lựa chọn lý tưởng. Đặc biệt nếu bạn yêu thích những chuyến du lịch kết hợp với nghỉ dưỡng, tham quan và thưởng thức ẩm thực tuyệt vời. Đây chắc chắn là một chuyến đi không thể quên đối với bất kỳ du khách nào.
                            <br />
                            <br />
                            Chuyến hành trình này không chỉ là một chuyến đi đơn thuần, mà còn là cơ hội để bạn khám phá những khung cảnh tuyệt đẹp và trải nghiệm dịch vụ đẳng cấp. Hãy tận hưởng chuyến đi đầy ấn tượng trên tàu IndochinaQueen và mang về những kỷ niệm khó quên về thành phố Hồ Chí Minh.
                        </div>
                    </div>}
                    {this.props.propschosenews == "new5" &&   <div className='indochinaqueen-main-blog-header-navbar'>
                        <div className='blog-up'>
                            <div className='blog-up-box1'>
                                <div className='blog-up-list1'>LÊ HUỲNH THẢO NGUYÊN</div>
                                <div className='blog-up-list2'> NGÀY ĐĂNG:12/11/2024</div>
                            </div>

                            <div className='blog-up-list3'>BACK TO BLOG</div>
                        </div>
                        <div className='blog-title'>Khám Phá Tàu Hoàn Ngọc Viễn Đông: Một Hành Trình Đầy Màu Sắc Và Kỷ Niệm</div>
                        <div className='blog-body'>
                            Tàu Hoàn Ngọc Viễn Đông không chỉ là phương tiện vận chuyển mà còn là một trải nghiệm du lịch độc đáo mang đến những khoảnh khắc tuyệt vời trên biển. Đây là một chuyến đi dành cho những ai muốn khám phá vẻ đẹp của Sài Gòn và những điểm đến xung quanh từ một góc nhìn khác, với những dịch vụ đẳng cấp và không gian sang trọng.
                            <br />
                            <br />
                            <strong>1. Tàu Hoàn Ngọc Viễn Đông - Đẳng Cấp Vượt Trội</strong>
                            <br />
                            <br />
                            Tàu Hoàn Ngọc Viễn Đông nổi bật với thiết kế sang trọng, hiện đại nhưng vẫn giữ được nét đẹp truyền thống của văn hóa Việt Nam. Từ khoang nghỉ ngơi đến khu vực ăn uống và giải trí, mọi chi tiết trên tàu đều được chăm chút kỹ lưỡng để mang lại sự thoải mái tối đa cho du khách. Chuyến hành trình không chỉ đơn thuần là một chuyến đi, mà còn là một trải nghiệm đẳng cấp với sự kết hợp hoàn hảo giữa tiện nghi và phong cách sống.
                            <br />
                            <br />
                            <strong>2. Khám Phá Cảnh Quan Tuyệt Đẹp</strong>
                            <br />
                            <br />
                            Trong suốt hành trình, du khách sẽ có cơ hội chiêm ngưỡng những cảnh quan tuyệt vời của thành phố Hồ Chí Minh và các vùng lân cận. Các tuyến đường sông, kênh rạch sẽ dẫn bạn qua những cảnh vật nên thơ, đầy màu sắc và sự sống. Khi tàu lướt qua những con sông uốn lượn, bạn sẽ cảm nhận được sự tĩnh lặng, thanh bình mà không phải ở đâu cũng có được. Những chiếc cầu huyền thoại và ánh sáng đèn thành phố khi màn đêm buông xuống sẽ tạo nên một bức tranh đầy mê hoặc.
                            <br />
                            <br />
                            <strong>3. Dịch Vụ Ẩm Thực Đẳng Cấp</strong>
                            <br />
                            <br />
                            Một điểm đặc biệt của tàu Hoàn Ngọc Viễn Đông chính là dịch vụ ẩm thực phong phú, mang đến cho du khách những món ăn đa dạng từ các món đặc sản truyền thống Việt Nam đến các món quốc tế. Nhà hàng trên tàu được trang bị đầy đủ tiện nghi với không gian rộng rãi và thoáng mát. Những món ăn được chế biến bởi đội ngũ đầu bếp tài ba, mang đến cho thực khách một trải nghiệm ẩm thực tuyệt vời, từ các món hải sản tươi ngon cho đến các món ăn theo yêu cầu.
                            <br />
                            <br />
                            <strong>4. Nhân Viên Chuyên Nghiệp Và Chăm Sóc Tận Tâm</strong>
                            <br />
                            <br />
                            Đội ngũ nhân viên trên tàu Hoàn Ngọc Viễn Đông là một trong những yếu tố tạo nên sự khác biệt. Họ không chỉ chuyên nghiệp, mà còn rất thân thiện và chu đáo, luôn sẵn sàng đáp ứng mọi nhu cầu của du khách. Từ những yêu cầu nhỏ nhất như tư vấn các hoạt động giải trí trên tàu đến những dịch vụ đặc biệt, nhân viên luôn sẵn lòng hỗ trợ và mang đến cho bạn một kỳ nghỉ thoải mái nhất.
                            <br />
                            <br />
                            <strong>5. Hoạt Động Giải Trí Và Thư Giãn</strong>
                            <br />
                            <br />
                            Tàu Hoàn Ngọc Viễn Đông không chỉ là nơi để ngắm cảnh, mà còn là một điểm đến lý tưởng để thư giãn và tận hưởng những hoạt động giải trí phong phú. Từ các buổi biểu diễn âm nhạc live, các chương trình DJ sôi động đến các hoạt động thư giãn như yoga, spa, hay thưởng thức một ly cocktail trên boong tàu, mỗi du khách đều có thể tìm thấy một góc thư giãn cho riêng mình.
                            <br />
                            <br />
                            <strong>6. Một Chuyến Đi Thưởng Thức Cuộc Sống Và Khám Phá Những Điều Mới Lạ</strong>
                            <br />
                            <br />
                            Tàu Hoàn Ngọc Viễn Đông mang đến cho du khách một trải nghiệm hoàn toàn khác biệt với những chuyến đi trên biển. Từ việc ngắm nhìn những ánh đèn lung linh của thành phố về đêm, cho đến việc tìm hiểu các địa phương dọc tuyến đường đi, mỗi chuyến đi trên tàu đều là một hành trình khám phá đầy màu sắc. Từ đó, bạn có thể tận hưởng không chỉ vẻ đẹp tự nhiên của Sài Gòn mà còn cảm nhận được những giá trị văn hóa đặc sắc mà tàu Hoàn Ngọc Viễn Đông mang lại.
                            <br />
                            <br />
                            <strong>7. Lý Do Chọn Tàu Hoàn Ngọc Viễn Đông</strong>
                            <br />
                            <br />
                            Tàu Hoàn Ngọc Viễn Đông là sự lựa chọn lý tưởng cho những ai muốn có một kỳ nghỉ đẳng cấp với những trải nghiệm mới mẻ. Nếu bạn muốn khám phá Hồ Chí Minh từ một góc nhìn khác, tận hưởng dịch vụ ẩm thực tuyệt vời, và thư giãn trong một không gian sang trọng, thì tàu Hoàn Ngọc Viễn Đông chính là lựa chọn tuyệt vời cho bạn. Đây sẽ là một chuyến đi không thể quên, đầy kỷ niệm khó phai.
                            <br />
                            <br />
                            Hãy đặt chỗ ngay hôm nay và trải nghiệm một chuyến du lịch đầy ấn tượng trên tàu Hoàn Ngọc Viễn Đông, nơi bạn sẽ được đắm chìm trong không gian sang trọng, dịch vụ tuyệt vời và cảnh quan ngoạn mục.
                        </div>
                    </div>}
                    {this.props.propschosenews == "new6" &&    <div className='indochinaqueen-main-blog-header-navbar'>
                        <div className='blog-up'>
                            <div className='blog-up-box1'>
                                <div className='blog-up-list1'>LÊ HUỲNH THẢO NGUYÊN</div>
                                <div className='blog-up-list2'> NGÀY ĐĂNG:12/11/2024</div>
                            </div>

                            <div className='blog-up-list3'>BACK TO BLOG</div>
                        </div>
                        <div className='blog-title'>Trải Nghiệm Tết Âm Lịch Ở Hồ Chí Minh: Một Mùa Xuân Sôi Động Và Đầy Ý Nghĩa</div>
                        <div className='blog-body'>
                            Tết Nguyên Đán, hay còn gọi là Tết Âm Lịch, là thời điểm quan trọng nhất trong năm đối với người Việt Nam. Ở Hồ Chí Minh, Tết không chỉ là một kỳ nghỉ lễ mà còn là dịp để mọi người trở về quây quần bên gia đình, cùng nhau chuẩn bị và thưởng thức những món ăn đặc sắc, tham gia các hoạt động truyền thống và tận hưởng không khí lễ hội sôi động. Đây là thời gian để du khách khám phá những nét văn hóa đặc trưng và hòa mình vào không khí rộn ràng của mùa xuân.
                            <br />
                            <br />
                            <strong>1. Phố Xuân Hồ Chí Minh - Khám Phá Không Gian Lễ Hội</strong>
                            <br />
                            <br />
                            Trong những ngày cận Tết, khu vực trung tâm Hồ Chí Minh trở thành một "phố xuân" rực rỡ với những con đường được trang hoàng lộng lẫy, đón chào năm mới. Các con phố như Nguyễn Huệ, Lê Lợi, hay Bến Thành luôn tràn ngập sắc hoa, ánh đèn và những gian hàng bán đồ Tết. Du khách có thể dạo quanh để chiêm ngưỡng các tiểu cảnh, chụp những bức ảnh đẹp, hay tham gia vào các lễ hội đường phố với âm nhạc và các hoạt động giải trí sôi động.
                            <br />
                            <br />
                            <strong>2. Chợ Tết và Mua Sắm Đặc Sản</strong>
                            <br />
                            <br />
                            Một trong những trải nghiệm không thể thiếu khi đến Hồ Chí Minh vào dịp Tết là thăm các chợ Tết. Chợ Bến Thành, chợ Hoa Hồ Thị Kỷ, hay chợ Tân Định là những điểm đến lý tưởng để du khách tìm mua các đặc sản Tết như bánh chưng, bánh tét, mứt Tết, trái cây, và các loại hoa như mai vàng, đào, hay cúc. Không khí ở các chợ Tết luôn tấp nập, nhộn nhịp với những món hàng đặc trưng và những người bán hàng vui vẻ, chào đón khách.
                            <br />
                            <br />
                            <strong>3. Món Ăn Tết Truyền Thống</strong>
                            <br />
                            <br />
                            Tết Âm Lịch ở Hồ Chí Minh không thể thiếu những món ăn truyền thống đặc sắc. Bánh chưng, bánh tét, mứt Tết, củ kiệu, thịt kho hột vịt, canh khổ qua đều là những món ăn đặc trưng, được nhiều gia đình chuẩn bị trong dịp Tết. Du khách có thể tham gia các bữa tiệc Tết, thưởng thức những món ăn ngon và tìm hiểu về ý nghĩa của từng món trong ngày Tết. Nếu bạn đến thăm các nhà hàng, nhiều nơi cũng có các thực đơn đặc biệt dành riêng cho dịp Tết.
                            <br />
                            <br />
                            <strong>4. Lễ Hội Tết và Các Hoạt Động Văn Hóa</strong>
                            <br />
                            <br />
                            Hồ Chí Minh cũng tổ chức nhiều lễ hội văn hóa đặc sắc trong dịp Tết để du khách có thể hòa mình vào không khí lễ hội truyền thống. Các lễ hội như Lễ hội Hoa Xuân, Lễ hội đua thuyền, hay các buổi biểu diễn múa lân, hát bội luôn thu hút đông đảo du khách trong và ngoài nước. Đây là cơ hội để bạn trải nghiệm những nét văn hóa đặc sắc, tham gia vào các trò chơi dân gian và khám phá các di tích lịch sử của thành phố.
                            <br />
                            <br />
                            <strong>5. Thăm Các Địa Điểm Du Lịch Tết</strong>
                            <br />
                            <br />
                            Ngoài các hoạt động lễ hội, du khách cũng có thể khám phá các địa điểm du lịch đặc sắc tại Hồ Chí Minh trong dịp Tết. Những địa danh nổi tiếng như Dinh Độc Lập, Nhà thờ Đức Bà, Chợ Bến Thành, hay Bảo tàng Chứng tích Chiến tranh đều mở cửa đón du khách. Đặc biệt, bạn có thể tham gia các tour du lịch tìm hiểu về lịch sử, văn hóa và sự phát triển của thành phố trong dịp này.
                            <br />
                            <br />
                            <strong>6. Tết Âm Lịch và Những Hoạt Động Truyền Thống</strong>
                            <br />
                            <br />
                            Trong dịp Tết, các gia đình ở Hồ Chí Minh cũng thường tổ chức những hoạt động truyền thống như cúng ông Công, ông Táo, lì xì cho trẻ em, và thăm viếng mộ tổ tiên. Đây là những phong tục tập quán mang đậm nét văn hóa dân gian Việt Nam, thể hiện sự kính trọng đối với ông bà tổ tiên và mong muốn một năm mới an khang thịnh vượng.
                            <br />
                            <br />
                            <strong>7. Lý Do Nên Đến Hồ Chí Minh Dịp Tết</strong>
                            <br />
                            <br />
                            Nếu bạn muốn trải nghiệm một không gian Tết truyền thống nhưng cũng đầy sôi động và hiện đại, Hồ Chí Minh chắc chắn là lựa chọn lý tưởng. Với những hoạt động lễ hội, các món ăn ngon, và không khí chào đón năm mới, Hồ Chí Minh trong dịp Tết chắc chắn sẽ mang đến cho bạn những kỷ niệm đáng nhớ và một cái Tết thật đặc biệt.
                            <br />
                            <br />
                            Hãy đến Hồ Chí Minh và hòa mình vào không khí Tết, để cảm nhận sự ấm áp, vui tươi và đầy ý nghĩa của mùa xuân Việt Nam.
                        </div>
                    </div>}
                    {this.props.propschosenews == "new7" &&     <div className='indochinaqueen-main-blog-header-navbar'>
                        <div className='blog-up'>
                            <div className='blog-up-box1'>
                                <div className='blog-up-list1'>LÊ HUỲNH THẢO NGUYÊN</div>
                                <div className='blog-up-list2'> NGÀY ĐĂNG: 12/12/2024</div>
                            </div>

                            <div className='blog-up-list3'>BACK TO BLOG</div>
                        </div>
                        <div className='blog-title'>Trải Nghiệm Giáng Sinh Ở Sài Gòn: Một Mùa Lễ Hội Ngập Tràn Ánh Sáng Và Yêu Thương</div>
                        <div className='blog-body'>
                            Giáng Sinh là một dịp đặc biệt trong năm không chỉ ở các nước phương Tây mà còn ở Việt Nam, đặc biệt là tại Sài Gòn. Mùa Giáng Sinh ở Sài Gòn không chỉ là những ngày lễ hội, mà là thời gian để mọi người xích lại gần nhau, cùng chia sẻ những khoảnh khắc ấm áp, ngập tràn yêu thương. Cùng khám phá không khí Giáng Sinh độc đáo tại thành phố sôi động này, nơi những ánh đèn lung linh chiếu sáng khắp mọi nẻo đường và âm nhạc chào đón mùa lễ hội.
                            <br />
                            <br />
                            <strong>1. Phố Giáng Sinh Sài Gòn - Khám Phá Lễ Hội Ánh Sáng</strong>
                            <br />
                            <br />
                            Những con đường như Nguyễn Huệ, Lê Lợi và Bùi Viện sẽ trở thành "phố Giáng Sinh" rực rỡ, tràn ngập ánh đèn và trang trí đầy màu sắc. Các trung tâm thương mại, các cửa hàng và những quán cà phê đều được trang hoàng lộng lẫy, tạo nên không gian ấm áp, mời gọi du khách và người dân thành phố. Đây là thời điểm lý tưởng để chụp những bức ảnh đẹp, tham gia các hoạt động vui chơi và cảm nhận không khí mùa lễ hội.
                            <br />
                            <br />
                            <strong>2. Chợ Giáng Sinh Và Mua Sắm Quà Tặng</strong>
                            <br />
                            <br />
                            Mua sắm trong dịp Giáng Sinh ở Sài Gòn là một trải nghiệm không thể thiếu. Các khu chợ Giáng Sinh như chợ Bến Thành hay các trung tâm thương mại đều mang đến vô vàn quà tặng độc đáo, từ những món đồ thủ công mỹ nghệ đến các món quà trang trí cho cây thông Noel. Du khách có thể tìm thấy những món quà ý nghĩa cho người thân, bạn bè và tận hưởng không khí vui tươi, nhộn nhịp của mùa lễ hội.
                            <br />
                            <br />
                            <strong>3. Thưởng Thức Món Ăn Giáng Sinh Đặc Biệt</strong>
                            <br />
                            <br />
                            Không khí Giáng Sinh ở Sài Gòn không thể thiếu những bữa tiệc thịnh soạn. Các nhà hàng, khách sạn tại thành phố sẽ phục vụ những món ăn đặc biệt như gà nướng, cá hồi, và các món tráng miệng ngọt ngào như bánh khúc cây hay bánh quy gừng. Đây cũng là thời điểm lý tưởng để cùng gia đình và bạn bè thưởng thức những món ăn đặc trưng trong không khí ấm cúng của ngày lễ.
                            <br />
                            <br />
                            <strong>4. Các Hoạt Động Giải Trí Và Lễ Hội Âm Nhạc</strong>
                            <br />
                            <br />
                            Sài Gòn không chỉ nổi tiếng với không khí lễ hội mà còn với các hoạt động giải trí sôi động trong dịp Giáng Sinh. Các buổi biểu diễn âm nhạc, múa, và các chương trình nghệ thuật đường phố sẽ mang đến cho bạn những phút giây thư giãn tuyệt vời. Đặc biệt, bạn sẽ không thể bỏ qua các buổi biểu diễn ca nhạc Giáng Sinh, nơi những bài hát quen thuộc như "Jingle Bells" và "Silent Night" được thể hiện trong không khí đầy ấm áp của mùa lễ hội.
                            <br />
                            <br />
                            <strong>5. Tham Quan Các Địa Điểm Du Lịch Trong Mùa Giáng Sinh</strong>
                            <br />
                            <br />
                            Sài Gòn không chỉ có không khí Giáng Sinh tuyệt vời mà còn có nhiều địa điểm thú vị để tham quan trong mùa lễ hội. Bạn có thể ghé thăm Nhà thờ Đức Bà, nơi tổ chức các lễ Giáng Sinh trang trọng, hay tham quan các khu vực xung quanh để chiêm ngưỡng những cây thông Noel lớn, trang trí đẹp mắt. Đừng quên ghé qua các khu phố nổi tiếng như phố đi bộ Nguyễn Huệ để trải nghiệm không khí Giáng Sinh sôi động và đầy màu sắc.
                            <br />
                            <br />
                            <strong>6. Cảm Nhận Tình Yêu Và Sự Gắn Kết</strong>
                            <br />
                            <br />
                            Giáng Sinh là dịp để mọi người xích lại gần nhau hơn, chia sẻ yêu thương và mang lại niềm vui cho nhau. Bạn sẽ cảm nhận được không khí ấm áp, tình bạn, tình yêu, và sự quan tâm giữa người với người. Dù là những buổi gặp gỡ bạn bè, gia đình hay tham gia vào các hoạt động cộng đồng, Giáng Sinh tại Sài Gòn luôn mang đến cảm giác hạnh phúc và bình an.
                            <br />
                            <br />
                            <strong>7. Lý Do Nên Tham Gia Mùa Giáng Sinh Ở Sài Gòn</strong>
                            <br />
                            <br />
                            Nếu bạn muốn tận hưởng một mùa Giáng Sinh đặc biệt, Sài Gòn chính là điểm đến lý tưởng. Với không khí lễ hội rộn ràng, những hoạt động phong phú và những món ăn hấp dẫn, Sài Gòn sẽ mang đến cho bạn một mùa Giáng Sinh khó quên. Hãy đến và tận hưởng không gian ấm cúng, vui tươi, và đầy ý nghĩa trong dịp lễ này.
                            <br />
                            <br />
                            Hãy chuẩn bị cho một Giáng Sinh thật đặc biệt tại Sài Gòn, nơi những điều kỳ diệu đang chờ đón bạn!
                        </div>
                    </div>}
                    {this.props.propschosenews == "new8" &&    <div className='indochinaqueen-main-blog-header-navbar'>
                        <div className='blog-up'>
                            <div className='blog-up-box1'>
                                <div className='blog-up-list1'>LÊ HUỲNH THẢO NGUYÊN</div>
                                <div className='blog-up-list2'> NGÀY ĐĂNG: 12/12/2024</div>
                            </div>

                            <div className='blog-up-list3'>BACK TO BLOG</div>
                        </div>
                        <div className='blog-title'>Khám Phá Giáng Sinh 2024: Sài Gòn Đầy Màu Sắc, Âm Nhạc Và Trải Nghiệm Đặc Biệt</div>
                        <div className='blog-body'>
                            Mùa Giáng Sinh năm nay tại Sài Gòn không chỉ đơn thuần là những ánh đèn lung linh hay các cây thông Noel lộng lẫy. Đây là thời điểm tuyệt vời để trải nghiệm sự kết hợp giữa hiện đại và truyền thống, giữa âm nhạc sống động và những phút giây ấm áp bên gia đình và bạn bè. Cùng khám phá những điểm đến "must-visit" và những hoạt động thú vị trong dịp Giáng Sinh tại thành phố không bao giờ ngủ này.
                            <br />
                            <br />
                            <strong>1. Khám Phá Phố Giáng Sinh Sài Gòn - Đến Để Ngập Tràn Ánh Sáng</strong>
                            <br />
                            <br />
                            Khi những con đường Nguyễn Huệ, Lê Lợi và Bùi Viện ngập tràn ánh đèn, cả thành phố như lột xác thành một khu phố Giáng Sinh rực rỡ. Các cửa hàng, nhà hàng, và các quán cà phê đều khoác lên mình những bộ cánh lộng lẫy, mời gọi mọi người bước vào không khí lễ hội. Đây là nơi lý tưởng để dạo chơi, chụp những bức ảnh sống động và tận hưởng âm nhạc, ẩm thực và không gian lễ hội.
                            <br />
                            <br />
                            <strong>2. Sắm Tết Sớm Tại Chợ Giáng Sinh Và Thị Trường Lễ Hội</strong>
                            <br />
                            <br />
                            Mua sắm trong mùa Giáng Sinh ở Sài Gòn chính là một trải nghiệm không thể bỏ qua. Các chợ Giáng Sinh như Chợ Bến Thành hay các trung tâm thương mại lớn sẽ khiến bạn phải "vò đầu bứt tóc" với vô vàn lựa chọn quà tặng và đồ trang trí. Từ những món quà thủ công, đồ trang trí độc đáo cho đến những sản phẩm handmade đáng yêu, tất cả đều mang đậm tinh thần Giáng Sinh.
                            <br />
                            <br />
                            <strong>3. Trải Nghiệm Ẩm Thực Giáng Sinh Tuyệt Vời</strong>
                            <br />
                            <br />
                            Đừng bỏ lỡ cơ hội thưởng thức những món ăn Giáng Sinh đặc sắc chỉ có trong dịp này. Những nhà hàng, khách sạn nổi tiếng sẽ mang đến cho bạn thực đơn đặc biệt với các món ăn như gà nướng, cá hồi, và những món tráng miệng ngọt ngào như bánh quy gừng hay bánh khúc cây. Đây là dịp để tụ tập cùng gia đình và bạn bè, chia sẻ những khoảnh khắc đầm ấm bên bàn ăn.
                            <br />
                            <br />
                            <strong>4. Các Hoạt Động Giải Trí Và Show Âm Nhạc Đầy Sôi Động</strong>
                            <br />
                            <br />
                            Giáng Sinh ở Sài Gòn không chỉ có ánh đèn và những món ăn ngon mà còn đầy ắp các hoạt động giải trí hấp dẫn. Những buổi biểu diễn âm nhạc sống, các màn trình diễn múa, và các chương trình nghệ thuật đường phố sẽ khiến bạn không thể rời mắt. Đặc biệt, đừng quên tham gia các chương trình ca nhạc Giáng Sinh, nơi bạn sẽ được nghe những giai điệu quen thuộc như "Jingle Bells" hay "Last Christmas" trong không khí đậm chất lễ hội.
                            <br />
                            <br />
                            <strong>5. Tham Quan Các Địa Điểm Du Lịch Đặc Sắc Trong Mùa Giáng Sinh</strong>
                            <br />
                            <br />
                            Không chỉ có những con đường đầy ánh sáng, Sài Gòn còn có rất nhiều địa điểm du lịch lý tưởng trong mùa Giáng Sinh. Nhà thờ Đức Bà và Nhà thờ Tân Định là những điểm đến không thể bỏ qua, nơi tổ chức các buổi lễ trang trọng và những hoạt động cộng đồng ấm cúng. Các khu phố đi bộ như Nguyễn Huệ hay các trung tâm thương mại đều có không gian đẹp để bạn tha hồ sống ảo với các bức ảnh Giáng Sinh tuyệt vời.
                            <br />
                            <br />
                            <strong>6. Khám Phá Tình Yêu Và Sự Gắn Kết Trong Mùa Lễ Hội</strong>
                            <br />
                            <br />
                            Giáng Sinh không chỉ là một dịp để vui chơi mà còn là thời điểm để mọi người gần nhau hơn, chia sẻ yêu thương và tình cảm. Mùa lễ hội này đem đến không khí ấm áp, yêu thương, từ những cuộc tụ tập bạn bè, gia đình cho đến các hoạt động thiện nguyện cộng đồng. Cảm giác gắn kết và sẻ chia sẽ làm cho mùa Giáng Sinh tại Sài Gòn thêm phần ý nghĩa.
                            <br />
                            <br />
                            <strong>7. Tại Sao Bạn Nên Đến Sài Gòn Mùa Giáng Sinh Này?</strong>
                            <br />
                            <br />
                            Sài Gòn luôn là điểm đến lý tưởng cho những ai tìm kiếm một mùa Giáng Sinh đầy sắc màu, âm nhạc, và niềm vui. Từ những con phố ngập tràn ánh sáng, các hoạt động giải trí sôi động, đến những món ăn Giáng Sinh tuyệt vời, tất cả sẽ khiến bạn có một kỳ nghỉ khó quên. Đến Sài Gòn, bạn không chỉ tham gia vào một lễ hội đặc biệt mà còn cảm nhận được sự ấm áp và tình yêu trong không khí của mùa lễ hội.
                            <br />
                            <br />
                            Hãy đến Sài Gòn ngay hôm nay để trải nghiệm một Giáng Sinh đầy màu sắc và niềm vui. Thành phố này đang chờ đón bạn với những điều kỳ diệu không thể bỏ lỡ!
                        </div>
                    </div>}
                    {this.props.propschosenews == "new9" &&     <div className='indochinaqueen-main-blog-header-navbar'>
                        <div className='blog-up'>
                            <div className='blog-up-box1'>
                                <div className='blog-up-list1'>LÊ HUỲNH THẢO NGUYÊN</div>
                                <div className='blog-up-list2'> NGÀY ĐĂNG: 12/12/2024</div>
                            </div>

                            <div className='blog-up-list3'>BACK TO BLOG</div>
                        </div>
                        <div className='blog-title'>Hướng Dẫn Cắm Hoa Đào Ngày Tết: Tạo Không Gian Xuân Tươi Mới Cho Ngôi Nhà</div>
                        <div className='blog-body'>
                            Tết Nguyên Đán là dịp lễ trọng đại của người Việt, nơi mọi người cùng quây quần bên gia đình, bạn bè, và những người thân yêu. Một trong những nét đẹp không thể thiếu trong không gian Tết chính là hoa đào, biểu tượng của sự may mắn, thịnh vượng và đón chào mùa xuân mới. Nếu bạn muốn tạo nên một không gian Tết ấm cúng, đậm đà sắc xuân, đừng bỏ qua những gợi ý dưới đây về cách cắm hoa đào đẹp mắt cho ngày Tết.
                            <br />
                            <br />
                            <strong>1. Chọn Hoa Đào Đúng Mùa</strong>
                            <br />
                            <br />
                            Để có được một bình hoa đào đẹp, bạn cần chọn những cành đào tươi, nở đẹp và vừa phải. Cành đào nên có nhiều nụ chưa nở để hoa có thể kéo dài lâu trong suốt dịp Tết. Đặc biệt, chọn những cành hoa có tán rộng, ít bị gãy và có màu sắc tươi sáng, tránh những cành hoa đã bị héo hoặc khô. Màu sắc hoa đào thường có các gam màu từ hồng nhạt đến đỏ đậm, tùy vào sở thích mà bạn có thể lựa chọn.
                            <br />
                            <br />
                            <strong>2. Chọn Lọ Cắm Hoa Phù Hợp</strong>
                            <br />
                            <br />
                            Lọ cắm hoa cũng rất quan trọng để giúp cho cành đào trông đẹp mắt hơn. Bạn có thể chọn các lọ thủy tinh trong suốt để thấy được dáng hoa đẹp, hoặc các lọ gốm sứ, men màu để tạo điểm nhấn sang trọng cho không gian. Lọ cắm cần có chiều cao phù hợp để giữ cho cành đào thẳng và cân đối.
                            <br />
                            <br />
                            <strong>3. Cắt Tỉa Cành Đào Đúng Cách</strong>
                            <br />
                            <br />
                            Để cắm hoa đào đẹp, bạn cần phải cắt tỉa cành hoa một cách hợp lý. Dùng kéo cắt những cành con nhỏ, không đều để hoa được tỏa ra đều đặn. Hãy cắt cành hoa theo độ dài phù hợp với lọ cắm, tránh để cành quá dài hoặc quá ngắn. Cắt chéo gốc cành để hoa dễ hút nước hơn và giữ được tươi lâu.
                            <br />
                            <br />
                            <strong>4. Cắm Hoa Đào Theo Từng Bước</strong>
                            <br />
                            <br />
                            - Bước 1: Đặt các cành hoa đào lớn nhất vào giữa lọ trước, để tạo điểm nhấn và giúp các cành nhỏ hơn được phân bổ đều xung quanh.
                            <br />
                            - Bước 2: Sau đó, thêm các cành nhỏ hơn vào các vị trí xung quanh, hướng ra ngoài để tạo cảm giác tự nhiên và đầy sức sống.
                            <br />
                            - Bước 3: Nếu bạn muốn bình hoa thêm phần sinh động, có thể kết hợp các loại hoa khác như hoa cúc vàng, hoa mai hay những cành lá xanh tươi để tạo sự hài hòa và màu sắc đa dạng.
                            <br />
                            <br />
                            <strong>5. Tưới Nước Và Chăm Sóc Hoa Đào</strong>
                            <br />
                            <br />
                            Hoa đào cần được tưới nước đều đặn để giữ cho cành hoa tươi lâu. Mỗi ngày, hãy thay nước trong lọ để tránh nước bị bẩn và làm ảnh hưởng đến độ tươi của hoa. Nếu thấy hoa đào bắt đầu tàn, bạn có thể cắt bớt những bông hoa đã héo để giúp hoa nở đẹp hơn.
                            <br />
                            <br />
                            <strong>6. Đặt Hoa Đào Ở Vị Trí Đẹp Trong Nhà</strong>
                            <br />
                            <br />
                            Sau khi hoàn thành việc cắm hoa đào, bạn nên đặt bình hoa ở những vị trí nổi bật trong nhà để tôn lên vẻ đẹp của nó. Bạn có thể đặt hoa đào trên bàn thờ tổ tiên, phòng khách, hay những góc không gian cần điểm nhấn. Hoa đào không chỉ làm đẹp không gian mà còn mang lại sự may mắn, tài lộc trong suốt năm mới.
                            <br />
                            <br />
                            <strong>7. Một Số Mẹo Cắm Hoa Đào Đẹp Lạ</strong>
                            <br />
                            <br />
                            - Bạn có thể thử tạo hình cho bình hoa đào theo dạng lãng mạn, như hình trái tim hoặc hình chóp để tăng thêm phần độc đáo cho không gian Tết.
                            <br />
                            - Để tăng phần sang trọng, có thể sử dụng thêm các phụ kiện như ruy băng đỏ, hay một vài chi tiết kim tuyến, tạo hiệu ứng long lanh.
                            <br />
                            <br />
                            Cắm hoa đào ngày Tết là một nghệ thuật, mang lại không gian ấm cúng, rực rỡ và đầy ý nghĩa. Hãy thử cắm một bình hoa đào tuyệt đẹp cho mùa Tết này để đón chào năm mới với niềm vui và may mắn.
                        </div>
                    </div>}
                    {this.props.propschosenews == "new10" &&      <div className='indochinaqueen-main-blog-header-navbar'>
                        <div className='blog-up'>
                            <div className='blog-up-box1'>
                                <div className='blog-up-list1'>LÊ HUỲNH THẢO NGUYÊN</div>
                                <div className='blog-up-list2'> NGÀY ĐĂNG: 12/12/2024</div>
                            </div>

                            <div className='blog-up-list3'>BACK TO BLOG</div>
                        </div>
                        <div className='blog-title'>Review Tàu IndochinaQueen: Trải Nghiệm Du Thuyền Sang Trọng trên Sông Sài Gòn</div>
                        <div className='blog-body'>
                            Tàu IndochinaQueen là một trong những lựa chọn hàng đầu khi du khách muốn trải nghiệm một chuyến du thuyền sang trọng và thư giãn trên sông Sài Gòn. Với thiết kế đẳng cấp, dịch vụ tuyệt vời và tầm nhìn đẹp mắt, tàu IndochinaQueen mang đến cho du khách những phút giây thư giãn tuyệt vời giữa không gian sông nước của thành phố Hồ Chí Minh. Cùng khám phá chi tiết về tàu IndochinaQueen trong bài viết dưới đây.
                            <br />
                            <br />
                            <strong>1. Tổng Quan Về Tàu IndochinaQueen</strong>
                            <br />
                            <br />
                            Tàu IndochinaQueen là một du thuyền cao cấp chuyên cung cấp dịch vụ tham quan sông Sài Gòn, phục vụ cho các chuyến du lịch, tiệc tùng, và sự kiện đặc biệt. Tàu có thiết kế hiện đại, sang trọng, với các khu vực tiện nghi như phòng VIP, nhà hàng, quầy bar và khu vực ngoài trời thoáng đãng. Du khách sẽ được trải nghiệm không gian ấm cúng và sang trọng, đồng thời thưởng thức cảnh đẹp của thành phố từ trên cao.
                            <br />
                            <br />
                            <strong>2. Những Trải Nghiệm Tuyệt Vời Trên Tàu IndochinaQueen</strong>
                            <br />
                            <br />
                            Một chuyến đi trên tàu IndochinaQueen sẽ đưa bạn đến những trải nghiệm tuyệt vời mà khó có thể tìm thấy ở những phương tiện khác. Đặc biệt, trong suốt hành trình, bạn sẽ được thưởng thức các món ăn đặc sản với hương vị độc đáo từ các đầu bếp tài ba. Dưới đây là một số trải nghiệm mà du khách không thể bỏ qua:
                            <ul>
                                <li><strong>Chuyến tham quan sông Sài Gòn:</strong> Du khách có thể chiêm ngưỡng vẻ đẹp của thành phố từ trên tàu, tận hưởng không khí trong lành và ngắm cảnh hoàng hôn tuyệt đẹp trên sông.</li>
                                <li><strong>Tiệc Buffet Đặc Sắc:</strong> Với thực đơn phong phú, đa dạng từ món Á đến món Âu, IndochinaQueen mang đến cho du khách những bữa tiệc ngon miệng, phù hợp với mọi khẩu vị.</li>
                                <li><strong>Chương Trình Giải Trí:</strong> Tàu cũng tổ chức các chương trình giải trí như nhạc sống, DJ, múa lửa, mang lại một không khí lễ hội sôi động cho du khách.</li>
                            </ul>
                            <br />
                            <br />
                            <strong>3. Dịch Vụ Tuyệt Vời Của Tàu IndochinaQueen</strong>
                            <br />
                            <br />
                            Một trong những yếu tố khiến IndochinaQueen nổi bật chính là dịch vụ chuyên nghiệp và thân thiện. Nhân viên trên tàu luôn sẵn sàng hỗ trợ và phục vụ du khách một cách tận tình. Chất lượng phục vụ của tàu IndochinaQueen luôn được khách hàng đánh giá cao nhờ vào sự chu đáo và tinh tế trong từng chi tiết.
                            <br />
                            <br />
                            <strong>4. Tại Sao Nên Chọn Tàu IndochinaQueen?</strong>
                            <br />
                            <br />
                            - **Vị trí lý tưởng**: Tàu khởi hành từ trung tâm thành phố Hồ Chí Minh, giúp du khách dễ dàng tiếp cận mà không phải di chuyển xa.
                            <br />
                            - **Không gian sang trọng**: Tàu được thiết kế theo phong cách hiện đại, tạo cảm giác thoải mái và sang trọng cho du khách.
                            <br />
                            - **Chất lượng dịch vụ cao**: Từ đội ngũ nhân viên đến chất lượng món ăn, mọi thứ đều được chăm chút để mang đến trải nghiệm tốt nhất.
                            <br />
                            - **Hoạt động giải trí phong phú**: Chương trình giải trí trên tàu giúp chuyến đi của bạn trở nên vui nhộn và sôi động hơn.
                            <br />
                            <br />
                            <strong>5. Lời Khuyên Khi Du Lịch Tàu IndochinaQueen</strong>
                            <br />
                            <br />
                            Để có trải nghiệm du thuyền tuyệt vời trên tàu IndochinaQueen, bạn nên đặt vé trước, đặc biệt trong mùa cao điểm để đảm bảo có chỗ. Hãy chọn các gói dịch vụ phù hợp với nhu cầu của bạn như tiệc buffet, sự kiện tổ chức hoặc tour tham quan sông Sài Gòn.
                            <br />
                            <br />
                            <strong>6. Đánh Giá và Phản Hồi Của Khách Hàng</strong>
                            <br />
                            <br />
                            Khách hàng đã từng trải nghiệm dịch vụ trên tàu IndochinaQueen đều dành những lời khen ngợi về chất lượng dịch vụ và trải nghiệm tuyệt vời trên tàu. Nhiều người cho rằng đây là một lựa chọn tuyệt vời cho những ai muốn có một kỳ nghỉ thư giãn và đẳng cấp ngay giữa lòng thành phố Hồ Chí Minh.
                            <br />
                            <br />
                            <strong>7. Kết Luận</strong>
                            <br />
                            <br />
                            Tàu IndochinaQueen là sự lựa chọn hoàn hảo cho những ai tìm kiếm một trải nghiệm du thuyền sang trọng và khác biệt tại thành phố Hồ Chí Minh. Với không gian đẹp, dịch vụ tuyệt vời, và những hoạt động giải trí thú vị, chuyến đi trên tàu sẽ mang đến cho bạn những kỷ niệm khó quên. Nếu bạn muốn khám phá vẻ đẹp của sông Sài Gòn trong một không gian sang trọng, đừng bỏ qua tàu IndochinaQueen!
                        </div>
                    </div>}
                    {this.props.propschosenews == "new11" &&      <div className='indochinaqueen-main-blog-header-navbar'>
                        <div className='blog-up'>
                            <div className='blog-up-box1'>
                                <div className='blog-up-list1'>LÊ HUỲNH THẢO NGUYÊN</div>
                                <div className='blog-up-list2'> NGÀY ĐĂNG: 12/12/2024</div>
                            </div>

                            <div className='blog-up-list3'>BACK TO BLOG</div>
                        </div>
                        <div className='blog-title'>Tàu IndochinaQueen: Khám Phá Trải Nghiệm Du Thuyền Sang Trọng Trên Sông Sài Gòn</div>
                        <div className='blog-body'>
                            Tàu IndochinaQueen là lựa chọn lý tưởng cho những ai mong muốn trải nghiệm một chuyến du thuyền sang trọng trên sông Sài Gòn. Du khách sẽ được đắm chìm trong không gian xa hoa, thưởng thức ẩm thực đỉnh cao, và tham gia các hoạt động giải trí sôi động. Hãy cùng tìm hiểu lý do tại sao Tàu IndochinaQueen luôn là sự lựa chọn hàng đầu cho những chuyến du lịch sông nước sang trọng tại thành phố Hồ Chí Minh!
                            <br />
                            <br />
                            <strong>1. Tại Sao Chọn Tàu IndochinaQueen?</strong>
                            <br />
                            <br />
                            Tàu IndochinaQueen không chỉ là một phương tiện di chuyển mà còn là một trải nghiệm du lịch độc đáo. Du khách sẽ được tận hưởng dịch vụ chất lượng cao trong một không gian hiện đại và sang trọng. Từ phòng VIP, nhà hàng cao cấp, quầy bar đến khu vực ngoài trời thoáng đãng, mọi chi tiết đều được thiết kế để mang đến cho bạn những phút giây thư giãn tuyệt vời trên sông Sài Gòn.
                            <br />
                            <br />
                            <strong>2. Những Trải Nghiệm Đặc Sắc Khi Tham Gia Chuyến Du Thuyền Tàu IndochinaQueen</strong>
                            <br />
                            <br />
                            Một chuyến đi trên Tàu IndochinaQueen không chỉ là chuyến tham quan, mà là một hành trình đầy trải nghiệm:
                            <ul>
                                <li><strong>Tham Quan Sông Sài Gòn:</strong> Du khách có cơ hội chiêm ngưỡng toàn cảnh thành phố Hồ Chí Minh từ một góc nhìn khác biệt, thưởng thức vẻ đẹp huyền bí của hoàng hôn trên sông Sài Gòn.</li>
                                <li><strong>Tiệc Buffet Sang Trọng:</strong> Được phục vụ các món ăn từ đầu bếp tài ba, bạn sẽ được thưởng thức các món ăn Á – Âu đa dạng, phù hợp với mọi khẩu vị.</li>
                                <li><strong>Chương Trình Giải Trí:</strong> Các chương trình giải trí sôi động, từ nhạc sống, DJ đến múa lửa, giúp chuyến đi của bạn thêm phần thú vị và không kém phần lãng mạn.</li>
                            </ul>
                            <br />
                            <br />
                            <strong>3. Dịch Vụ Chuyên Nghiệp Của Tàu IndochinaQueen</strong>
                            <br />
                            <br />
                            Tàu IndochinaQueen tự hào về dịch vụ tuyệt vời, luôn đặt sự hài lòng của khách hàng lên hàng đầu. Đội ngũ nhân viên chuyên nghiệp và tận tình luôn sẵn sàng đáp ứng mọi yêu cầu của du khách, mang đến một trải nghiệm không thể quên.
                            <br />
                            <br />
                            <strong>4. Những Lợi Ích Khi Chọn Tàu IndochinaQueen</strong>
                            <br />
                            <br />
                            - **Vị trí trung tâm**: Tàu khởi hành từ trung tâm thành phố Hồ Chí Minh, rất thuận tiện cho du khách di chuyển mà không mất nhiều thời gian.
                            <br />
                            - **Không gian sang trọng**: Mỗi chi tiết trên tàu đều được thiết kế để mang đến không gian thoải mái, hiện đại và sang trọng.
                            <br />
                            - **Dịch vụ đẳng cấp**: Từ các món ăn đến chương trình giải trí, mọi thứ đều được chuẩn bị kỹ lưỡng để mang đến trải nghiệm tuyệt vời.
                            <br />
                            - **Đội ngũ phục vụ chuyên nghiệp**: Nhân viên trên tàu luôn sẵn sàng chăm sóc khách hàng với thái độ thân thiện và nhiệt tình.
                            <br />
                            <br />
                            <strong>5. Lời Khuyên Khi Du Lịch Tàu IndochinaQueen</strong>
                            <br />
                            <br />
                            Để có một chuyến đi suôn sẻ, bạn nên đặt vé trước, đặc biệt vào mùa cao điểm. Ngoài ra, hãy chọn các gói dịch vụ phù hợp với nhu cầu của bạn để tối đa hóa trải nghiệm của mình, từ tiệc buffet đến các tour tham quan đặc biệt.
                            <br />
                            <br />
                            <strong>6. Phản Hồi Từ Khách Hàng</strong>
                            <br />
                            <br />
                            Khách hàng đã từng trải nghiệm tàu IndochinaQueen đều tỏ ra rất hài lòng với chất lượng dịch vụ và không gian tuyệt vời. Nhiều người cho rằng chuyến đi trên tàu là một kỷ niệm khó quên, mang lại cảm giác thư giãn và thanh bình giữa nhịp sống hối hả của thành phố Hồ Chí Minh.
                            <br />
                            <br />
                            <strong>7. Kết Luận: Trải Nghiệm Du Thuyền Sang Trọng Trên Sông Sài Gòn</strong>
                            <br />
                            <br />
                            Tàu IndochinaQueen chính là sự lựa chọn hoàn hảo cho những ai muốn tìm kiếm một chuyến du thuyền sang trọng tại thành phố Hồ Chí Minh. Với thiết kế hiện đại, dịch vụ chuyên nghiệp và các hoạt động giải trí đa dạng, chuyến đi trên tàu IndochinaQueen chắc chắn sẽ mang đến cho bạn những kỷ niệm đáng nhớ. Hãy cùng khám phá vẻ đẹp của sông Sài Gòn trong không gian tuyệt vời này!
                        </div>
                    </div>}
                    {this.props.propschosenews == "new12" &&      <div className='indochinaqueen-main-blog-header-navbar'>
                        <div className='blog-up'>
                            <div className='blog-up-box1'>
                                <div className='blog-up-list1'>LÊ HUỲNH THẢO NGUYÊN</div>
                                <div className='blog-up-list2'> NGÀY ĐĂNG: 12/12/2024</div>
                            </div>
                            <div className='blog-up-list3'>BACK TO BLOG</div>
                        </div>
                        <div className='blog-title'>Top Các Tàu Du Lịch Sài Gòn Được Booking Nhiều Nhất: IndochinaQueen & Hoàn Ngọc Viễn Đông</div>
                        <div className='blog-body'>
                            Nếu bạn đang tìm kiếm một chuyến du thuyền sang trọng trên sông Sài Gòn, tàu IndochinaQueen và Hoàn Ngọc Viễn Đông là hai sự lựa chọn hàng đầu được du khách yêu thích. Cùng khám phá lý do tại sao những tàu này luôn nằm trong top được booking nhiều nhất tại thành phố Hồ Chí Minh.
                            <br />
                            <br />
                            <strong>1. Tại Sao Tàu IndochinaQueen Là Lựa Chọn Hàng Đầu?</strong>
                            <br />
                            <br />
                            Tàu IndochinaQueen luôn là sự lựa chọn hàng đầu của du khách yêu thích du lịch sông nước sang trọng tại Hồ Chí Minh. Với không gian sang trọng, dịch vụ đẳng cấp và các hoạt động giải trí hấp dẫn, tàu IndochinaQueen đã chinh phục được trái tim của rất nhiều du khách.
                            <ul>
                                <li><strong>Khám Phá Sông Sài Gòn:</strong> Chuyến tham quan trên tàu IndochinaQueen mang đến góc nhìn độc đáo về thành phố, đặc biệt vào lúc hoàng hôn, khi những ánh sáng mờ ảo phản chiếu trên mặt nước sông Sài Gòn.</li>
                                <li><strong>Tiệc Buffet Đẳng Cấp:</strong> Với các món ăn Á – Âu phong phú, bạn sẽ có cơ hội thưởng thức những bữa tiệc ngon miệng giữa không gian sang trọng.</li>
                                <li><strong>Chương Trình Giải Trí Sôi Động:</strong> Tàu tổ chức các chương trình giải trí hấp dẫn như nhạc sống, DJ, múa lửa, mang đến một không khí vui vẻ và lãng mạn cho du khách.</li>
                            </ul>
                            <br />
                            <br />
                            <strong>2. Hoàn Ngọc Viễn Đông: Chuyến Đi Dành Cho Những Ai Thích Khám Phá Hồ Chí Minh Theo Cách Độc Đáo</strong>
                            <br />
                            <br />
                            Bên cạnh tàu IndochinaQueen, Hoàn Ngọc Viễn Đông cũng là một lựa chọn tuyệt vời dành cho những ai yêu thích khám phá sông nước Hồ Chí Minh. Với những tiện nghi hiện đại, phong cách phục vụ chuyên nghiệp và các dịch vụ đẳng cấp, Hoàn Ngọc Viễn Đông thu hút du khách bởi không gian mở, thư giãn và rất nhiều hoạt động thú vị.
                            <ul>
                                <li><strong>Chuyến Tham Quan Đặc Sắc:</strong> Được phục vụ các tour du lịch trên sông Sài Gòn với các hướng dẫn viên chuyên nghiệp, bạn sẽ có cơ hội tìm hiểu thêm về văn hóa, lịch sử của thành phố Hồ Chí Minh.</li>
                                <li><strong>Ẩm Thực Đỉnh Cao:</strong> Hoàn Ngọc Viễn Đông nổi tiếng với các bữa tiệc buffet đa dạng, phục vụ từ các món đặc sản Việt Nam đến món ăn quốc tế.</li>
                                <li><strong>Không Gian Thư Giãn:</strong> Tàu được thiết kế với không gian mở, mang đến cảm giác thư thái và gần gũi với thiên nhiên, là nơi lý tưởng để thưởng thức cảnh đẹp sông nước.</li>
                            </ul>
                            <br />
                            <br />
                            <strong>3. Những Lý Do Tàu IndochinaQueen & Hoàn Ngọc Viễn Đông Được Booking Nhiều Nhất</strong>
                            <br />
                            <br />
                            - **Vị trí thuận tiện:** Cả hai tàu đều khởi hành từ trung tâm thành phố Hồ Chí Minh, dễ dàng tiếp cận mà không mất quá nhiều thời gian di chuyển.
                            <br />
                            - **Dịch vụ chất lượng cao:** Cả IndochinaQueen và Hoàn Ngọc Viễn Đông đều cung cấp dịch vụ tận tình, chu đáo từ đội ngũ nhân viên chuyên nghiệp.
                            <br />
                            - **Không gian sang trọng:** Cả hai tàu đều có không gian sang trọng, thoải mái, với các tiện nghi hiện đại, phù hợp cho những ai muốn tận hưởng một chuyến đi đẳng cấp.
                            <br />
                            - **Chương trình giải trí đa dạng:** Du khách có thể tham gia vào nhiều hoạt động giải trí từ nhạc sống, DJ đến các chương trình múa, tạo nên không khí vui nhộn cho chuyến đi.
                            <br />
                            <br />
                            <strong>4. Kết Luận: Tại Sao Bạn Nên Chọn Tàu IndochinaQueen & Hoàn Ngọc Viễn Đông?</strong>
                            <br />
                            <br />
                            Cả hai tàu IndochinaQueen và Hoàn Ngọc Viễn Đông đều là những lựa chọn lý tưởng cho những ai muốn tìm kiếm một chuyến du thuyền sang trọng và thư giãn trên sông Sài Gòn. Với dịch vụ đẳng cấp, không gian đẹp mắt và các chương trình giải trí hấp dẫn, đây chắc chắn là những tàu du lịch hàng đầu mà bạn không nên bỏ qua khi du lịch tại Hồ Chí Minh.
                        </div>
                    </div>}

















                    {this.state.news2 && <div className='indochinaqueen-main-blog-header-navbar'>
                        <div className='blog-up'>
                            <div className='blog-up-box1'>
                                <div className='blog-up-list1'>NGUYỄN VĂN ANH</div>
                                <div className='blog-up-list2'>NGÀY ĐĂNG:13/12/2024</div>
                            </div>

                            <div className='blog-up-list3'>BACK TO BLOG</div>
                        </div>

                        <div className='blog-title'>Vietnamese Delights: Top 5 Street Food Gems in Hanoi</div>

                        <div className='blog-body'>
                            Hanoi, the heart of Vietnamese cuisine, offers an array of street food delights that captivate locals and tourists alike. Let’s explore five iconic eateries that embody the essence of Hanoi’s culinary heritage.
                            <br />
                            <br />

                            <b>1. Pho Thin</b>
                            <br />
                            <br />
                            Address: 13 Lo Duc Street, Hai Ba Trung District
                            <br />
                            Hours: 6:00 a.m. - 9:00 p.m. daily
                            <br />

                            Known for its smoky, stir-fried beef pho, Pho Thin is a must-visit spot. The beef is quickly stir-fried before being added to the noodle soup, giving it a unique smoky flavor. The broth is rich and aromatic, drawing pho enthusiasts from all over the city.
                            <br />

                            Prices start at VND60,000 ($2.40) per bowl.
                            <br />
                            <br />

                            <strong>2. Bun Cha Huong Lien</strong>
                            <br />
                            <br />
                            Address: 24 Le Van Huu Street, Hai Ba Trung District
                            <br />
                            Hours: 10:00 a.m. - 8:00 p.m. daily
                            <br />
                            <img className='img-blog' src='https://i1-dulich.vnecdn.net/2024/12/11/bun-cha-huong-lien.jpg?w=680&h=0&q=100&dpr=2&fit=crop' alt='Bun Cha Huong Lien'></img>
                            <br />
                            <br />

                            Popularly known as "Obama Bun Cha" after the former U.S. President’s visit, this eatery serves grilled pork patties and sliced pork belly in a tangy dipping sauce, paired with rice noodles and fresh herbs. The balanced flavors make it a favorite among locals and tourists alike.
                            <br />

                            Prices range from VND50,000 to VND80,000 ($2 - $3.20).
                            <br />
                            <br />

                            <strong>3. Banh Cuon Ba Hoanh</strong>
                            <br />
                            <br />
                            Address: 66 To Hien Thanh Street, Hai Ba Trung District
                            <br />
                            Hours: 6:00 a.m. - 10:00 p.m. daily
                            <br />

                            This family-run eatery specializes in banh cuon, delicate steamed rice rolls filled with minced pork and wood ear mushrooms. Topped with fried shallots and served with a sweet-sour dipping sauce, the dish embodies the simplicity and sophistication of Hanoi cuisine.
                            <br />

                            Prices start at VND30,000 ($1.20) per portion.
                            <br />
                            <br />

                            <strong>4. Cha Ca La Vong</strong>
                            <br />
                            <br />
                            Address: 14 Cha Ca Street, Hoan Kiem District
                            <br />
                            Hours: 11:00 a.m. - 10:00 p.m. daily
                            <br />
                            <img className='img-blog' src='https://i1-dulich.vnecdn.net/2024/12/11/cha-ca-la-vong.jpg?w=680&h=0&q=100&dpr=2&fit=crop' alt='Cha Ca La Vong'></img>
                            <br />
                            <br />

                            This iconic dish features turmeric-marinated fish, pan-fried with dill and green onions. Customers can mix the fish with rice noodles, roasted peanuts, and shrimp paste for an unforgettable taste experience. Cha Ca La Vong is one of Hanoi’s oldest culinary institutions.
                            <br />

                            Prices start at VND120,000 ($5) per serving.
                            <br />
                            <br />

                            <strong>5. Xoi Yen</strong>
                            <br />
                            <br />
                            Address: 35B Nguyen Huu Huan Street, Hoan Kiem District
                            <br />
                            Hours: 6:00 a.m. - 10:00 p.m. daily
                            <br />

                            This eatery specializes in sticky rice dishes with various toppings, including shredded chicken, pork floss, Chinese sausage, and fried shallots. The sticky rice is perfectly cooked, offering a satisfying and budget-friendly meal.
                            <br />

                            Prices range from VND20,000 to VND50,000 ($0.80 - $2).
                            <br />
                            <br />
                        </div>
                    </div>
                    }
                    <div className='indochinaqueen-body-box5'>
                        <div className='indochinaqueen-body-box5-list1'>INDOCHINA QUEEN BLOG</div>
                        <div className='indochinaqueen-body-box5-list2'>
                            <div className='indochinaqueen-body-box5-list2-blog1'>
                                <div className='blog1-img'><img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img></div>
                                <div className='blog1-text'>
                                    <div className='blog1-text-img1'>Dinner cruise on the Seine
                                        Paris Seine La Marina
                                        <div className='blog1-text-img2'> Boat trip in Paris: the capital opens its doors to you</div>
                                    </div>

                                </div>

                            </div>
                            <div className='indochinaqueen-body-box5-list2-blog2'>
                                <div className='blog1-img'><img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img></div>
                                <div className='blog1-text'>
                                    <div className='blog1-text-img1'>Dinner cruise on the Seine
                                        Paris Seine La Marina
                                        <div className='blog1-text-img2'> Boat trip in Paris: the capital opens its doors to you</div>
                                    </div>

                                </div>

                            </div>
                            <div className='indochinaqueen-body-box5-list2-blog3'>
                                <div className='blog1-img'><img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img></div>
                                <div className='blog1-text'>
                                    <div className='blog1-text-img1'>Dinner cruise on the Seine
                                        Paris Seine La Marina
                                        <div className='blog1-text-img2'> Boat trip in Paris: the capital opens its doors to you</div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className='indochinaqueen-body-box5-list3'>READ MORE </div>


                    </div>
                    <div className='footer-blog'>
                        <Footer></Footer>


                    </div>



                </div>



            </div>





        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        propschosenews: state.admin.chosenews


    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blognews);
