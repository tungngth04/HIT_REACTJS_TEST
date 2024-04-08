import { useState } from "react";
import "./BlogProduct.scss";
const BlogProduct = () => {
  const [product, setProduct] = useState([]);
  const [but1, setBut1] = useState(true);
  const [name, setName] = useState("");
  const [describe, setDescribe] = useState("");
  const [image, setImage] = useState("");

  const handlClick = () => {
    setBut1(false);
  };
  const hanldAdd = (e) => {
    e.preventDefault();

    setProduct([...product, { image, name, describe }]);
    setImage("");
    setName("");
    setDescribe("");
  };

  return (
    <>
      <div className="row1">
        <h1>Quản lý blogs</h1>
        <button onClick={handlClick}>Thêm mới</button>
      </div>
      {but1 == false && (
        <div className="box">
          <div className="box2">
            <form>
              <label htmlFor="anh">Ảnh: </label>
              <input
                type="text"
                onChange={(even) => setImage(even.target.value)}
              ></input>
              <br />
              <label htmlFor="ten">Tên: </label>
              <input
                type="text"
                onChange={(even) => setName(even.target.value)}
              ></input>
              <br />
              <label htmlFor="mota">Mô tả:</label>
              <input
                type="text"
                onChange={(even) => setDescribe(even.target.value)}
              ></input>
              <br />
              <button onClick={hanldAdd}>Thêm</button>
              <button>Sửa</button>
              <button>Huỷ</button>
              <br />
            </form>
          </div>
        </div>
      )}
      <div className="col2">
        <table className="table">
          <tr>
            <th>ID</th>
            <th>Ảnh</th>
            <th>Tên blogs</th>
            <th>Mô tả</th>
            <th>Action</th>
          </tr>

          {product.map((pro, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{pro.image}</td>
              <td>{pro.name}</td>
              <td>{pro.describe}</td>
              <td>
                <buton>Xoá</buton>
                <button>Sửa</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
export default BlogProduct;
