Hướng dẫn cài đặt và chạy chương trình:
  Bước 1: Clone repository từ git.
    - Mở terminal và chạy lệnh sau để clone repository về máy:
      git clone <link repository>

  Bước 2: Tạo tệp .env trong thư mục server
    - Chuyển vào mục server và tạo một tệp mới tên là .env
    - sao chép nội dung dưới đây và dán vào tệp .env:
      MONGO_URI=mongodb+srv://capstone1:capstone1@cluster0.vhebf.mongodb.net/cap1
      PORT=8000
      JWT_SECRET=capstone1 

  Bước 3: Cài đặt dependencies cho server
    - Mở terminal, chuyển đến thư mục server:
        cd server
    - Cài đặt dependencies:
        npm install

  Bước 4: Cài đặt dependencies cho client
    - Mở một terminal mới, chuyển đến thư mục client:
        cd client
    - Cài đặt dependencies:
        npm install

  Bước 5: Chạy chương trình
    - Sau khi hoàn tất cài đặt ở bước 3 và bước 4
      + Trong terminal của server chạy lệnh:
          npm run dev
      + trong terminal của client chạy lệnh:
          npm run dev
Chú ý:
  - đảm bảo bạn đã cài đặt Node.js và npm trên máy trước khi thực hiện.
  - Nếu có lỗi xảy ra, vui lòng kiểm tra kết nối internet và tệp .env đã được cấu hình đúng hay chưa.
   
