import Search from "../components/Welcome/Search";

function Welcome() {
  return (
    <div
      style={{ height: "calc(100vh - 14rem)" }}
      className="relative z-20 h-full flex flex-col items-center justify-center xs:gap-4 sm:gap-6 md:gap-8 xl:gap-10 animate__animated animate__zoomIn animate__slow">
      <h4 className="text-5xl sm:text-3xl md:text-3xl xl:text-5xl text-center font-bold text-layer-dark-900 dark:text-layer-light-50 transition-all duration-500">
        Hizmetin Yeni Adresi
      </h4>
      <div className="card relative inline-block justify-content-center my-5">
        <Search />
      </div>
      <h3 className="font-semibold text-layer-dark-600 dark:text-layer-light-100 transition-all duration-500">
        En uygun fiyata en iyi teklifi bul!
      </h3>
    </div>
  );
}
export default Welcome;
