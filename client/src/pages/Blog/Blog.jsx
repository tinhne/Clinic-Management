import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../style/Blog/Blog.scss";
import Header from "../../components/layout/header";

const Blog = () => {
  const [blogs, setBlogs] = useState([]); // Lưu danh sách blog
  const [loading, setLoading] = useState(true); // Trạng thái tải
  const [error, setError] = useState(null); // Lỗi nếu có
  const [isExpanded, setIsExpanded] = useState(false);

  const [filters, setFilters] = useState({
    category: "",
    search: "",
    page: 1,
    limit: 5,
  }); // Bộ lọc (nếu cần phân trang, lọc)

  const [totalBlogs, setTotalBlogs] = useState(0); // Tổng số bài viết

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "http://localhost:8000/api/blog/get-all-blogs",
          {
            params: filters, // Gửi bộ lọc qua query string
          }
        );
        setBlogs(response.data.blogs); // Dữ liệu blog
        setTotalBlogs(response.data.total); // Tổng số blog (phục vụ phân trang)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [filters]); // Re-fetch khi `filters` thay đổi

  // Hàm xử lý bộ lọc
  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value, page: 1 }); // Reset trang về 1 khi thay đổi bộ lọc
  };

  // Hàm xử lý chuyển trang
  const handlePageChange = (newPage) => {
    setFilters({ ...filters, page: newPage });
  };

  if (loading) return <p>Loading...</p>; // Hiển thị khi đang tải dữ liệu
  if (error) return <p>Error: {error}</p>; // Hiển thị khi lỗi

  return (
    <>
      <Header />

      {/* Banner */}
      <section className="banner">
        <div className="overlay"></div>
        <h1>Y TẾ SỐ 4.0</h1>
        <div className="banner-text"></div>
      </section>

      {/* Main content */}
      <main className="main-content">
        {/* Bộ lọc */}
        <section className="filters">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
          >
            <option value="">Tất cả danh mục</option>
            <option value="Y tế số 4.0">Sức khỏe</option>
            <option value="Sức khỏe hàng ngày">Dinh Dưỡng</option>
            <option value="Thông tin phòng khám">Tập Luyện</option>
            <option value="Chăm sóc sức khỏe">Tin Tức</option>
          </select>
        </section>

        {/* Danh sách bài viết */}
        <section className="articles">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <article className="article" key={blog._id}>
                <img
                  src={blog.image || "default-image-url.jpg"}
                  alt={blog.title || "Không có tiêu đề"}
                />
                <div className="article-content">
                  <div className="title">
                    <p className="p1">{blog.category || "Không có tiêu đề"}</p>
                    {/* <p className="p2">{blog.category || "Không có phụ đề"}</p> */}
                    <p className="p3">
                      {blog.author?.username || "Không rõ tác giả"},{" "}
                      {blog.location || "Không rõ địa điểm"} | {blog.views || 0}{" "}
                      lượt xem
                    </p>
                    <p className="p4">
                      Danh mục: {blog.category || "Chưa xác định"}
                    </p>
                    <p className="p5">
                      Ngày tạo:{" "}
                      {new Date(blog.createdAt).toLocaleDateString() ||
                        "Không rõ"}
                    </p>
                  </div>
                  <p className="p6">{blog.content || "Không có nội dung"}</p>
                </div>
              </article>
            ))
          ) : (
            <p>Không có bài viết nào.</p>
          )}
        </section>

        {/* Sidebar */}
        <aside className="sidebar">
          <section className="categories">
            <p>Danh Mục</p>
            <ul>
              <li>
                <button
                  onClick={() => handleFilterChange("category", "Y tế số 4.0")}
                >
                  Sức Khỏe
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleFilterChange("category", "Sức khỏe hàng ngày")
                  }
                >
                  Dinh Dưỡng
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleFilterChange("category", "Thông tin phòng khám")
                  }
                >
                  Tập Luyện
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleFilterChange("category", "Chăm sóc sức khỏe")
                  }
                >
                  Tin Tức
                </button>
              </li>
            </ul>
          </section>

          <section className="most-viewed">
            <p>Xem nhiều nhất</p>
            <div className="most-blog">
              <div className="most-viewed-img">
                <img
                  src={blogs[0]?.image || "URL_HINH_ANH"}
                  alt="Most Viewed"
                />
              </div>
              <div className="most-viewed-info">
                <p className="title">{blogs[0]?.title || "Bài viết nổi bật"}</p>
                <p className="view">{blogs[0]?.views || 0} lượt xem</p>
              </div>
            </div>
          </section>
        </aside>
      </main>
    </>
  );
};

export default Blog;
