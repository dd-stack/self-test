// 라우터 세팅
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import layouts
import Header from "./layouts/Header";

// imoport pages
import Title from "./pages/Title";
import Step1 from "./pages/main/Step1";
import Step2 from "./pages/main/Step2";
import Step3 from "./pages/main/Step3";
import Step4 from "./pages/main/Step4";
import Step5 from "./pages/main/Step5";
import Step6 from "./pages/main/Step6";
import Green from "./pages/result/Green";
import Yellow from "./pages/result/Yellow";
import Red from "./pages/result/Red";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route
          path="step1"
          element={
            <>
              <Header />
              <Step1 />
            </>
          }
        />
        <Route
          path="step2"
          element={
            <>
              <Header />
              <Step2 />
            </>
          }
        />
        <Route
          path="step3"
          element={
            <>
              <Header />
              <Step3 />
            </>
          }
        />
        <Route
          path="step4"
          element={
            <>
              <Header />
              <Step4 />
            </>
          }
        />
        <Route
          path="step5"
          element={
            <>
              <Header />
              <Step5 />
            </>
          }
        />
        <Route
          path="step6"
          element={
            <>
              <Header />
              <Step6 />
            </>
          }
        />
        <Route path="green" element={<Green />} />
        <Route path="yellow" element={<Yellow />} />
        <Route
          path="red"
          element={
            <>
              <Header />
              <Red />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
