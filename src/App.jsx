import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체상품페이지, 로그인, 상품상세페이지 ✅
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다 ✅
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다 ✅
// 3. 상품디테일을 눌렀으나, 로그인이 안되있을 경우에는 로그인페이지가 먼저 나온다 ✅
// 4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다 ✅
// 7. 상품을 검색할 수 있다 ✅

// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다 ✅
// 5. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다, 다시 로그인 페이지가 보인다 ✅
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다 ✅

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true면 로그인이 됨, false면 로그인이 안됨

  const logout = () => {
    setAuthenticate(false);
  };

  useEffect(() => {
    // console.log("Aaaa", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar
        authenticate={authenticate}
        setAuthenticate={setAuthenticate}
        logout={logout}
      />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
