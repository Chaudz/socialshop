"use client";
import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Image from "next/image";
import FlashSaleBanner from "./FlashSaleBanner";

const serviceData = [
  // PREMIUM YOUTUBE
  {
    logo: "https://taphoammo.net/img/nang-cap-tai-khoan-youtube-premium-chinh-chu-uy-tin_658184.png",
    name: "Premium Youtube",
    plans: [
      {
        type: "Premium",
        size: "",
        duration: "1 tháng",
        price: "35.000",
        note: "Khách gửi email cho shop",
        warranty: true,
      },
      {
        type: "Premium",
        size: "",
        duration: "3 tháng",
        price: "115.000",
        note: "Khách gửi email cho shop",
        warranty: true,
      },
      {
        type: "Premium",
        size: "",
        duration: "6 tháng",
        price: "200.000",
        note: "Khách gửi email cho shop",
        warranty: true,
      },
      {
        type: "Premium",
        size: "",
        duration: "12 tháng",
        price: "350.000",
        note: "Khách gửi email cho shop",
        warranty: true,
      },
    ],
  },
  // VIEON (VIP, HBO, ALL ACCESS)
  {
    logo: "https://yt3.googleusercontent.com/88OS-xU2yTLWMLftuV_2Lfsj0_OEr_NfrGhDUOLL6ViWtAjnV6HUrpJSPdTH5IgwJSGxnNNa8g0=s900-c-k-c0x00ffffff-no-rj",
    name: "VieON",
    plans: [
      {
        type: "VIP",
        size: "",
        duration: "1 tháng",
        price: "35.000",
        note: "Dùng riêng profile",
        warranty: true,
      },
      {
        type: "VIP",
        size: "",
        duration: "3 tháng",
        price: "90.000",
        note: "Dùng riêng profile",
        warranty: true,
      },
      {
        type: "VIP",
        size: "",
        duration: "6 tháng (CC)",
        price: "219.000",
        note: "Nâng Cấp Chính chủ",
        warranty: true,
      },
      {
        type: "VIP",
        size: "",
        duration: "12 tháng (CC)",
        price: "399.000",
        note: "Nâng Cấp Chính chủ",
        warranty: true,
      },
      {
        type: "HBO",
        size: "",
        duration: "1 tháng",
        price: "50.000",
        note: "Dùng riêng profile",
        warranty: true,
      },
      {
        type: "HBO",
        size: "",
        duration: "3 tháng",
        price: "139.000",
        note: "Dùng riêng profile",
        warranty: true,
      },
      {
        type: "HBO",
        size: "",
        duration: "6 tháng",
        price: "239.000",
        note: "Dùng riêng profile",
        warranty: true,
      },
      {
        type: "HBO",
        size: "",
        duration: "12 tháng",
        price: "399.000",
        note: "Dùng riêng profile",
        warranty: true,
      },
      {
        type: "All Access",
        size: "",
        duration: "3 tháng (CC)",
        price: "399.000",
        note: "Nâng Cấp Chính chủ",
        warranty: true,
      },
      {
        type: "All Access",
        size: "",
        duration: "6 tháng (CC)",
        price: "699.000",
        note: "Nâng Cấp Chính chủ",
        warranty: true,
      },
    ],
  },
  // CANVA (EDU | PRO)
  {
    logo: "https://www.d-id.com/wp-content/uploads/2023/04/1656733637logo-canva-png.png",
    name: "Canva (EDU | PRO)",
    plans: [
      {
        type: "Edu",
        size: "",
        duration: "6 tháng",
        price: "39.000",
        note: "Gửi mail cho shop , 5p có ngay",
        warranty: true,
      },
      {
        type: "Edu",
        size: "",
        duration: "12 tháng",
        price: "69.000",
        note: "Gửi mail cho shop , 5p có ngay",
        warranty: true,
      },
      {
        type: "Edu",
        size: "",
        duration: "24 tháng",
        price: "119.000",
        note: "Gửi mail cho shop , 5p có ngay",
        warranty: true,
      },
      {
        type: "Edu",
        size: "",
        duration: "36 tháng",
        price: "199.000",
        note: "Gửi mail cho shop , 5p có ngay",
        warranty: true,
      },
      {
        type: "Edu (Farm)",
        size: "",
        duration: "12 tháng",
        price: "859.000",
        note: "Quản Trị Farm (Có thể add 500 user)",
        warranty: true,
      },
      {
        type: "Pro",
        size: "",
        duration: "12 tháng",
        price: "169.000",
        note: "Gửi mail cho shop , 5p có ngay",
        warranty: true,
      },
    ],
  },
  // GOOGLE ONE
  {
    logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/36/04/84/360484f9-610d-64e6-56e7-d6bf057772ed/logo_one_color-0-1x_U007emarketing-0-0-0-7-0-0-0-0-85-220-0.png/1200x630wa.png",
    name: "Google One (Gói mới)",
    plans: [
      {
        type: "",
        size: "100GB",
        duration: "12 tháng",
        price: "99.000",
        note: "Gửi mail cho shop , 5p có ngay",
        warranty: true,
      },
      {
        type: "",
        size: "200GB",
        duration: "12 tháng",
        price: "149.000",
        note: "Gửi mail cho shop , 5p có ngay",
        warranty: true,
      },
      {
        type: "",
        size: "500GB",
        duration: "12 tháng",
        price: "199.000",
        note: "Gửi mail cho shop , 5p có ngay",
        warranty: true,
      },
      {
        type: "",
        size: "1TB",
        duration: "12 tháng",
        price: "269.000",
        note: "Gửi mail cho shop , 5p có ngay",
        warranty: true,
      },
      {
        type: "",
        size: "2TB",
        duration: "12 tháng",
        price: "339.000",
        note: "Gửi mail cho shop , 5p có ngay",
        warranty: true,
      },
      {
        type: "",
        size: "5TB",
        duration: "12 tháng",
        price: "469.000",
        note: "Gửi mail cho shop , 5p có ngay",
        warranty: true,
      },
      {
        type: "2TB (Farm)",
        size: "2TB",
        duration: "12 tháng",
        price: "469.000",
        note: "Cấp Acc tạo farm , Thêm được 5 thành viên",
        warranty: true,
      },
    ],
  },
  // CHAT GPT
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHed2NToiyGmMYzoEA0xRYv5nMkPK_kN1Mw&s",
    name: "ChatGPT",
    plans: [
      {
        type: "Team",
        size: "",
        duration: "1 tháng",
        price: "89.000",
        note: "Gửi mail cho shop , 5p có ngay\nTính năng giống plus (Riêng tư, không dùng chung, người khác không soi được dữ liệu)",
        warranty: true,
      },
      {
        type: "Plus Chung",
        size: "",
        duration: "1 tháng",
        price: "129.000",
        note: "Shop gửi tài khoản, không đổi thông tin",
        warranty: true,
      },
      {
        type: "Plus Chính chủ",
        size: "",
        duration: "1 tháng",
        price: "420.000",
        note: "Cần tên đăng nhập và mật khẩu",
        warranty: true,
      },
    ],
  },
  // MICROSOFT 365
  {
    logo: "https://cloud-web-cms-beta.s3.cloud.cmctelecom.vn/Microsoft_365_khac_gi_Microsoft_Office_2_9c659d8f71.png",
    name: "Microsoft 365",
    plans: [
      {
        type: "Premium",
        size: "",
        duration: "12 tháng",
        price: "130.000",
        note: "Gửi mail mircosoft cho shop , 5p done",
        warranty: true,
      },
      {
        type: "Farm Cấp Sẵn",
        size: "",
        duration: "12 tháng",
        price: "599.000",
        note: "Shop gửi tài khoản chủ farm\nKhách được đổi avatar, tên, email KP\nLưu ý: Không đổi pass để shop hằng tháng gia hạn",
        warranty: true,
      },
      {
        type: "Farm Chính Chủ",
        size: "",
        duration: "12 tháng",
        price: "630.000",
        note: "Gửi mail cho shop nâng lên Family Premium\nKhách được đổi avatar, tên, email KP\nLưu ý: Không đổi pass để shop hằng tháng gia hạn",
        warranty: true,
      },
      {
        type: "A3",
        size: "",
        duration: "Vĩnh Viễn",
        price: "199.000",
        note: "Shop gửi tài khoản, khách đổi pass sử dụng. Bonus 100GB OneDriver",
        warranty: true,
      },
      {
        type: "E5",
        size: "",
        duration: "Vĩnh Viễn",
        price: "239.000",
        note: "Shop gửi tài khoản, khách đổi pass sử dụng. Bonus 1TB OneDriver",
        warranty: true,
      },
    ],
  },
  // DOULINGO
  {
    logo: "https://phillip.vn/wp-content/uploads/2024/06/duolingo_png.png",
    name: "Doulingo",
    plans: [
      {
        type: "Super",
        size: "",
        duration: "12 tháng",
        price: "179.000",
        note: "Add family, gửi username Doulingo",
        warranty: true,
      },
      {
        type: "Farm Chính Chủ",
        size: "",
        duration: "12 tháng",
        price: "699.000",
        note: "Cần tên đăng nhập và mật khẩu\nNâng cấp family (6 member)",
        warranty: true,
      },
    ],
  },
  // ELSA SPEAK
  {
    logo: "https://bochickenstore.com/storage/large/ban-tai-khoan-elsa-s_1611917757.jpg",
    name: "Elsa Speak",
    plans: [
      {
        type: "Pro",
        size: "",
        duration: "12 tháng",
        price: "489.000",
        note: "Cần tên đăng nhậ và mật khẩu\nNâng cấp từ tài khoản Free\nĐăng nhập được 2 thiết bị\nKhông nâng cấp nếu log bằng FB/GG",
        warranty: true,
      },
      {
        type: "Premium",
        size: "",
        duration: "3 tháng",
        price: "759.000",
        note: "Shop gửi tài khoản, không đổi thông tin",
        warranty: true,
      },
      {
        type: "Premium",
        size: "",
        duration: "12 tháng",
        price: "1.590.000",
        note: "Cần tên đăng nhập và mật khẩu",
        warranty: true,
      },
    ],
  },
  // NETFLIX
  {
    logo: "https://cellphones.com.vn/sforum/wp-content/uploads/2021/06/d80646d0-4429-11eb-9dce-47010f84228e.jpg",
    name: "Netflix",
    plans: [
      {
        type: "Premium",
        size: "",
        duration: "1 tháng",
        price: "80.000",
        note: "Profile Dùng Riêng biệt có mã riêng",
        warranty: true,
      },
    ],
  },
  // TINDER
  {
    logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/fe/94/7c/fe947c06-eda7-bf38-61c1-9e1df1946098/AppIcon-0-0-1x_U007emarketing-0-0-0-8-0-0-sRGB-0-85-220.png/1200x630wa.png",
    name: "Tinder",
    plans: [
      {
        type: "Gold",
        size: "",
        duration: "6 tháng",
        price: "350.000",
        note: "Tài Khoàn đã có tích xanh (Avatar có mặt)\ngửi sđt tinder",
        warranty: true,
      },
      {
        type: "Platinum",
        size: "",
        duration: "12 tháng",
        price: "499.000",
        note: "Tài Khoàn đã có tích xanh (Avatar có mặt)\ngửi sđt tinder",
        warranty: true,
      },
    ],
  },
  // FPT PLAY
  //   {
  //     logo: "",
  //     name: "FPT Play",
  //     plans: [
  //       {
  //         type: "SMax",
  //         size: "",
  //         duration: "3 tháng",
  //         price: "99.000",
  //         note: "Cần sđt DPT Play",
  //         warranty: true,
  //       },
  //     ],
  //   },
  // QUIZLET
  //   {
  //     logo: "",
  //     name: "Quizlet",
  //     plans: [
  //       {
  //         type: "Plus",
  //         size: "",
  //         duration: "1 tháng CS",
  //         price: "55.000",
  //         note: "Hết 1 tháng đổi tài khoản hoặc nâng cấp lên 1 năm",
  //         warranty: true,
  //       },
  //       {
  //         type: "Plus",
  //         size: "",
  //         duration: "12 Tháng CC",
  //         price: "270.000",
  //         note: "Cần tên đăng nhập và mật khẩu Quizlet\nGói Student/Teacher",
  //         warranty: true,
  //       },
  //     ],
  //   },
  // CAPCUT
  {
    logo: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBaQDG.nPeYqpMXSUQbV6ZbAQS.bFfCjfxVxksr6mtcWcus3B7VkEmBG0gKWPZbpCdaWInMyD.6mD9p7IjL02AKU-&format=source",
    name: "Capcut",
    plans: [
      {
        type: "Pro",
        size: "",
        duration: "Cấp sẵn 7 ngày Dùng CHUNG",
        price: "1 thiết bị : 15.000\n2 thiết bị : 20.000",
        note: "Chỉ dành cho điện thoại",
        warranty: true,
      },
      {
        type: "Pro",
        size: "",
        duration: "Cấp sẵn 28 ngày Dùng CHUNG",
        price: "1 thiết bị : 35.000\n2 thiết bị : 40.000",
        note: "Chỉ dành cho điện thoại",
        warranty: true,
      },
      {
        type: "Pro",
        size: "",
        duration: "Cấp sẵn 7 ngày Dùng RIÊNG",
        price: "1 thiết bị : 25.000",
        note: "3-4 thiết bị sử dụng",
        warranty: true,
      },
      {
        type: "Pro",
        size: "",
        duration: "Cấp sẵn 28 ngày Dùng RIÊNG",
        price: "55.000",
        note: "3-4 thiết bị sử dụng",
        warranty: true,
      },
      {
        type: "Pro",
        size: "",
        duration: "1 tháng CHÍNH CHỦ",
        price: "75.000",
        note: "Cần mail chưa tạo Capcut",
        warranty: true,
      },
      {
        type: "Pro",
        size: "",
        duration: "12 tháng CHÍNH CHỦ",
        price: "750.000",
        note: "Cần mail chưa tạo Capcut",
        warranty: true,
      },
    ],
  },
  // SPOTIFY
  {
    logo: "https://cdn.tgdd.vn/GameApp/3/220135/Screentshots/spotify-ung-dung-nghe-nhac-am-thanh-chat-luong-cao-logo-19-05-2020.png",
    name: "Spotify",
    plans: [
      {
        type: "Premium",
        size: "",
        duration: "1 tháng CS",
        price: "55.000",
        note: "Dùng riêng , không đổi thông tin tài khoản",
        warranty: true,
      },
      {
        type: "Premium",
        size: "",
        duration: "2 tháng CS",
        price: "100.000",
        note: "Dùng riêng , không đổi thông tin tài khoản",
        warranty: true,
      },
      {
        type: "Premium",
        size: "",
        duration: "3 tháng CS",
        price: "140.000",
        note: "Dùng riêng , không đổi thông tin tài khoản",
        warranty: true,
      },
      {
        type: "Premium",
        size: "",
        duration: "3 tháng CHÍNH CHỦ",
        price: "150.000",
        note: "Cần tên đăng nhập và mật khẩu S\nNâng cấp cá nhân , không add farm",
        warranty: true,
      },
      {
        type: "Premium",
        size: "",
        duration: "6 tháng CHÍNH CHỦ",
        price: "280.000",
        note: "Cần tên đăng nhập và mật khẩu S\nNâng cấp cá nhân , không add farm",
        warranty: true,
      },
      {
        type: "Premium",
        size: "",
        duration: "12 tháng CHÍNH CHỦ",
        price: "450.000",
        note: "Cần tên đăng nhập và mật khẩu S\nNâng cấp cá nhân , không add farm",
        warranty: true,
      },
    ],
  },
  // COURSERA
  //   {
  //     logo: "",
  //     name: "Coursera",
  //     plans: [
  //       {
  //         type: "Bussiness",
  //         size: "",
  //         duration: "1 tháng",
  //         price: "160.000",
  //         note: "Cần mail Coursera , tham gia nhóm",
  //         warranty: true,
  //       },
  //       {
  //         type: "Bussiness",
  //         size: "",
  //         duration: "3 Tháng",
  //         price: "370.000",
  //         note: "Cần mail Coursera , tham gia nhóm",
  //         warranty: true,
  //       },
  //       {
  //         type: "Bussiness",
  //         size: "",
  //         duration: "6 Tháng",
  //         price: "620.000",
  //         note: "Cần mail Coursera , tham gia nhóm",
  //         warranty: true,
  //       },
  //     ],
  //   },
];

const PremiumPage = () => {
  // Đặt thời gian kết thúc flash sale ở đây (ví dụ: 8 tiếng nữa)
  const flashSaleEnd = new Date();
  flashSaleEnd.setHours(flashSaleEnd.getHours() + 8);

  return (
    <>
      <FlashSaleBanner endTime={flashSaleEnd} />
      <div className="min-h-screen bg-[#f6f7fb] py-10 px-2 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-6 border border-[#e0e7ff]">
          <h1 className="text-4xl font-extrabold text-center mb-8 text-[#a21caf] drop-shadow-lg select-none">
            Bảng Giá Dịch Vụ Premium
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead>
                <tr>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-base font-bold text-[#6d28d9] bg-[#ede9fe] border-b-4 border-[#e0e7ff] rounded-tl-xl">
                    Dịch vụ
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-base font-bold text-[#6d28d9] bg-[#ede9fe] border-b-4 border-[#e0e7ff]">
                    Loại
                  </th>
                  <th className="hidden md:table-cell px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-base font-bold text-[#6d28d9] bg-[#ede9fe] border-b-4 border-[#e0e7ff]">
                    Gói
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-base font-bold text-[#6d28d9] bg-[#ede9fe] border-b-4 border-[#e0e7ff]">
                    Thời hạn
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-base font-bold text-[#6d28d9] bg-[#ede9fe] border-b-4 border-[#e0e7ff]">
                    Giá
                  </th>
                  <th className="hidden md:table-cell px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-base font-bold text-[#6d28d9] bg-[#ede9fe] border-b-4 border-[#e0e7ff]">
                    Ghi chú
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-base font-bold text-[#6d28d9] bg-[#ede9fe] border-b-4 border-[#e0e7ff] rounded-tr-xl">
                    Bảo hành
                  </th>
                </tr>
              </thead>
              <tbody>
                {serviceData.map((service, idx) => (
                  <React.Fragment key={service.name}>
                    {service.plans.map((plan, i) => (
                      <tr
                        key={idx + i}
                        className={`transition-all duration-200 group hover:scale-[1.01] hover:shadow-lg hover:bg-[#ede9fe] ${
                          i % 2 === 0 ? "bg-white" : "bg-[#f3f4f6]"
                        } rounded-xl border border-transparent hover:border-[#c7d2fe]`}
                        style={{
                          boxShadow: "0 2px 8px 0 rgba(109, 40, 217, 0.04)",
                        }}
                      >
                        {i === 0 && (
                          <td
                            rowSpan={service.plans.length}
                            className="align-top px-2 py-2 sm:px-4 sm:py-3 border-b border-[#e0e7ff] w-24 sm:w-44"
                          >
                            <div className="flex flex-col items-center">
                              <div className="rounded-full shadow-lg border-2 border-[#e0e7ff] mb-2 overflow-hidden">
                                <Image
                                  src={service.logo}
                                  alt={service.name}
                                  width={36}
                                  height={36}
                                  className="object-cover sm:w-[52px] sm:h-[52px]"
                                />
                              </div>
                              <span className="font-extrabold text-xs sm:text-lg text-[#6d28d9] text-center select-none">
                                {service.name}
                              </span>
                            </div>
                          </td>
                        )}
                        <td className="px-2 py-2 sm:px-4 sm:py-3 border-b border-[#e0e7ff] font-semibold text-pink-600 text-xs sm:text-base">
                          {plan.type}
                        </td>
                        <td className="hidden md:table-cell px-2 py-2 sm:px-4 sm:py-3 border-b border-[#e0e7ff] text-xs sm:text-base">
                          {plan.size}
                        </td>
                        <td className="px-2 py-2 sm:px-4 sm:py-3 border-b border-[#e0e7ff] font-semibold text-[#6d28d9] text-xs sm:text-base">
                          {plan.duration}
                        </td>
                        <td className="px-2 py-2 sm:px-4 sm:py-3 border-b border-[#e0e7ff] font-bold text-green-600 text-xs sm:text-lg">
                          {plan.price}đ
                        </td>
                        <td className="hidden md:table-cell px-2 py-2 sm:px-4 sm:py-3 border-b border-[#e0e7ff] text-xs sm:text-gray-600 max-w-xs">
                          {plan.note}
                        </td>
                        <td className="px-2 py-2 sm:px-4 sm:py-3 border-b border-[#e0e7ff] text-center">
                          {plan.warranty ? (
                            <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full shadow-sm border border-green-200">
                              <FaCheckCircle className="text-green-500" /> Bảo
                              hành
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full shadow-sm border border-red-200">
                              <FaTimesCircle className="text-red-400" /> Không
                              bảo hành
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumPage;
