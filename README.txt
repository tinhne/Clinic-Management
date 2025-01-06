Các bước cài đặt chương trình:
  Bước 1: clone git về.
  Bước 2: tạo 1 thư mục ở server với tên là .env
  Bước 3: mở terminal và viết lệnh cd server, sau đó npm i
  Bước 4: tạo thêm 1 terminal mới và viết lệnh cd client, sau đó viết npm i
  Bước 5: sau khi install xong ở bước 3 và bước 4 rồi mở terminal của server và client chạy với lệnh npm run dev 

ở thư mục .env của server coppy bỏ dòng này vào:
  MONGO_URI=mongodb+srv://capstone1:capstone1@cluster0.vhebf.mongodb.net/cap1
  PORT=8000
  JWT_SECRET=capstone1  
